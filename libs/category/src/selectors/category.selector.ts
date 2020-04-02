import { createSelector, createFeatureSelector, MemoizedSelector, MemoizedSelectorWithProps } from '@ngrx/store';
import { Dictionary, EntityState } from '@ngrx/entity';

import { DaffProductUnion, selectProductEntities, selectAllProducts } from '@daffodil/product';

import { CategoryReducerState } from '../reducers/category/category-reducer-state.interface';
import { CategoryReducersState } from '../reducers/category-reducers.interface';
import { categoryEntitiesAdapter } from '../reducers/category-entities/category-entities-adapter';
import { DaffCategoryPageConfigurationState } from '../models/category-page-configuration-state';
import { DaffCategoryAppliedFilter } from '../models/category-applied-filter';
import { DaffCategoryFilterRequest } from '../models/requests/filter-request';
import { DaffCategoryFilter } from '../models/category-filter';
import { buildAppliedFilter } from './applied-filter/applied-filter-methods';
import { DaffGenericCategory } from '../models/generic-category';

/**
 * Category Feature State
 */
export function selectCategoryFeatureState<T extends DaffGenericCategory<T>, U extends DaffCategoryPageConfigurationState>(): 
	MemoizedSelector<object, CategoryReducersState<T, U>> {
	return createFeatureSelector<CategoryReducersState<T, U>>('category');
}

/**
 * Category State
 */
export function selectCategoryState<T extends DaffGenericCategory<T>, U extends DaffCategoryPageConfigurationState>():
	MemoizedSelector<object, CategoryReducerState<U>> {
	return createSelector(
		selectCategoryFeatureState(),
		(state: CategoryReducersState<T, U>) => state.category
	);
}

/**
 * CategoryPageConfigurationState State
 */
export function selectCategoryPageConfigurationState<T extends DaffCategoryPageConfigurationState>():
	MemoizedSelector<object, T> {
	return createSelector(
		selectCategoryState(),
		(state: CategoryReducerState<T>) => state.categoryPageConfigurationState
	);
}

export function selectCategoryCurrentPage():
	MemoizedSelector<object, DaffCategoryPageConfigurationState['current_page']> {
	return createSelector(
		selectCategoryPageConfigurationState(),
		(state: DaffCategoryPageConfigurationState) => state.current_page
	);
}

export function selectCategoryTotalPages():
	MemoizedSelector<object, DaffCategoryPageConfigurationState['total_pages']> {
	return createSelector(
		selectCategoryPageConfigurationState(),
		(state: DaffCategoryPageConfigurationState) => state.total_pages
	);
}

export function selectCategoryPageSize():
	MemoizedSelector<object, DaffCategoryPageConfigurationState['page_size']> {
	return createSelector(
		selectCategoryPageConfigurationState(),
		(state: DaffCategoryPageConfigurationState) => state.page_size
	);
}

export function selectCategoryFilters():
	MemoizedSelector<object, DaffCategoryPageConfigurationState['filters']> {
	return createSelector(
		selectCategoryPageConfigurationState(),
		(state: DaffCategoryPageConfigurationState) => state.filters
	);
}

export function selectCategorySortOptions():
	MemoizedSelector<object, DaffCategoryPageConfigurationState['sort_options']> {
	return createSelector(
		selectCategoryPageConfigurationState(),
		(state: DaffCategoryPageConfigurationState) => state.sort_options
	);
}

export function selectCategoryPageProductIds():
	MemoizedSelector<object, DaffCategoryPageConfigurationState['product_ids']> {
	return createSelector(
		selectCategoryPageConfigurationState(),
		(state: DaffCategoryPageConfigurationState) => state.product_ids
	);
}

export function selectIsCategoryPageEmpty():
	MemoizedSelector<object, boolean> {
	return createSelector(
		selectCategoryPageProductIds(),
		(state: DaffCategoryPageConfigurationState['product_ids']) => !state.length
	);
}

export function selectCategoryPageTotalProducts():
	MemoizedSelector<object, DaffCategoryPageConfigurationState['total_products']> {
	return createSelector(
		selectCategoryPageConfigurationState(),
		(state: DaffCategoryPageConfigurationState) => state.total_products
	);
}

export function selectCategoryPageFilterRequests():
	MemoizedSelector<object, DaffCategoryPageConfigurationState['filter_requests']> {
	return createSelector(
		selectCategoryPageConfigurationState(),
		(state: DaffCategoryPageConfigurationState) => state.filter_requests
	);
}

export function selectCategoryPageAppliedFilters():
	MemoizedSelector<object, DaffCategoryAppliedFilter[]> {
	return createSelector(
		selectCategoryPageFilterRequests(),
		selectCategoryFilters(),
		(filterRequests: DaffCategoryFilterRequest[], availableFilters: DaffCategoryFilter[]): DaffCategoryAppliedFilter[] => {
			if(!availableFilters.length) return [];
			return filterRequests.map(request => 
				availableFilters
					.filter(availableFilter => availableFilter.name === request.name)
					.map(filter => buildAppliedFilter(filter, request)).shift()
			);
		}
	);
}

