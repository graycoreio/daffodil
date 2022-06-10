import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';
import { DaffSearchResult } from '@daffodil/search';

import {
  DaffSearchStateRootSlice,
  DaffSearchReducerState,
} from '../reducers/public_api';

/**
 * Selectors for the main part of search state.
 */
export interface DaffSearchSelectors<T extends DaffSearchResult = DaffSearchResult, R extends DaffSearchStateRootSlice<T> = DaffSearchStateRootSlice<T>> {
  /**
   * Selects whether there is a pending search operation.
   */
  selectSearchLoading: MemoizedSelector<R, boolean>;
  /**
   * Selects the list of search errors, if any.
   */
  selectSearchErrors: MemoizedSelector<R, DaffStateError[]>;
  /**
   * Selects the results of the most recent search grouped by kind.
   */
  selectSearchResultIds: MemoizedSelector<R, Record<T['kind'], T['id'][]>>;
  /**
   * Selects the recent search queries.
   */
  selectRecent: MemoizedSelector<R, string[]>;
  /**
   * Selects the number of results in the most recent search.
   */
  selectResultCount: MemoizedSelector<R, number>;
}

/**
 * Creates a group of selectors for {@link DaffSearchReducerState} that use the passed state selector as the basis.
 */
export const daffSearchCreateSearchSelectors = <T extends DaffSearchResult = DaffSearchResult, R extends DaffSearchStateRootSlice<T> = DaffSearchStateRootSlice<T>>(
  stateSelector: MemoizedSelector<R, DaffSearchReducerState<T>>,
) => {
  const selectSearchLoading = createSelector(
    stateSelector,
    state => state.loading,
  );

  const selectSearchErrors = createSelector(
    stateSelector,
    state => state.errors,
  );

  const selectSearchResultIds = createSelector(
    stateSelector,
    state => state.results,
  );

  const selectRecent = createSelector(
    stateSelector,
    state => state.recent,
  );

  const selectResultCount = createSelector(
    selectSearchResultIds,
    ids => Object.values<T['id'][]>(ids).reduce((sum, results) => sum + results.length, 0),
  );

  return {
    selectSearchLoading,
    selectSearchErrors,
    selectSearchResultIds,
    selectRecent,
    selectResultCount,
  };
};
