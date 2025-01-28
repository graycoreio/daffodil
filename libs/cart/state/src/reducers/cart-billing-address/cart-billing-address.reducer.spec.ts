import { TestBed } from '@angular/core/testing';

import { DaffCart } from '@daffodil/cart';
import {
  DaffCartBillingAddressLoad,
  DaffCartOperationType,
  DaffCartReducerState,
  DaffCartBillingAddressLoadSuccess,
  DaffCartBillingAddressLoadFailure,
  DaffCartBillingAddressUpdate,
  DaffCartBillingAddressUpdateSuccess,
  DaffCartBillingAddressUpdateFailure,
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

import { cartBillingAddressReducer } from './cart-billing-address.reducer';

describe('@daffodil/cart/state | cartBillingAddressReducer', () => {
  let cartFactory: DaffCartFactory;
  let cart: DaffCart;

  beforeEach(() => {
    cartFactory = TestBed.inject(DaffCartFactory);

    cart = cartFactory.create();
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};

      const result = cartBillingAddressReducer(daffCartReducerInitialState, action);

      expect(result).toBe(daffCartReducerInitialState);
    });
  });

  describe('when CartBillingAddressLoadAction is triggered', () => {
    it('should set loading state to true', () => {
      const cartListLoadAction = new DaffCartBillingAddressLoad();

      const result = cartBillingAddressReducer(daffCartReducerInitialState, cartListLoadAction);

      expect(result.loading[DaffCartOperationType.BillingAddress]).toEqual(DaffState.Resolving);
    });
  });

  describe('when CartBillingAddressLoadSuccessAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.BillingAddress]: DaffState.Resolving,
        },
      };

      const cartListLoadSuccess = new DaffCartBillingAddressLoadSuccess(cart.billing_address);

      result = cartBillingAddressReducer(state, cartListLoadSuccess);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.BillingAddress]).toEqual(DaffState.Stable);
    });

    it('should set billing_address from action.payload', () => {
      expect(result.cart.billing_address).toEqual(cart.billing_address);
    });

    it('should reset the errors in the billing address section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.BillingAddress]).toEqual([]);
    });
  });

  describe('when CartBillingAddressLoadFailureAction is triggered', () => {
    const error: DaffStateError = { code: 'error code', message: 'error message' };
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.BillingAddress]: DaffState.Resolving,
        },
        errors: {
          ...daffCartReducerInitialState.errors,
          [DaffCartOperationType.BillingAddress]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      const cartListLoadFailure = new DaffCartBillingAddressLoadFailure([error]);

      result = cartBillingAddressReducer(state, cartListLoadFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.BillingAddress]).toEqual(DaffState.Stable);
    });

    it('should add an error to the billing address section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.BillingAddress].length).toEqual(2);
    });
  });

  describe('when CartBillingAddressUpdateAction is triggered', () => {
    it('should indicate that the cart billing address is being mutated', () => {
      const cartBillingAddressUpdateAction = new DaffCartBillingAddressUpdate(cart.billing_address);

      const result = cartBillingAddressReducer(daffCartReducerInitialState, cartBillingAddressUpdateAction);

      expect(result.loading[DaffCartOperationType.BillingAddress]).toEqual(DaffState.Updating);
    });
  });

  describe('when CartBillingAddressUpdateActionSuccess is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      const cartBillingAddressUpdateActionSuccess = new DaffCartBillingAddressUpdateSuccess(cart);
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.BillingAddress]: DaffState.Resolving,
        },
      };

      result = cartBillingAddressReducer(state, cartBillingAddressUpdateActionSuccess);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.BillingAddress]).toEqual(DaffState.Stable);
    });

    it('should reset the errors in the billing address section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.BillingAddress]).toEqual([]);
    });
  });

  describe('when CartBillingAddressUpdateFailureAction is triggered', () => {
    let error: DaffStateError;
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.BillingAddress]: DaffState.Resolving,
        },
        errors: {
          ...daffCartReducerInitialState.errors,
          [DaffCartOperationType.BillingAddress]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      error = { code: 'error code', message: 'error message' };

      const cartBillingAddressUpdateFailure = new DaffCartBillingAddressUpdateFailure([error]);

      result = cartBillingAddressReducer(state, cartBillingAddressUpdateFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.BillingAddress]).toEqual(DaffState.Stable);
    });

    it('should add an error to the billing address section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.BillingAddress].length).toEqual(2);
    });
  });

  describe('when DaffCartAddressUpdate is triggered', () => {
    it('should indicate that the cart billing address is being mutated', () => {
      const cartAddressUpdateAction = new DaffCartAddressUpdate(cart.billing_address);

      const result = cartBillingAddressReducer(daffCartReducerInitialState, cartAddressUpdateAction);

      expect(result.loading[DaffCartOperationType.BillingAddress]).toEqual(DaffState.Updating);
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
          [DaffCartOperationType.BillingAddress]: DaffState.Resolving,
        },
      };

      result = cartBillingAddressReducer(state, cartAddressUpdateActionSuccess);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.BillingAddress]).toEqual(DaffState.Stable);
    });

    it('should reset the errors in the billing address section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.BillingAddress]).toEqual([]);
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
          [DaffCartOperationType.BillingAddress]: DaffState.Resolving,
        },
        errors: {
          ...daffCartReducerInitialState.errors,
          [DaffCartOperationType.BillingAddress]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      error = { code: 'error code', message: 'error message' };

      const cartAddressUpdateFailure = new DaffCartAddressUpdateFailure([error]);

      result = cartBillingAddressReducer(state, cartAddressUpdateFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.BillingAddress]).toEqual(DaffState.Stable);
    });

    it('should add an error to the billing address section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.BillingAddress].length).toEqual(2);
    });
  });
});
