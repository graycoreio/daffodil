import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import {
  DaffGenericCategory,
  DaffCategory,
  DaffCategoryFilterReplacement,
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
} from '../../reducers/public_api';
import { getDaffCategoryFeatureSelector } from '../category-feature.selector';

export interface DaffCategoryPageMemoizedSelectors<
	V extends DaffGenericCategory<V> = DaffCategory
> {
	selectCategoryState: MemoizedSelector<Record<string, any>, DaffCategoryReducerState>;
	selectCategoryPageMetadata: MemoizedSelector<Record<string, any>, DaffCategoryPageMetadata>;
	selectCategoryCurrentPage: MemoizedSelector<Record<string, any>, DaffCategoryPageMetadata['current_page']>;
	selectCategoryTotalPages: MemoizedSelector<Record<string, any>, DaffCategoryPageMetadata['total_pages']>;
	selectCategoryPageSize: MemoizedSelector<Record<string, any>, DaffCategoryPageMetadata['page_size']>;
	selectCategoryFilters: MemoizedSelector<Record<string, any>, DaffCategoryPageMetadata['filters']>;
	selectCategorySortOptions: MemoizedSelector<Record<string, any>, DaffCategoryPageMetadata['sort_options']['options']>;
	selectCategoryPageProductIds: MemoizedSelector<Record<string, any>, DaffCategoryPageMetadata['product_ids']>;
	selectIsCategoryPageEmpty: MemoizedSelector<Record<string, any>, boolean>;
	selectCategoryPageTotalProducts: MemoizedSelector<Record<string, any>, DaffCategoryPageMetadata['total_products']>;
  /**
   * Returns a dict of filters and only their applied options.
   * Filters with no applied options will be omitted.
   */
	selectCategoryPageAppliedFilters: MemoizedSelector<Record<string, any>, Dict<DaffCategoryFilterReplacement>>;
	selectCategoryPageAppliedSortOption: MemoizedSelector<Record<string, any>, DaffCategoryPageMetadata['applied_sort_option']>;
	selectCategoryPageAppliedSortDirection: MemoizedSelector<Record<string, any>, DaffCategoryPageMetadata['applied_sort_direction']>;
	selectCategoryPageState: MemoizedSelector<Record<string, any>, DaffCategoryReducerState['daffState']>;
	selectSelectedCategoryId: MemoizedSelector<Record<string, any>, DaffCategoryPageMetadata['id']>;
  /**
   * @deprecated Use selectIsCategoryPageResolving instead
   */
	selectCategoryLoading: MemoizedSelector<Record<string, any>, boolean>;
  /**
   * @deprecated Use selectIsCategoryPageResolving and selectIsCategoryPageMutating instead
   */
	selectCategoryProductsLoading: MemoizedSelector<Record<string, any>, boolean>;
	selectCategoryErrors: MemoizedSelector<Record<string, any>, DaffStateError[]>;
  selectIsCategoryPageMutating: MemoizedSelector<Record<string, any>, boolean>;
  selectIsCategoryPageResolving: MemoizedSelector<Record<string, any>, boolean>;
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
    (filters: Dict<DaffCategoryFilterReplacement>): Dict<DaffCategoryFilterReplacement> => daffCategoryComputeAppliedFilters(filters),
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
   * Selected Category Id State
   */
  const selectSelectedCategoryId = createSelector(
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
    selectSelectedCategoryId,
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
