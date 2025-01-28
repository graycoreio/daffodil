import { TestBed } from '@angular/core/testing';

import { DaffCartWithStoreCredit } from '@daffodil/cart-store-credit';
import {
  daffCartStoreCreditInitialState as initialState,
  DaffCartStoreCreditReducerState,
  DaffCartStoreCreditApply,
  DaffCartStoreCreditApplyFailure,
  DaffCartStoreCreditApplySuccess,
  DaffCartStoreCreditRemove,
  DaffCartStoreCreditRemoveFailure,
  DaffCartStoreCreditRemoveSuccess,
} from '@daffodil/cart-store-credit/state';
import { DaffCartWithStoreCreditFactory } from '@daffodil/cart-store-credit/testing';
import {
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';

import { daffCartStoreCreditReducer as reducer } from './reducer';

describe('@daffodil/cart-store-credit/state | daffCartStoreCreditReducer', () => {
  let storeCreditFactory: DaffCartWithStoreCreditFactory;
  let mockStoreCredit: DaffCartWithStoreCredit;

  beforeEach(() => {
    storeCreditFactory = TestBed.inject(DaffCartWithStoreCreditFactory);
    mockStoreCredit = storeCreditFactory.create();
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when CustomerStoreCreditApplyAction is triggered', () => {
    let result: DaffCartStoreCreditReducerState;

    beforeEach(() => {
      const applyAction = new DaffCartStoreCreditApply();

      result = reducer(initialState, applyAction);
    });

    it('sets loading state to mutating', () => {
      expect(result.daffState).toEqual(DaffState.Updating);
    });
  });

  describe('when CartStoreCreditApplySuccessAction is triggered', () => {
    let mockError: DaffStateError;
    let result: DaffCartStoreCreditReducerState;
    let state: DaffCartStoreCreditReducerState;

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

      const applySuccess = new DaffCartStoreCreditApplySuccess(mockStoreCredit);

      result = reducer(state, applySuccess);
    });

    it('sets loading to stable', () => {
      expect(result.daffState).toEqual(DaffState.Stable);
    });

    it('should reset errors', () => {
      expect(result.daffErrors).toEqual([]);
    });
  });

  describe('when CartStoreCreditApplyFailureAction is triggered', () => {
    let result: DaffCartStoreCreditReducerState;
    let state: DaffCartStoreCreditReducerState;
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

      const applyFailureAction = new DaffCartStoreCreditApplyFailure([mockError]);

      result = reducer(state, applyFailureAction);
    });

    it('stores the errors in state', () => {
      expect(result.daffErrors).toContain(mockError);
      expect(result.daffErrors.length).toEqual(1);
    });

    it('sets loading to error', () => {
      expect(result.daffState).toEqual(DaffState.Error);
    });
  });

  describe('when CustomerStoreCreditRemoveAction is triggered', () => {
    let result: DaffCartStoreCreditReducerState;

    beforeEach(() => {
      const removeAction = new DaffCartStoreCreditRemove();

      result = reducer(initialState, removeAction);
    });

    it('sets loading state to mutating', () => {
      expect(result.daffState).toEqual(DaffState.Updating);
    });
  });

  describe('when CartStoreCreditRemoveSuccessAction is triggered', () => {
    let mockError: DaffStateError;
    let result: DaffCartStoreCreditReducerState;
    let state: DaffCartStoreCreditReducerState;

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

      const removeSuccess = new DaffCartStoreCreditRemoveSuccess(mockStoreCredit);

      result = reducer(state, removeSuccess);
    });

    it('sets loading to stable', () => {
      expect(result.daffState).toEqual(DaffState.Stable);
    });

    it('should reset errors', () => {
      expect(result.daffErrors).toEqual([]);
    });
  });

  describe('when CartStoreCreditRemoveFailureAction is triggered', () => {
    let result: DaffCartStoreCreditReducerState;
    let state: DaffCartStoreCreditReducerState;
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

      const removeFailureAction = new DaffCartStoreCreditRemoveFailure([mockError]);

      result = reducer(state, removeFailureAction);
    });

    it('stores the errors in state', () => {
      expect(result.daffErrors).toContain(mockError);
      expect(result.daffErrors.length).toEqual(1);
    });

    it('sets loading to error', () => {
      expect(result.daffState).toEqual(DaffState.Error);
    });
  });
});
