import { DaffOrderFactory } from '@daffodil/checkout/testing';

import { initialState, daffOrderReducer } from './order.reducer';
import { DaffPlaceOrder, DaffPlaceOrderSuccess, DaffPlaceOrderFailure } from '../../actions/order.actions';
import { Order } from '../../../models/order/order';
import { DaffOrderReducerState } from './order-reducer.interface';
import { DaffCartFactory } from '@daffodil/cart/testing';
import { DaffCart } from '@daffodil/cart';

describe('Order | Order Reducer', () => {

  let orderFactory: DaffOrderFactory;
  let stubOrder: Order;
  let stubCart: DaffCart;

  beforeEach(() => {
    orderFactory = new DaffOrderFactory();
    stubCart = new DaffCartFactory().create();
    stubOrder = orderFactory.create();
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = daffOrderReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when PlaceOrderAction is triggered', () => {

    it('sets loading state to true', () => {
      const placeOrderAction: DaffPlaceOrder = new DaffPlaceOrder(stubCart);
      
      const result = daffOrderReducer(initialState, placeOrderAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when PlaceOrderSuccessAction is triggered', () => {

    let result;
    let state: DaffOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true
      }
  
      const placeOrderSuccess = new DaffPlaceOrderSuccess(stubOrder);
      
      result = daffOrderReducer(state, placeOrderSuccess);
    });

    it('sets order from action.payload', () => {
      expect(result.order).toEqual(stubOrder);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });
  });

  describe('when PlaceOrderFailureAction is triggered', () => {

    let result;
    let state: DaffOrderReducerState;
    let stubError: string;

    beforeEach(() => {
      stubError = 'error message';
      state = {
        ...initialState,
        loading: true,
        errors: ['existing error']
      }
  
      const placeOrderFailureAction = new DaffPlaceOrderFailure(stubError);
      
      result = daffOrderReducer(state, placeOrderFailureAction);
    });

    it('overwrites errors with action.payload', () => {
      expect(result.errors).toEqual([stubError]);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });
  });
});
