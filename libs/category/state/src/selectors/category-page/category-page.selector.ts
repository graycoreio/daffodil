import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import {
  DaffGenericCategory,
  DaffCategory,
  DaffCategoryAppliedFilter,
  DaffCategoryFilterRequest,
  DaffCategoryFilter,
} from '@daffodil/category';
import { DaffState } from '@daffodil/core/state';

import { DaffStatefulCategoryPageConfigurationState } from '../../models/public_api';
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
	selectCategoryPageConfigurationState: MemoizedSelector<Record<string, any>, DaffStatefulCategoryPageConfigurationState>;
	selectCategoryCurrentPage: MemoizedSelector<Record<string, any>, DaffStatefulCategoryPageConfigurationState['current_page']>;
	selectCategoryTotalPages: MemoizedSelector<Record<string, any>, DaffStatefulCategoryPageConfigurationState['total_pages']>;
	selectCategoryPageSize: MemoizedSelector<Record<string, any>, DaffStatefulCategoryPageConfigurationState['page_size']>;
	selectCategoryFilters: MemoizedSelector<Record<string, any>, DaffStatefulCategoryPageConfigurationState['filters']>;
	selectCategorySortOptions: MemoizedSelector<Record<string, any>, DaffStatefulCategoryPageConfigurationState['sort_options']['options']>;
	selectCategoryPageProductIds: MemoizedSelector<Record<string, any>, DaffStatefulCategoryPageConfigurationState['product_ids']>;
	selectIsCategoryPageEmpty: MemoizedSelector<Record<string, any>, boolean>;
	selectCategoryPageTotalProducts: MemoizedSelector<Record<string, any>, DaffStatefulCategoryPageConfigurationState['total_products']>;
	selectCategoryPageFilterRequests: MemoizedSelector<Record<string, any>, DaffStatefulCategoryPageConfigurationState['filter_requests']>;
	selectCategoryPageAppliedFilters: MemoizedSelector<Record<string, any>, DaffCategoryAppliedFilter[]>;
	selectCategoryPageAppliedSortOption: MemoizedSelector<Record<string, any>, DaffStatefulCategoryPageConfigurationState['applied_sort_option']>;
	selectCategoryPageAppliedSortDirection: MemoizedSelector<Record<string, any>, DaffStatefulCategoryPageConfigurationState['applied_sort_direction']>;
	selectCategoryPageState: MemoizedSelector<Record<string, any>, DaffStatefulCategoryPageConfigurationState['daffState']>;
	selectSelectedCategoryId: MemoizedSelector<Record<string, any>, DaffStatefulCategoryPageConfigurationState['id']>;
	selectCategoryLoading: MemoizedSelector<Record<string, any>, boolean>;
	selectCategoryProductsLoading: MemoizedSelector<Record<string, any>, boolean>;
	selectCategoryErrors: MemoizedSelector<Record<string, any>, string[]>;
  selectCategoryPageMutating: MemoizedSelector<Record<string, any>, boolean>;
  selectCategoryPageResolving: MemoizedSelector<Record<string, any>, boolean>;
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
    (state: DaffStatefulCategoryPageConfigurationState) => state.current_page,
  );

  const selectCategoryTotalPages = createSelector(
    selectCategoryPageConfigurationState,
    (state: DaffStatefulCategoryPageConfigurationState) => state.total_pages,
  );

  const selectCategoryPageSize = createSelector(
    selectCategoryPageConfigurationState,
    (state: DaffStatefulCategoryPageConfigurationState) => state.page_size,
  );

  const selectCategoryFilters = createSelector(
    selectCategoryPageConfigurationState,
    (state: DaffStatefulCategoryPageConfigurationState) => state.filters,
  );

  const selectCategorySortOptions = createSelector(
    selectCategoryPageConfigurationState,
    (state: DaffStatefulCategoryPageConfigurationState) => state.sort_options.options,
  );

  const selectCategoryPageProductIds = createSelector(
    selectCategoryPageConfigurationState,
    (state: DaffStatefulCategoryPageConfigurationState) => state.product_ids,
  );

  const selectIsCategoryPageEmpty = createSelector(
    selectCategoryPageProductIds,
    (state: V['product_ids']) => !state.length,
  );

  const selectCategoryPageTotalProducts = createSelector(
    selectCategoryPageConfigurationState,
    (state: DaffStatefulCategoryPageConfigurationState) => state.total_products,
  );

  const selectCategoryPageFilterRequests = createSelector(
    selectCategoryPageConfigurationState,
    (state: DaffStatefulCategoryPageConfigurationState) => state.filter_requests,
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
    (state: DaffStatefulCategoryPageConfigurationState) => state.applied_sort_option,
  );

  const selectCategoryPageAppliedSortDirection = createSelector(
    selectCategoryPageConfigurationState,
    (state: DaffStatefulCategoryPageConfigurationState) => state.applied_sort_direction,
  );

  const selectCategoryPageState = createSelector(
    selectCategoryPageConfigurationState,
    (state: DaffStatefulCategoryPageConfigurationState) => state.daffState,
  );

  /**
   * Selected Category Id State
   */
  const selectSelectedCategoryId = createSelector(
    selectCategoryPageConfigurationState,
    (state: DaffStatefulCategoryPageConfigurationState) => state.id,
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

  const selectCategoryPageMutating = createSelector(
    selectCategoryPageState,
    (daffState: DaffStatefulCategoryPageConfigurationState['daffState']) => daffState === DaffState.Mutating,
  );

  const selectCategoryPageResolving = createSelector(
    selectCategoryPageState,
    (daffState: DaffStatefulCategoryPageConfigurationState['daffState']) => daffState === DaffState.Resolving,
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
    selectCategoryPageState,
    selectSelectedCategoryId,
    selectCategoryLoading,
    selectCategoryProductsLoading,
    selectCategoryErrors,
    selectCategoryPageMutating,
    selectCategoryPageResolving,
  };
};

export const getDaffCategoryPageSelectors = (() => {
  let cache;
  return <V extends DaffGenericCategory<V>>(): DaffCategoryPageMemoizedSelectors<V> => cache = cache
    ? cache
    : createCategoryPageSelectors<V>();
})();
