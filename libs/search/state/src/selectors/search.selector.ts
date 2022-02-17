import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';
import {
  DaffSearchResult,
  DaffSearchResultCollection,
} from '@daffodil/search';

import {
  DaffSearchStateRootSlice,
  DaffSearchReducerState,
} from '../reducers/public_api';
import { getDaffSearchEntitySelectors } from './search-entities.selector';
import { getDaffSearchReducersStateSelector } from './search-feature.selector';

/**
 * Selectors for the main part of search state.
 */
export interface DaffSearchSelectors<T extends DaffSearchResult = DaffSearchResult> {
  /**
   * Selects the main part of search state.
   */
  selectSearchState: MemoizedSelector<DaffSearchStateRootSlice, DaffSearchReducerState>;
  /**
   * Selects whether there is a pending search operation.
   */
  selectSearchLoading: MemoizedSelector<DaffSearchStateRootSlice, boolean>;
  /**
   * Selects the list of search errors, if any.
   */
  selectSearchErrors: MemoizedSelector<DaffSearchStateRootSlice, DaffStateError[]>;
  /**
   * Selects the results of the most recent search grouped by kind.
   */
  selectSearchResults: MemoizedSelector<DaffSearchStateRootSlice, DaffSearchResultCollection<T>>;
}

const createSearchSelectors = <T extends DaffSearchResult = DaffSearchResult>() => {
  const { selectSearchFeatureState } = getDaffSearchReducersStateSelector<T>();
  const { selectSearchEntities, selectSearch } = getDaffSearchEntitySelectors<T>();
  const selectSearchState = createSelector(
    selectSearchFeatureState,
    state => state.search,
  );

  const selectSearchLoading = createSelector(
    selectSearchState,
    state => state.loading,
  );

  const selectSearchErrors = createSelector(
    selectSearchState,
    state => state.errors,
  );

  const selectSearchResults = createSelector(
    selectSearchState,
    selectSearchEntities,
    (state, entities) => {
      const results = {};
      for (const k in state.results) {
        if (Object.prototype.hasOwnProperty.call(state.results, k)) {
          results[k] = state.results[k].map(id => selectSearch(id).projector(entities));
        }
      };
      return results;
    },
  );

  return {
    selectSearchState,
    selectSearchLoading,
    selectSearchErrors,
    selectSearchResults,
  };
};

export const getSearchSelectors = (() => {
  let cache;
  return <T extends DaffSearchResult = DaffSearchResult>(): DaffSearchSelectors =>
    cache = cache || createSearchSelectors<T>();
})();
