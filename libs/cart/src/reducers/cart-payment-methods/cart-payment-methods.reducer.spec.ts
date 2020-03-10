import { DaffCartFactory } from '@daffodil/cart/testing';
import { initialState } from '../cart-initial-state';
import { DaffCartReducerState } from '../cart-state.interface';
import {
  DaffCartPaymentMethodsLoad,
  DaffCartPaymentMethodsLoadSuccess,
  DaffCartPaymentMethodsLoadFailure
} from '../../actions';
import { DaffCart } from '../../models/cart';
import { cartPaymentMethodsReducer } from './cart-payment-methods.reducer';
import { DaffCartErrorType } from '../cart-error-type.enum';

describe('Cart | Reducer | Cart Payment Methods', () => {
  let cartFactory: DaffCartFactory;
  let cart: DaffCart;

  beforeEach(() => {
    cartFactory = new DaffCartFactory();

    cart = cartFactory.create();
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = cartPaymentMethodsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when CartPaymentMethodsLoadAction is triggered', () => {

    it('should set loading state to true', () => {
      const cartPaymentMethodsLoadAction = new DaffCartPaymentMethodsLoad();
      const result = cartPaymentMethodsReducer(initialState, cartPaymentMethodsLoadAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when CartPaymentMethodsLoadSuccessAction is triggered', () => {
    let result;
    let state: DaffCartReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true
      }

      const cartPaymentMethodsLoadSuccess = new DaffCartPaymentMethodsLoadSuccess(cart.available_payment_methods);

      result = cartPaymentMethodsReducer(state, cartPaymentMethodsLoadSuccess);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading).toEqual(false);
    });

    it('should set available_payment_methods from action.payload', () => {
      expect(result.cart.available_payment_methods).toEqual(cart.available_payment_methods)
    });

    it('should reset the errors in the payment methods section of state.errors to an empty array', () => {
      expect(result.errors[DaffCartErrorType.PaymentMethods]).toEqual([]);
    });
  });

  describe('when CartPaymentMethodsLoadFailureAction is triggered', () => {
    const error = 'error message';
    let result;
    let state: DaffCartReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: {
          ...initialState.errors,
          [DaffCartErrorType.PaymentMethods]: new Array('firstError')
        }
      }

      const cartPaymentMethodsLoadFailure = new DaffCartPaymentMethodsLoadFailure(error);

      result = cartPaymentMethodsReducer(state, cartPaymentMethodsLoadFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading).toEqual(false);
    });

    it('should add an error to the payment methods section of state.errors', () => {
      expect(result.errors[DaffCartErrorType.PaymentMethods].length).toEqual(2);
    });
  });
});
