import { DaffLoadingState } from '@daffodil/core/state';

import { daffCartOrderReducer as reducer } from './cart-order.reducer';
import { daffCartOrderInitialState as initialState } from './cart-order-initial-state';
import {
  DaffCartPlaceOrder,
  DaffCartPlaceOrderSuccess,
  DaffCartPlaceOrderFailure
} from '../../actions/public_api';
import { DaffCartOrderReducerState } from './cart-order-state.interface';

describe('Cart | Reducer | CartOrder', () => {
  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = {} as any;
      const result = reducer(initialState, action);

      expect(result).toEqual(initialState);
    });
  });

  describe('when CartPlaceOrderAction is triggered', () => {
    it('should indicate that the place order operation is in progress', () => {
      const cartPlaceOrderAction = new DaffCartPlaceOrder();

      const result = reducer(initialState, cartPlaceOrderAction);

      expect(result.loading).toEqual(DaffLoadingState.Mutating);
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
        loading: DaffLoadingState.Resolving
      }

      const cartPlaceOrderSuccess = new DaffCartPlaceOrderSuccess({
        orderId,
        cartId,
      });

      result = reducer(state, cartPlaceOrderSuccess);
    });

    it('should set the order result from action.payload', () => {
      expect(result.cartOrderResult.orderId).toEqual(orderId)
      expect(result.cartOrderResult.cartId).toEqual(cartId)
    });

    it('should indicate that the place order operation is not in progress', () => {
      expect(result.loading).toEqual(DaffLoadingState.Complete);
    });

    it('should reset the errors in state', () => {
      expect(result.errors).toEqual([]);
    });
  });

  describe('when CartPlaceOrderFailureAction is triggered', () => {
    const error = 'error message';
    let result;
    let state: DaffCartOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: DaffLoadingState.Resolving,
        errors: [
          ...initialState.errors,
          error
        ]
      }

      const cartPlaceOrderFailure = new DaffCartPlaceOrderFailure(error);

      result = reducer(state, cartPlaceOrderFailure);
    });

    it('should indicate that the place order operation is not in progress', () => {
      expect(result.loading).toEqual(DaffLoadingState.Complete);
    });

    it('should add an error to state', () => {
      expect(result.errors.length).toEqual(2);
    });
  });
});
