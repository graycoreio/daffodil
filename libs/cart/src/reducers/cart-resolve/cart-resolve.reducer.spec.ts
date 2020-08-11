import { TestBed } from '@angular/core/testing';

import {
  DaffCartFactory,
} from '@daffodil/cart/testing';

import { initialState } from '../cart-initial-state';
import {
  DaffResolveCart,
  DaffResolveCartSuccess,
  DaffResolveCartFailure,
} from '../../actions/public_api';
import { DaffCart } from '../../models/cart';
import { cartResolveReducer as reducer } from './cart-resolve.reducer';
import { DaffCartReducerState } from '../cart-state.interface';


describe('Cart | Reducer | cartResolveReducer', () => {
  let cartFactory: DaffCartFactory;
  let cart: DaffCart;

  beforeEach(() => {
    cartFactory = TestBed.get(DaffCartFactory);

    cart = cartFactory.create();
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toEqual(initialState);
    });
  });

  describe('when ResolveCartActionAction is triggered', () => {
    it('should set resolved state to false', () => {
      const cartResolveAction: DaffResolveCart = new DaffResolveCart();

      const result = reducer(initialState, cartResolveAction);

      expect(result.resolved).toEqual(false);
    });
  });

  describe('when ResolveCartActionSuccessAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        resolved: false
      }

      const cartResolveSuccess = new DaffResolveCartSuccess(cart);

      result = reducer(state, cartResolveSuccess);
    });

    it('should indicate that the cart is resolved', () => {
      expect(result.resolved).toEqual(true);
    });

    it('should set cart from action.payload', () => {
      expect(result.cart).toEqual(cart)
    });
  });

  describe('when ResolveCartActionFailureAction is triggered', () => {
    const error = 'error message';
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        resolved: false,
      }

      const cartResolveFailure = new DaffResolveCartFailure(error);

      result = reducer(state, cartResolveFailure);
    });

    it('should indicate that the cart is resolved', () => {
      expect(result.resolved).toEqual(true);
    });
  });
});
