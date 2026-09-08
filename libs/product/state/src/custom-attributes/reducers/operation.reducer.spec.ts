import {
  DaffState,
  DaffStateError,
  daffOperationInitialState as initialState,
  DaffOperationState,
} from '@daffodil/core/state';

import { daffProductCustomAttributesOperationReducer as reducer } from './operation.reducer';
import {
  DaffProductCustomAttributesList,
  DaffProductCustomAttributesListSuccess,
  DaffProductCustomAttributesListFailure,
} from '../actions';

describe('@daffodil/product/state | daffProductCustomAttributesOperationReducer', () => {
  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when List is triggered', () => {
    let result: DaffOperationState;

    beforeEach(() => {
      const listAction = new DaffProductCustomAttributesList();

      result = reducer(initialState, listAction);
    });

    it('sets loading state to resolving', () => {
      expect(result.daffState).toEqual(DaffState.Resolving);
    });
  });

  describe('when ListSuccess is triggered', () => {
    let mockError: DaffStateError;
    let result: DaffOperationState;
    let state: DaffOperationState;

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

      const listSuccess = new DaffProductCustomAttributesListSuccess([]);

      result = reducer(state, listSuccess);
    });

    it('sets loading to stable', () => {
      expect(result.daffState).toEqual(DaffState.Stable);
    });

    it('should reset errors', () => {
      expect(result.daffErrors).toEqual([]);
    });
  });

  describe('when ListFailure is triggered', () => {
    let result: DaffOperationState;
    let state: DaffOperationState;
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

      const listFailureAction = new DaffProductCustomAttributesListFailure(mockError);

      result = reducer(state, listFailureAction);
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
