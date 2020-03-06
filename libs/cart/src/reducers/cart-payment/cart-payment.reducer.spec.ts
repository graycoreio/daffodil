import { DaffCart } from '@daffodil/cart';
import { DaffCartFactory } from '@daffodil/cart/testing';

import { initialState } from '../cart-initial-state';
import { CartState } from '../cart-state.interface';
import {
  DaffCartPaymentLoad,
  DaffCartPaymentLoadSuccess,
  DaffCartPaymentLoadFailure,
  DaffCartPaymentRemove,
  DaffCartPaymentUpdate,
  DaffCartPaymentUpdateSuccess,
  DaffCartPaymentUpdateFailure,
  DaffCartPaymentRemoveSuccess,
  DaffCartPaymentRemoveFailure
} from '../../actions';
import { reducer } from './cart-payment.reducer';


describe('Cart | Reducer | Cart Payment', () => {
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

  describe('when CartPaymentLoadAction is triggered', () => {
    it('should set loading state to true', () => {
      const cartListLoadAction = new DaffCartPaymentLoad();

      const result = reducer(initialState, cartListLoadAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when CartPaymentLoadSuccessAction is triggered', () => {
    let result;
    let state: CartState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true
      }

      const cartListLoadSuccess = new DaffCartPaymentLoadSuccess(cart.payment);

      result = reducer(state, cartListLoadSuccess);
    });

    it('should set loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('should set payment from action.payload', () => {
      expect(result.cart.payment).toEqual(cart.payment)
    });
  });

  describe('when CartPaymentLoadFailureAction is triggered', () => {
    const error = 'error message';
    let result;
    let state: CartState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: new Array('firstError')
      }

      const cartListLoadFailure = new DaffCartPaymentLoadFailure(error);

      result = reducer(state, cartListLoadFailure);
    });

    it('should set loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(2);
    });
  });

  describe('when CartPaymentUpdateAction is triggered', () => {
    it('should set loading state to true', () => {
      const cartPaymentUpdateAction = new DaffCartPaymentUpdate(cart.payment);

      const result = reducer(initialState, cartPaymentUpdateAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when CartPaymentUpdateActionSuccess is triggered', () => {
    let result;
    let state: CartState;

    beforeEach(() => {
      const cartPaymentUpdateActionSuccess = new DaffCartPaymentUpdateSuccess(cart);
      state = {
        ...initialState,
        loading: true
      }

      result = reducer(state, cartPaymentUpdateActionSuccess);
    });

    it('should set cart from action.payload', () => {
      expect(result.cart).toEqual(cart)
    });

    it('should set loading state to false', () => {
      expect(result.loading).toEqual(false);
    });
  });

  describe('when CartPaymentUpdateFailureAction is triggered', () => {
    let error: string;
    let result;
    let state: CartState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: new Array('firstError')
      }

      error = 'error';

      const cartPaymentUpdateFailure = new DaffCartPaymentUpdateFailure(error);

      result = reducer(state, cartPaymentUpdateFailure);
    });

    it('should set loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(2);
    });
  });

  describe('when CartPaymentRemoveAction is triggered', () => {
    it('should indicate that the cart is loading', () => {
      const expectedState = {
        loading: true,
        cart: null,
        errors: []
      }
      const cartPaymentRemove = new DaffCartPaymentRemove();
      const result = reducer(initialState, cartPaymentRemove);

      expect(result).toEqual(expectedState);
    });
  });

  describe('when CartPaymentRemoveSuccessAction is triggered', () => {
    let result;

    beforeEach(() => {
      cart.payment = null;
      const cartPaymentRemoveSuccess = new DaffCartPaymentRemoveSuccess();

      result = reducer(initialState, cartPaymentRemoveSuccess);
    });

    it('should remove the payment from the cart', () => {
      expect(result.cart.payment).toBeNull();
    });

    it('should set loading to false', () => {
      expect(result.loading).toEqual(false);
    });
  });

  describe('when CartPaymentRemoveFailureAction is triggered', () => {
    let error: string;
    let result;
    let state: CartState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: new Array('firstError')
      }

      error = 'error';

      const cartPaymentRemoveFailure = new DaffCartPaymentRemoveFailure(error);

      result = reducer(state, cartPaymentRemoveFailure);
    });

    it('should set loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(2);
    });
  });
});
