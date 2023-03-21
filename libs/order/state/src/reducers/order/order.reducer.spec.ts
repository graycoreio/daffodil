import { TestBed } from '@angular/core/testing';

import {
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';
import {
  DaffOrder,
  DaffOrderCollection,
} from '@daffodil/order';
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
import {
  DaffOrderCollectionFactory,
  DaffOrderFactory,
} from '@daffodil/order/testing';

import { daffOrderReducer as reducer } from './order.reducer';

describe('@daffodil/order/state | daffOrderReducer', () => {
  let orderCollectionFactory: DaffOrderCollectionFactory;
  let mockOrderCollection: DaffOrderCollection;

  beforeEach(() => {
    orderCollectionFactory = TestBed.inject(DaffOrderCollectionFactory);

    mockOrderCollection = orderCollectionFactory.create();
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
      const orderLoadAction: DaffOrderLoad = new DaffOrderLoad('orderId');

      const result = reducer(initialState, orderLoadAction);

      expect(result.daffState).toEqual(DaffState.Resolving);
    });
  });

  describe('when OrderLoadSuccessAction is triggered', () => {
    let mockError: DaffStateError;
    let result: DaffOrderReducerState;
    let state: DaffOrderReducerState;

    beforeEach(() => {
      mockError = {
        code: 'error code',
        message: 'error message',
      };
      state = {
        ...initialState,
        daffState: DaffState.Resolving,
        daffErrors: [mockError],
      };

      const orderLoadSuccess = new DaffOrderLoadSuccess(Object.values(mockOrderCollection.data)[0]);

      result = reducer(state, orderLoadSuccess);
    });

    it('sets loading to false', () => {
      expect(result.daffState).toEqual(DaffState.Stable);
    });

    it('should reset errors', () => {
      expect(result.daffErrors).toEqual([]);
    });
  });

  describe('when OrderLoadFailureAction is triggered', () => {
    let result: DaffOrderReducerState;
    let state: DaffOrderReducerState;
    let mockError: DaffStateError;

    beforeEach(() => {
      mockError = {
        code: 'error code',
        message: 'error message',
      };
      state = {
        ...initialState,
        daffState: DaffState.Resolving,
        daffErrors: [
          { code: 'firstErrorCode', message: 'firstErrorMessage' },
        ],
      };

      const orderLoadFailureAction = new DaffOrderLoadFailure(mockError);

      result = reducer(state, orderLoadFailureAction);
    });

    it('adds the error in action.payload to state.daffErrors', () => {
      expect(result.daffErrors).toEqual([mockError]);
    });

    it('sets loading to false', () => {
      expect(result.daffState).toEqual(DaffState.Stable);
    });
  });

  describe('when OrderListAction is triggered', () => {
    it('sets loading state to true', () => {
      const orderListAction: DaffOrderList = new DaffOrderList();

      const result = reducer(initialState, orderListAction);

      expect(result.daffState).toEqual(DaffState.Resolving);
    });
  });

  describe('when OrderListSuccessAction is triggered', () => {
    let result: DaffOrderReducerState;
    let mockError: DaffStateError;
    let state: DaffOrderReducerState;

    beforeEach(() => {
      mockError = {
        code: 'error code',
        message: 'error message',
      };
      state = {
        ...initialState,
        daffState: DaffState.Resolving,
        daffErrors: [mockError],
      };

      const orderListSuccess = new DaffOrderListSuccess(mockOrderCollection);

      result = reducer(state, orderListSuccess);
    });

    it('sets loading to false', () => {
      expect(result.daffState).toEqual(DaffState.Stable);
    });

    it('should reset errors', () => {
      expect(result.daffErrors).toEqual([]);
    });
  });

  describe('when OrderListFailureAction is triggered', () => {
    let result: DaffOrderReducerState;
    let state: DaffOrderReducerState;
    let mockError: DaffStateError;

    beforeEach(() => {
      mockError = {
        code: 'error code',
        message: 'error message',
      };
      state = {
        ...initialState,
        daffState: DaffState.Resolving,
        daffErrors: [
          { code: 'firstErrorCode', message: 'firstErrorMessage' },
        ],
      };

      const orderListFailureAction = new DaffOrderListFailure(mockError);

      result = reducer(state, orderListFailureAction);
    });

    it('adds the error in action.payload to state.daffErrors', () => {
      expect(result.daffErrors).toEqual([mockError]);
    });

    it('sets loading to false', () => {
      expect(result.daffState).toEqual(DaffState.Stable);
    });
  });
});
