import { TestBed } from '@angular/core/testing';

import { DaffCart } from '@daffodil/cart';
import {
  DaffCartPaymentLoad,
  DaffCartOperationType,
  DaffCartReducerState,
  DaffCartPaymentLoadSuccess,
  DaffCartPaymentLoadFailure,
  DaffCartPaymentUpdate,
  DaffCartPaymentUpdateSuccess,
  DaffCartPaymentUpdateFailure,
  DaffCartPaymentUpdateWithBilling,
  DaffCartPaymentUpdateWithBillingSuccess,
  DaffCartPaymentUpdateWithBillingFailure,
  DaffCartPaymentRemove,
  DaffCartPaymentRemoveSuccess,
  DaffCartPaymentRemoveFailure,
  DaffCartPaymentMethodAdd,
  daffCartReducerInitialState,
} from '@daffodil/cart/state';
import { DaffCartFactory } from '@daffodil/cart/testing';
import {
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';

import { cartPaymentReducer } from './cart-payment.reducer';

describe('@daffodil/cart/state | cartPaymentReducer', () => {
  let cartFactory: DaffCartFactory;
  let cart: DaffCart;

  beforeEach(() => {
    cartFactory = TestBed.inject(DaffCartFactory);

    cart = cartFactory.create();
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};

      const result = cartPaymentReducer(daffCartReducerInitialState, action);

      expect(result).toBe(daffCartReducerInitialState);
    });
  });

  describe('when CartPaymentLoadAction is triggered', () => {
    it('should set loading state to true', () => {
      const cartListLoadAction = new DaffCartPaymentLoad();

      const result = cartPaymentReducer(daffCartReducerInitialState, cartListLoadAction);

      expect(result.loading[DaffCartOperationType.Payment]).toEqual(DaffState.Resolving);
    });
  });

  describe('when CartPaymentLoadSuccessAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Payment]: DaffState.Resolving,
        },
      };

      const cartListLoadSuccess = new DaffCartPaymentLoadSuccess(cart.payment);

      result = cartPaymentReducer(state, cartListLoadSuccess);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Payment]).toEqual(DaffState.Stable);
    });

    it('should set payment from action.payload', () => {
      expect(result.cart.payment).toEqual(cart.payment);
    });

    it('should reset the errors in the payment section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.Payment]).toEqual([]);
    });
  });

  describe('when CartPaymentLoadFailureAction is triggered', () => {
    const error: DaffStateError = { code: 'error code', message: 'error message' };
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Payment]: DaffState.Resolving,
        },
        errors: {
          ...daffCartReducerInitialState.errors,
          [DaffCartOperationType.Payment]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      const cartListLoadFailure = new DaffCartPaymentLoadFailure([error]);

      result = cartPaymentReducer(state, cartListLoadFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Payment]).toEqual(DaffState.Stable);
    });

    it('should add an error to the payment section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.Payment].length).toEqual(2);
    });
  });

  describe('when CartPaymentUpdateAction is triggered', () => {
    it('should indicate that the cart payment is being mutated', () => {
      const cartPaymentUpdateAction = new DaffCartPaymentUpdate(cart.payment);

      const result = cartPaymentReducer(daffCartReducerInitialState, cartPaymentUpdateAction);

      expect(result.loading[DaffCartOperationType.Payment]).toEqual(DaffState.Updating);
    });
  });

  describe('when CartPaymentUpdateActionSuccess is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      const cartPaymentUpdateActionSuccess = new DaffCartPaymentUpdateSuccess(cart);
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Payment]: DaffState.Resolving,
        },
      };

      result = cartPaymentReducer(state, cartPaymentUpdateActionSuccess);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Payment]).toEqual(DaffState.Stable);
    });

    it('should reset the errors in the payment section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.Payment]).toEqual([]);
    });
  });

  describe('when CartPaymentUpdateFailureAction is triggered', () => {
    let error: DaffStateError;
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Payment]: DaffState.Resolving,
        },
        errors: {
          ...daffCartReducerInitialState.errors,
          [DaffCartOperationType.Payment]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      error = { code: 'error code', message: 'error message' };

      const cartPaymentUpdateFailure = new DaffCartPaymentUpdateFailure([error]);

      result = cartPaymentReducer(state, cartPaymentUpdateFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Payment]).toEqual(DaffState.Stable);
    });

    it('should add an error to the payment section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.Payment].length).toEqual(2);
    });
  });

  describe('when CartPaymentUpdateWithBillingAction is triggered', () => {
    it('should indicate that the cart payment is being mutated', () => {
      const cartPaymentUpdateWithBillingAction = new DaffCartPaymentUpdateWithBilling(cart.payment, cart.billing_address);

      const result = cartPaymentReducer(daffCartReducerInitialState, cartPaymentUpdateWithBillingAction);

      expect(result.loading[DaffCartOperationType.Payment]).toEqual(DaffState.Updating);
    });
  });

  describe('when CartPaymentUpdateWithBillingActionSuccess is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      const cartPaymentUpdateWithBillingActionSuccess = new DaffCartPaymentUpdateWithBillingSuccess(cart);
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Payment]: DaffState.Resolving,
        },
      };

      result = cartPaymentReducer(state, cartPaymentUpdateWithBillingActionSuccess);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Payment]).toEqual(DaffState.Stable);
    });

    it('should reset the errors in the payment section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.Payment]).toEqual([]);
    });
  });

  describe('when CartPaymentUpdateWithBillingFailureAction is triggered', () => {
    let error: DaffStateError;
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Payment]: DaffState.Resolving,
        },
        errors: {
          ...daffCartReducerInitialState.errors,
          [DaffCartOperationType.Payment]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      error = { code: 'error code', message: 'error message' };

      const cartPaymentUpdateWithBillingFailure = new DaffCartPaymentUpdateWithBillingFailure([error]);

      result = cartPaymentReducer(state, cartPaymentUpdateWithBillingFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Payment]).toEqual(DaffState.Stable);
    });

    it('should add an error to the payment section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.Payment].length).toEqual(2);
    });
  });

  describe('when CartPaymentRemoveAction is triggered', () => {
    it('should indicate that the cart payment is being mutated', () => {
      const expectedState: DaffCartReducerState<DaffCart> = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Payment]: DaffState.Updating,
        },
      };
      const cartPaymentRemove = new DaffCartPaymentRemove();
      const result = cartPaymentReducer(daffCartReducerInitialState, cartPaymentRemove);

      expect(result).toEqual(expectedState);
    });
  });

  describe('when CartPaymentRemoveSuccessAction is triggered', () => {
    let result;

    beforeEach(() => {
      cart.payment = null;
      const cartPaymentRemoveSuccess = new DaffCartPaymentRemoveSuccess();

      result = cartPaymentReducer(daffCartReducerInitialState, cartPaymentRemoveSuccess);
    });

    it('should remove the payment from the cart', () => {
      expect(result.cart.payment).toBeNull();
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Payment]).toEqual(DaffState.Stable);
    });

    it('should reset the errors in the payment section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.Payment]).toEqual([]);
    });
  });

  describe('when CartPaymentRemoveFailureAction is triggered', () => {
    let error: DaffStateError;
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
        loading: {
          ...daffCartReducerInitialState.loading,
          [DaffCartOperationType.Payment]: DaffState.Resolving,
        },
        errors: {
          ...daffCartReducerInitialState.errors,
          [DaffCartOperationType.Payment]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      error = { code: 'error code', message: 'error message' };

      const cartPaymentRemoveFailure = new DaffCartPaymentRemoveFailure([error]);

      result = cartPaymentReducer(state, cartPaymentRemoveFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.Payment]).toEqual(DaffState.Stable);
    });

    it('should add an error to the payment section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.Payment].length).toEqual(2);
    });
  });

  describe('when CartPaymentMethodAddAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;
    const stubPayment = {
      method: 'method',
      payment_info: 'payment info object',
    };

    beforeEach(() => {
      state = {
        ...daffCartReducerInitialState,
      };

      const cartPaymentMethodAdd = new DaffCartPaymentMethodAdd(stubPayment);

      result = cartPaymentReducer(state, cartPaymentMethodAdd);
    });

    it('should set the cart payment method from action.payload', () => {
      expect(result.cart.payment).toEqual(stubPayment);
    });
  });
});
