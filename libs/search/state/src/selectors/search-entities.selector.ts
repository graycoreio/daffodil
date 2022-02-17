import { Dictionary } from '@ngrx/entity';
import {
  createSelector,
  defaultMemoize,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffSearchResult } from '@daffodil/search';

import {
  DaffSearchStateRootSlice,
  daffGetSearchAdapter,
  DaffSearchEntityState,
} from '../reducers/public_api';
import { getDaffSearchReducersStateSelector } from './search-feature.selector';

/**
 * Selectors for search entities.
 */
export interface DaffSearchEntitySelectors<T extends DaffSearchResult = DaffSearchResult> {
  selectSearchEntitiesState: MemoizedSelector<DaffSearchStateRootSlice<T>, DaffSearchEntityState<T>>;
  /**
   * Selector for search IDs.
   */
  selectSearchIds: MemoizedSelector<DaffSearchStateRootSlice<T>, T['id'][]>;
  /**
   * Selector for search entities.
   */
  selectSearchEntities: MemoizedSelector<DaffSearchStateRootSlice<T>, Dictionary<T>>;
  /**
   * Selector for all searchResults.
   */
  selectAllSearches: MemoizedSelector<DaffSearchStateRootSlice<T>, T[]>;
  /**
   * Selector for total number of searchResults.
   */
  selectSearchTotal: MemoizedSelector<DaffSearchStateRootSlice<T>, number>;
  /**
   * Select a specific search by ID.
   */
  selectSearch: (searchResultId: T['id']) => MemoizedSelector<DaffSearchStateRootSlice<T>, T>;
}

const createSearchEntitySelectors = <T extends DaffSearchResult = DaffSearchResult>() => {
  const { selectSearchFeatureState } = getDaffSearchReducersStateSelector<T>();
  const selectSearchEntitiesState = createSelector(
    selectSearchFeatureState,
    state => state.searchResults,
  );
  const { selectIds, selectEntities, selectAll, selectTotal } = daffGetSearchAdapter<T>().getSelectors(selectSearchEntitiesState);

  const selectSearch: (searchResultId: T['id']) => MemoizedSelector<DaffSearchStateRootSlice<T>, T> =
    defaultMemoize((searchResultId: T['id']) => createSelector(
      selectEntities,
      (searchResults: Dictionary<T>) => searchResults[searchResultId] || null,
    )).memoized;

  return {
    selectSearchEntitiesState,
    selectSearchIds: selectIds,
    selectSearchEntities: selectEntities,
    selectAllSearches: selectAll,
    selectSearchTotal: selectTotal,
    selectSearch,
  };
};

export const getDaffSearchEntitySelectors = (() => {
  let cache;
  return <T extends DaffSearchResult = DaffSearchResult>(): DaffSearchEntitySelectors<T> =>
    cache = cache || createSearchEntitySelectors<T>();
})();

