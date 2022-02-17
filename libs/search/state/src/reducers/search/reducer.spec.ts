import { DaffStateError } from '@daffodil/core/state';
import {
  DaffSearchResult,
  daffSearchTransformResultsToCollection,
} from '@daffodil/search';
import {
  DaffSearchLoad,
  DaffSearchLoadSuccess,
  DaffSearchLoadFailure,
  daffSearchInitialState as initialState,
  DaffSearchReducerState,
} from '@daffodil/search/state';
import { DaffGeneralSearchResultFactory } from '@daffodil/search/testing';

import { daffSearchReducer as reducer } from './reducer';

describe('@daffodil/search/state | daffSearchReducer', () => {
  let searchResultFactory: DaffGeneralSearchResultFactory;

  beforeEach(() => {
    searchResultFactory = new DaffGeneralSearchResultFactory();
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when SearchLoadAction is triggered', () => {
    it('sets loading state to true', () => {
      const searchResultLoadAction = new DaffSearchLoad('query');

      const result = reducer(initialState, searchResultLoadAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when SearchLoadSuccessAction is triggered', () => {
    let mockError: DaffStateError;
    let mockSearchResult: DaffSearchResult;
    let result: DaffSearchReducerState;
    let state: DaffSearchReducerState;

    beforeEach(() => {
      mockError = {
        code: 'error code',
        message: 'error message',
      };
      state = {
        ...initialState,
        loading: true,
        errors: [mockError],
        results: {
          resultKind: ['testId1'],
        },
      };
      mockSearchResult = searchResultFactory.create({
        kind: 'resultKind',
      });

      const searchResultLoadSuccess = new DaffSearchLoadSuccess(daffSearchTransformResultsToCollection([mockSearchResult]));

      result = reducer(state, searchResultLoadSuccess);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('should reset errors', () => {
      expect(result.errors).toEqual([]);
    });

    it('should set the search result IDs to the results dict', () => {
      expect(result.results.resultKind).toEqual([mockSearchResult.id]);
    });
  });

  describe('when SearchLoadFailureAction is triggered', () => {
    let result;
    let state: DaffSearchReducerState;
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

      const searchResultLoadFailureAction = new DaffSearchLoadFailure(mockError);

      result = reducer(state, searchResultLoadFailureAction);
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
