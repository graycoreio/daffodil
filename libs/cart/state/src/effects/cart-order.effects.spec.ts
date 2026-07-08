import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  Observable,
  of,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

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
    const cartPlaceOrderAction = new DaffCartPlaceOrder(mockDaffCartPayment);

    describe('when the call to CartOrderService is successful', () => {
      it('should dispatch a CartPlaceOrderSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const response: DaffCartOrderResult = {
            orderId,
            cartId: mockCart.id,
          };
          const cartPlaceOrderSuccessAction = new DaffCartPlaceOrderSuccess(response);

          driverPlaceOrderSpy.and.returnValue(of(response));
          actions$ = helpers.hot('--a', { a: cartPlaceOrderAction });
          helpers.expectObservable(effects.placeOrder$).toBe('--b', { b: cartPlaceOrderSuccessAction });
        });
      });
    });

    describe('and the call to CartOrderService fails', () => {
      it('should dispatch a CartPlaceOrderFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to place order' };
          const response = helpers.cold<any>('#', {}, error);
          const cartPlaceOrderFailureAction = new DaffCartPlaceOrderFailure([error]);

          driverPlaceOrderSpy.and.returnValue(response);
          actions$ = helpers.hot('--a', { a: cartPlaceOrderAction });
          helpers.expectObservable(effects.placeOrder$).toBe('--b', { b: cartPlaceOrderFailureAction });
        });
      });
    });

    describe('and the call to CartOrderService fails due to a product out of stock error', () => {
      it('should try to resolve the cart', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error = daffTransformErrorToStateError(new DaffProductOutOfStockError('Product out of stock'));
          const response = helpers.cold<any>('#', {}, error);

          driverPlaceOrderSpy.and.returnValue(response);
          actions$ = helpers.hot('--a', { a: cartPlaceOrderAction });

          helpers.expectObservable(effects.placeOrder$).toBe('--b', { b: jasmine.anything() });
        });
        expect(getCartSpy.getCartOrFail).toHaveBeenCalledWith();
      });

      describe('when the resolve cart is successful', () => {
        it('should dispatch a DaffCartPlaceOrderFailureFromOutOfStockProduct action', () => {
          const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
          });
          testScheduler.run(helpers => {
            const error = daffTransformErrorToStateError(new DaffProductOutOfStockError('Product out of stock'));
            const response = helpers.cold<any>('#', {}, error);
            driverPlaceOrderSpy.and.returnValue(response);

            const failureFromOoSAction = new DaffCartPlaceOrderFailureFromOutOfStockProduct([error], mockCart);

            getCartSpy.getCartOrFail.and.returnValue(of({
              errors: [],
              response: mockCart,
            }));
            actions$ = helpers.hot('--a', { a: cartPlaceOrderAction });
            helpers.expectObservable(effects.placeOrder$).toBe('--b', { b: failureFromOoSAction });
          });
        });
      });

      describe('and the resolve cart driver call has errors', () => {
        it('should dispatch a CartPlaceOrderFailure action', () => {
          const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
          });
          testScheduler.run(helpers => {
            const error = daffTransformErrorToStateError(new DaffProductOutOfStockError('Product out of stock'));
            const response = helpers.cold<any>('#', {}, error);
            driverPlaceOrderSpy.and.returnValue(response);

            const cartResolveError: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to get cart' };
            const cartPlaceOrderFailureAction = new DaffCartPlaceOrderFailure([error, cartResolveError]);

            getCartSpy.getCartOrFail.and.returnValue(of({
              errors: [<any>cartResolveError],
              response: mockCart,
            }));
            actions$ = helpers.hot('--a', { a: cartPlaceOrderAction });
            helpers.expectObservable(effects.placeOrder$).toBe('--b', { b: cartPlaceOrderFailureAction });
          });
        });
      });

      describe('and the resolve cart fails', () => {
        it('should dispatch a CartPlaceOrderFailure action', () => {
          const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
          });
          testScheduler.run(helpers => {
            const error = daffTransformErrorToStateError(new DaffProductOutOfStockError('Product out of stock'));
            const response = helpers.cold<any>('#', {}, error);
            driverPlaceOrderSpy.and.returnValue(response);

            const cartResolveError: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to get cart' };
            const cartResolveResponse = helpers.cold<any>('#', {}, cartResolveError);
            const cartPlaceOrderFailureAction = new DaffCartPlaceOrderFailure([error, cartResolveError]);

            getCartSpy.getCartOrFail.and.returnValue(cartResolveResponse);
            actions$ = helpers.hot('--a', { a: cartPlaceOrderAction });
            helpers.expectObservable(effects.placeOrder$).toBe('--b', { b: cartPlaceOrderFailureAction });
          });
        });
      });
    });

    describe('and the storage service throws an error', () => {
      it('should return a DaffCartStorageFailure', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const cartResolveError = new DaffStorageServiceError('An error occurred during storage.');
          const response = helpers.cold<any>('#', {}, cartResolveError);
          getCartSpy.getCartIdOrFail.and.returnValue(response);

          actions$ = helpers.hot('--a', { a: cartPlaceOrderAction });
          helpers.expectObservable(effects.placeOrder$).toBe('--b', { b: cartStorageFailureAction });
        });
      });
    });
  });

  describe('resetCart$ | resetting the cart after a successful order', () => {
    it('should create a new cart', () => {
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(helpers => {
        const cartCreateAction = new DaffCartCreate();
        const response: DaffCartOrderResult = {
          orderId: 'orderId',
          cartId: mockCart.id,
        };
        const cartOrderSuccessAction = new DaffCartPlaceOrderSuccess(response);
        actions$ = helpers.hot('--a', { a: cartOrderSuccessAction });
        helpers.expectObservable(effects.resetCart$).toBe('--b', { b: cartCreateAction });
      });
    });
  });
});
