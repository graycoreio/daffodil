import { DaffLoadingState } from '@daffodil/core/state';
import { DaffCart } from '@daffodil/cart';
import { DaffCartFactory } from '@daffodil/cart/testing';

import { initialState } from '../cart-initial-state';
import { DaffCartReducerState } from '../cart-state.interface';
import {
  DaffCartShippingAddressLoad,
  DaffCartShippingAddressLoadSuccess,
  DaffCartShippingAddressLoadFailure,
  DaffCartShippingAddressUpdate,
  DaffCartShippingAddressUpdateSuccess,
  DaffCartShippingAddressUpdateFailure,
  DaffCartAddressUpdate,
  DaffCartAddressUpdateSuccess,
  DaffCartAddressUpdateFailure,
} from '../../actions/public_api';
import { cartShippingAddressReducer } from './cart-shipping-address.reducer';
import { DaffCartOperationType } from '../cart-operation-type.enum';

describe('Cart | Reducer | Cart Shipping Address', () => {
  let cartFactory: DaffCartFactory;
  let cart: DaffCart;

  beforeEach(() => {
    cartFactory = new DaffCartFactory();

    cart = cartFactory.create();
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = {} as any;

      const result = cartShippingAddressReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when CartShippingAddressLoadAction is triggered', () => {
    it('should set loading state to true', () => {
      const cartListLoadAction = new DaffCartShippingAddressLoad();

      const result = cartShippingAddressReducer(initialState, cartListLoadAction);

      expect(result.loading[DaffCartOperationType.ShippingAddress]).toEqual(DaffLoadingState.Resolving);
    });
  });

  describe('when CartShippingAddressLoadSuccessAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.ShippingAddress]: DaffLoadingState.Resolving
        }
      }

      const cartListLoadSuccess = new DaffCartShippingAddressLoadSuccess(cart.shipping_address);

      result = cartShippingAddressReducer(state, cartListLoadSuccess);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.ShippingAddress]).toEqual(DaffLoadingState.Complete);
    });

    it('should set shipping_address from action.payload', () => {
      expect(result.cart.shipping_address).toEqual(cart.shipping_address)
    });

    it('should reset the errors in the shipping address section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.ShippingAddress]).toEqual([]);
    });
  });

  describe('when CartShippingAddressLoadFailureAction is triggered', () => {
    const error = 'error message';
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.ShippingAddress]: DaffLoadingState.Resolving
        },
        errors: {
          ...initialState.errors,
          [DaffCartOperationType.ShippingAddress]: new Array('firstError')
        }
      }

      const cartListLoadFailure = new DaffCartShippingAddressLoadFailure(error);

      result = cartShippingAddressReducer(state, cartListLoadFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.ShippingAddress]).toEqual(DaffLoadingState.Complete);
    });

    it('should add an error to the shipping address section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.ShippingAddress].length).toEqual(2);
    });
  });

  describe('when CartShippingAddressUpdateAction is triggered', () => {
    it('should indicate that the cart shipping address is being mutated', () => {
      const cartShippingAddressUpdateAction = new DaffCartShippingAddressUpdate(cart.shipping_address);

      const result = cartShippingAddressReducer(initialState, cartShippingAddressUpdateAction);

      expect(result.loading[DaffCartOperationType.ShippingAddress]).toEqual(DaffLoadingState.Mutating);
    });
  });

  describe('when CartShippingAddressUpdateActionSuccess is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      const cartShippingAddressUpdateActionSuccess = new DaffCartShippingAddressUpdateSuccess(cart);
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.ShippingAddress]: DaffLoadingState.Resolving
        }
      }

      result = cartShippingAddressReducer(state, cartShippingAddressUpdateActionSuccess);
    });

    it('should set cart from action.payload', () => {
      expect(result.cart).toEqual(cart)
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.ShippingAddress]).toEqual(DaffLoadingState.Complete);
    });

    it('should reset the errors in the shipping address section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.ShippingAddress]).toEqual([]);
    });
  });

  describe('when CartShippingAddressUpdateFailureAction is triggered', () => {
    let error: string;
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.ShippingAddress]: DaffLoadingState.Resolving
        },
        errors: {
          ...initialState.errors,
          [DaffCartOperationType.ShippingAddress]: new Array('firstError')
        }
      }

      error = 'error';

      const cartShippingAddressUpdateFailure = new DaffCartShippingAddressUpdateFailure(error);

      result = cartShippingAddressReducer(state, cartShippingAddressUpdateFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.ShippingAddress]).toEqual(DaffLoadingState.Complete);
    });

    it('should add an error to the shipping address section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.ShippingAddress].length).toEqual(2);
    });
  });

  describe('when DaffCartAddressUpdate is triggered', () => {
    it('should set loading state to true', () => {
      const cartAddressUpdateAction = new DaffCartAddressUpdate(cart.shipping_address);

      const result = cartShippingAddressReducer(initialState, cartAddressUpdateAction);

      expect(result.loading[DaffCartOperationType.ShippingAddress]).toEqual(DaffLoadingState.Mutating);
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
          [DaffCartOperationType.ShippingAddress]: DaffLoadingState.Resolving
        }
      }

      result = cartShippingAddressReducer(state, cartAddressUpdateActionSuccess);
    });

    it('should set cart from action.payload', () => {
      expect(result.cart).toEqual(cart)
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.ShippingAddress]).toEqual(DaffLoadingState.Complete);
    });

    it('should reset the errors in the shipping address section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.ShippingAddress]).toEqual([]);
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
          [DaffCartOperationType.ShippingAddress]: DaffLoadingState.Resolving
        },
        errors: {
          ...initialState.errors,
          [DaffCartOperationType.ShippingAddress]: new Array('firstError')
        }
      }

      error = 'error';

      const cartAddressUpdateFailure = new DaffCartAddressUpdateFailure(error);

      result = cartShippingAddressReducer(state, cartAddressUpdateFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.ShippingAddress]).toEqual(DaffLoadingState.Complete);
    });

    it('should add an error to the shipping address section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.ShippingAddress].length).toEqual(2);
    });
  });
});
