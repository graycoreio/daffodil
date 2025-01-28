import { TestBed } from '@angular/core/testing';


import {
  DaffCart,
  DaffCartCoupon,
} from '@daffodil/cart';
import {
  DaffCartCouponApply,
  DaffCartOperationType,
  DaffCartReducerState,
  DaffCartCouponApplySuccess,
  DaffCartCouponApplyFailure,
  DaffCartCouponList,
  DaffCartCouponListSuccess,
  DaffCartCouponListFailure,
  DaffCartCouponRemove,
  DaffCartCouponRemoveSuccess,
  DaffCartCouponRemoveFailure,
  DaffCartCouponRemoveAll,
  DaffCartCouponRemoveAllSuccess,
  DaffCartCouponRemoveAllFailure,
  daffCartReducerInitialState,
  DaffCartCouponClearErrors,
} from '@daffodil/cart/state';
import {
  DaffCartFactory,
  DaffCartCouponFactory,
} from '@daffodil/cart/testing';
import { DaffState } from '@daffodil/core/state';
import { DaffStateError } from '@daffodil/core/state';

import { cartCouponReducer as reducer } from './cart-coupon.reducer';

describe('@daffodil/cart/state | cartCouponReducer', () => {
  let cartFactory: DaffCartFactory;
  let cartCouponFactory: DaffCartCouponFactory;

  let cart: DaffCart;
  let mockCoupon: DaffCartCoupon;

  beforeEach(() => {
    cartFactory = TestBed.inject(DaffCartFactory);
    cartCouponFactory = TestBed.inject(DaffCartCouponFactory);

    cart = cartFactory.create();
    mockCoupon = cartCouponFactory.create();

    cart.coupons = [mockCoupon];
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};

      const result = reducer(daffCartReducerInitialState, action);

      expect(result).toEqual(daffCartReducerInitialState);
    });
  });

  describe('when CartCouponApplyAction is triggered', () => {
    it('should indicate that the cart coupon is being mutated', () => {
      const cartCouponApplyAction: DaffCartCouponApply = new DaffCartCouponApply(mockCoupon);

      const result = reducer(daffCartReducerInitialState, cartCouponApplyAction);

      expect(result.loading[DaffCartOperationType.Coupon]).toEqual(DaffState.Updating);
    });
  });

  describe('when CartCouponApplySuccessAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Coupon]: DaffState.Resolving,
        },
      };

      const cartCouponApplySuccess = new DaffCartCouponApplySuccess(cart);

      result = reducer(state, cartCouponApplySuccess);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Coupon]).toEqual(DaffState.Stable);
    });

    it('should reset the errors in the coupon section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.Coupon]).toEqual([]);
    });
  });

  describe('when CartCouponApplyFailureAction is triggered', () => {
    const error: DaffStateError = { code: 'error code', message: 'error message' };
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Coupon]: DaffState.Resolving,
        },
        errors: {
          ...daffCartReducerInitialState.errors,
          [DaffCartOperationType.Coupon]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      const cartCouponApplyFailure = new DaffCartCouponApplyFailure([error]);

      result = reducer(state, cartCouponApplyFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Coupon]).toEqual(DaffState.Stable);
    });

    it('should add an error to the coupon section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.Coupon].length).toEqual(2);
    });
  });

  describe('when CartCouponListAction is triggered', () => {
    it('should set loading state to true', () => {
      const cartCouponListAction: DaffCartCouponList = new DaffCartCouponList();

      const result = reducer(daffCartReducerInitialState, cartCouponListAction);

      expect(result.loading[DaffCartOperationType.Coupon]).toEqual(DaffState.Resolving);
    });
  });

  describe('when CartCouponListSuccessAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Coupon]: DaffState.Resolving,
        },
      };

      const cartCouponListSuccess = new DaffCartCouponListSuccess([mockCoupon]);

      result = reducer(state, cartCouponListSuccess);
    });

    it('should set cart coupons from action.payload', () => {
      expect(result.cart.coupons).toEqual([mockCoupon]);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Coupon]).toEqual(DaffState.Stable);
    });

    it('should reset the errors in the coupon section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.Coupon]).toEqual([]);
    });
  });

  describe('when CartCouponListFailureAction is triggered', () => {
    const error: DaffStateError = { code: 'error code', message: 'error message' };
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Coupon]: DaffState.Resolving,
        },
        errors: {
          ...daffCartReducerInitialState.errors,
          [DaffCartOperationType.Coupon]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      const cartCouponListFailure = new DaffCartCouponListFailure([error]);

      result = reducer(state, cartCouponListFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Coupon]).toEqual(DaffState.Stable);
    });

    it('should add an error to the coupon section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.Coupon].length).toEqual(2);
    });
  });

  describe('when CartCouponRemoveAction is triggered', () => {
    it('should indicate that the cart coupon is being mutated', () => {
      const cartCouponRemoveAction: DaffCartCouponRemove = new DaffCartCouponRemove(mockCoupon);

      const result = reducer(daffCartReducerInitialState, cartCouponRemoveAction);

      expect(result.loading[DaffCartOperationType.Coupon]).toEqual(DaffState.Updating);
    });
  });

  describe('when CartCouponRemoveActionSuccess is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      const cartCouponRemoveActionSuccess: DaffCartCouponRemoveSuccess = new DaffCartCouponRemoveSuccess(cart);
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Coupon]: DaffState.Resolving,
        },
      };

      result = reducer(state, cartCouponRemoveActionSuccess);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Coupon]).toEqual(DaffState.Stable);
    });

    it('should reset the errors in the coupon section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.Coupon]).toEqual([]);
    });
  });

  describe('when CartCouponRemoveFailureAction is triggered', () => {
    let error: DaffStateError;
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Coupon]: DaffState.Resolving,
        },
        errors: {
          ...daffCartReducerInitialState.errors,
          [DaffCartOperationType.Coupon]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      error = { code: 'error code', message: 'error message' };

      const cartCouponRemoveFailure = new DaffCartCouponRemoveFailure([error]);

      result = reducer(state, cartCouponRemoveFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Coupon]).toEqual(DaffState.Stable);
    });

    it('should add an error to the coupon section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.Coupon].length).toEqual(2);
    });
  });

  describe('when CartCouponRemoveAllAction is triggered', () => {
    it('should indicate that the cart coupon is being mutated', () => {
      const expectedState: DaffCartReducerState<DaffCart> = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Coupon]: DaffState.Updating,
        },
      };
      const cartClear = new DaffCartCouponRemoveAll();
      const result = reducer(daffCartReducerInitialState, cartClear);

      expect(result).toEqual(expectedState);
    });
  });

  describe('when CartCouponRemoveAllSuccessAction is triggered', () => {
    let result;

    beforeEach(() => {
      const cartClearSuccess = new DaffCartCouponRemoveAllSuccess(cart);
      result = reducer(daffCartReducerInitialState, cartClearSuccess);
    });

    it('should reset the errors in the coupon section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.Coupon]).toEqual([]);
    });
  });

  describe('when CartCouponRemoveAllFailureAction is triggered', () => {
    let error: DaffStateError;
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Coupon]: DaffState.Resolving,
        },
        errors: {
          ...daffCartReducerInitialState.errors,
          [DaffCartOperationType.Coupon]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      error = { code: 'error code', message: 'error message' };

      const cartClearFailure = new DaffCartCouponRemoveAllFailure([error]);

      result = reducer(state, cartClearFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Coupon]).toEqual(DaffState.Stable);
    });

    it('should add an error to the coupon section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.Coupon].length).toEqual(2);
    });
  });

  describe('when CartCouponClearErrorsAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      const cartCouponRemoveActionSuccess = new DaffCartCouponClearErrors();
      state = {
        ...daffCartReducerInitialState,
        errors: {
          ...daffCartReducerInitialState.errors,
          [DaffCartOperationType.Coupon]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      result = reducer(state, cartCouponRemoveActionSuccess);
    });

    it('should reset the errors in the coupon section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.Coupon]).toEqual([]);
    });
  });
});
