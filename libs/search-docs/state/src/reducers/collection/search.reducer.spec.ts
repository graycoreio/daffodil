import {
  daffSearchInitialState as initialState,
  DaffSearchReducerState,
} from '@daffodil/search/state';
import {
  DaffSearchDocsCollectionApplyFilters,
  DaffSearchDocsCollectionReplaceFilters,
  DaffSearchDocsCollectionRemoveFilters,
  DaffSearchDocsCollectionClearFilters,
  DaffSearchDocsCollectionToggleFilter,
  DaffSearchDocsCollectionChangeCurrentPage,
  DaffSearchDocsCollectionChangePageSize,
  DaffSearchDocsCollectionChangeSortingOption,
} from '@daffodil/search-docs/state';

import { daffSearchDocsCollectionSearchReducer as reducer } from './search.reducer';

describe('@daffodil/search-docs-docs/state | daffSearchDocsCollectionSearchReducer', () => {
  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when SearchDocsCollectionApplyFiltersAction is triggered', () => {
    let result: DaffSearchReducerState;

    beforeEach(() => {
      const searchResultLoadAction = new DaffSearchDocsCollectionApplyFilters([]);

      result = reducer({
        ...initialState,
      }, searchResultLoadAction);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('when SearchDocsCollectionReplaceFiltersAction is triggered', () => {
    let result: DaffSearchReducerState;

    beforeEach(() => {
      const searchResultLoadAction = new DaffSearchDocsCollectionReplaceFilters([]);

      result = reducer({
        ...initialState,
      }, searchResultLoadAction);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('when SearchDocsCollectionRemoveFiltersAction is triggered', () => {
    let result: DaffSearchReducerState;

    beforeEach(() => {
      const searchResultLoadAction = new DaffSearchDocsCollectionRemoveFilters([]);

      result = reducer({
        ...initialState,
      }, searchResultLoadAction);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('when SearchDocsCollectionClearFiltersAction is triggered', () => {
    let result: DaffSearchReducerState;

    beforeEach(() => {
      const searchResultLoadAction = new DaffSearchDocsCollectionClearFilters();

      result = reducer({
        ...initialState,
      }, searchResultLoadAction);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('when SearchDocsCollectionToggleFilterAction is triggered', () => {
    let result: DaffSearchReducerState;

    beforeEach(() => {
      const searchResultLoadAction = new DaffSearchDocsCollectionToggleFilter(null);

      result = reducer({
        ...initialState,
      }, searchResultLoadAction);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('when SearchDocsCollectionChangeCurrentPageAction is triggered', () => {
    let result: DaffSearchReducerState;

    beforeEach(() => {
      const searchResultLoadAction = new DaffSearchDocsCollectionChangeCurrentPage(5);

      result = reducer({
        ...initialState,
      }, searchResultLoadAction);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('when SearchDocsCollectionChangePageSizeAction is triggered', () => {
    let result: DaffSearchReducerState;

    beforeEach(() => {
      const searchResultLoadAction = new DaffSearchDocsCollectionChangePageSize(5);

      result = reducer({
        ...initialState,
      }, searchResultLoadAction);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('when SearchDocsCollectionChangeSortingOptionAction is triggered', () => {
    let result: DaffSearchReducerState;

    beforeEach(() => {
      const searchResultLoadAction = new DaffSearchDocsCollectionChangeSortingOption(null);

      result = reducer({
        ...initialState,
      }, searchResultLoadAction);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });
});
