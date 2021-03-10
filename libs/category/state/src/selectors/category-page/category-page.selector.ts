import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import {
  DaffCategoryRequest,
  DaffGenericCategory,
  DaffCategory,
  DaffCategoryPageConfigurationState,
  DaffCategoryAppliedFilter,
  DaffCategoryFilterRequest,
  DaffCategoryFilter,
} from '@daffodil/category';

import {
  DaffCategoryReducerState,
  DaffCategoryReducersState,
} from '../../reducers/public_api';
import { buildAppliedFilter } from '../applied-filter/applied-filter-methods';
import { getDaffCategoryFeatureSelector } from '../category-feature.selector';

export interface DaffCategoryPageMemoizedSelectors<
	V extends DaffGenericCategory<V> = DaffCategory
> {
	selectCategoryState: MemoizedSelector<Record<string, any>, DaffCategoryReducerState>;
	selectCategoryPageConfigurationState: MemoizedSelector<Record<string, any>, DaffCategoryPageConfigurationState>;
	selectCategoryCurrentPage: MemoizedSelector<Record<string, any>, DaffCategoryPageConfigurationState['current_page']>;
	selectCategoryTotalPages: MemoizedSelector<Record<string, any>, DaffCategoryPageConfigurationState['total_pages']>;
	selectCategoryPageSize: MemoizedSelector<Record<string, any>, DaffCategoryPageConfigurationState['page_size']>;
	selectCategoryFilters: MemoizedSelector<Record<string, any>, DaffCategoryPageConfigurationState['filters']>;
	selectCategorySortOptions: MemoizedSelector<Record<string, any>, DaffCategoryPageConfigurationState['sort_options']>;
	selectCategoryPageProductIds: MemoizedSelector<Record<string, any>, DaffCategoryPageConfigurationState['product_ids']>;
	selectIsCategoryPageEmpty: MemoizedSelector<Record<string, any>, boolean>;
	selectCategoryPageTotalProducts: MemoizedSelector<Record<string, any>, DaffCategoryPageConfigurationState['total_products']>;
	selectCategoryPageFilterRequests: MemoizedSelector<Record<string, any>, DaffCategoryPageConfigurationState['filter_requests']>;
	selectCategoryPageAppliedFilters: MemoizedSelector<Record<string, any>, DaffCategoryAppliedFilter[]>;
	selectCategoryPageAppliedSortOption: MemoizedSelector<Record<string, any>, DaffCategoryPageConfigurationState['applied_sort_option']>;
	selectCategoryPageAppliedSortDirection: MemoizedSelector<Record<string, any>, DaffCategoryPageConfigurationState['applied_sort_direction']>;
	selectSelectedCategoryId: MemoizedSelector<Record<string, any>, DaffCategoryPageConfigurationState['id']>;
	selectCategoryLoading: MemoizedSelector<Record<string, any>, boolean>;
	selectCategoryProductsLoading: MemoizedSelector<Record<string, any>, boolean>;
	selectCategoryErrors: MemoizedSelector<Record<string, any>, string[]>;
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
  const selectCategoryPageConfigurationState = createSelector(
    selectCategoryState,
    (state: DaffCategoryReducerState) => state.categoryPageConfigurationState,
  );

  const selectCategoryCurrentPage = createSelector(
    selectCategoryPageConfigurationState,
    (state: DaffCategoryPageConfigurationState) => state.current_page,
  );

  const selectCategoryTotalPages = createSelector(
    selectCategoryPageConfigurationState,
    (state: DaffCategoryPageConfigurationState) => state.total_pages,
  );

  const selectCategoryPageSize = createSelector(
    selectCategoryPageConfigurationState,
    (state: DaffCategoryPageConfigurationState) => state.page_size,
  );

  const selectCategoryFilters = createSelector(
    selectCategoryPageConfigurationState,
    (state: DaffCategoryPageConfigurationState) => state.filters,
  );

  const selectCategorySortOptions = createSelector(
    selectCategoryPageConfigurationState,
    (state: DaffCategoryPageConfigurationState) => state.sort_options,
  );

  const selectCategoryPageProductIds = createSelector(
    selectCategoryPageConfigurationState,
    (state: DaffCategoryPageConfigurationState) => state.product_ids,
  );

  const selectIsCategoryPageEmpty = createSelector(
    selectCategoryPageProductIds,
    (state: V['product_ids']) => !state.length,
  );

  const selectCategoryPageTotalProducts = createSelector(
    selectCategoryPageConfigurationState,
    (state: DaffCategoryPageConfigurationState) => state.total_products,
  );

  const selectCategoryPageFilterRequests = createSelector(
    selectCategoryPageConfigurationState,
    (state: DaffCategoryPageConfigurationState) => state.filter_requests,
  );

  const selectCategoryPageAppliedFilters = createSelector(
    selectCategoryPageFilterRequests,
    selectCategoryFilters,
    (filterRequests: DaffCategoryFilterRequest[], availableFilters: DaffCategoryFilter[]): DaffCategoryAppliedFilter[] => {
      if(!availableFilters.length) {
        return [];
      }
      return filterRequests.map(request =>
        availableFilters
          .filter(availableFilter => availableFilter.name === request.name)
          .map(filter => buildAppliedFilter(filter, request)).shift(),
      );
    },
  );

  const selectCategoryPageAppliedSortOption = createSelector(
    selectCategoryPageConfigurationState,
    (state: DaffCategoryPageConfigurationState) => state.applied_sort_option,
  );

  const selectCategoryPageAppliedSortDirection = createSelector(
    selectCategoryPageConfigurationState,
    (state: DaffCategoryPageConfigurationState) => state.applied_sort_direction,
  );

  /**
   * Selected Category Id State
   */
  const selectSelectedCategoryId = createSelector(
    selectCategoryPageConfigurationState,
    (state: DaffCategoryPageConfigurationState) => state.id,
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

  return {
    selectCategoryState,
    selectCategoryPageConfigurationState,
    selectCategoryCurrentPage,
    selectCategoryTotalPages,
    selectCategoryPageSize,
    selectCategoryFilters,
    selectCategorySortOptions,
    selectCategoryPageProductIds,
    selectIsCategoryPageEmpty,
    selectCategoryPageTotalProducts,
    selectCategoryPageFilterRequests,
    selectCategoryPageAppliedFilters,
    selectCategoryPageAppliedSortOption,
    selectCategoryPageAppliedSortDirection,
    selectSelectedCategoryId,
    selectCategoryLoading,
    selectCategoryProductsLoading,
    selectCategoryErrors,
  };
};

export const getDaffCategoryPageSelectors = (() => {
  let cache;
  return <V extends DaffGenericCategory<V>>(): DaffCategoryPageMemoizedSelectors<V> => cache = cache
    ? cache
    : createCategoryPageSelectors<V>();
})();
