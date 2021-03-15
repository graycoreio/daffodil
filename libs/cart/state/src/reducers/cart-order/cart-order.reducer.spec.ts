import {
  DaffCartPlaceOrder,
  DaffCartOrderReducerState,
  DaffCartPlaceOrderSuccess,
  DaffCartPlaceOrderFailure,
  daffCartOrderInitialState as initialState,
} from '@daffodil/cart/state';
import {
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';

import { daffCartOrderReducer as reducer } from './cart-order.reducer';

describe('Cart | Reducer | CartOrder', () => {
  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};
      const result = reducer(initialState, action);

      expect(result).toEqual(initialState);
    });
  });

  describe('when CartPlaceOrderAction is triggered', () => {
    it('should indicate that the place order operation is in progress', () => {
      const cartPlaceOrderAction = new DaffCartPlaceOrder();

      const result = reducer(initialState, cartPlaceOrderAction);

      expect(result.loading).toEqual(DaffState.Mutating);
    });
  });

  describe('when CartPlaceOrderSuccessAction is triggered', () => {
    let result;
    let state: DaffCartOrderReducerState;
    let orderId;
    let cartId;

    beforeEach(() => {
      orderId = 'orderId';
      cartId = 'cartId';
      state = {
        ...initialState,
        loading: DaffState.Resolving,
      };

      const cartPlaceOrderSuccess = new DaffCartPlaceOrderSuccess({
        orderId,
        cartId,
      });

      result = reducer(state, cartPlaceOrderSuccess);
    });

    it('should set the order result from action.payload', () => {
      expect(result.cartOrderResult.orderId).toEqual(orderId);
      expect(result.cartOrderResult.cartId).toEqual(cartId);
    });

    it('should indicate that the place order operation is not in progress', () => {
      expect(result.loading).toEqual(DaffState.Complete);
    });

    it('should reset the errors in state', () => {
      expect(result.errors).toEqual([]);
    });
  });

  describe('when CartPlaceOrderFailureAction is triggered', () => {
    const error: DaffStateError = { code: 'error code', message: 'error message' };
    let result;
    let state: DaffCartOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: DaffState.Resolving,
        errors: [
          ...initialState.errors,
          error,
        ],
      };

      const cartPlaceOrderFailure = new DaffCartPlaceOrderFailure(error);

      result = reducer(state, cartPlaceOrderFailure);
    });

    it('should indicate that the place order operation is not in progress', () => {
      expect(result.loading).toEqual(DaffState.Complete);
    });

    it('should add an error to state', () => {
      expect(result.errors.length).toEqual(2);
    });
  });
});
