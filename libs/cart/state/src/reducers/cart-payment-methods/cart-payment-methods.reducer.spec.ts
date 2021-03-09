import { DaffCart } from '@daffodil/cart';
import {
  DaffCartPaymentMethodsLoad,
  DaffCartOperationType,
  DaffCartReducerState,
  DaffCartPaymentMethodsLoadSuccess,
  DaffCartPaymentMethodsLoadFailure,
  initialState,
} from '@daffodil/cart/state';
import { DaffCartFactory } from '@daffodil/cart/testing';
import {
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';

import { cartPaymentMethodsReducer } from './cart-payment-methods.reducer';

describe('Cart | Reducer | Cart Payment Methods', () => {
  let cartFactory: DaffCartFactory;
  let cart: DaffCart;

  beforeEach(() => {
    cartFactory = new DaffCartFactory();

    cart = cartFactory.create();
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = <any>{};

      const result = cartPaymentMethodsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when CartPaymentMethodsLoadAction is triggered', () => {

    it('should set loading state to true', () => {
      const cartPaymentMethodsLoadAction = new DaffCartPaymentMethodsLoad();
      const result = cartPaymentMethodsReducer(initialState, cartPaymentMethodsLoadAction);

      expect(result.loading[DaffCartOperationType.PaymentMethods]).toEqual(DaffState.Resolving);
    });
  });

  describe('when CartPaymentMethodsLoadSuccessAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.PaymentMethods]: DaffState.Resolving,
        },
      };

      const cartPaymentMethodsLoadSuccess = new DaffCartPaymentMethodsLoadSuccess(cart.available_payment_methods);

      result = cartPaymentMethodsReducer(state, cartPaymentMethodsLoadSuccess);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.PaymentMethods]).toEqual(DaffState.Complete);
    });

    it('should set available_payment_methods from action.payload', () => {
      expect(result.cart.available_payment_methods).toEqual(cart.available_payment_methods);
    });

    it('should reset the errors in the payment methods section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartOperationType.PaymentMethods]).toEqual([]);
    });
  });

  describe('when CartPaymentMethodsLoadFailureAction is triggered', () => {
    const error: DaffStateError = { code: 'error code', message: 'error message' };
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: {
          ...initialState.loading,
          [DaffCartOperationType.PaymentMethods]: DaffState.Resolving,
        },
        errors: {
          ...initialState.errors,
          [DaffCartOperationType.PaymentMethods]: [{ code: 'first error code', message: 'first error message' }],
        },
      };

      const cartPaymentMethodsLoadFailure = new DaffCartPaymentMethodsLoadFailure(error);

      result = cartPaymentMethodsReducer(state, cartPaymentMethodsLoadFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading[DaffCartOperationType.PaymentMethods]).toEqual(DaffState.Complete);
    });

    it('should add an error to the payment methods section of state.errors', () => {
      expect(result.errors[DaffCartOperationType.PaymentMethods].length).toEqual(2);
    });
  });
});
