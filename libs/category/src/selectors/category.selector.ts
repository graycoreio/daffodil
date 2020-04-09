import { createSelector, createFeatureSelector, MemoizedSelector, MemoizedSelectorWithProps } from '@ngrx/store';
import { Dictionary, EntityState } from '@ngrx/entity';

import { DaffProductUnion, selectProductEntities, selectAllProducts } from '@daffodil/product';

import { DaffCategoryReducerState } from '../reducers/category/category-reducer-state.interface';
import { DaffCategoryReducersState } from '../reducers/category-reducers.interface';
import { daffCategoryEntitiesAdapter } from '../reducers/category-entities/category-entities-adapter';
import { DaffCategoryPageConfigurationState } from '../models/category-page-configuration-state';
import { DaffCategoryAppliedFilter } from '../models/category-applied-filter';
import { DaffCategoryFilterRequest } from '../models/requests/filter-request';
import { DaffCategoryFilter } from '../models/category-filter';
import { buildAppliedFilter } from './applied-filter/applied-filter-methods';
import { DaffGenericCategory } from '../models/generic-category';
import { DaffCategoryRequest } from '../models/requests/category-request';

export interface DaffCategoryMemoizedSelectors<T extends DaffCategoryRequest, V extends DaffGenericCategory<V>, U extends DaffCategoryPageConfigurationState<T>> {
	selectCategoryFeatureState: MemoizedSelector<object, DaffCategoryReducersState<T, V, U>>;
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
	selectCategoryEntitiesState: MemoizedSelector<object, EntityState<V>>;
	selectCategoryIds: MemoizedSelector<object, EntityState<V>['ids']>;
	selectCategoryEntities: MemoizedSelector<object, Dictionary<V>>;
	selectAllCategories: MemoizedSelector<object, V[]>;
	selectCategoryTotal: MemoizedSelector<object, number>;
	selectSelectedCategory: MemoizedSelector<object, V>;
	selectCategoryPageProducts: MemoizedSelector<object, DaffProductUnion[]>;
	selectCategory: MemoizedSelectorWithProps<object, object, V>;
	selectProductsByCategory: MemoizedSelectorWithProps<object, object, DaffProductUnion[]>;
	selectTotalProductsByCategory: MemoizedSelectorWithProps<object, object, number>;
}

const createCategoryFeatureSelectors = <T extends DaffCategoryRequest, V extends DaffGenericCategory<V>, U extends DaffCategoryPageConfigurationState<T>>(): DaffCategoryMemoizedSelectors<T, V, U> => {
	const selectCategoryFeatureState = createFeatureSelector<DaffCategoryReducersState<T, V, U>>('category');

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

	/**
	 * Category Entities State
	 */
	const selectCategoryEntitiesState = createSelector(
		selectCategoryFeatureState,
		(state: DaffCategoryReducersState<T, V, U>) => state.categoryEntities
	);

	const selectCategoryIds = createSelector(
		selectCategoryEntitiesState,
		daffCategoryEntitiesAdapter<V>().getSelectors().selectIds
	);

	const selectCategoryEntities = createSelector(
		selectCategoryEntitiesState,
		daffCategoryEntitiesAdapter<V>().getSelectors().selectEntities
	);

	const selectAllCategories = createSelector(
		selectCategoryEntitiesState,
		daffCategoryEntitiesAdapter<V>().getSelectors().selectAll
	);

	const selectCategoryTotal = createSelector(
		selectCategoryEntitiesState,
		daffCategoryEntitiesAdapter<V>().getSelectors().selectTotal
	);

	/**
	 * Combinatoric Category Selectors
	 */
	const selectSelectedCategory = createSelector(
		selectCategoryEntities,
		selectSelectedCategoryId,
		(entities: Dictionary<V>, selectedCategoryId: string) => entities[selectedCategoryId]
	);

	const selectCategoryPageProducts = createSelector(
		selectCategoryPageProductIds,
		selectProductEntities,
		(ids, products: Dictionary<DaffProductUnion>) => ids.map(id => products[id]).filter(p => p != null)
	);

	const selectCategory = createSelector(
		selectCategoryEntities,
		(entities: Dictionary<V>, props) =>  entities[props.id]
	);

	const selectProductsByCategory = createSelector(
		selectCategoryEntities,
		selectAllProducts,
		(entities, products, props) => entities[props.id] && entities[props.id].product_ids
			? products.filter(product => entities[props.id].product_ids.indexOf(product.id) >= 0)
			: null
	);

	const selectTotalProductsByCategory = createSelector(
		selectCategoryEntities,
		selectAllProducts,
		(entities, products, props) => selectProductsByCategory.projector(entities, products, { id: props.id })
			? selectProductsByCategory.projector(entities, products, { id: props.id }).length
			: null
	);

	return { 
		selectCategoryFeatureState,
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
		selectCategoryEntitiesState,
		selectCategoryIds,
		selectCategoryEntities,
		selectAllCategories,
		selectCategoryTotal,
		selectSelectedCategory,
		selectCategoryPageProducts,
		selectCategory,
		selectProductsByCategory,
		selectTotalProductsByCategory
	}
}

export const getDaffCategorySelectors = (() => {
	let cache;
	return <T extends DaffCategoryRequest, V extends DaffGenericCategory<V>, U extends DaffCategoryPageConfigurationState<T>>(): DaffCategoryMemoizedSelectors<T, V, U> => cache = cache 
		? cache 
		: createCategoryFeatureSelectors<T, V, U>();
})();
