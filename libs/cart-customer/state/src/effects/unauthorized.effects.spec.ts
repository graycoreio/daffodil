import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { DaffAuthCheck } from '@daffodil/auth/state';
import { DaffCartStorageService } from '@daffodil/cart';
import { DaffCartDriverErrorCodes } from '@daffodil/cart/driver';
import { DaffTestingCartDriverModule } from '@daffodil/cart/driver/testing';
import {
  DaffResolveCartFailure,
  DaffCartCreate,
  DaffCartLoadFailure,
  DaffCartItemAddFailure,
  DaffCartAddressUpdateFailure,
  DaffCartBillingAddressUpdateFailure,
  DaffCartCouponApplyFailure,
  DaffCartCouponRemoveAllFailure,
  DaffCartCouponRemoveFailure,
  DaffCartItemDeleteFailure,
  DaffCartItemDeleteOutOfStockFailure,
  DaffCartItemUpdateFailure,
  DaffCartPaymentRemoveFailure,
  DaffCartPaymentUpdateFailure,
  DaffCartPaymentUpdateWithBillingFailure,
  DaffCartPlaceOrderFailure,
  DaffCartShippingAddressUpdateFailure,
  DaffCartShippingInformationDeleteFailure,
  DaffCartShippingInformationUpdateFailure,
} from '@daffodil/cart/state';
import { DaffStateError } from '@daffodil/core/state';

import { DaffCartCustomerUnauthorizedEffects } from './unauthorized.effects';

