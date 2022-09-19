import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import {
  DaffCollectionMetadata,
  DaffCollectionRequest,
  daffComputeAppliedFilters,
  DaffFilters,
} from '@daffodil/core';

/**
 * An interface to describe all selectors related to the collection metadata.
 */
export interface DaffCollectionMemoizedSelectors<
  TState,
  TMetadata extends DaffCollectionMetadata = DaffCollectionMetadata
> {
  /**
   * Selects the metadata for the collection.
   */
  selectCollectionMetadata: MemoizedSelector<TState, TMetadata>;
  /**
   * Builds a request that matches the current collection.
   */
  selectCollectionRequest: MemoizedSelector<TState, DaffCollectionRequest>;
  /**
   * Selects the total number of items of the collection.
   */
  selectCollectionCount: MemoizedSelector<TState, TMetadata['count']>;
  /**
   * Selects the current page of items of the collection.
   */
  selectCollectionCurrentPage: MemoizedSelector<TState, TMetadata['currentPage']>;
  /**
   * Selects the total number of pages of items that exist in the collection.
   */
  selectCollectionTotalPages: MemoizedSelector<TState, TMetadata['totalPages']>;
  /**
   * Selects the number of items on each collection.
   */
  selectCollectionPageSize: MemoizedSelector<TState, TMetadata['pageSize']>;
  /**
   * Selects the sort options that may be applied to the collection.
   */
  selectCollectionSortOptions: MemoizedSelector<TState, TMetadata['sortOptions']['options']>;
  /**
   * Selects the applied sorting option if one is applied.
   */
  selectCollectionAppliedSortOption: MemoizedSelector<TState, TMetadata['appliedSortOption']>;
  /**
   * Selects the applied sorting direction if a sorting option is applied.
   */
  selectCollectionAppliedSortDirection: MemoizedSelector<TState, TMetadata['appliedSortDirection']>;
  /**
   * Selects the applied sorting direction if a sorting option is applied.
   */
  selectCollectionIds: MemoizedSelector<TState, TMetadata['ids']>;
  /**
   * Selects the filters that may be applied to the collection.
   */
  selectCollectionFilters: MemoizedSelector<TState, TMetadata['filters']>;
  /**
   * Returns a dict of filters and only their applied options.
   * Filters with no applied options will be omitted.
   */
  selectCollectionAppliedFilters: MemoizedSelector<TState, DaffFilters>;
}

/**
 * Creates collection selectors.
 *
 * @param selectCollectionState A selector for the particular collection state upon which the returned selectors should operate.
 */
export const daffCollectionSelectorFactory = <
  TState,
  TMetadata extends DaffCollectionMetadata = DaffCollectionMetadata
>(
  selectCollectionState: MemoizedSelector<TState, TMetadata>,
): DaffCollectionMemoizedSelectors<TState, TMetadata> => {

  const selectCollectionMetadata = createSelector(
    selectCollectionState,
    state => state,
  );

  const selectCollectionRequest = createSelector(
    selectCollectionMetadata,
    metadata => ({
      appliedSortOption: metadata.appliedSortOption,
      appliedSortDirection: metadata.appliedSortDirection,
      currentPage: metadata.currentPage,
      pageSize: metadata.pageSize,
    }),
  );

  const selectCollectionCount = createSelector(
    selectCollectionMetadata,
    state => state.count,
  );

  const selectCollectionCurrentPage = createSelector(
    selectCollectionMetadata,
    state => state.currentPage,
  );

  const selectCollectionTotalPages = createSelector(
    selectCollectionMetadata,
    state => state.totalPages,
  );

  const selectCollectionPageSize = createSelector(
    selectCollectionMetadata,
    state => state.pageSize,
  );

  const selectCollectionSortOptions = createSelector(
    selectCollectionMetadata,
    state => state.sortOptions.options,
  );

  const selectCollectionAppliedSortOption = createSelector(
    selectCollectionMetadata,
    state => state.appliedSortOption,
  );

  const selectCollectionAppliedSortDirection = createSelector(
    selectCollectionMetadata,
    state => state.appliedSortDirection,
  );

  const selectCollectionIds = createSelector(
    selectCollectionMetadata,
    state => state.ids,
  );

  const selectCollectionFilters = createSelector(
    selectCollectionMetadata,
    state => state.filters,
  );

  const selectCollectionAppliedFilters = createSelector(
    selectCollectionFilters,
    filters => daffComputeAppliedFilters(filters),
  );

  return {
    selectCollectionMetadata,
    selectCollectionRequest,
    selectCollectionCount,
    selectCollectionCurrentPage,
    selectCollectionTotalPages,
    selectCollectionPageSize,
    selectCollectionSortOptions,
    selectCollectionAppliedSortOption,
    selectCollectionAppliedSortDirection,
    selectCollectionIds,
    selectCollectionFilters,
    selectCollectionAppliedFilters,
  };
};
