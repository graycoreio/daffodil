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

export interface DaffCategoryPageMemoizedSelectors<
	V extends DaffGenericCategory<V> = DaffCategory
> {
	selectCategoryState: MemoizedSelector<DaffCategoryStateRootSlice<V>, DaffCategoryReducerState>;
	selectCategoryPageMetadata: MemoizedSelector<DaffCategoryStateRootSlice<V>, DaffCategoryPageMetadata>;
	selectCategoryCurrentPage: MemoizedSelector<DaffCategoryStateRootSlice<V>, DaffCategoryPageMetadata['current_page']>;
	selectCategoryTotalPages: MemoizedSelector<DaffCategoryStateRootSlice<V>, DaffCategoryPageMetadata['total_pages']>;
	selectCategoryPageSize: MemoizedSelector<DaffCategoryStateRootSlice<V>, DaffCategoryPageMetadata['page_size']>;
	selectCategoryFilters: MemoizedSelector<DaffCategoryStateRootSlice<V>, DaffCategoryPageMetadata['filters']>;
	selectCategorySortOptions: MemoizedSelector<DaffCategoryStateRootSlice<V>, DaffCategoryPageMetadata['sort_options']['options']>;
	selectCategoryPageProductIds: MemoizedSelector<DaffCategoryStateRootSlice<V>, DaffCategoryPageMetadata['product_ids']>;
	selectIsCategoryPageEmpty: MemoizedSelector<DaffCategoryStateRootSlice<V>, boolean>;
	selectCategoryPageTotalProducts: MemoizedSelector<DaffCategoryStateRootSlice<V>, DaffCategoryPageMetadata['total_products']>;
  /**
   * Returns a dict of filters and only their applied options.
   * Filters with no applied options will be omitted.
   */
	selectCategoryPageAppliedFilters: MemoizedSelector<DaffCategoryStateRootSlice<V>, Dict<DaffCategoryFilter>>;
	selectCategoryPageAppliedSortOption: MemoizedSelector<DaffCategoryStateRootSlice<V>, DaffCategoryPageMetadata['applied_sort_option']>;
	selectCategoryPageAppliedSortDirection: MemoizedSelector<DaffCategoryStateRootSlice<V>, DaffCategoryPageMetadata['applied_sort_direction']>;
	selectCategoryPageState: MemoizedSelector<DaffCategoryStateRootSlice<V>, DaffCategoryReducerState['daffState']>;
	selectCurrentCategoryId: MemoizedSelector<DaffCategoryStateRootSlice<V>, DaffCategoryPageMetadata['id']>;
  /**
   * @deprecated Use selectIsCategoryPageResolving instead
   */
	selectCategoryLoading: MemoizedSelector<DaffCategoryStateRootSlice<V>, boolean>;
  /**
   * @deprecated Use selectIsCategoryPageResolving and selectIsCategoryPageMutating instead
   */
	selectCategoryProductsLoading: MemoizedSelector<DaffCategoryStateRootSlice<V>, boolean>;
	selectCategoryErrors: MemoizedSelector<DaffCategoryStateRootSlice<V>, DaffStateError[]>;
  selectIsCategoryPageMutating: MemoizedSelector<DaffCategoryStateRootSlice<V>, boolean>;
  selectIsCategoryPageResolving: MemoizedSelector<DaffCategoryStateRootSlice<V>, boolean>;
}

const createCategoryPageSelectors = <V extends DaffGenericCategory<V>>(): DaffCategoryPageMemoizedSelectors<V> => {
  const selectCategoryFeatureState = getDaffCategoryFeatureSelector<V>().selectCategoryFeatureState;

  /**
   * Category State
   */
  const selectCategoryState = createSelector(
    selectCategoryFeatureState,
    (state: DaffCategoryReducersState<V>) => state.category,
  );

  /**
   * CategoryPageConfigurationState State
   */
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

  const selectIsCategoryPageEmpty = createSelector(
    selectCategoryPageProductIds,
    (state: V['product_ids']) => !state.length,
  );

  const selectCategoryPageTotalProducts = createSelector(
    selectCategoryPageMetadata,
    (state: DaffCategoryPageMetadata) => state.total_products,
  );

  /**
   * Selects the applied filters for the current category page.
   */
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

  /**
   * Current Category Id State
   */
  const selectCurrentCategoryId = createSelector(
    selectCategoryPageMetadata,
    (state: DaffCategoryPageMetadata) => state.id,
  );

  /**
   * Category Loading State
   */
  const selectCategoryLoading = createSelector(
    selectCategoryState,
    (state: DaffCategoryReducerState) => state.categoryLoading,
  );

  /**
   * Category Products Loading State
   */
  const selectCategoryProductsLoading = createSelector(
    selectCategoryState,
    (state: DaffCategoryReducerState) => state.productsLoading,
  );

  /**
   * Load Category Errors
   */
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

export const getDaffCategoryPageSelectors = (() => {
  let cache;
  return <V extends DaffGenericCategory<V>>(): DaffCategoryPageMemoizedSelectors<V> => cache = cache
    ? cache
    : createCategoryPageSelectors<V>();
})();
