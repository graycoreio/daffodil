import { DaffOrder } from '@daffodil/order';
import { DaffOrderFactory } from '@daffodil/order/testing';

import { daffOrderReducer as reducer } from './order.reducer';
import {
  DaffOrderLoad,
  DaffOrderLoadSuccess,
  DaffOrderLoadFailure,
  DaffOrderList,
  DaffOrderListSuccess,
  DaffOrderListFailure
} from '../../actions/order.actions';
import { DaffOrderReducerState } from './order-reducer.interface';
import { daffOrderInitialState as initialState } from './order-initial-state';

describe('Order | Reducer | Order', () => {
  let orderFactory: DaffOrderFactory;
  let mockOrder: DaffOrder;
  let orderId: DaffOrder['id'];

  beforeEach(() => {
    orderFactory = new DaffOrderFactory();

    mockOrder = orderFactory.create();
    orderId = mockOrder.id;
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when OrderLoadAction is triggered', () => {
    it('sets loading state to true', () => {
      const orderLoadAction: DaffOrderLoad = new DaffOrderLoad(orderId);

      const result = reducer(initialState, orderLoadAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when OrderLoadSuccessAction is triggered', () => {
    let result;
    let state: DaffOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: ['an error']
      }

      const orderLoadSuccess = new DaffOrderLoadSuccess(mockOrder);

      result = reducer(state, orderLoadSuccess);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('should reset errors', () => {
      expect(result.errors).toEqual([]);
    });
  });

  describe('when OrderLoadFailureAction is triggered', () => {
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

      const orderLoadFailureAction = new DaffOrderLoadFailure(stubError);

      result = reducer(state, orderLoadFailureAction);
    });

    it('adds the error in action.payload to state.errors', () => {
      expect(result.errors).toContain(stubError);
      expect(result.errors.length).toEqual(2);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });
  });

  describe('when OrderListAction is triggered', () => {
    it('sets loading state to true', () => {
      const orderListAction: DaffOrderList = new DaffOrderList();

      const result = reducer(initialState, orderListAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when OrderListSuccessAction is triggered', () => {
    let result;
    let state: DaffOrderReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: ['an error']
      }

      const orderListSuccess = new DaffOrderListSuccess([mockOrder]);

      result = reducer(state, orderListSuccess);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('should reset errors', () => {
      expect(result.errors).toEqual([]);
    });
  });

  describe('when OrderListFailureAction is triggered', () => {
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

      const orderListFailureAction = new DaffOrderListFailure(stubError);

      result = reducer(state, orderListFailureAction);
    });

    it('adds the error in action.payload to state.errors', () => {
      expect(result.errors).toContain(stubError);
      expect(result.errors.length).toEqual(2);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });
  });
});
