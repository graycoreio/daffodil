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

      expect(result.loading).toEqual(true);
    });
  });

  describe('when CartPlaceOrderSuccessAction is triggered', () => {
    let result;
    let state: DaffCartOrderReducerState;
    let orderId;

    beforeEach(() => {
      orderId = 'id';
      state = {
        ...initialState,
        loading: true
      }

      const cartPlaceOrderSuccess = new DaffCartPlaceOrderSuccess({
        orderId,
        cartId: 'cartId',
      });

      result = reducer(state, cartPlaceOrderSuccess);
    });

    it('should set the order ID from action.payload', () => {
      expect(result.cartOrderResult.orderId).toEqual(orderId)
    });

    it('should indicate that the place order operation is not in progress', () => {
      expect(result.loading).toEqual(false);
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
        loading: true,
        errors: [
          ...initialState.errors,
          error
        ]
      }

      const cartPlaceOrderFailure = new DaffCartPlaceOrderFailure(error);

      result = reducer(state, cartPlaceOrderFailure);
    });

    it('should indicate that the place order operation is not in progress', () => {
      expect(result.loading).toEqual(false);
    });

    it('should add an error to state', () => {
      expect(result.errors.length).toEqual(2);
    });
  });
});
