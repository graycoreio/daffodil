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
	T extends DaffCategoryRequest = DaffCategoryRequest,
	V extends DaffGenericCategory<V> = DaffCategory,
	U extends DaffCategoryPageConfigurationState<T> = DaffCategoryPageConfigurationState<T>
> {
	selectCategoryState: MemoizedSelector<Record<string, any>, DaffCategoryReducerState<T, U>>;
	selectCategoryPageConfigurationState: MemoizedSelector<Record<string, any>, U>;
	selectCategoryCurrentPage: MemoizedSelector<Record<string, any>, U['current_page']>;
	selectCategoryTotalPages: MemoizedSelector<Record<string, any>, U['total_pages']>;
	selectCategoryPageSize: MemoizedSelector<Record<string, any>, U['page_size']>;
	selectCategoryFilters: MemoizedSelector<Record<string, any>, U['filters']>;
	selectCategorySortOptions: MemoizedSelector<Record<string, any>, U['sort_options']>;
	selectCategoryPageProductIds: MemoizedSelector<Record<string, any>, U['product_ids']>;
	selectIsCategoryPageEmpty: MemoizedSelector<Record<string, any>, boolean>;
	selectCategoryPageTotalProducts: MemoizedSelector<Record<string, any>, U['total_products']>;
	selectCategoryPageFilterRequests: MemoizedSelector<Record<string, any>, U['filter_requests']>;
	selectCategoryPageAppliedFilters: MemoizedSelector<Record<string, any>, DaffCategoryAppliedFilter[]>;
	selectCategoryPageAppliedSortOption: MemoizedSelector<Record<string, any>, U['applied_sort_option']>;
	selectCategoryPageAppliedSortDirection: MemoizedSelector<Record<string, any>, U['applied_sort_direction']>;
	selectSelectedCategoryId: MemoizedSelector<Record<string, any>, U['id']>;
	selectCategoryLoading: MemoizedSelector<Record<string, any>, boolean>;
	selectCategoryProductsLoading: MemoizedSelector<Record<string, any>, boolean>;
	selectCategoryErrors: MemoizedSelector<Record<string, any>, string[]>;
}

const createCategoryPageSelectors = <T extends DaffCategoryRequest, V extends DaffGenericCategory<V>, U extends DaffCategoryPageConfigurationState<T>>(): DaffCategoryPageMemoizedSelectors<T, V, U> => {
  const selectCategoryFeatureState = getDaffCategoryFeatureSelector<T, V, U>().selectCategoryFeatureState;

  /**
   * Category State
   */
  const selectCategoryState = createSelector(
    selectCategoryFeatureState,
    (state: DaffCategoryReducersState<T, V, U>) => state.category,
  );

  /**
   * CategoryPageConfigurationState State
   */
  const selectCategoryPageConfigurationState = createSelector(
    selectCategoryState,
    (state: DaffCategoryReducerState<T, U>) => state.categoryPageConfigurationState,
  );

  const selectCategoryCurrentPage = createSelector(
    selectCategoryPageConfigurationState,
    (state: U) => state.current_page,
  );

  const selectCategoryTotalPages = createSelector(
    selectCategoryPageConfigurationState,
    (state: U) => state.total_pages,
  );

  const selectCategoryPageSize = createSelector(
    selectCategoryPageConfigurationState,
    (state: U) => state.page_size,
  );

  const selectCategoryFilters = createSelector(
    selectCategoryPageConfigurationState,
    (state: U) => state.filters,
  );

  const selectCategorySortOptions = createSelector(
    selectCategoryPageConfigurationState,
    (state: U) => state.sort_options,
  );

  const selectCategoryPageProductIds = createSelector(
    selectCategoryPageConfigurationState,
    (state: U) => state.product_ids,
  );

  const selectIsCategoryPageEmpty = createSelector(
    selectCategoryPageProductIds,
    (state: V['product_ids']) => !state.length,
  );

  const selectCategoryPageTotalProducts = createSelector(
    selectCategoryPageConfigurationState,
    (state: U) => state.total_products,
  );

  const selectCategoryPageFilterRequests = createSelector(
    selectCategoryPageConfigurationState,
    (state: U) => state.filter_requests,
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
    (state: U) => state.applied_sort_option,
  );

  const selectCategoryPageAppliedSortDirection = createSelector(
    selectCategoryPageConfigurationState,
    (state: U) => state.applied_sort_direction,
  );

  /**
   * Selected Category Id State
   */
  const selectSelectedCategoryId = createSelector(
    selectCategoryPageConfigurationState,
    (state: U) => state.id,
  );

  /**
   * Category Loading State
   */
  const selectCategoryLoading = createSelector(
    selectCategoryState,
    (state: DaffCategoryReducerState<T, U>) => state.categoryLoading,
  );

  /**
   * Category Products Loading State
   */
  const selectCategoryProductsLoading = createSelector(
    selectCategoryState,
    (state: DaffCategoryReducerState<T, U>) => state.productsLoading,
  );

  /**
   * Load Category Errors
   */
  const selectCategoryErrors = createSelector(
    selectCategoryState,
    (state: DaffCategoryReducerState<T, U>) => state.errors,
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
  return <T extends DaffCategoryRequest, V extends DaffGenericCategory<V>, U extends DaffCategoryPageConfigurationState<T>>(): DaffCategoryPageMemoizedSelectors<T, V, U> => cache = cache
    ? cache
    : createCategoryPageSelectors<T, V, U>();
})();
