import { DaffStateError } from '@daffodil/core/state';
import {
  DaffSearchResult,
  daffSearchTransformResultsToCollection,
} from '@daffodil/search';
import {
  DaffSearchIncremental,
  DaffSearchIncrementalSuccess,
  DaffSearchIncrementalFailure,
  daffSearchInitialState as initialState,
  DaffSearchReducerState,
} from '@daffodil/search/state';
import { DaffSearchResultFactory } from '@daffodil/search/testing';

import { daffSearchIncrementalReducer as reducer } from './reducer';

describe('@daffodil/search/state | daffSearchIncrementalReducer', () => {
  let searchResultFactory: DaffSearchResultFactory;

  beforeEach(() => {
    searchResultFactory = new DaffSearchResultFactory();
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when SearchIncrementalAction is triggered', () => {
    let result: DaffSearchReducerState;
    let query: string;

    beforeEach(() => {
      query = 'query';
      const searchResultIncrementalAction = new DaffSearchIncremental(query);

      result = reducer({
        ...initialState,
        recent: [
          'some other recent search query',
        ],
      }, searchResultIncrementalAction);
    });

    it('should add the query to the list of recent searches', () => {
      expect(result.recent).toContain(query);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('when SearchIncrementalSuccessAction is triggered', () => {
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

      const searchResultIncrementalSuccess = new DaffSearchIncrementalSuccess(daffSearchTransformResultsToCollection([mockSearchResult]));

      result = reducer(state, searchResultIncrementalSuccess);
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

  describe('when SearchIncrementalFailureAction is triggered', () => {
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
        results: {
          type: ['result'],
        },
      };

      const searchResultIncrementalFailureAction = new DaffSearchIncrementalFailure(mockError);

      result = reducer(state, searchResultIncrementalFailureAction);
    });

    it('adds the error in action.payload to state.errors', () => {
      expect(result.errors).toContain(mockError);
      expect(result.errors.length).toEqual(2);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('clears search results', () => {
      expect(result.results).toEqual({});
    });
  });
});
