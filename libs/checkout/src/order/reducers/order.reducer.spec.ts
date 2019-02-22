import { DaffOrderFactory } from "../../../testing/src";
import { initialState, reducer, getLoading, getOrder, State, getErrors } from "../reducers/order.reducer";
import { PlaceOrder, PlaceOrderSuccess, PlaceOrderFailure } from "../actions/order.actions";
import { Order } from "../../models/order/order";

describe('Order | Order List Reducer', () => {

  let cartFactory: DaffOrderFactory;
  let stubOrder: Order;

  beforeEach(() => {
    cartFactory = new DaffOrderFactory();

    stubOrder = cartFactory.create();
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when PlaceOrderAction is triggered', () => {

    it('sets loading state to true', () => {
      const placeOrderAction: PlaceOrder = new PlaceOrder(stubOrder);
      
      const result = reducer(initialState, placeOrderAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when PlaceOrderSuccessAction is triggered', () => {

    let result;
    let state: State;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true
      }
  
      const placeOrderSuccess = new PlaceOrderSuccess(stubOrder);
      
      result = reducer(state, placeOrderSuccess);
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
    let state: State;
    let stubError: string;

    beforeEach(() => {
      stubError = 'error message';
      state = {
        ...initialState,
        loading: true,
        errors: ['existing error']
      }
  
      const placeOrderFailureAction = new PlaceOrderFailure(stubError);
      
      result = reducer(state, placeOrderFailureAction);
    });

    it('overwrites errors with action.payload', () => {
      expect(result.errors).toEqual([stubError]);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });
  });

  describe('getOrder', () => {
    
    it('should return order state', () => {
      expect(getOrder(initialState)).toEqual(initialState.order);
    });
  });

  describe('getLoading', () => {
    
    it('should return loading state', () => {
      expect(getLoading(initialState)).toEqual(initialState.loading);
    });
  });

  describe('getErrors', () => {
    
    it('should return loading state', () => {
      expect(getErrors(initialState)).toEqual(initialState.errors);
    });
  });
});
