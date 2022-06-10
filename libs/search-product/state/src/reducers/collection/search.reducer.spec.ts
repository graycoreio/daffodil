import {
  DaffSearchProductCollectionApplyFilters,
  DaffSearchProductCollectionReplaceFilters,
  DaffSearchProductCollectionRemoveFilters,
  DaffSearchProductCollectionClearFilters,
  DaffSearchProductCollectionToggleFilter,
  DaffSearchProductCollectionChangeCurrentPage,
  DaffSearchProductCollectionChangePageSize,
  DaffSearchProductCollectionChangeSortingOption,
} from '@daffodil/search-product/state';
import {
  daffSearchInitialState as initialState,
  DaffSearchReducerState,
} from '@daffodil/search/state';

import { daffSearchProductCollectionSearchReducer as reducer } from './search.reducer';

describe('@daffodil/search-product-product/state | daffSearchProductCollectionSearchReducer', () => {
  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when SearchProductCollectionApplyFiltersAction is triggered', () => {
    let result: DaffSearchReducerState;

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
    let result: DaffSearchReducerState;

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
    let result: DaffSearchReducerState;

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
    let result: DaffSearchReducerState;

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
    let result: DaffSearchReducerState;

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
    let result: DaffSearchReducerState;

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
    let result: DaffSearchReducerState;

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
    let result: DaffSearchReducerState;

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
