import { TestBed } from '@angular/core/testing';

import { DaffCart } from '@daffodil/cart';
import {
  DaffResolveCart,
  DaffResolveCartSuccess,
  DaffResolveCartFailure,
  initialState,
  DaffCartReducerState,
  DaffCartResolveState,
} from '@daffodil/cart/state';
import { DaffCartFactory } from '@daffodil/cart/testing';
import { DaffStateError } from '@daffodil/core/state';

import {
  DaffCartCreateSuccess,
  DaffCartLoadSuccess,
  DaffResolveCartServerSide,
} from '../../actions/public_api';
import { cartResolveReducer as reducer } from './cart-resolve.reducer';


describe('@daffodil/cart/state | cartResolveReducer', () => {
  let cartFactory: DaffCartFactory;
  let cart: DaffCart;

  beforeEach(() => {
    cartFactory = TestBed.inject(DaffCartFactory);

    cart = cartFactory.create();
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};

      const result = reducer(initialState, action);

      expect(result).toEqual(initialState);
    });
  });

  describe('when ResolveCartAction is triggered', () => {
    it('should set resolved state to resolving', () => {
      const cartResolveAction: DaffResolveCart = new DaffResolveCart();

      const result = reducer(initialState, cartResolveAction);

      expect(result.resolved).toEqual(DaffCartResolveState.Resolving);
    });
  });

  describe('when DaffCartCreateSuccess is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        resolved: DaffCartResolveState.Resolving,
      };

      const cartResolveSuccess = new DaffCartCreateSuccess(cart);

      result = reducer(state, cartResolveSuccess);
    });

    it('should indicate that the cart resolved successfully', () => {
      expect(result.resolved).toEqual(DaffCartResolveState.Succeeded);
    });
  });

  describe('when DaffCartLoadSuccess is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        resolved: DaffCartResolveState.Resolving,
      };

      const cartResolveSuccess = new DaffCartLoadSuccess(cart);

      result = reducer(state, cartResolveSuccess);
    });

    it('should indicate that the cart resolved successfully', () => {
      expect(result.resolved).toEqual(DaffCartResolveState.Succeeded);
    });
  });

  describe('when ResolveCartActionSuccessAction is triggered', () => {
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        resolved: DaffCartResolveState.Resolving,
      };

      const cartResolveSuccess = new DaffResolveCartSuccess(cart);

      result = reducer(state, cartResolveSuccess);
    });

    it('should indicate that the cart resolved successfully', () => {
      expect(result.resolved).toEqual(DaffCartResolveState.Succeeded);
    });
  });

  describe('when ResolveCartActionFailureAction is triggered', () => {
    const error: DaffStateError = { code: 'error code', message: 'error message' };
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        resolved: DaffCartResolveState.Resolving,
      };

      const cartResolveFailure = new DaffResolveCartFailure([error]);

      result = reducer(state, cartResolveFailure);
    });

    it('should indicate that the cart failed resolution', () => {
      expect(result.resolved).toEqual(DaffCartResolveState.Failed);
    });
  });

  describe('when ResolveCartServerSideAction is triggered', () => {
    const error: DaffStateError = { code: 'error code', message: 'error message' };
    let result;
    let state: DaffCartReducerState<DaffCart>;

    beforeEach(() => {
      state = {
        ...initialState,
        resolved: DaffCartResolveState.Resolving,
      };

      const serverSideResolve = new DaffResolveCartServerSide(error);

      result = reducer(state, serverSideResolve);
    });

    it('should indicate that the cart resolved to the special "server" state', () => {
      expect(result.resolved).toEqual(DaffCartResolveState.ServerSide);
    });
  });
});
