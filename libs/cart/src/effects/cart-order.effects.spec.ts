import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import {
  DaffStorageServiceError
} from '@daffodil/core'
import {
  DaffCart,
  DaffCartPaymentMethod
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartPaymentFactory
} from '@daffodil/cart/testing';

import { DaffCartOrderEffects } from './cart-order.effects';
import {
  DaffCartPlaceOrder,
  DaffCartPlaceOrderSuccess,
  DaffCartPlaceOrderFailure,
  DaffCartStorageFailure
} from '../actions/public_api';
import { DaffCartStorageService } from '../storage/cart-storage.service';
import { DaffCartOrderServiceInterface, DaffCartOrderDriver } from '../drivers/interfaces/cart-order-service.interface';

describe('Cart | Effect | CartOrderEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCartOrderEffects;

  let mockDaffCartPayment: DaffCartPaymentMethod;
  let mockCart: DaffCart;
  let orderId: string;

  let cartFactory: DaffCartFactory;
  let daffCartPaymentFactory: DaffCartPaymentFactory;

  let cartOrderDriverSpy: jasmine.SpyObj<DaffCartOrderServiceInterface>;
  let daffCartStorageSpy: jasmine.SpyObj<DaffCartStorageService>;

  const cartStorageFailureAction = new DaffCartStorageFailure('Cart Storage Failed');
  const throwStorageError = () => { throw new DaffStorageServiceError() };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffCartOrderEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffCartOrderDriver,
          useValue: jasmine.createSpyObj('DaffCartOrderDriver', ['placeOrder'])
        },
        {
          provide: DaffCartStorageService,
          useValue: jasmine.createSpyObj('DaffCartStorageService', ['setCartId', 'getCartId'])
        }
      ]
    });

    effects = TestBed.get(DaffCartOrderEffects);
    cartOrderDriverSpy = TestBed.get(DaffCartOrderDriver);
    daffCartStorageSpy = TestBed.get(DaffCartStorageService);
    cartFactory = TestBed.get(DaffCartFactory);
    daffCartPaymentFactory = TestBed.get(DaffCartPaymentFactory);

    mockCart = cartFactory.create();
    mockDaffCartPayment = daffCartPaymentFactory.create();
    orderId = 'id';

    daffCartStorageSpy.getCartId.and.returnValue(String(mockCart.id));
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('placeOrder$ | placing an order', () => {
    let expected;
    const cartPlaceOrderAction = new DaffCartPlaceOrder(mockDaffCartPayment);

    describe('when the call to CartOrderService is successful', () => {
      beforeEach(() => {
        const response = {id: orderId};
        const cartPlaceOrderSuccessAction = new DaffCartPlaceOrderSuccess(response);

        cartOrderDriverSpy.placeOrder.and.returnValue(of(response));
        actions$ = hot('--a', { a: cartPlaceOrderAction });
        expected = cold('--b', { b: cartPlaceOrderSuccessAction });
      });

      it('should dispatch a CartPlaceOrderSuccess action', () => {
        expect(effects.placeOrder$).toBeObservable(expected);
      });
    });

    describe('and the call to CartOrderService fails', () => {
      beforeEach(() => {
        const error = 'Failed to place order';
        const response = cold('#', {}, error);
        const cartPlaceOrderFailureAction = new DaffCartPlaceOrderFailure(error);

        cartOrderDriverSpy.placeOrder.and.returnValue(response);
        actions$ = hot('--a', { a: cartPlaceOrderAction });
        expected = cold('--(b|)', { b: cartPlaceOrderFailureAction });
      });

      it('should dispatch a CartPlaceOrderFailure action', () => {
        expect(effects.placeOrder$).toBeObservable(expected);
      });
    });

    describe('and the storage service throws an error', () => {
      beforeEach(() => {
        daffCartStorageSpy.getCartId.and.callFake(throwStorageError)

        actions$ = hot('--a', { a: cartPlaceOrderAction });
        expected = cold('--(b|)', { b: cartStorageFailureAction });
      });

      it('should return a DaffCartStorageFailure', () => {
        expect(effects.placeOrder$).toBeObservable(expected);
      });
    });
  });
});
