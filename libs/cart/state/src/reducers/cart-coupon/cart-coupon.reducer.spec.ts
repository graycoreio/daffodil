import { TestBed } from '@angular/core/testing';

import { DaffLoadingState, DaffStateError } from '@daffodil/core/state';
import { DaffCart, DaffCartCoupon } from '@daffodil/cart';
import { DaffCartCouponApply, DaffCartOperationType, DaffCartReducerState, DaffCartCouponApplySuccess, DaffCartCouponApplyFailure, DaffCartCouponList, DaffCartCouponListSuccess, DaffCartCouponListFailure, DaffCartCouponRemove, DaffCartCouponRemoveSuccess, DaffCartCouponRemoveFailure, DaffCartCouponRemoveAll, DaffCartCouponRemoveAllSuccess, DaffCartCouponRemoveAllFailure, initialState } from '@daffodil/cart/state';
import {
  DaffCartFactory,
  DaffCartCouponFactory
} from '@daffodil/cart/testing';

import { cartCouponReducer as reducer } from './cart-coupon.reducer';


describe('Cart | Reducer | cartCouponReducer', () => {
  let cartFactory: DaffCartFactory;
  let cartCouponFactory: DaffCartCouponFactory;

  let cart: DaffCart;
  let mockCoupon: DaffCartCoupon

  beforeEach(() => {
    cartFactory = TestBed.get(DaffCartFactory);
    cartCouponFactory = TestBed.get(DaffCartCouponFactory);

    cart = cartFactory.create();
    mockCoupon = cartCouponFactory.create();

    cart.coupons = [mockCoupon];
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toEqual(initialState);
    });
  });

  describe('when CartCouponApplyAction is triggered', () => {
    it('should indicate that the cart coupon is being mutated', () => {
      const cartCouponApplyAction: DaffCartCouponApply = new DaffCartCouponApply(mockCoupon);

      const result = reducer(initialState, cartCouponApplyAction);

      expect(result.loading[DaffCartOperationType.Coupon]).toEqual(DaffLoadingState.Mutating);
    });
  });

  describe('when CartCouponApplySuccessAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.Coupon]: DaffLoadingState.Resolving
        }
      }

      const cartCouponApplySuccess = new DaffCartCouponApplySuccess(cart);

      result = reducer(state, cartCouponApplySuccess);
    });

    it('should set cart from action.payload', () => {
      expect(result.cart).toEqual(cart)
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Coupon]).toEqual(DaffLoadingState.Complete);
    });

    it('should reset the errors in the coupon section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.Coupon]).toEqual([]);
    });
  });

  describe('when CartCouponApplyFailureAction is triggered', () => {
    const error: DaffStateError = {code: 'error code', message: 'error message'};
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.Coupon]: DaffLoadingState.Resolving
        },
        errors: {
          ...initialState.errors,
          [DaffCartOperationType.Coupon]: [{code: 'first error code', message: 'first error message'}]
        }
      }

      const cartCouponApplyFailure = new DaffCartCouponApplyFailure(error);

      result = reducer(state, cartCouponApplyFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Coupon]).toEqual(DaffLoadingState.Complete);
    });

    it('should add an error to the coupon section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.Coupon].length).toEqual(2);
    });
  });

  describe('when CartCouponListAction is triggered', () => {
    it('should set loading state to true', () => {
      const cartCouponListAction: DaffCartCouponList = new DaffCartCouponList();

      const result = reducer(initialState, cartCouponListAction);

      expect(result.loading[DaffCartOperationType.Coupon]).toEqual(DaffLoadingState.Resolving);
    });
  });

  describe('when CartCouponListSuccessAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.Coupon]: DaffLoadingState.Resolving
        }
      }

      const cartCouponListSuccess = new DaffCartCouponListSuccess([mockCoupon]);

      result = reducer(state, cartCouponListSuccess);
    });

    it('should set cart coupons from action.payload', () => {
      expect(result.cart.coupons).toEqual([mockCoupon]);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Coupon]).toEqual(DaffLoadingState.Complete);
    });

    it('should reset the errors in the coupon section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.Coupon]).toEqual([]);
    });
  });

  describe('when CartCouponListFailureAction is triggered', () => {
    const error: DaffStateError = {code: 'error code', message: 'error message'};
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.Coupon]: DaffLoadingState.Resolving
        },
        errors: {
          ...initialState.errors,
          [DaffCartOperationType.Coupon]: [{code: 'first error code', message: 'first error message'}]
        }
      }

      const cartCouponListFailure = new DaffCartCouponListFailure(error);

      result = reducer(state, cartCouponListFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Coupon]).toEqual(DaffLoadingState.Complete);
    });

    it('should add an error to the coupon section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.Coupon].length).toEqual(2);
    });
  });

  describe('when CartCouponRemoveAction is triggered', () => {
    it('should indicate that the cart coupon is being mutated', () => {
      const cartCouponRemoveAction: DaffCartCouponRemove = new DaffCartCouponRemove(mockCoupon);

      const result = reducer(initialState, cartCouponRemoveAction);

      expect(result.loading[DaffCartOperationType.Coupon]).toEqual(DaffLoadingState.Mutating);
    });
  });

  describe('when CartCouponRemoveActionSuccess is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      const cartCouponRemoveActionSuccess: DaffCartCouponRemoveSuccess = new DaffCartCouponRemoveSuccess(cart);
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.Coupon]: DaffLoadingState.Resolving
        }
      }

      result = reducer(state, cartCouponRemoveActionSuccess);
    });

    it('should set cart from action.payload', () => {
      expect(result.cart).toEqual(cart)
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Coupon]).toEqual(DaffLoadingState.Complete);
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
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.Coupon]: DaffLoadingState.Resolving
        },
        errors: {
          ...initialState.errors,
          [DaffCartOperationType.Coupon]: [{code: 'first error code', message: 'first error message'}]
        }
      }

      error = {code: 'error code', message: 'error message'};

      const cartCouponRemoveFailure = new DaffCartCouponRemoveFailure(error);

      result = reducer(state, cartCouponRemoveFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Coupon]).toEqual(DaffLoadingState.Complete);
    });

    it('should add an error to the coupon section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.Coupon].length).toEqual(2);
    });
  });

  describe('when CartCouponRemoveAllAction is triggered', () => {
    it('should indicate that the cart coupon is being mutated', () => {
      const expectedState = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.Coupon]: DaffLoadingState.Mutating
        },
      }
      const cartClear = new DaffCartCouponRemoveAll();
      const result = reducer(initialState, cartClear);

      expect(result).toEqual(expectedState);
    });
  });

  describe('when CartCouponRemoveAllSuccessAction is triggered', () => {
    let result;

    beforeEach(() => {
      const cartClearSuccess = new DaffCartCouponRemoveAllSuccess(cart);
      result = reducer(initialState, cartClearSuccess);
    });

    it('should set the cart payload on state', () => {
      const expectedState = {
        ...initialState,
        cart: {
          ...initialState.cart,
          items: [],
          ...cart
        },
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.Coupon]: DaffLoadingState.Complete
        }
      }

      expect(result).toEqual(expectedState);
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
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.Coupon]: DaffLoadingState.Resolving
        },
        errors: {
          ...initialState.errors,
          [DaffCartOperationType.Coupon]: [{code: 'first error code', message: 'first error message'}]
        }
      }

      error = {code: 'error code', message: 'error message'};

      const cartClearFailure = new DaffCartCouponRemoveAllFailure(error);

      result = reducer(state, cartClearFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Coupon]).toEqual(DaffLoadingState.Complete);
    });

    it('should add an error to the coupon section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.Coupon].length).toEqual(2);
    });
  });
});
