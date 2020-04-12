import { createSelector, MemoizedSelector } from '@ngrx/store';

import { DaffCategoryRequest } from '../../models/requests/category-request';
import { DaffGenericCategory } from '../../models/generic-category';
import { DaffCategoryPageConfigurationState } from '../../models/category-page-configuration-state';
import { DaffCategoryReducerState } from '../../reducers/category/category-reducer-state.interface';
import { DaffCategoryAppliedFilter } from '../../models/category-applied-filter';
import { DaffCategoryReducersState } from '../../reducers/category-reducers.interface';
import { getDaffCategoryFeatureSelector } from '../category-feature.selector';
import { DaffCategoryFilterRequest } from '../../models/requests/filter-request';
import { DaffCategoryFilter } from '../../models/category-filter';
import { buildAppliedFilter } from '../applied-filter/applied-filter-methods';

export interface DaffCategoryPageMemoizedSelectors<T extends DaffCategoryRequest, V extends DaffGenericCategory<V>, U extends DaffCategoryPageConfigurationState<T>> {
	selectCategoryState: MemoizedSelector<object, DaffCategoryReducerState<T, U>>;
	selectCategoryPageConfigurationState: MemoizedSelector<object, U>;
	selectCategoryCurrentPage: MemoizedSelector<object, U['current_page']>;
	selectCategoryTotalPages: MemoizedSelector<object, U['total_pages']>;
	selectCategoryPageSize: MemoizedSelector<object, U['page_size']>;
	selectCategoryFilters: MemoizedSelector<object, U['filters']>;
	selectCategorySortOptions: MemoizedSelector<object, U['sort_options']>;
	selectCategoryPageProductIds: MemoizedSelector<object, U['product_ids']>;
	selectIsCategoryPageEmpty: MemoizedSelector<object, boolean>;
	selectCategoryPageTotalProducts: MemoizedSelector<object, U['total_products']>;
	selectCategoryPageFilterRequests: MemoizedSelector<object, U['filter_requests']>;
	selectCategoryPageAppliedFilters: MemoizedSelector<object, DaffCategoryAppliedFilter[]>;
	selectCategoryPageAppliedSortOption: MemoizedSelector<object, U['applied_sort_option']>;
	selectCategoryPageAppliedSortDirection: MemoizedSelector<object, U['applied_sort_direction']>;
	selectSelectedCategoryId: MemoizedSelector<object, U['id']>;
	selectCategoryLoading: MemoizedSelector<object, boolean>;
	selectCategoryProductsLoading: MemoizedSelector<object, boolean>;
	selectCategoryErrors: MemoizedSelector<object, string[]>;
}

const createCategoryPageSelectors = <T extends DaffCategoryRequest, V extends DaffGenericCategory<V>, U extends DaffCategoryPageConfigurationState<T>>(): DaffCategoryPageMemoizedSelectors<T, V, U> => {
	const selectCategoryFeatureState = getDaffCategoryFeatureSelector<T, V, U>().selectCategoryFeatureState;

	/**
	 * Category State
	 */
	const selectCategoryState = createSelector(
		selectCategoryFeatureState,
		(state: DaffCategoryReducersState<T, V, U>) => state.category
	);

	/**
	 * CategoryPageConfigurationState State
	 */
	const selectCategoryPageConfigurationState = createSelector(
		selectCategoryState,
		(state: DaffCategoryReducerState<T, U>) => state.categoryPageConfigurationState
	);

	const selectCategoryCurrentPage = createSelector(
		selectCategoryPageConfigurationState,
		(state: U) => state.current_page
	);

	const selectCategoryTotalPages = createSelector(
		selectCategoryPageConfigurationState,
		(state: U) => state.total_pages
	);

	const selectCategoryPageSize = createSelector(
		selectCategoryPageConfigurationState,
		(state: U) => state.page_size
	);

	const selectCategoryFilters = createSelector(
		selectCategoryPageConfigurationState,
		(state: U) => state.filters
	);

	const selectCategorySortOptions = createSelector(
		selectCategoryPageConfigurationState,
		(state: U) => state.sort_options
	);

	const selectCategoryPageProductIds = createSelector(
		selectCategoryPageConfigurationState,
		(state: U) => state.product_ids
	);

	const selectIsCategoryPageEmpty = createSelector(
		selectCategoryPageProductIds,
		(state: V['product_ids']) => !state.length
	);

	const selectCategoryPageTotalProducts = createSelector(
		selectCategoryPageConfigurationState,
		(state: U) => state.total_products
	);

	const selectCategoryPageFilterRequests = createSelector(
		selectCategoryPageConfigurationState,
		(state: U) => state.filter_requests
	);

	const selectCategoryPageAppliedFilters = createSelector(
		selectCategoryPageFilterRequests,
		selectCategoryFilters,
		(filterRequests: DaffCategoryFilterRequest[], availableFilters: DaffCategoryFilter[]): DaffCategoryAppliedFilter[] => {
			if(!availableFilters.length) return [];
			return filterRequests.map(request => 
				availableFilters
					.filter(availableFilter => availableFilter.name === request.name)
					.map(filter => buildAppliedFilter(filter, request)).shift()
			);
		}
	);

	const selectCategoryPageAppliedSortOption = createSelector(
		selectCategoryPageConfigurationState,
		(state: U) => state.applied_sort_option
	);

	const selectCategoryPageAppliedSortDirection = createSelector(
		selectCategoryPageConfigurationState,
		(state: U) => state.applied_sort_direction
	);

	/**
	 * Selected Category Id State
	 */
	const selectSelectedCategoryId = createSelector(
		selectCategoryPageConfigurationState,
		(state: U) => state.id
	);

	/**
	 * Category Loading State
	 */
	const selectCategoryLoading = createSelector(
		selectCategoryState,
		(state: DaffCategoryReducerState<T, U>) => state.categoryLoading
	);

	/**
	 * Category Products Loading State
	 */
	const selectCategoryProductsLoading = createSelector(
		selectCategoryState,
		(state: DaffCategoryReducerState<T, U>) => state.productsLoading
	);

	/**
	 * Load Category Errors
	 */
	const selectCategoryErrors = createSelector(
		selectCategoryState,
		(state: DaffCategoryReducerState<T, U>) => state.errors
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
		selectCategoryErrors
	}
}

export const getDaffCategoryPageSelectors = (() => {
	let cache;
	return <T extends DaffCategoryRequest, V extends DaffGenericCategory<V>, U extends DaffCategoryPageConfigurationState<T>>(): DaffCategoryPageMemoizedSelectors<T, V, U> => cache = cache 
		? cache 
		: createCategoryPageSelectors<T, V, U>();
})();
