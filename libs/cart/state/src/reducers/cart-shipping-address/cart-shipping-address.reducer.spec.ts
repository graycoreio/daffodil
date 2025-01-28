import { TestBed } from '@angular/core/testing';

import { DaffCart } from '@daffodil/cart';
import {
  DaffCartShippingAddressLoad,
  DaffCartOperationType,
  DaffCartReducerState,
  DaffCartShippingAddressLoadSuccess,
  DaffCartShippingAddressLoadFailure,
  DaffCartShippingAddressUpdate,
  DaffCartShippingAddressUpdateSuccess,
  DaffCartShippingAddressUpdateFailure,
  DaffCartAddressUpdate,
  DaffCartAddressUpdateSuccess,
  DaffCartAddressUpdateFailure,
  daffCartReducerInitialState,
} from '@daffodil/cart/state';
import { DaffCartFactory } from '@daffodil/cart/testing';
import {
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';

import { cartShippingAddressReducer } from './cart-shipping-address.reducer';

describe('@daffodil/cart/state | cartShippingAddressReducer', () => {
  let cartFactory: DaffCartFactory;
  let cart: DaffCart;

  beforeEach(() => {
    cartFactory = TestBed.inject(DaffCartFactory);

    cart = cartFactory.create();
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};

      const result = cartShippingAddressReducer(daffCartReducerInitialState, action);

      expect(result).toBe(daffCartReducerInitialState);
    });
  });

  describe('when CartShippingAddressLoadAction is triggered', () => {
    it('should set loading state to true', () => {
      const cartListLoadAction = new DaffCartShippingAddressLoad();

      const result = cartShippingAddressReducer(daffCartReducerInitialState, cartListLoadAction);

      expect(result.loading[DaffCartOperationType.ShippingAddress]).toEqual(DaffState.Resolving);
    });
  });

  describe('when CartShippingAddressLoadSuccessAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.ShippingAddress]: DaffState.Resolving,
        },
      };

      const cartListLoadSuccess = new DaffCartShippingAddressLoadSuccess(cart.shipping_address);

      result = cartShippingAddressReducer(state, cartListLoadSuccess);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.ShippingAddress]).toEqual(DaffState.Stable);
    });

    it('should set shipping_address from action.payload', () => {
      expect(result.cart.shipping_address).toEqual(cart.shipping_address);
    });

    it('should reset the errors in the shipping address section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.ShippingAddress]).toEqual([]);
    });
  });

  describe('when CartShippingAddressLoadFailureAction is triggered', () => {
    const error: DaffStateError = { code: 'error code', message: 'error message' };
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.ShippingAddress]: DaffState.Resolving,
        },
        errors: {
          ...daffCartReducerInitialState.errors,
          [DaffCartOperationType.ShippingAddress]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      const cartListLoadFailure = new DaffCartShippingAddressLoadFailure([error]);

      result = cartShippingAddressReducer(state, cartListLoadFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.ShippingAddress]).toEqual(DaffState.Stable);
    });

    it('should add an error to the shipping address section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.ShippingAddress].length).toEqual(2);
    });
  });

  describe('when CartShippingAddressUpdateAction is triggered', () => {
    it('should indicate that the cart shipping address is being mutated', () => {
      const cartShippingAddressUpdateAction = new DaffCartShippingAddressUpdate(cart.shipping_address);

      const result = cartShippingAddressReducer(daffCartReducerInitialState, cartShippingAddressUpdateAction);

      expect(result.loading[DaffCartOperationType.ShippingAddress]).toEqual(DaffState.Updating);
    });
  });

  describe('when CartShippingAddressUpdateActionSuccess is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      const cartShippingAddressUpdateActionSuccess = new DaffCartShippingAddressUpdateSuccess(cart);
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.ShippingAddress]: DaffState.Resolving,
        },
      };

      result = cartShippingAddressReducer(state, cartShippingAddressUpdateActionSuccess);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.ShippingAddress]).toEqual(DaffState.Stable);
    });

    it('should reset the errors in the shipping address section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.ShippingAddress]).toEqual([]);
    });
  });

  describe('when CartShippingAddressUpdateFailureAction is triggered', () => {
    let error: DaffStateError;
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.ShippingAddress]: DaffState.Resolving,
        },
        errors: {
          ...daffCartReducerInitialState.errors,
          [DaffCartOperationType.ShippingAddress]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      error = { code: 'error code', message: 'error message' };

      const cartShippingAddressUpdateFailure = new DaffCartShippingAddressUpdateFailure([error]);

      result = cartShippingAddressReducer(state, cartShippingAddressUpdateFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.ShippingAddress]).toEqual(DaffState.Stable);
    });

    it('should add an error to the shipping address section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.ShippingAddress].length).toEqual(2);
    });
  });

  describe('when DaffCartAddressUpdate is triggered', () => {
    it('should set loading state to true', () => {
      const cartAddressUpdateAction = new DaffCartAddressUpdate(cart.shipping_address);

      const result = cartShippingAddressReducer(daffCartReducerInitialState, cartAddressUpdateAction);

      expect(result.loading[DaffCartOperationType.ShippingAddress]).toEqual(DaffState.Updating);
    });
  });

  describe('when DaffCartAddressUpdateSuccess is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      const cartAddressUpdateActionSuccess = new DaffCartAddressUpdateSuccess(cart);
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.ShippingAddress]: DaffState.Resolving,
        },
      };

      result = cartShippingAddressReducer(state, cartAddressUpdateActionSuccess);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.ShippingAddress]).toEqual(DaffState.Stable);
    });

    it('should reset the errors in the shipping address section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.ShippingAddress]).toEqual([]);
    });
  });

  describe('when DaffCartAddressUpdateFailure is triggered', () => {
    let error: DaffStateError;
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.ShippingAddress]: DaffState.Resolving,
        },
        errors: {
          ...daffCartReducerInitialState.errors,
          [DaffCartOperationType.ShippingAddress]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      error = { code: 'error code', message: 'error message' };

      const cartAddressUpdateFailure = new DaffCartAddressUpdateFailure([error]);

      result = cartShippingAddressReducer(state, cartAddressUpdateFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.ShippingAddress]).toEqual(DaffState.Stable);
    });

    it('should add an error to the shipping address section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.ShippingAddress].length).toEqual(2);
    });
  });
});
