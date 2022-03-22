import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import {
  DaffGenericCategory,
  DaffCategory,
  DaffCategoryFilter,
  DaffCategoryPageMetadata,
  daffCategoryComputeAppliedFilters,
} from '@daffodil/category';
import { Dict } from '@daffodil/core';
import {
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';

import {
  DaffCategoryReducerState,
  DaffCategoryReducersState,
  DaffCategoryStateRootSlice,
} from '../../reducers/public_api';
import { getDaffCategoryFeatureSelector } from '../category-feature.selector';

/**
 * An interface to describe all selectors related to the category page metadata, category loading, and errors.
 */
export interface DaffCategoryPageMemoizedSelectors<
	V extends DaffGenericCategory<V> = DaffCategory
> {
	/**
	 * Selects all state related to the category page metadata, category loading, and errors.
	 */
	selectCategoryState: MemoizedSelector<DaffCategoryStateRootSlice<V>, DaffCategoryReducerState>;
	/**
	 * Selects the metadata for the current category page.
	 */
	selectCategoryPageMetadata: MemoizedSelector<DaffCategoryStateRootSlice<V>, DaffCategoryPageMetadata>;
	/**
	 * Selects the current page of products of the current category.
	 */
	selectCategoryCurrentPage: MemoizedSelector<DaffCategoryStateRootSlice<V>, DaffCategoryPageMetadata['current_page']>;
	/**
	 * Selects the total number of pages of products that exist in the current category.
	 */
	selectCategoryTotalPages: MemoizedSelector<DaffCategoryStateRootSlice<V>, DaffCategoryPageMetadata['total_pages']>;
	/**
	 * Selects the number of products on each category page.
	 */
	selectCategoryPageSize: MemoizedSelector<DaffCategoryStateRootSlice<V>, DaffCategoryPageMetadata['page_size']>;
	/**
	 * Selects the filters that may be applied to the current category.
	 */
	selectCategoryFilters: MemoizedSelector<DaffCategoryStateRootSlice<V>, DaffCategoryPageMetadata['filters']>;
	/**
	 * Selects the sort options that may be applied to the current category.
	 */
	selectCategorySortOptions: MemoizedSelector<DaffCategoryStateRootSlice<V>, DaffCategoryPageMetadata['sort_options']['options']>;
	/**
	 * Selects the ids of all products in the current category page.
	 */
	selectCategoryPageProductIds: MemoizedSelector<DaffCategoryStateRootSlice<V>, DaffCategoryPageMetadata['product_ids']>;
	/**
	 * Selects whether the category page has no products.
	 */
	selectIsCategoryPageEmpty: MemoizedSelector<DaffCategoryStateRootSlice<V>, boolean>;
	/**
	 * Selects the total number of products for the current category.
	 */
	selectCategoryPageTotalProducts: MemoizedSelector<DaffCategoryStateRootSlice<V>, DaffCategoryPageMetadata['total_products']>;
  /**
   * Returns a dict of filters and only their applied options.
   * Filters with no applied options will be omitted.
   */
	selectCategoryPageAppliedFilters: MemoizedSelector<DaffCategoryStateRootSlice<V>, Dict<DaffCategoryFilter>>;
	/**
	 * Selects the applied sorting option if one is applied.
	 */
	selectCategoryPageAppliedSortOption: MemoizedSelector<DaffCategoryStateRootSlice<V>, DaffCategoryPageMetadata['applied_sort_option']>;
	/**
	 * Selects the applied sorting direction if a sorting option is applied.
	 */
	selectCategoryPageAppliedSortDirection: MemoizedSelector<DaffCategoryStateRootSlice<V>, DaffCategoryPageMetadata['applied_sort_direction']>;
	/**
	 * Selects the loading state of the current category; e.g. mutating, resolving, stable.
	 */
	selectCategoryPageState: MemoizedSelector<DaffCategoryStateRootSlice<V>, DaffCategoryReducerState['daffState']>;
	/**
	 * Selects the id of the current category.
	 */
	 selectCurrentCategoryId: MemoizedSelector<DaffCategoryStateRootSlice<V>, DaffCategoryPageMetadata['id']>;
  /**
   * @deprecated Use selectIsCategoryPageResolving instead
   */
	selectCategoryLoading: MemoizedSelector<DaffCategoryStateRootSlice<V>, boolean>;
  /**
   * @deprecated Use selectIsCategoryPageResolving and selectIsCategoryPageMutating instead
   */
	selectCategoryProductsLoading: MemoizedSelector<DaffCategoryStateRootSlice<V>, boolean>;
	/**
	 * Selects all errors associated with loading a category.
	 */
	selectCategoryErrors: MemoizedSelector<DaffCategoryStateRootSlice<V>, DaffStateError[]>;
  /**
   * Selects whether the current category page is mutating; e.g. when a filter is applied to it.
   */
	selectIsCategoryPageMutating: MemoizedSelector<DaffCategoryStateRootSlice<V>, boolean>;
  /**
   * Selects whether the current category is resolving; e.g. when the category first loads.
   */
	selectIsCategoryPageResolving: MemoizedSelector<DaffCategoryStateRootSlice<V>, boolean>;
}

const createCategoryPageSelectors = <V extends DaffGenericCategory<V>>(): DaffCategoryPageMemoizedSelectors<V> => {
  const selectCategoryFeatureState = getDaffCategoryFeatureSelector<V>().selectCategoryFeatureState;

  const selectCategoryState = createSelector(
    selectCategoryFeatureState,
    (state: DaffCategoryReducersState<V>) => state.category,
  );

  const selectCategoryPageMetadata = createSelector(
    selectCategoryState,
    (state: DaffCategoryReducerState) => state.categoryPageMetadata,
  );

  const selectCategoryCurrentPage = createSelector(
    selectCategoryPageMetadata,
    (state: DaffCategoryPageMetadata) => state.current_page,
  );

  const selectCategoryTotalPages = createSelector(
    selectCategoryPageMetadata,
    (state: DaffCategoryPageMetadata) => state.total_pages,
  );

  const selectCategoryPageSize = createSelector(
    selectCategoryPageMetadata,
    (state: DaffCategoryPageMetadata) => state.page_size,
  );

  const selectCategoryFilters = createSelector(
    selectCategoryPageMetadata,
    (state: DaffCategoryPageMetadata) => state.filters,
  );

  const selectCategorySortOptions = createSelector(
    selectCategoryPageMetadata,
    (state: DaffCategoryPageMetadata) => state.sort_options.options,
  );

  const selectCategoryPageProductIds = createSelector(
    selectCategoryPageMetadata,
    (state: DaffCategoryPageMetadata) => state.product_ids,
  );

  const selectIsCategoryPageEmpty = createSelector<DaffCategoryStateRootSlice<V>, [ V['product_ids']], boolean>(
    selectCategoryPageProductIds,
    (state: V['product_ids']) => !state.length,
  );

  const selectCategoryPageTotalProducts = createSelector(
    selectCategoryPageMetadata,
    (state: DaffCategoryPageMetadata) => state.total_products,
  );

  const selectCategoryPageAppliedFilters = createSelector(
    selectCategoryFilters,
    (filters: Dict<DaffCategoryFilter>): Dict<DaffCategoryFilter> => daffCategoryComputeAppliedFilters(filters),
  );

  const selectCategoryPageAppliedSortOption = createSelector(
    selectCategoryPageMetadata,
    (state: DaffCategoryPageMetadata) => state.applied_sort_option,
  );

  const selectCategoryPageAppliedSortDirection = createSelector(
    selectCategoryPageMetadata,
    (state: DaffCategoryPageMetadata) => state.applied_sort_direction,
  );

  const selectCategoryPageState = createSelector(
    selectCategoryState,
    (state: DaffCategoryReducerState) => state.daffState,
  );

  const selectCurrentCategoryId = createSelector(
    selectCategoryPageMetadata,
    (state: DaffCategoryPageMetadata) => state.id,
  );

  const selectCategoryLoading = createSelector(
    selectCategoryState,
    (state: DaffCategoryReducerState) => state.categoryLoading,
  );

  const selectCategoryProductsLoading = createSelector(
    selectCategoryState,
    (state: DaffCategoryReducerState) => state.productsLoading,
  );

  const selectCategoryErrors = createSelector(
    selectCategoryState,
    (state: DaffCategoryReducerState) => state.errors,
  );

  const selectIsCategoryPageMutating = createSelector(
    selectCategoryPageState,
    (daffState: DaffCategoryReducerState['daffState']) => daffState === DaffState.Mutating,
  );

  const selectIsCategoryPageResolving = createSelector(
    selectCategoryPageState,
    (daffState: DaffCategoryReducerState['daffState']) => daffState === DaffState.Resolving,
  );

  return {
    selectCategoryState,
    selectCategoryPageMetadata,
    selectCategoryCurrentPage,
    selectCategoryTotalPages,
    selectCategoryPageSize,
    selectCategoryFilters,
    selectCategorySortOptions,
    selectCategoryPageProductIds,
    selectIsCategoryPageEmpty,
    selectCategoryPageTotalProducts,
    selectCategoryPageAppliedFilters,
    selectCategoryPageAppliedSortOption,
    selectCategoryPageAppliedSortDirection,
    selectCategoryPageState,
    selectCurrentCategoryId,
    selectCategoryLoading,
    selectCategoryProductsLoading,
    selectCategoryErrors,
    selectIsCategoryPageMutating,
    selectIsCategoryPageResolving,
  };
};

/**
 * A function that returns all selectors related to the category page metadata, category loading, and errors.
 * Returns {@link DaffCategoryPageMemoizedSelectors}.
 */
export const getDaffCategoryPageSelectors = (() => {
  let cache;
  return <V extends DaffGenericCategory<V>>(): DaffCategoryPageMemoizedSelectors<V> => cache = cache
    ? cache
    : createCategoryPageSelectors<V>();
})();
