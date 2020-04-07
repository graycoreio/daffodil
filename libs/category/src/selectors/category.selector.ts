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

interface DaffCategoryMemoizedSelectors<T extends DaffGenericCategory<T>, V extends DaffCategoryPageConfigurationState> {
	selectCategoryFeatureState: MemoizedSelector<object, DaffCategoryReducersState<T, V>>;
	selectCategoryState: MemoizedSelector<object, DaffCategoryReducerState<V>>;
	selectCategoryPageConfigurationState: MemoizedSelector<object, V>;
	selectCategoryCurrentPage: MemoizedSelector<object, V['current_page']>;
	selectCategoryTotalPages: MemoizedSelector<object, V['total_pages']>;
	selectCategoryPageSize: MemoizedSelector<object, V['page_size']>;
	selectCategoryFilters: MemoizedSelector<object, V['filters']>;
	selectCategorySortOptions: MemoizedSelector<object, V['sort_options']>;
	selectCategoryPageProductIds: MemoizedSelector<object, V['product_ids']>;
	selectIsCategoryPageEmpty: MemoizedSelector<object, boolean>;
	selectCategoryPageTotalProducts: MemoizedSelector<object, V['total_products']>;
	selectCategoryPageFilterRequests: MemoizedSelector<object, V['filter_requests']>;
	selectCategoryPageAppliedFilters: MemoizedSelector<object, DaffCategoryAppliedFilter[]>;
	selectCategoryPageAppliedSortOption: MemoizedSelector<object, V['applied_sort_option']>;
	selectCategoryPageAppliedSortDirection: MemoizedSelector<object, V['applied_sort_direction']>;
	selectSelectedCategoryId: MemoizedSelector<object, V['id']>;
	selectCategoryLoading: MemoizedSelector<object, boolean>;
	selectCategoryProductsLoading: MemoizedSelector<object, boolean>;
	selectCategoryErrors: MemoizedSelector<object, string[]>;
	selectCategoryEntitiesState: MemoizedSelector<object, EntityState<T>>;
	selectCategoryIds: MemoizedSelector<object, EntityState<T>['ids']>;
	selectCategoryEntities: MemoizedSelector<object, Dictionary<T>>;
	selectAllCategories: MemoizedSelector<object, T[]>;
	selectCategoryTotal: MemoizedSelector<object, number>;
	selectSelectedCategory: MemoizedSelector<object, T>;
	selectCategoryPageProducts: MemoizedSelector<object, DaffProductUnion[]>;
	selectCategory: MemoizedSelectorWithProps<object, object, T>;
	selectProductsByCategory: MemoizedSelectorWithProps<object, object, DaffProductUnion[]>;
	selectTotalProductsByCategory: MemoizedSelectorWithProps<object, object, number>;
}

export const createCategoryFeatureSelectors = <T extends DaffGenericCategory<T>, V extends DaffCategoryPageConfigurationState>(): DaffCategoryMemoizedSelectors<T, V> => {
	const selectCategoryFeatureState = createFeatureSelector<DaffCategoryReducersState<T, V>>('category');

	/**
	 * Category State
	 */
	const selectCategoryState = createSelector(
		selectCategoryFeatureState,
		(state: DaffCategoryReducersState<T, V>) => state.category
	);

	/**
	 * CategoryPageConfigurationState State
	 */
	const selectCategoryPageConfigurationState = createSelector(
		selectCategoryState,
		(state: DaffCategoryReducerState<V>) => state.categoryPageConfigurationState
	);

	const selectCategoryCurrentPage = createSelector(
		selectCategoryPageConfigurationState,
		(state: V) => state.current_page
	);

	const selectCategoryTotalPages = createSelector(
		selectCategoryPageConfigurationState,
		(state: V) => state.total_pages
	);

	const selectCategoryPageSize = createSelector(
		selectCategoryPageConfigurationState,
		(state: V) => state.page_size
	);

	const selectCategoryFilters = createSelector(
		selectCategoryPageConfigurationState,
		(state: V) => state.filters
	);

	const selectCategorySortOptions = createSelector(
		selectCategoryPageConfigurationState,
		(state: V) => state.sort_options
	);

	const selectCategoryPageProductIds = createSelector(
		selectCategoryPageConfigurationState,
		(state: V) => state.product_ids
	);

	const selectIsCategoryPageEmpty = createSelector(
		selectCategoryPageProductIds,
		(state: V['product_ids']) => !state.length
	);

	const selectCategoryPageTotalProducts = createSelector(
		selectCategoryPageConfigurationState,
		(state: V) => state.total_products
	);

	const selectCategoryPageFilterRequests = createSelector(
		selectCategoryPageConfigurationState,
		(state: V) => state.filter_requests
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
		(state: V) => state.applied_sort_option
	);

	const selectCategoryPageAppliedSortDirection = createSelector(
		selectCategoryPageConfigurationState,
		(state: V) => state.applied_sort_direction
	);

	/**
	 * Selected Category Id State
	 */
	const selectSelectedCategoryId = createSelector(
		selectCategoryPageConfigurationState,
		(state: V) => state.id
	);

	/**
	 * Category Loading State
	 */
	const selectCategoryLoading = createSelector(
		selectCategoryState,
		(state: DaffCategoryReducerState<V>) => state.categoryLoading
	);

	/**
	 * Category Products Loading State
	 */
	const selectCategoryProductsLoading = createSelector(
		selectCategoryState,
		(state: DaffCategoryReducerState<V>) => state.productsLoading
	);

	/**
	 * Load Category Errors
	 */
	const selectCategoryErrors = createSelector(
		selectCategoryState,
		(state: DaffCategoryReducerState<V>) => state.errors
	);

	/**
	 * Category Entities State
	 */
	const selectCategoryEntitiesState = createSelector(
		selectCategoryFeatureState,
		(state: DaffCategoryReducersState<T, V>) => state.categoryEntities
	);

	const selectCategoryIds = createSelector(
		selectCategoryEntitiesState,
		daffCategoryEntitiesAdapter<T>().getSelectors().selectIds
	);

	const selectCategoryEntities = createSelector(
		selectCategoryEntitiesState,
		daffCategoryEntitiesAdapter<T>().getSelectors().selectEntities
	);

	const selectAllCategories = createSelector(
		selectCategoryEntitiesState,
		daffCategoryEntitiesAdapter<T>().getSelectors().selectAll
	);

	const selectCategoryTotal = createSelector(
		selectCategoryEntitiesState,
		daffCategoryEntitiesAdapter<T>().getSelectors().selectTotal
	);

	/**
	 * Combinatoric Category Selectors
	 */
	const selectSelectedCategory = createSelector(
		selectCategoryEntities,
		selectSelectedCategoryId,
		(entities: Dictionary<T>, selectedCategoryId: string) => entities[selectedCategoryId]
	);

	const selectCategoryPageProducts = createSelector(
		selectCategoryPageProductIds,
		selectProductEntities,
		(ids, products: Dictionary<DaffProductUnion>) => ids.map(id => products[id]).filter(p => p != null)
	);

	const selectCategory = createSelector(
		selectCategoryEntities,
		(entities: Dictionary<T>, props) =>  entities[props.id]
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

export const memoizeDaffCategoryFeatureSelectors = () => {
	let cache;
	return <T extends DaffGenericCategory<T>, V extends DaffCategoryPageConfigurationState>(): DaffCategoryMemoizedSelectors<T, V> => cache = cache 
		? cache 
		: createCategoryFeatureSelectors<T, V>();
}

export const getDaffCategorySelectors = memoizeDaffCategoryFeatureSelectors();