describe('@daffodil/cart-customer/state | DaffCartCustomerUnauthorizedEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCartCustomerUnauthorizedEffects;
  let cartStorageService: DaffCartStorageService;
  let removeCartIdSpy: jasmine.Spy<DaffCartStorageService['removeCartId']>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffTestingCartDriverModule.forRoot(),
      ],
      providers: [
        DaffCartCustomerUnauthorizedEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(DaffCartCustomerUnauthorizedEffects);
    cartStorageService = TestBed.inject(DaffCartStorageService);

    removeCartIdSpy = spyOn(cartStorageService, 'removeCartId');
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when ResolveCartFailureAction is triggered', () => {
    describe('and the error is a DaffUnauthorizedForCartError', () => {
      it('should dispatch cart create', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
          const resolveCartFailureAction = new DaffResolveCartFailure([error]);
          const cartCreateAction = new DaffCartCreate();
          actions$ = helpers.hot('--a', { a: resolveCartFailureAction });
          helpers.expectObservable(effects.createWhenUnathorized$).toBe('--b', { b: cartCreateAction });
        });
      });

      it('should remove the cart ID from storage', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
          const resolveCartFailureAction = new DaffResolveCartFailure([error]);
          const cartCreateAction = new DaffCartCreate();
          actions$ = helpers.hot('--a', { a: resolveCartFailureAction });
          helpers.expectObservable(effects.createWhenUnathorized$).toBe('--b', { b: cartCreateAction });
        });
        expect(removeCartIdSpy).toHaveBeenCalledWith();
      });
    });

    describe('and the error is not a DaffUnauthorizedForCartError', () => {
      it('should not dispatch anything', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Something went wrong' };
          const resolveCartFailureAction = new DaffResolveCartFailure([error]);
          actions$ = helpers.hot('--a', { a: resolveCartFailureAction });
          helpers.expectObservable(effects.createWhenUnathorized$).toBe('---');
        });
      });
    });
  });

  describe('when CartLoadFailureAction is triggered', () => {
    describe('and the error is a DaffUnauthorizedForCartError', () => {
      it('should dispatch cart create', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
          const resolveCartFailureAction = new DaffCartLoadFailure([error]);
          const cartCreateAction = new DaffCartCreate();
          actions$ = helpers.hot('--a', { a: resolveCartFailureAction });
          helpers.expectObservable(effects.createWhenUnathorized$).toBe('--b', { b: cartCreateAction });
        });
      });

      it('should remove the cart ID from storage', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
          const resolveCartFailureAction = new DaffCartLoadFailure([error]);
          const cartCreateAction = new DaffCartCreate();
          actions$ = helpers.hot('--a', { a: resolveCartFailureAction });
          helpers.expectObservable(effects.createWhenUnathorized$).toBe('--b', { b: cartCreateAction });
        });
        expect(removeCartIdSpy).toHaveBeenCalledWith();
      });
    });

    describe('and the error is not a DaffUnauthorizedForCartError', () => {
      it('should not dispatch anything', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Something went wrong' };
          const resolveCartFailureAction = new DaffCartLoadFailure([error]);
          actions$ = helpers.hot('--a', { a: resolveCartFailureAction });
          helpers.expectObservable(effects.createWhenUnathorized$).toBe('---');
        });
      });
    });
  });

  describe('when CartItemAddFailureAction is triggered', () => {
    describe('and the error is a DaffUnauthorizedForCartError', () => {
      it('should dispatch cart create', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
          const resolveCartFailureAction = new DaffCartItemAddFailure([error]);
          const checkAction = new DaffAuthCheck();
          actions$ = helpers.hot('--a', { a: resolveCartFailureAction });
          helpers.expectObservable(effects.checkWhenUnathorized$).toBe('--b', { b: checkAction });
        });
      });
    });

    describe('and the error is not a DaffUnauthorizedForCartError', () => {
      it('should not dispatch anything', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Something went wrong' };
          const resolveCartFailureAction = new DaffCartItemAddFailure([error]);
          actions$ = helpers.hot('--a', { a: resolveCartFailureAction });
          helpers.expectObservable(effects.checkWhenUnathorized$).toBe('---');
        });
      });
    });
  });

  describe('when CartItemDeleteFailureAction is triggered', () => {
    describe('and the error is a DaffUnauthorizedForCartError', () => {
      it('should dispatch cart create', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
          const resolveCartFailureAction = new DaffCartItemDeleteFailure([error], 'itemId');
          const checkAction = new DaffAuthCheck();
          actions$ = helpers.hot('--a', { a: resolveCartFailureAction });
          helpers.expectObservable(effects.checkWhenUnathorized$).toBe('--b', { b: checkAction });
        });
      });
    });

    describe('and the error is not a DaffUnauthorizedForCartError', () => {
      it('should not dispatch anything', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Something went wrong' };
          const resolveCartFailureAction = new DaffCartItemDeleteFailure([error], 'itemId');
          actions$ = helpers.hot('--a', { a: resolveCartFailureAction });
          helpers.expectObservable(effects.checkWhenUnathorized$).toBe('---');
        });
      });
    });
  });

  describe('when CartItemDeleteOutOfStockFailureAction is triggered', () => {
    describe('and the error is a DaffUnauthorizedForCartError', () => {
      it('should dispatch cart create', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
          const resolveCartFailureAction = new DaffCartItemDeleteOutOfStockFailure([error]);
          const checkAction = new DaffAuthCheck();
          actions$ = helpers.hot('--a', { a: resolveCartFailureAction });
          helpers.expectObservable(effects.checkWhenUnathorized$).toBe('--b', { b: checkAction });
        });
      });
    });

    describe('and the error is not a DaffUnauthorizedForCartError', () => {
      it('should not dispatch anything', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Something went wrong' };
          const resolveCartFailureAction = new DaffCartItemDeleteOutOfStockFailure([error]);
          actions$ = helpers.hot('--a', { a: resolveCartFailureAction });
          helpers.expectObservable(effects.checkWhenUnathorized$).toBe('---');
        });
      });
    });
  });

  describe('when CartItemUpdateFailureAction is triggered', () => {
    describe('and the error is a DaffUnauthorizedForCartError', () => {
      it('should dispatch cart create', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
          const resolveCartFailureAction = new DaffCartItemUpdateFailure([error], 'itemId');
          const checkAction = new DaffAuthCheck();
          actions$ = helpers.hot('--a', { a: resolveCartFailureAction });
          helpers.expectObservable(effects.checkWhenUnathorized$).toBe('--b', { b: checkAction });
        });
      });
    });

    describe('and the error is not a DaffUnauthorizedForCartError', () => {
      it('should not dispatch anything', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Something went wrong' };
          const resolveCartFailureAction = new DaffCartItemUpdateFailure([error], 'itemId');
          actions$ = helpers.hot('--a', { a: resolveCartFailureAction });
          helpers.expectObservable(effects.checkWhenUnathorized$).toBe('---');
        });
      });
    });
  });

  describe('when CartBillingAddressUpdateFailureAction is triggered', () => {
    describe('and the error is a DaffUnauthorizedForCartError', () => {
      it('should dispatch cart create', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
          const resolveCartFailureAction = new DaffCartBillingAddressUpdateFailure([error]);
          const checkAction = new DaffAuthCheck();
          actions$ = helpers.hot('--a', { a: resolveCartFailureAction });
          helpers.expectObservable(effects.checkWhenUnathorized$).toBe('--b', { b: checkAction });
        });
      });
    });

    describe('and the error is not a DaffUnauthorizedForCartError', () => {
      it('should not dispatch anything', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Something went wrong' };
          const resolveCartFailureAction = new DaffCartBillingAddressUpdateFailure([error]);
          actions$ = helpers.hot('--a', { a: resolveCartFailureAction });
          helpers.expectObservable(effects.checkWhenUnathorized$).toBe('---');
        });
      });
    });
  });

  describe('when CartAddressUpdateFailureAction is triggered', () => {
    describe('and the error is a DaffUnauthorizedForCartError', () => {
      it('should dispatch cart create', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
          const resolveCartFailureAction = new DaffCartAddressUpdateFailure([error]);
          const checkAction = new DaffAuthCheck();
          actions$ = helpers.hot('--a', { a: resolveCartFailureAction });
          helpers.expectObservable(effects.checkWhenUnathorized$).toBe('--b', { b: checkAction });
        });
      });
    });

    describe('and the error is not a DaffUnauthorizedForCartError', () => {
      it('should not dispatch anything', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Something went wrong' };
          const resolveCartFailureAction = new DaffCartAddressUpdateFailure([error]);
          actions$ = helpers.hot('--a', { a: resolveCartFailureAction });
          helpers.expectObservable(effects.checkWhenUnathorized$).toBe('---');
        });
      });
    });
  });

  describe('when CartShippingAddressUpdateFailureAction is triggered', () => {
    describe('and the error is a DaffUnauthorizedForCartError', () => {
      it('should dispatch cart create', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
          const resolveCartFailureAction = new DaffCartShippingAddressUpdateFailure([error]);
          const checkAction = new DaffAuthCheck();
          actions$ = helpers.hot('--a', { a: resolveCartFailureAction });
          helpers.expectObservable(effects.checkWhenUnathorized$).toBe('--b', { b: checkAction });
        });
      });
    });

    describe('and the error is not a DaffUnauthorizedForCartError', () => {
      it('should not dispatch anything', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Something went wrong' };
          const resolveCartFailureAction = new DaffCartShippingAddressUpdateFailure([error]);
          actions$ = helpers.hot('--a', { a: resolveCartFailureAction });
          helpers.expectObservable(effects.checkWhenUnathorized$).toBe('---');
        });
      });
    });
  });

  describe('when CartShippingInformationDeleteFailureAction is triggered', () => {
    describe('and the error is a DaffUnauthorizedForCartError', () => {
      it('should dispatch cart create', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
          const resolveCartFailureAction = new DaffCartShippingInformationDeleteFailure([error]);
          const checkAction = new DaffAuthCheck();
          actions$ = helpers.hot('--a', { a: resolveCartFailureAction });
          helpers.expectObservable(effects.checkWhenUnathorized$).toBe('--b', { b: checkAction });
        });
      });
    });

    describe('and the error is not a DaffUnauthorizedForCartError', () => {
      it('should not dispatch anything', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Something went wrong' };
          const resolveCartFailureAction = new DaffCartShippingInformationDeleteFailure([error]);
          actions$ = helpers.hot('--a', { a: resolveCartFailureAction });
          helpers.expectObservable(effects.checkWhenUnathorized$).toBe('---');
        });
      });
    });
  });

  describe('when CartShippingInformationUpdateFailureAction is triggered', () => {
    describe('and the error is a DaffUnauthorizedForCartError', () => {
      it('should dispatch cart create', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
          const resolveCartFailureAction = new DaffCartShippingInformationUpdateFailure([error]);
          const checkAction = new DaffAuthCheck();
          actions$ = helpers.hot('--a', { a: resolveCartFailureAction });
          helpers.expectObservable(effects.checkWhenUnathorized$).toBe('--b', { b: checkAction });
        });
      });
    });

    describe('and the error is not a DaffUnauthorizedForCartError', () => {
      it('should not dispatch anything', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Something went wrong' };
          const resolveCartFailureAction = new DaffCartShippingInformationUpdateFailure([error]);
          actions$ = helpers.hot('--a', { a: resolveCartFailureAction });
          helpers.expectObservable(effects.checkWhenUnathorized$).toBe('---');
        });
      });
    });
  });

  describe('when CartPaymentRemoveFailureAction is triggered', () => {
    describe('and the error is a DaffUnauthorizedForCartError', () => {
      it('should dispatch cart create', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
          const resolveCartFailureAction = new DaffCartPaymentRemoveFailure([error]);
          const checkAction = new DaffAuthCheck();
          actions$ = helpers.hot('--a', { a: resolveCartFailureAction });
          helpers.expectObservable(effects.checkWhenUnathorized$).toBe('--b', { b: checkAction });
        });
      });
    });

    describe('and the error is not a DaffUnauthorizedForCartError', () => {
      it('should not dispatch anything', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Something went wrong' };
          const resolveCartFailureAction = new DaffCartPaymentRemoveFailure([error]);
          actions$ = helpers.hot('--a', { a: resolveCartFailureAction });
          helpers.expectObservable(effects.checkWhenUnathorized$).toBe('---');
        });
      });
    });
  });

  describe('when CartPaymentUpdateFailureAction is triggered', () => {
    describe('and the error is a DaffUnauthorizedForCartError', () => {
      it('should dispatch cart create', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
          const resolveCartFailureAction = new DaffCartPaymentUpdateFailure([error]);
          const checkAction = new DaffAuthCheck();
          actions$ = helpers.hot('--a', { a: resolveCartFailureAction });
          helpers.expectObservable(effects.checkWhenUnathorized$).toBe('--b', { b: checkAction });
        });
      });
    });

    describe('and the error is not a DaffUnauthorizedForCartError', () => {
      it('should not dispatch anything', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Something went wrong' };
          const resolveCartFailureAction = new DaffCartPaymentUpdateFailure([error]);
          actions$ = helpers.hot('--a', { a: resolveCartFailureAction });
          helpers.expectObservable(effects.checkWhenUnathorized$).toBe('---');
        });
      });
    });
  });

  describe('when CartPaymentUpdateWithBillingFailureAction is triggered', () => {
    describe('and the error is a DaffUnauthorizedForCartError', () => {
      it('should dispatch cart create', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
          const resolveCartFailureAction = new DaffCartPaymentUpdateWithBillingFailure([error]);
          const checkAction = new DaffAuthCheck();
          actions$ = helpers.hot('--a', { a: resolveCartFailureAction });
          helpers.expectObservable(effects.checkWhenUnathorized$).toBe('--b', { b: checkAction });
        });
      });
    });

    describe('and the error is not a DaffUnauthorizedForCartError', () => {
      it('should not dispatch anything', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Something went wrong' };
          const resolveCartFailureAction = new DaffCartPaymentUpdateWithBillingFailure([error]);
          actions$ = helpers.hot('--a', { a: resolveCartFailureAction });
          helpers.expectObservable(effects.checkWhenUnathorized$).toBe('---');
        });
      });
    });
  });

  describe('when CartCouponApplyFailureAction is triggered', () => {
    describe('and the error is a DaffUnauthorizedForCartError', () => {
      it('should dispatch cart create', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
          const resolveCartFailureAction = new DaffCartCouponApplyFailure([error]);
          const checkAction = new DaffAuthCheck();
          actions$ = helpers.hot('--a', { a: resolveCartFailureAction });
          helpers.expectObservable(effects.checkWhenUnathorized$).toBe('--b', { b: checkAction });
        });
      });
    });

    describe('and the error is not a DaffUnauthorizedForCartError', () => {
      it('should not dispatch anything', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Something went wrong' };
          const resolveCartFailureAction = new DaffCartCouponApplyFailure([error]);
          actions$ = helpers.hot('--a', { a: resolveCartFailureAction });
          helpers.expectObservable(effects.checkWhenUnathorized$).toBe('---');
        });
      });
    });
  });

  describe('when CartCouponRemoveFailureAction is triggered', () => {
    describe('and the error is a DaffUnauthorizedForCartError', () => {
      it('should dispatch cart create', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
          const resolveCartFailureAction = new DaffCartCouponRemoveFailure([error]);
          const checkAction = new DaffAuthCheck();
          actions$ = helpers.hot('--a', { a: resolveCartFailureAction });
          helpers.expectObservable(effects.checkWhenUnathorized$).toBe('--b', { b: checkAction });
        });
      });
    });

    describe('and the error is not a DaffUnauthorizedForCartError', () => {
      it('should not dispatch anything', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Something went wrong' };
          const resolveCartFailureAction = new DaffCartCouponRemoveFailure([error]);
          actions$ = helpers.hot('--a', { a: resolveCartFailureAction });
          helpers.expectObservable(effects.checkWhenUnathorized$).toBe('---');
        });
      });
    });
  });

  describe('when CartCouponRemoveAllFailureAction is triggered', () => {
    describe('and the error is a DaffUnauthorizedForCartError', () => {
      it('should dispatch cart create', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
          const resolveCartFailureAction = new DaffCartCouponRemoveAllFailure([error]);
          const checkAction = new DaffAuthCheck();
          actions$ = helpers.hot('--a', { a: resolveCartFailureAction });
          helpers.expectObservable(effects.checkWhenUnathorized$).toBe('--b', { b: checkAction });
        });
      });
    });

    describe('and the error is not a DaffUnauthorizedForCartError', () => {
      it('should not dispatch anything', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Something went wrong' };
          const resolveCartFailureAction = new DaffCartCouponRemoveAllFailure([error]);
          actions$ = helpers.hot('--a', { a: resolveCartFailureAction });
          helpers.expectObservable(effects.checkWhenUnathorized$).toBe('---');
        });
      });
    });
  });

  describe('when CartPlaceOrderFailureAction is triggered', () => {
    describe('and the error is a DaffUnauthorizedForCartError', () => {
      it('should dispatch cart create', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
          const resolveCartFailureAction = new DaffCartPlaceOrderFailure([error]);
          const checkAction = new DaffAuthCheck();
          actions$ = helpers.hot('--a', { a: resolveCartFailureAction });
          helpers.expectObservable(effects.checkWhenUnathorized$).toBe('--b', { b: checkAction });
        });
      });
    });

    describe('and the error is not a DaffUnauthorizedForCartError', () => {
      it('should not dispatch anything', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Something went wrong' };
          const resolveCartFailureAction = new DaffCartPlaceOrderFailure([error]);
          actions$ = helpers.hot('--a', { a: resolveCartFailureAction });
          helpers.expectObservable(effects.checkWhenUnathorized$).toBe('---');
        });
      });
    });
  });
});
