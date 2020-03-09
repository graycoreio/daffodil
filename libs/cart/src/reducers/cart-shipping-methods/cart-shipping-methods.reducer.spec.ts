import { DaffCartShippingRate } from '@daffodil/cart';
import { DaffCartFactory, DaffCartShippingRateFactory } from '@daffodil/cart/testing';

import { initialState } from '../cart-initial-state';
import { DaffCartReducerState } from '../cart-state.interface';
import {
  DaffCartShippingMethodsLoad,
  DaffCartShippingMethodsLoadSuccess,
  DaffCartShippingMethodsLoadFailure
} from '../../actions';
import { DaffCart } from '../../models/cart';
import { reducer } from './cart-shipping-methods.reducer';
import { TestBed } from '@angular/core/testing';
import { DaffCartErrorType } from '../cart-error-type.enum';

describe('Cart | Reducer | Cart Shipping Methods', () => {
  let cartFactory: DaffCartFactory;
  let cartShippingRateFactory: DaffCartShippingRateFactory;
  let cart: DaffCart;
  let mockCartShippingRate: DaffCartShippingRate;

  beforeEach(() => {
    cartFactory = new DaffCartFactory();
    cartShippingRateFactory = TestBed.get<DaffCartShippingRateFactory>(DaffCartShippingRateFactory);

    cart = cartFactory.create();
    mockCartShippingRate = cartShippingRateFactory.create();

    cart.available_shipping_methods = [mockCartShippingRate];
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when CartShippingMethodsLoadAction is triggered', () => {

    it('should set loading state to true', () => {
      const cartShippingMethodsLoadAction = new DaffCartShippingMethodsLoad();
      const result = reducer(initialState, cartShippingMethodsLoadAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when CartShippingMethodsLoadSuccessAction is triggered', () => {
    let result;
    let state: DaffCartReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true
      }

      const cartShippingMethodsLoadSuccess = new DaffCartShippingMethodsLoadSuccess(cart.available_shipping_methods);

      result = reducer(state, cartShippingMethodsLoadSuccess);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading).toEqual(false);
    });

    it('should set available_shipping_methods from action.payload', () => {
      expect(result.cart.available_shipping_methods).toEqual(cart.available_shipping_methods)
    });
  });

  describe('when CartShippingMethodsLoadFailureAction is triggered', () => {
    const error = 'error message';
    let result;
    let state: DaffCartReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: {
          ...initialState.errors,
          [DaffCartErrorType.ShippingMethods]: new Array('firstError')
        }
      }

      const cartShippingMethodsLoadFailure = new DaffCartShippingMethodsLoadFailure(error);

      result = reducer(state, cartShippingMethodsLoadFailure);
    });

    it('should indicate that the cart is not loading', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to the shipping methods section of state.errors', () => {
      expect(result.errors[DaffCartErrorType.ShippingMethods].length).toEqual(2);
    });
  });
});
