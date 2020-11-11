import { TestBed } from '@angular/core/testing';

import { DaffCart } from '@daffodil/cart';
import {
  DaffResolveCart,
  DaffResolveCartSuccess,
  DaffResolveCartFailure,
  initialState,
  DaffCartReducerState
} from '@daffodil/cart/state';
import {
  DaffCartFactory,
} from '@daffodil/cart/testing';

import { cartResolveReducer as reducer } from './cart-resolve.reducer';


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

      const cartResolveSuccess = new DaffResolveCartSuccess();

      result = reducer(state, cartResolveSuccess);
    });

    it('should indicate that the cart is resolved', () => {
      expect(result.resolved).toEqual(true);
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
