import { DaffCart } from '@daffodil/cart';
import { DaffCartFactory } from '@daffodil/cart/testing';

import { initialState } from '../cart-initial-state';
import { CartState } from '../cart-state.interface';
import {
  DaffCartShippingAddressLoad,
  DaffCartShippingAddressLoadSuccess,
  DaffCartShippingAddressLoadFailure,
  DaffCartShippingAddressUpdate,
  DaffCartShippingAddressUpdateSuccess,
  DaffCartShippingAddressUpdateFailure,
} from '../../actions';
import { reducer } from './cart-shipping-address.reducer';


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

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when CartShippingAddressLoadAction is triggered', () => {
    it('should set loading state to true', () => {
      const cartListLoadAction = new DaffCartShippingAddressLoad();

      const result = reducer(initialState, cartListLoadAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when CartShippingAddressLoadSuccessAction is triggered', () => {
    let result;
    let state: CartState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true
      }

      const cartListLoadSuccess = new DaffCartShippingAddressLoadSuccess(cart.shipping_address);

      result = reducer(state, cartListLoadSuccess);
    });

    it('should set loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('should set shipping_address from action.payload', () => {
      expect(result.cart.shipping_address).toEqual(cart.shipping_address)
    });
  });

  describe('when CartShippingAddressLoadFailureAction is triggered', () => {
    const error = 'error message';
    let result;
    let state: CartState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: new Array('firstError')
      }

      const cartListLoadFailure = new DaffCartShippingAddressLoadFailure(error);

      result = reducer(state, cartListLoadFailure);
    });

    it('should set loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(2);
    });
  });

  describe('when CartShippingAddressUpdateAction is triggered', () => {
    it('should set loading state to true', () => {
      const cartShippingAddressUpdateAction = new DaffCartShippingAddressUpdate(cart.shipping_address);

      const result = reducer(initialState, cartShippingAddressUpdateAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when CartShippingAddressUpdateActionSuccess is triggered', () => {
    let result;
    let state: CartState;

    beforeEach(() => {
      const cartShippingAddressUpdateActionSuccess = new DaffCartShippingAddressUpdateSuccess(cart);
      state = {
        ...initialState,
        loading: true
      }

      result = reducer(state, cartShippingAddressUpdateActionSuccess);
    });

    it('should set cart from action.payload', () => {
      expect(result.cart).toEqual(cart)
    });

    it('should set loading state to false', () => {
      expect(result.loading).toEqual(false);
    });
  });

  describe('when CartShippingAddressUpdateFailureAction is triggered', () => {
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

      const cartShippingAddressUpdateFailure = new DaffCartShippingAddressUpdateFailure(error);

      result = reducer(state, cartShippingAddressUpdateFailure);
    });

    it('should set loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(2);
    });
  });
});
