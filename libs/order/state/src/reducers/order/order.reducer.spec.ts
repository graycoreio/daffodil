import { DaffStateError } from '@daffodil/core/state';
import { DaffOrder } from '@daffodil/order';
import {
  DaffOrderLoad,
  DaffOrderLoadSuccess,
  DaffOrderLoadFailure,
  DaffOrderList,
  DaffOrderListSuccess,
  DaffOrderListFailure,
  daffOrderInitialState as initialState,
  DaffOrderReducerState,
} from '@daffodil/order/state';
import { DaffOrderFactory } from '@daffodil/order/testing';

import { daffOrderReducer as reducer } from './order.reducer';

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
      const action = <any>{};

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
    let mockError: DaffStateError;
    let result;
    let state: DaffOrderReducerState;

    beforeEach(() => {
      mockError = {
        code: 'error code',
        message: 'error message',
      };
      state = {
        ...initialState,
        loading: true,
        errors: [mockError],
      };

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
    let mockError: DaffStateError;

    beforeEach(() => {
      mockError = {
        code: 'error code',
        message: 'error message',
      };
      state = {
        ...initialState,
        loading: true,
        errors: [
          { code: 'firstErrorCode', message: 'firstErrorMessage' },
        ],
      };

      const orderLoadFailureAction = new DaffOrderLoadFailure(mockError);

      result = reducer(state, orderLoadFailureAction);
    });

    it('adds the error in action.payload to state.errors', () => {
      expect(result.errors).toContain(mockError);
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
    let mockError: DaffStateError;
    let state: DaffOrderReducerState;

    beforeEach(() => {
      mockError = {
        code: 'error code',
        message: 'error message',
      };
      state = {
        ...initialState,
        loading: true,
        errors: [mockError],
      };

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
    let mockError: DaffStateError;

    beforeEach(() => {
      mockError = {
        code: 'error code',
        message: 'error message',
      };
      state = {
        ...initialState,
        loading: true,
        errors: [
          { code: 'firstErrorCode', message: 'firstErrorMessage' },
        ],
      };

      const orderListFailureAction = new DaffOrderListFailure(mockError);

      result = reducer(state, orderListFailureAction);
    });

    it('adds the error in action.payload to state.errors', () => {
      expect(result.errors).toContain(mockError);
      expect(result.errors.length).toEqual(2);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });
  });
});
