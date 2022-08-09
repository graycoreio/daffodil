import { DaffStateError } from '@daffodil/core/state';
import {
  DaffSearchResult,
  daffSearchTransformResultsToCollection,
} from '@daffodil/search';
import {
  daffSearchInitialState as initialState,
  DaffSearchReducerState,
} from '@daffodil/search/state';
import { DaffSearchResultFactory } from '@daffodil/search/testing';

import { DaffSearchStateReducerAdapter } from './adapter';

describe('@daffodil/search/state | DaffSearchStateReducerAdapter', () => {
  let searchResultFactory: DaffSearchResultFactory;
  let adapter: DaffSearchStateReducerAdapter;

  beforeEach(() => {
    searchResultFactory = new DaffSearchResultFactory();
  });

  describe('search', () => {
    let result: DaffSearchReducerState;
    let query: string;

    beforeEach(() => {
      adapter = new DaffSearchStateReducerAdapter({
        ...initialState,
        recent: [
          'some other recent search query',
        ],
      });
      query = 'query';

      result = adapter.search(query);
    });

    it('should add the query to the list of recent searches', () => {
      expect(result.recent).toContain(query);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });

    it('should reset the results', () => {
      expect(result.results).toEqual({});
    });
  });

  describe('storeResults', () => {
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
      adapter = new DaffSearchStateReducerAdapter(state);
      mockSearchResult = searchResultFactory.create({
        kind: 'resultKind',
      });

      result = adapter.storeResults(daffSearchTransformResultsToCollection([mockSearchResult]));
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

  describe('storeError', () => {
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

      adapter = new DaffSearchStateReducerAdapter(state);

      result = adapter.storeError(mockError);
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
