import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  hot,
  cold,
} from 'jasmine-marbles';
import {
  Observable,
  of,
} from 'rxjs';

import {
  DaffCart,
  DaffCartPaymentMethod,
  DaffCartOrderResult,
  DaffCartStorageService,
} from '@daffodil/cart';
import {
  DaffCartOrderServiceInterface,
  DaffCartOrderDriver,
  DaffCartDriverResolveService,
  DaffProductOutOfStockError,
} from '@daffodil/cart/driver';
import { DaffTestingCartDriverModule } from '@daffodil/cart/driver/testing';
import {
  DaffCartStorageFailure,
  DaffCartPlaceOrder,
  DaffCartPlaceOrderSuccess,
  DaffCartPlaceOrderFailure,
  DaffCartCreate,
  DaffCartPlaceOrderFailureFromOutOfStockProduct,
} from '@daffodil/cart/state';
import {
  DaffCartFactory,
  DaffCartPaymentFactory,
} from '@daffodil/cart/testing';
import { DaffStorageServiceError } from '@daffodil/core';
import {
  DaffStateError,
  daffTransformErrorToStateError,
} from '@daffodil/core/state';

import { DaffCartOrderEffects } from './cart-order.effects';

describe('@daffodil/cart/state | DaffCartOrderEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCartOrderEffects;

  let mockDaffCartPayment: DaffCartPaymentMethod;
  let mockCart: DaffCart;
  let orderId: string;

  let cartFactory: DaffCartFactory;
  let daffCartPaymentFactory: DaffCartPaymentFactory;

  let cartOrderDriver: DaffCartOrderServiceInterface;
  let daffCartStorageService: DaffCartStorageService;

  let driverPlaceOrderSpy: jasmine.Spy<DaffCartOrderServiceInterface['placeOrder']>;
  let getCartIdSpy: jasmine.Spy<DaffCartStorageService['getCartId']>;
  let getCartSpy: jasmine.SpyObj<DaffCartDriverResolveService>;

  const cartStorageFailureAction = new DaffCartStorageFailure([daffTransformErrorToStateError(new DaffStorageServiceError('An error occurred during storage.'))]);
  const throwStorageError = () => {
    throw new DaffStorageServiceError('An error occurred during storage.');
  };

  beforeEach(() => {
    getCartSpy = jasmine.createSpyObj('DaffCartDriverResolveService', ['getCartIdOrFail', 'getCartOrFail']);

    TestBed.configureTestingModule({
      imports: [
        DaffTestingCartDriverModule.forRoot(),
      ],
      providers: [
        DaffCartOrderEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffCartDriverResolveService,
          useValue: getCartSpy,
        },
      ],
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
    getCartIdSpy.and.returnValue(mockCart.id);
    getCartSpy.getCartIdOrFail.and.returnValue(of(mockCart.id));
    getCartSpy.getCartOrFail.and.returnValue(of({
      errors: [],
      response: mockCart,
    }));
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
        const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to place order' };
        const response = cold('#', {}, error);
        const cartPlaceOrderFailureAction = new DaffCartPlaceOrderFailure([error]);

        driverPlaceOrderSpy.and.returnValue(response);
        actions$ = hot('--a', { a: cartPlaceOrderAction });
        expected = cold('--b', { b: cartPlaceOrderFailureAction });
      });

      it('should dispatch a CartPlaceOrderFailure action', () => {
        expect(effects.placeOrder$).toBeObservable(expected);
      });
    });

    describe('and the call to CartOrderService fails due to a product out of stock error', () => {
      let error: DaffStateError;

      beforeEach(() => {
        error = daffTransformErrorToStateError(new DaffProductOutOfStockError('Product out of stock'));
        const response = cold('#', {}, error);

        driverPlaceOrderSpy.and.returnValue(response);
        actions$ = hot('--a', { a: cartPlaceOrderAction });
      });

      it('should try to resolve the cart', () => {
        expect(effects.placeOrder$).toBeObservable(cold('--b', { b: jasmine.anything() }));
        expect(getCartSpy.getCartOrFail).toHaveBeenCalledWith();
      });

      describe('when the resolve cart is successful', () => {
        beforeEach(() => {
          const failureFromOoSAction = new DaffCartPlaceOrderFailureFromOutOfStockProduct([error], mockCart);

          getCartSpy.getCartOrFail.and.returnValue(of({
            errors: [],
            response: mockCart,
          }));
          actions$ = hot('--a', { a: cartPlaceOrderAction });
          expected = cold('--b', { b: failureFromOoSAction });
        });

        it('should dispatch a DaffCartPlaceOrderFailureFromOutOfStockProduct action', () => {
          expect(effects.placeOrder$).toBeObservable(expected);
        });
      });

      describe('and the resolve cart driver call has errors', () => {
        beforeEach(() => {
          const cartResolveError: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to get cart' };
          const cartPlaceOrderFailureAction = new DaffCartPlaceOrderFailure([error, cartResolveError]);

          getCartSpy.getCartOrFail.and.returnValue(of({
            errors: [<any>cartResolveError],
            response: mockCart,
          }));
          actions$ = hot('--a', { a: cartPlaceOrderAction });
          expected = cold('--b', { b: cartPlaceOrderFailureAction });
        });

        it('should dispatch a CartPlaceOrderFailure action', () => {
          expect(effects.placeOrder$).toBeObservable(expected);
        });
      });

      describe('and the resolve cart fails', () => {
        beforeEach(() => {
          const cartResolveError: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to get cart' };
          const response = cold('#', {}, cartResolveError);
          const cartPlaceOrderFailureAction = new DaffCartPlaceOrderFailure([error, cartResolveError]);

          getCartSpy.getCartOrFail.and.returnValue(response);
          actions$ = hot('--a', { a: cartPlaceOrderAction });
          expected = cold('--b', { b: cartPlaceOrderFailureAction });
        });

        it('should dispatch a CartPlaceOrderFailure action', () => {
          expect(effects.placeOrder$).toBeObservable(expected);
        });
      });
    });

    describe('and the storage service throws an error', () => {
      beforeEach(() => {
        const cartResolveError = new DaffStorageServiceError('An error occurred during storage.');
        const response = cold('#', {}, cartResolveError);
        getCartSpy.getCartIdOrFail.and.returnValue(response);

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
      expected = cold('--b', { b: cartCreateAction });
    });

    it('should create a new cart', () => {
      expect(effects.resetCart$).toBeObservable(expected);
    });
  });
});
