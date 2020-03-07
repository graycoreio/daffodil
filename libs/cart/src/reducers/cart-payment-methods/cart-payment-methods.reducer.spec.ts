import { DaffCartFactory } from '@daffodil/cart/testing';
import { initialState } from '../cart-initial-state';
import { DaffCartReducerState } from '../cart-state.interface';
import {
  DaffCartPaymentMethodsLoad,
  DaffCartPaymentMethodsLoadSuccess,
  DaffCartPaymentMethodsLoadFailure
} from '../../actions';
import { DaffCart } from '../../models/cart';
import { reducer } from './cart-payment-methods.reducer';

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

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when CartPaymentMethodsLoadAction is triggered', () => {

    it('should set loading state to true', () => {
      const cartPaymentMethodsLoadAction = new DaffCartPaymentMethodsLoad();
      const result = reducer(initialState, cartPaymentMethodsLoadAction);

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

      result = reducer(state, cartPaymentMethodsLoadSuccess);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading).toEqual(false);
    });

    it('should set available_payment_methods from action.payload', () => {
      expect(result.cart.available_payment_methods).toEqual(cart.available_payment_methods)
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
        errors: new Array('firstError')
      }

      const cartPaymentMethodsLoadFailure = new DaffCartPaymentMethodsLoadFailure(error);

      result = reducer(state, cartPaymentMethodsLoadFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(2);
    });
  });
});
