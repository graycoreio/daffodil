import { DaffStateError } from '@daffodil/core/state';
import {
  daffProductReducerInitialState as initialState,
  DaffProductReducerState,
} from '@daffodil/product/state';
import {
  DaffSearchResult,
  daffSearchTransformResultsToCollection,
} from '@daffodil/search';
import {
  DaffSearchProductCollectionApplyFilters,
  DaffSearchProductCollectionChangeCurrentPage,
  DaffSearchProductCollectionChangePageSize,
  DaffSearchProductCollectionChangeSortingOption,
  DaffSearchProductCollectionClearFilters,
  DaffSearchProductCollectionRemoveFilters,
  DaffSearchProductCollectionReplaceFilters,
  DaffSearchProductCollectionToggleFilter,
} from '@daffodil/search-product/state';
import {
  DaffSearchLoad,
  DaffSearchLoadSuccess,
  DaffSearchLoadFailure,
  DaffSearchIncremental,
  DaffSearchIncrementalFailure,
  DaffSearchIncrementalSuccess,
} from '@daffodil/search/state';
import { DaffSearchResultFactory } from '@daffodil/search/testing';

import { daffSearchProductProductReducer as reducer } from './reducer';

describe('@daffodil/search-product-product/state | daffSearchProductProductReducer', () => {
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

  describe('when SearchLoadAction is triggered', () => {
    let result: DaffProductReducerState;
    let query: string;

    beforeEach(() => {
      query = 'query';
      const searchResultLoadAction = new DaffSearchLoad(query);

      result = reducer({
        ...initialState,
      }, searchResultLoadAction);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('when SearchLoadSuccessAction is triggered', () => {
    let mockError: DaffStateError;
    let mockSearchResult: DaffSearchResult;
    let result: DaffProductReducerState;
    let state: DaffProductReducerState;

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
      mockSearchResult = searchResultFactory.create({
        kind: 'resultKind',
      });

      const searchResultLoadSuccess = new DaffSearchLoadSuccess({
        collection: daffSearchTransformResultsToCollection([mockSearchResult]),
        metadata: {},
      });

      result = reducer(state, searchResultLoadSuccess);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('should reset errors', () => {
      expect(result.errors).toEqual([]);
    });
  });

  describe('when SearchLoadFailureAction is triggered', () => {
    let result;
    let state: DaffProductReducerState;
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

  describe('when SearchIncrementalAction is triggered', () => {
    it('sets loading state to true', () => {
      const searchResultIncrementalAction = new DaffSearchIncremental('query');

      const result = reducer(initialState, searchResultIncrementalAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when SearchIncrementalSuccessAction is triggered', () => {
    let mockError: DaffStateError;
    let mockSearchResult: DaffSearchResult;
    let result: DaffProductReducerState;
    let state: DaffProductReducerState;

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
      mockSearchResult = searchResultFactory.create({
        kind: 'resultKind',
      });

      const searchResultIncrementalSuccess = new DaffSearchIncrementalSuccess({
        collection: daffSearchTransformResultsToCollection([mockSearchResult]),
        metadata: {},
      });

      result = reducer(state, searchResultIncrementalSuccess);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('should reset errors', () => {
      expect(result.errors).toEqual([]);
    });
  });

  describe('when SearchIncrementalFailureAction is triggered', () => {
    let result;
    let state: DaffProductReducerState;
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
  });

  describe('when SearchProductCollectionApplyFiltersAction is triggered', () => {
    let result: DaffProductReducerState;

    beforeEach(() => {
      const searchResultLoadAction = new DaffSearchProductCollectionApplyFilters([]);

      result = reducer({
        ...initialState,
      }, searchResultLoadAction);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('when SearchProductCollectionReplaceFiltersAction is triggered', () => {
    let result: DaffProductReducerState;

    beforeEach(() => {
      const searchResultLoadAction = new DaffSearchProductCollectionReplaceFilters([]);

      result = reducer({
        ...initialState,
      }, searchResultLoadAction);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('when SearchProductCollectionRemoveFiltersAction is triggered', () => {
    let result: DaffProductReducerState;

    beforeEach(() => {
      const searchResultLoadAction = new DaffSearchProductCollectionRemoveFilters([]);

      result = reducer({
        ...initialState,
      }, searchResultLoadAction);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('when SearchProductCollectionClearFiltersAction is triggered', () => {
    let result: DaffProductReducerState;

    beforeEach(() => {
      const searchResultLoadAction = new DaffSearchProductCollectionClearFilters();

      result = reducer({
        ...initialState,
      }, searchResultLoadAction);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('when SearchProductCollectionToggleFilterAction is triggered', () => {
    let result: DaffProductReducerState;

    beforeEach(() => {
      const searchResultLoadAction = new DaffSearchProductCollectionToggleFilter(null);

      result = reducer({
        ...initialState,
      }, searchResultLoadAction);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('when SearchProductCollectionChangeCurrentPageAction is triggered', () => {
    let result: DaffProductReducerState;

    beforeEach(() => {
      const searchResultLoadAction = new DaffSearchProductCollectionChangeCurrentPage(5);

      result = reducer({
        ...initialState,
      }, searchResultLoadAction);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('when SearchProductCollectionChangePageSizeAction is triggered', () => {
    let result: DaffProductReducerState;

    beforeEach(() => {
      const searchResultLoadAction = new DaffSearchProductCollectionChangePageSize(5);

      result = reducer({
        ...initialState,
      }, searchResultLoadAction);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('when SearchProductCollectionChangeSortingOptionAction is triggered', () => {
    let result: DaffProductReducerState;

    beforeEach(() => {
      const searchResultLoadAction = new DaffSearchProductCollectionChangeSortingOption(null);

      result = reducer({
        ...initialState,
      }, searchResultLoadAction);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });
});
