import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import {
  DaffStorageServiceError
} from '@daffodil/core'
import { DaffStateError, daffTransformErrorToStateError } from '@daffodil/core/state';
import {
  DaffCart,
  DaffCartPaymentMethod,
  DaffCartOrderResult,
  DaffCartStorageService
} from '@daffodil/cart';
import { DaffCartOrderServiceInterface, DaffCartOrderDriver } from '@daffodil/cart/driver';
import { DaffCartStorageFailure, DaffCartPlaceOrder, DaffCartPlaceOrderSuccess, DaffCartPlaceOrderFailure, DaffCartCreate } from '@daffodil/cart/state';
import {
  DaffCartFactory,
  DaffCartPaymentFactory
} from '@daffodil/cart/testing';
import { DaffTestingCartDriverModule } from '@daffodil/cart/driver/testing';

import { DaffCartOrderEffects } from './cart-order.effects';

describe('Cart | Effect | CartOrderEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCartOrderEffects;

  let mockDaffCartPayment: DaffCartPaymentMethod;
  let mockCart: DaffCart;
  let orderId: string;

  let cartFactory: DaffCartFactory;
  let daffCartPaymentFactory: DaffCartPaymentFactory;

  let cartOrderDriver: DaffCartOrderServiceInterface;
  let daffCartStorageService: DaffCartStorageService;

  let driverPlaceOrderSpy: jasmine.Spy;
  let getCartIdSpy: jasmine.Spy;

  const cartStorageFailureAction = new DaffCartStorageFailure(daffTransformErrorToStateError(new DaffStorageServiceError('An error occurred during storage.')));
  const throwStorageError = () => { throw new DaffStorageServiceError('An error occurred during storage.') };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffTestingCartDriverModule.forRoot()
      ],
      providers: [
        DaffCartOrderEffects,
        provideMockActions(() => actions$),
      ]
    });

    effects = TestBed.inject(DaffCartOrderEffects);
    cartOrderDriver = TestBed.inject(DaffCartOrderDriver);
    daffCartStorageService = TestBed.inject(DaffCartStorageService);
    cartFactory = TestBed.inject(DaffCartFactory);
    daffCartPaymentFactory = TestBed.inject(DaffCartPaymentFactory);

    mockCart = cartFactory.create();
    mockDaffCartPayment = daffCartPaymentFactory.create();
    orderId = 'id';

    driverPlaceOrderSpy = spyOn(cartOrderDriver, 'placeOrder');
    getCartIdSpy = spyOn(daffCartStorageService, 'getCartId');
    getCartIdSpy.and.returnValue(String(mockCart.id));
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('placeOrder$ | placing an order', () => {
    let expected;
    const cartPlaceOrderAction = new DaffCartPlaceOrder(mockDaffCartPayment);

    describe('when the call to CartOrderService is successful', () => {
      beforeEach(() => {
        const response: DaffCartOrderResult = {
          orderId,
          cartId: mockCart.id,
        };
        const cartPlaceOrderSuccessAction = new DaffCartPlaceOrderSuccess(response);

        driverPlaceOrderSpy.and.returnValue(of(response));
        actions$ = hot('--a', { a: cartPlaceOrderAction });
        expected = cold('--b', { b: cartPlaceOrderSuccessAction });
      });

      it('should dispatch a CartPlaceOrderSuccess action', () => {
        expect(effects.placeOrder$).toBeObservable(expected);
      });
    });

    describe('and the call to CartOrderService fails', () => {
      beforeEach(() => {
        const error: DaffStateError = {code: 'code', message: 'Failed to place order'};
        const response = cold('#', {}, error);
        const cartPlaceOrderFailureAction = new DaffCartPlaceOrderFailure(error);

        driverPlaceOrderSpy.and.returnValue(response);
        actions$ = hot('--a', { a: cartPlaceOrderAction });
        expected = cold('--b', { b: cartPlaceOrderFailureAction });
      });

      it('should dispatch a CartPlaceOrderFailure action', () => {
        expect(effects.placeOrder$).toBeObservable(expected);
      });
    });

    describe('and the storage service throws an error', () => {
      beforeEach(() => {
        getCartIdSpy.and.callFake(throwStorageError)

        actions$ = hot('--a', { a: cartPlaceOrderAction });
        expected = cold('--b', { b: cartStorageFailureAction });
      });

      it('should return a DaffCartStorageFailure', () => {
        expect(effects.placeOrder$).toBeObservable(expected);
      });
    });
  });

  describe('resetCart$ | resetting the cart after a successful order', () => {
    let expected;
    let cartOrderSuccessAction;

    beforeEach(() => {
      const cartCreateAction = new DaffCartCreate();
      const response: DaffCartOrderResult = {
        orderId: 'orderId',
        cartId: mockCart.id,
      };
      cartOrderSuccessAction = new DaffCartPlaceOrderSuccess(response);
      actions$ = hot('--a', { a: cartOrderSuccessAction });
      expected = cold('--b', {b: cartCreateAction});
    });

    it('should create a new cart', () => {
      expect(effects.resetCart$).toBeObservable(expected);
    });
  });
});