export function selectCategoryPageAppliedSortOption():
	MemoizedSelector<object, DaffCategoryPageConfigurationState['applied_sort_option']> {
	return createSelector(
		selectCategoryPageConfigurationState(),
		(state: DaffCategoryPageConfigurationState) => state.applied_sort_option
	);
}

export function selectCategoryPageAppliedSortDirection():
	MemoizedSelector<object, DaffCategoryPageConfigurationState['applied_sort_direction']> {
	return createSelector(
		selectCategoryPageConfigurationState(),
		(state: DaffCategoryPageConfigurationState) => state.applied_sort_direction
	);
}

/**
 * Selected Category Id State
 */
export function selectSelectedCategoryId():
	MemoizedSelector<object, DaffCategoryPageConfigurationState['id']> {
	return createSelector(
		selectCategoryPageConfigurationState(),
		(state: DaffCategoryPageConfigurationState) => state.id
	);
}

/**
 * Category Loading State
 */
export function selectCategoryLoading():
	MemoizedSelector<object, boolean> {
	return createSelector(
		selectCategoryState(),
		(state: CategoryReducerState<DaffCategoryPageConfigurationState>) => state.categoryLoading
	);
}

/**
 * Category Products Loading State
 */
export function selectCategoryProductsLoading():
	MemoizedSelector<object, boolean> {
	return createSelector(
		selectCategoryState(),
		(state: CategoryReducerState<DaffCategoryPageConfigurationState>) => state.productsLoading
	);
}

/**
 * Load Category Errors
 */
export function selectCategoryErrors():
	MemoizedSelector<object, string[]> {
	return createSelector(
		selectCategoryState(),
		(state: CategoryReducerState<DaffCategoryPageConfigurationState>) => state.errors
	);
}

/**
 * Category Entities State
 */
export function selectCategoryEntitiesState<T extends DaffGenericCategory<T>, U extends DaffCategoryPageConfigurationState>():
	MemoizedSelector<object, EntityState<T>> {
	return createSelector(
		selectCategoryFeatureState(),
		(state: CategoryReducersState<T, U>) => state.categoryEntities
	);
}

export function selectCategoryIds<T extends DaffGenericCategory<T>>():
	MemoizedSelector<object, EntityState<T>['ids']> { 
	return createSelector(
		selectCategoryEntitiesState(),
		categoryEntitiesAdapter<T>().getSelectors().selectIds
	);
}

export function selectCategoryEntities<T extends DaffGenericCategory<T>>():
	MemoizedSelector<object, Dictionary<T>> { 
	return createSelector(
		selectCategoryEntitiesState(),
		categoryEntitiesAdapter<T>().getSelectors().selectEntities
	);
}

export function selectAllCategories<T extends DaffGenericCategory<T>>():
	MemoizedSelector<object, T[]> { 
	return createSelector(
		selectCategoryEntitiesState(),
		categoryEntitiesAdapter<T>().getSelectors().selectAll
	);
}

export function selectCategoryTotal<T extends DaffGenericCategory<T>>():
	MemoizedSelector<object, number> { 
	return createSelector(
		selectCategoryEntitiesState(),
		categoryEntitiesAdapter<T>().getSelectors().selectTotal
	);
}

/**
 * Combinatoric Category Selectors
 */
export function selectSelectedCategory<T extends DaffGenericCategory<T>>():
	MemoizedSelector<object, T> {
	return createSelector(
		selectCategoryEntities(),
		selectSelectedCategoryId(),
		(entities: Dictionary<T>, selectedCategoryId: string) => entities[selectedCategoryId]
	);
}

export function selectCategoryPageProducts():
	MemoizedSelector<object, DaffProductUnion[]> { 
	return createSelector(
		selectCategoryPageProductIds(),
		selectProductEntities,
		(ids, products: Dictionary<DaffProductUnion>) =>
			ids.map(id => products[id]).filter(p => p != null),
	);
}

export function selectCategory<T extends DaffGenericCategory<T>>():
	MemoizedSelectorWithProps<object, object, T> { 
	return createSelector(
		selectCategoryEntities(),
		(entities: Dictionary<T>, props) =>  entities[props.id]
	);
}

	export function selectProductsByCategory():
	MemoizedSelectorWithProps<object, object, DaffProductUnion[]> { 
	return createSelector(
		selectCategoryEntities(),
		selectAllProducts,
		(entities, products, props) => entities[props.id] && entities[props.id].product_ids
			? products.filter(product => entities[props.id].product_ids.indexOf(product.id) >= 0)
			: null
	);
}

export function selectTotalProductsByCategory():
	MemoizedSelectorWithProps<object, object, number> { 
	return createSelector(
		selectCategoryEntities(),
		selectAllProducts,
		(entities, products, props) => selectProductsByCategory().projector(entities, products, { id: props.id })
			? selectProductsByCategory().projector(entities, products, { id: props.id }).length
			: null
	);
}
