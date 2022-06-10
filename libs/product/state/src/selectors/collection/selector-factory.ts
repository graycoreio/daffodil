import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { Dict } from '@daffodil/core';
import {
  DaffProductCollectionMetadata,
  DaffProductCollectionRequest,
  daffProductComputeAppliedFilters,
  DaffProductFilter,
  daffProductFiltersToRequests,
} from '@daffodil/product';

import { DaffProductCollectionReducerState } from '../../reducers/collection/state.interface';

/**
 * An interface to describe all selectors related to the product collection metadata.
 */
export interface DaffProductCollectionMemoizedSelectors<
  TState,
  TMetadata extends DaffProductCollectionMetadata = DaffProductCollectionMetadata
> {
  /**
   * Selects the metadata for the product collection.
   */
  selectProductCollectionMetadata: MemoizedSelector<TState, TMetadata>;
  /**
   * Builds a request that matches the current product collection.
   */
  selectProductCollectionRequest: MemoizedSelector<TState, DaffProductCollectionRequest>;
  /**
   * Selects the total number of products of the product collection.
   */
  selectProductCollectionTotalProducts: MemoizedSelector<TState, TMetadata['total_products']>;
  /**
   * Selects the current page of products of the product collection.
   */
  selectProductCollectionCurrentPage: MemoizedSelector<TState, TMetadata['current_page']>;
  /**
   * Selects the total number of pages of products that exist in the product collection.
   */
  selectProductCollectionTotalPages: MemoizedSelector<TState, TMetadata['total_pages']>;
  /**
   * Selects the number of products on each product collection.
   */
  selectProductCollectionSize: MemoizedSelector<TState, TMetadata['page_size']>;
  /**
   * Selects the filters that may be applied to the product collection.
   */
  selectProductCollectionFilters: MemoizedSelector<TState, TMetadata['filters']>;
  /**
   * Selects the sort options that may be applied to the product collection.
   */
  selectProductCollectionSortOptions: MemoizedSelector<TState, TMetadata['sort_options']['options']>;
  /**
   * Returns a dict of filters and only their applied options.
   * Filters with no applied options will be omitted.
   */
  selectProductCollectionAppliedFilters: MemoizedSelector<TState, Dict<DaffProductFilter>>;
  /**
   * Selects the applied sorting option if one is applied.
   */
  selectProductCollectionAppliedSortOption: MemoizedSelector<TState, TMetadata['applied_sort_option']>;
  /**
   * Selects the applied sorting direction if a sorting option is applied.
   */
  selectProductCollectionAppliedSortDirection: MemoizedSelector<TState, TMetadata['applied_sort_direction']>;
}

/**
 * Creates product collection selectors.
 *
 * @param selectProductCollectionState A selector for the particular product collection state upon which the returned selectors should operate.
 */
export const daffProductCollectionSelectorFactory = <
  TState,
  TMetadata extends DaffProductCollectionMetadata = DaffProductCollectionMetadata
>(
  selectProductCollectionState: MemoizedSelector<TState, DaffProductCollectionReducerState<TMetadata>>,
): DaffProductCollectionMemoizedSelectors<TState, TMetadata> => {

  const selectProductCollectionMetadata = createSelector(
    selectProductCollectionState,
    state => state,
  );

  const selectProductCollectionRequest = createSelector(
    selectProductCollectionMetadata,
    metadata => ({
      filter_requests: daffProductFiltersToRequests(metadata.filters),
      applied_sort_option: metadata.applied_sort_option,
      applied_sort_direction: metadata.applied_sort_direction,
      current_page: metadata.current_page,
      page_size: metadata.page_size,
    }),
  );

  const selectProductCollectionTotalProducts = createSelector(
    selectProductCollectionMetadata,
    state => state.total_products,
  );

  const selectProductCollectionCurrentPage = createSelector(
    selectProductCollectionMetadata,
    state => state.current_page,
  );

  const selectProductCollectionTotalPages = createSelector(
    selectProductCollectionMetadata,
    state => state.total_pages,
  );

  const selectProductCollectionSize = createSelector(
    selectProductCollectionMetadata,
    state => state.page_size,
  );

  const selectProductCollectionFilters = createSelector(
    selectProductCollectionMetadata,
    state => state.filters,
  );

  const selectProductCollectionSortOptions = createSelector(
    selectProductCollectionMetadata,
    state => state.sort_options.options,
  );

  const selectProductCollectionAppliedFilters = createSelector(
    selectProductCollectionFilters,
    filters => daffProductComputeAppliedFilters(filters),
  );

  const selectProductCollectionAppliedSortOption = createSelector(
    selectProductCollectionMetadata,
    state => state.applied_sort_option,
  );

  const selectProductCollectionAppliedSortDirection = createSelector(
    selectProductCollectionMetadata,
    state => state.applied_sort_direction,
  );

  return {
    selectProductCollectionMetadata,
    selectProductCollectionRequest,
    selectProductCollectionTotalProducts,
    selectProductCollectionCurrentPage,
    selectProductCollectionTotalPages,
    selectProductCollectionSize,
    selectProductCollectionFilters,
    selectProductCollectionSortOptions,
    selectProductCollectionAppliedSortOption,
    selectProductCollectionAppliedSortDirection,
    selectProductCollectionAppliedFilters,
  };
};
