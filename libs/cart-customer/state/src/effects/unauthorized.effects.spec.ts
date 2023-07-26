import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  hot,
  cold,
} from 'jasmine-marbles';
import { Observable } from 'rxjs';

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
    let expected;

    describe('and the error is a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
        const resolveCartFailureAction = new DaffResolveCartFailure([error]);
        const cartCreateAction = new DaffCartCreate();
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('--b', { b: cartCreateAction });
      });

      it('should dispatch cart create', () => {
        expect(effects.createWhenUnathorized$).toBeObservable(expected);
      });

      it('should remove the cart ID from storage', () => {
        expect(effects.createWhenUnathorized$).toBeObservable(expected);
        expect(removeCartIdSpy).toHaveBeenCalledWith();
      });
    });

    describe('and the error is not a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: 'code', recoverable: false, message: 'Something went wrong' };
        const resolveCartFailureAction = new DaffResolveCartFailure([error]);
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('---');
      });

      it('should not dispatch anything', () => {
        expect(effects.createWhenUnathorized$).toBeObservable(expected);
      });
    });
  });

  describe('when CartLoadFailureAction is triggered', () => {
    let expected;

    describe('and the error is a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
        const resolveCartFailureAction = new DaffCartLoadFailure([error]);
        const cartCreateAction = new DaffCartCreate();
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('--b', { b: cartCreateAction });
      });

      it('should dispatch cart create', () => {
        expect(effects.createWhenUnathorized$).toBeObservable(expected);
      });

      it('should remove the cart ID from storage', () => {
        expect(effects.createWhenUnathorized$).toBeObservable(expected);
        expect(removeCartIdSpy).toHaveBeenCalledWith();
      });
    });

    describe('and the error is not a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: 'code', recoverable: false, message: 'Something went wrong' };
        const resolveCartFailureAction = new DaffCartLoadFailure([error]);
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('---');
      });

      it('should not dispatch anything', () => {
        expect(effects.createWhenUnathorized$).toBeObservable(expected);
      });
    });
  });

  describe('when CartItemAddFailureAction is triggered', () => {
    let expected;

    describe('and the error is a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
        const resolveCartFailureAction = new DaffCartItemAddFailure(error);
        const checkAction = new DaffAuthCheck();
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('--b', { b: checkAction });
      });

      it('should dispatch cart create', () => {
        expect(effects.checkWhenUnathorized$).toBeObservable(expected);
      });
    });

    describe('and the error is not a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: 'code', recoverable: false, message: 'Something went wrong' };
        const resolveCartFailureAction = new DaffCartItemAddFailure(error);
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('---');
      });

      it('should not dispatch anything', () => {
        expect(effects.checkWhenUnathorized$).toBeObservable(expected);
      });
    });
  });

  describe('when CartItemDeleteFailureAction is triggered', () => {
    let expected;

    describe('and the error is a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
        const resolveCartFailureAction = new DaffCartItemDeleteFailure(error, 'itemId');
        const checkAction = new DaffAuthCheck();
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('--b', { b: checkAction });
      });

      it('should dispatch cart create', () => {
        expect(effects.checkWhenUnathorized$).toBeObservable(expected);
      });
    });

    describe('and the error is not a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: 'code', recoverable: false, message: 'Something went wrong' };
        const resolveCartFailureAction = new DaffCartItemDeleteFailure(error, 'itemId');
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('---');
      });

      it('should not dispatch anything', () => {
        expect(effects.checkWhenUnathorized$).toBeObservable(expected);
      });
    });
  });

  describe('when CartItemDeleteOutOfStockFailureAction is triggered', () => {
    let expected;

    describe('and the error is a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
        const resolveCartFailureAction = new DaffCartItemDeleteOutOfStockFailure(error);
        const checkAction = new DaffAuthCheck();
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('--b', { b: checkAction });
      });

      it('should dispatch cart create', () => {
        expect(effects.checkWhenUnathorized$).toBeObservable(expected);
      });
    });

    describe('and the error is not a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: 'code', recoverable: false, message: 'Something went wrong' };
        const resolveCartFailureAction = new DaffCartItemDeleteOutOfStockFailure(error);
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('---');
      });

      it('should not dispatch anything', () => {
        expect(effects.checkWhenUnathorized$).toBeObservable(expected);
      });
    });
  });

  describe('when CartItemUpdateFailureAction is triggered', () => {
    let expected;

    describe('and the error is a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
        const resolveCartFailureAction = new DaffCartItemUpdateFailure(error, 'itemId');
        const checkAction = new DaffAuthCheck();
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('--b', { b: checkAction });
      });

      it('should dispatch cart create', () => {
        expect(effects.checkWhenUnathorized$).toBeObservable(expected);
      });
    });

    describe('and the error is not a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: 'code', recoverable: false, message: 'Something went wrong' };
        const resolveCartFailureAction = new DaffCartItemUpdateFailure(error, 'itemId');
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('---');
      });

      it('should not dispatch anything', () => {
        expect(effects.checkWhenUnathorized$).toBeObservable(expected);
      });
    });
  });

  describe('when CartBillingAddressUpdateFailureAction is triggered', () => {
    let expected;

    describe('and the error is a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
        const resolveCartFailureAction = new DaffCartBillingAddressUpdateFailure(error);
        const checkAction = new DaffAuthCheck();
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('--b', { b: checkAction });
      });

      it('should dispatch cart create', () => {
        expect(effects.checkWhenUnathorized$).toBeObservable(expected);
      });
    });

    describe('and the error is not a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: 'code', recoverable: false, message: 'Something went wrong' };
        const resolveCartFailureAction = new DaffCartBillingAddressUpdateFailure(error);
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('---');
      });

      it('should not dispatch anything', () => {
        expect(effects.checkWhenUnathorized$).toBeObservable(expected);
      });
    });
  });

  describe('when CartAddressUpdateFailureAction is triggered', () => {
    let expected;

    describe('and the error is a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
        const resolveCartFailureAction = new DaffCartAddressUpdateFailure(error);
        const checkAction = new DaffAuthCheck();
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('--b', { b: checkAction });
      });

      it('should dispatch cart create', () => {
        expect(effects.checkWhenUnathorized$).toBeObservable(expected);
      });
    });

    describe('and the error is not a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: 'code', recoverable: false, message: 'Something went wrong' };
        const resolveCartFailureAction = new DaffCartAddressUpdateFailure(error);
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('---');
      });

      it('should not dispatch anything', () => {
        expect(effects.checkWhenUnathorized$).toBeObservable(expected);
      });
    });
  });

  describe('when CartShippingAddressUpdateFailureAction is triggered', () => {
    let expected;

    describe('and the error is a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
        const resolveCartFailureAction = new DaffCartShippingAddressUpdateFailure(error);
        const checkAction = new DaffAuthCheck();
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('--b', { b: checkAction });
      });

      it('should dispatch cart create', () => {
        expect(effects.checkWhenUnathorized$).toBeObservable(expected);
      });
    });

    describe('and the error is not a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: 'code', recoverable: false, message: 'Something went wrong' };
        const resolveCartFailureAction = new DaffCartShippingAddressUpdateFailure(error);
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('---');
      });

      it('should not dispatch anything', () => {
        expect(effects.checkWhenUnathorized$).toBeObservable(expected);
      });
    });
  });

  describe('when CartShippingInformationDeleteFailureAction is triggered', () => {
    let expected;

    describe('and the error is a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
        const resolveCartFailureAction = new DaffCartShippingInformationDeleteFailure(error);
        const checkAction = new DaffAuthCheck();
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('--b', { b: checkAction });
      });

      it('should dispatch cart create', () => {
        expect(effects.checkWhenUnathorized$).toBeObservable(expected);
      });
    });

    describe('and the error is not a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: 'code', recoverable: false, message: 'Something went wrong' };
        const resolveCartFailureAction = new DaffCartShippingInformationDeleteFailure(error);
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('---');
      });

      it('should not dispatch anything', () => {
        expect(effects.checkWhenUnathorized$).toBeObservable(expected);
      });
    });
  });

  describe('when CartShippingInformationUpdateFailureAction is triggered', () => {
    let expected;

    describe('and the error is a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
        const resolveCartFailureAction = new DaffCartShippingInformationUpdateFailure(error);
        const checkAction = new DaffAuthCheck();
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('--b', { b: checkAction });
      });

      it('should dispatch cart create', () => {
        expect(effects.checkWhenUnathorized$).toBeObservable(expected);
      });
    });

    describe('and the error is not a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: 'code', recoverable: false, message: 'Something went wrong' };
        const resolveCartFailureAction = new DaffCartShippingInformationUpdateFailure(error);
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('---');
      });

      it('should not dispatch anything', () => {
        expect(effects.checkWhenUnathorized$).toBeObservable(expected);
      });
    });
  });

  describe('when CartPaymentRemoveFailureAction is triggered', () => {
    let expected;

    describe('and the error is a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
        const resolveCartFailureAction = new DaffCartPaymentRemoveFailure(error);
        const checkAction = new DaffAuthCheck();
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('--b', { b: checkAction });
      });

      it('should dispatch cart create', () => {
        expect(effects.checkWhenUnathorized$).toBeObservable(expected);
      });
    });

    describe('and the error is not a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: 'code', recoverable: false, message: 'Something went wrong' };
        const resolveCartFailureAction = new DaffCartPaymentRemoveFailure(error);
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('---');
      });

      it('should not dispatch anything', () => {
        expect(effects.checkWhenUnathorized$).toBeObservable(expected);
      });
    });
  });

  describe('when CartPaymentUpdateFailureAction is triggered', () => {
    let expected;

    describe('and the error is a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
        const resolveCartFailureAction = new DaffCartPaymentUpdateFailure(error);
        const checkAction = new DaffAuthCheck();
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('--b', { b: checkAction });
      });

      it('should dispatch cart create', () => {
        expect(effects.checkWhenUnathorized$).toBeObservable(expected);
      });
    });

    describe('and the error is not a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: 'code', recoverable: false, message: 'Something went wrong' };
        const resolveCartFailureAction = new DaffCartPaymentUpdateFailure(error);
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('---');
      });

      it('should not dispatch anything', () => {
        expect(effects.checkWhenUnathorized$).toBeObservable(expected);
      });
    });
  });

  describe('when CartPaymentUpdateWithBillingFailureAction is triggered', () => {
    let expected;

    describe('and the error is a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
        const resolveCartFailureAction = new DaffCartPaymentUpdateWithBillingFailure(error);
        const checkAction = new DaffAuthCheck();
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('--b', { b: checkAction });
      });

      it('should dispatch cart create', () => {
        expect(effects.checkWhenUnathorized$).toBeObservable(expected);
      });
    });

    describe('and the error is not a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: 'code', recoverable: false, message: 'Something went wrong' };
        const resolveCartFailureAction = new DaffCartPaymentUpdateWithBillingFailure(error);
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('---');
      });

      it('should not dispatch anything', () => {
        expect(effects.checkWhenUnathorized$).toBeObservable(expected);
      });
    });
  });

  describe('when CartCouponApplyFailureAction is triggered', () => {
    let expected;

    describe('and the error is a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
        const resolveCartFailureAction = new DaffCartCouponApplyFailure(error);
        const checkAction = new DaffAuthCheck();
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('--b', { b: checkAction });
      });

      it('should dispatch cart create', () => {
        expect(effects.checkWhenUnathorized$).toBeObservable(expected);
      });
    });

    describe('and the error is not a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: 'code', recoverable: false, message: 'Something went wrong' };
        const resolveCartFailureAction = new DaffCartCouponApplyFailure(error);
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('---');
      });

      it('should not dispatch anything', () => {
        expect(effects.checkWhenUnathorized$).toBeObservable(expected);
      });
    });
  });

  describe('when CartCouponRemoveFailureAction is triggered', () => {
    let expected;

    describe('and the error is a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
        const resolveCartFailureAction = new DaffCartCouponRemoveFailure(error);
        const checkAction = new DaffAuthCheck();
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('--b', { b: checkAction });
      });

      it('should dispatch cart create', () => {
        expect(effects.checkWhenUnathorized$).toBeObservable(expected);
      });
    });

    describe('and the error is not a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: 'code', recoverable: false, message: 'Something went wrong' };
        const resolveCartFailureAction = new DaffCartCouponRemoveFailure(error);
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('---');
      });

      it('should not dispatch anything', () => {
        expect(effects.checkWhenUnathorized$).toBeObservable(expected);
      });
    });
  });

  describe('when CartCouponRemoveAllFailureAction is triggered', () => {
    let expected;

    describe('and the error is a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
        const resolveCartFailureAction = new DaffCartCouponRemoveAllFailure(error);
        const checkAction = new DaffAuthCheck();
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('--b', { b: checkAction });
      });

      it('should dispatch cart create', () => {
        expect(effects.checkWhenUnathorized$).toBeObservable(expected);
      });
    });

    describe('and the error is not a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: 'code', recoverable: false, message: 'Something went wrong' };
        const resolveCartFailureAction = new DaffCartCouponRemoveAllFailure(error);
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('---');
      });

      it('should not dispatch anything', () => {
        expect(effects.checkWhenUnathorized$).toBeObservable(expected);
      });
    });
  });

  describe('when CartPlaceOrderFailureAction is triggered', () => {
    let expected;

    describe('and the error is a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART, recoverable: false, message: 'Unauthorized' };
        const resolveCartFailureAction = new DaffCartPlaceOrderFailure(error);
        const checkAction = new DaffAuthCheck();
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('--b', { b: checkAction });
      });

      it('should dispatch cart create', () => {
        expect(effects.checkWhenUnathorized$).toBeObservable(expected);
      });
    });

    describe('and the error is not a DaffUnauthorizedForCartError', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: 'code', recoverable: false, message: 'Something went wrong' };
        const resolveCartFailureAction = new DaffCartPlaceOrderFailure(error);
        actions$ = hot('--a', { a: resolveCartFailureAction });
        expected = cold('---');
      });

      it('should not dispatch anything', () => {
        expect(effects.checkWhenUnathorized$).toBeObservable(expected);
      });
    });
  });
});
