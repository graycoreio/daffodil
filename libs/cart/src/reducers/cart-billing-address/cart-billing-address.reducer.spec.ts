import { DaffLoadingState } from '@daffodil/core';
import { DaffCart } from '@daffodil/cart';
import { DaffCartFactory } from '@daffodil/cart/testing';

import { initialState } from '../cart-initial-state';
import { DaffCartReducerState } from '../cart-state.interface';
import {
  DaffCartBillingAddressLoad,
  DaffCartBillingAddressLoadSuccess,
  DaffCartBillingAddressLoadFailure,
  DaffCartBillingAddressUpdate,
  DaffCartBillingAddressUpdateSuccess,
  DaffCartBillingAddressUpdateFailure,
  DaffCartAddressUpdate,
  DaffCartAddressUpdateSuccess,
  DaffCartAddressUpdateFailure,
} from '../../actions/public_api';
import { cartBillingAddressReducer } from './cart-billing-address.reducer';
import { DaffCartOperationType } from '../cart-operation-type.enum';

describe('Cart | Reducer | Cart Billing Address', () => {
  let cartFactory: DaffCartFactory;
  let cart: DaffCart;

  beforeEach(() => {
    cartFactory = new DaffCartFactory();

    cart = cartFactory.create();
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = {} as any;

      const result = cartBillingAddressReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when CartBillingAddressLoadAction is triggered', () => {
    it('should set loading state to true', () => {
      const cartListLoadAction = new DaffCartBillingAddressLoad();

      const result = cartBillingAddressReducer(initialState, cartListLoadAction);

      expect(result.loading[DaffCartOperationType.BillingAddress]).toEqual(DaffLoadingState.Resolving);
    });
  });

  describe('when CartBillingAddressLoadSuccessAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.BillingAddress]: DaffLoadingState.Resolving
        }
      }

      const cartListLoadSuccess = new DaffCartBillingAddressLoadSuccess(cart.billing_address);

      result = cartBillingAddressReducer(state, cartListLoadSuccess);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.BillingAddress]).toEqual(DaffLoadingState.Complete);
    });

    it('should set billing_address from action.payload', () => {
      expect(result.cart.billing_address).toEqual(cart.billing_address)
    });

    it('should reset the errors in the billing address section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.BillingAddress]).toEqual([]);
    });
  });

  describe('when CartBillingAddressLoadFailureAction is triggered', () => {
    const error = 'error message';
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.BillingAddress]: DaffLoadingState.Resolving
        },
        errors: {
          ...initialState.errors,
          [DaffCartOperationType.BillingAddress]: new Array('firstError')
        }
      }

      const cartListLoadFailure = new DaffCartBillingAddressLoadFailure(error);

      result = cartBillingAddressReducer(state, cartListLoadFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.BillingAddress]).toEqual(DaffLoadingState.Complete);
    });

    it('should add an error to the billing address section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.BillingAddress].length).toEqual(2);
    });
  });

  describe('when CartBillingAddressUpdateAction is triggered', () => {
    it('should indicate that the cart billing address is being mutated', () => {
      const cartBillingAddressUpdateAction = new DaffCartBillingAddressUpdate(cart.billing_address);

      const result = cartBillingAddressReducer(initialState, cartBillingAddressUpdateAction);

      expect(result.loading[DaffCartOperationType.BillingAddress]).toEqual(DaffLoadingState.Mutating);
    });
  });

  describe('when CartBillingAddressUpdateActionSuccess is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      const cartBillingAddressUpdateActionSuccess = new DaffCartBillingAddressUpdateSuccess(cart);
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.BillingAddress]: DaffLoadingState.Resolving
        }
      }

      result = cartBillingAddressReducer(state, cartBillingAddressUpdateActionSuccess);
    });

    it('should set cart from action.payload', () => {
      expect(result.cart).toEqual(cart)
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.BillingAddress]).toEqual(DaffLoadingState.Complete);
    });

    it('should reset the errors in the billing address section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.BillingAddress]).toEqual([]);
    });
  });

  describe('when CartBillingAddressUpdateFailureAction is triggered', () => {
    let error: string;
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.BillingAddress]: DaffLoadingState.Resolving
        },
        errors: {
          ...initialState.errors,
          [DaffCartOperationType.BillingAddress]: new Array('firstError')
        }
      }

      error = 'error';

      const cartBillingAddressUpdateFailure = new DaffCartBillingAddressUpdateFailure(error);

      result = cartBillingAddressReducer(state, cartBillingAddressUpdateFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.BillingAddress]).toEqual(DaffLoadingState.Complete);
    });

    it('should add an error to the billing address section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.BillingAddress].length).toEqual(2);
    });
  });

  describe('when DaffCartAddressUpdate is triggered', () => {
    it('should indicate that the cart billing address is being mutated', () => {
      const cartAddressUpdateAction = new DaffCartAddressUpdate(cart.billing_address);

      const result = cartBillingAddressReducer(initialState, cartAddressUpdateAction);

      expect(result.loading[DaffCartOperationType.BillingAddress]).toEqual(DaffLoadingState.Mutating);
    });
  });

  describe('when DaffCartAddressUpdateSuccess is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      const cartAddressUpdateActionSuccess = new DaffCartAddressUpdateSuccess(cart);
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.BillingAddress]: DaffLoadingState.Resolving
        }
      }

      result = cartBillingAddressReducer(state, cartAddressUpdateActionSuccess);
    });

    it('should set cart from action.payload', () => {
      expect(result.cart).toEqual(cart)
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.BillingAddress]).toEqual(DaffLoadingState.Complete);
    });

    it('should reset the errors in the billing address section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.BillingAddress]).toEqual([]);
    });
  });

  describe('when DaffCartAddressUpdateFailure is triggered', () => {
    let error: string;
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.BillingAddress]: DaffLoadingState.Resolving
        },
        errors: {
          ...initialState.errors,
          [DaffCartOperationType.BillingAddress]: new Array('firstError')
        }
      }

      error = 'error';

      const cartAddressUpdateFailure = new DaffCartAddressUpdateFailure(error);

      result = cartBillingAddressReducer(state, cartAddressUpdateFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.BillingAddress]).toEqual(DaffLoadingState.Complete);
    });

    it('should add an error to the billing address section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.BillingAddress].length).toEqual(2);
    });
  });
});
