import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { fromProduct, DaffProductUnion } from '@daffodil/product';

import { CategoryReducerState } from '../reducers/category/category-reducer-state.interface';
import { CategoryReducersState } from '../reducers/category-reducers.interface';
import { categoryEntitiesAdapter } from '../reducers/category-entities/category-entities-adapter';
import { DaffCategoryPageConfigurationState } from '../models/category-page-configuration-state';
import { DaffCategory } from '../models/category';

const { selectIds, selectEntities, selectAll, selectTotal } = categoryEntitiesAdapter.getSelectors();

/**
 * Category Feature State
 */
export const selectCategoryFeatureState = createFeatureSelector<CategoryReducersState>('category');

/**
 * Category State
 */
export const selectCategoryState = createSelector(
  selectCategoryFeatureState,
  (state: CategoryReducersState) => state.category
);

/**
 * CategoryPageConfigurationState State
 */
export const selectCategoryPageConfigurationState = createSelector(
  selectCategoryState,
  (state: CategoryReducerState) => state.categoryPageConfigurationState
);

export const selectCategoryCurrentPage = createSelector(
  selectCategoryPageConfigurationState,
  (state: DaffCategoryPageConfigurationState) => state.current_page
);

export const selectCategoryTotalPages = createSelector(
  selectCategoryPageConfigurationState,
  (state: DaffCategoryPageConfigurationState) => state.total_pages
);

export const selectCategoryPageSize = createSelector(
  selectCategoryPageConfigurationState,
  (state: DaffCategoryPageConfigurationState) => state.page_size
);

export const selectCategoryFilters = createSelector(
  selectCategoryPageConfigurationState,
  (state: DaffCategoryPageConfigurationState) => state.filters
);

export const selectCategorySortOptions = createSelector(
  selectCategoryPageConfigurationState,
  (state: DaffCategoryPageConfigurationState) => state.sort_options
);

export const selectCategoryPageProductIds = createSelector(
  selectCategoryPageConfigurationState,
  (state: DaffCategoryPageConfigurationState) => state.product_ids
);

export const selectCategoryPageTotalProducts = createSelector(
  selectCategoryPageConfigurationState,
  (state: DaffCategoryPageConfigurationState) => state.total_products
);

export const selectCategoryPageAppliedFilters = createSelector(
	selectCategoryPageConfigurationState,
	(state: DaffCategoryPageConfigurationState) => state.applied_filters
);

export const selectCategoryPageAppliedSortOption = createSelector(
	selectCategoryPageConfigurationState,
	(state: DaffCategoryPageConfigurationState) => state.applied_sort_option
);

export const selectCategoryPageAppliedSortDirection = createSelector(
	selectCategoryPageConfigurationState,
	(state: DaffCategoryPageConfigurationState) => state.applied_sort_direction
);

/**
 * Selected Category Id State
 */
export const selectSelectedCategoryId = createSelector(
  selectCategoryPageConfigurationState,
  (state: DaffCategoryPageConfigurationState) => state.id
);

/**
 * Category Loading State
 */
export const selectCategoryLoading = createSelector(
  selectCategoryState,
  (state: CategoryReducerState) => state.categoryLoading
);

/**
 * Category Products Loading State
 */
export const selectCategoryProductsLoading = createSelector(
  selectCategoryState,
  (state: CategoryReducerState) => state.productsLoading
);

/**
 * Load Category Errors
 */
export const selectCategoryErrors = createSelector(
  selectCategoryState,
  (state: CategoryReducerState) => state.errors
);

/**
 * Category Entities State
 */
export const selectCategoryEntitiesState = createSelector(
  selectCategoryFeatureState,
  (state: CategoryReducersState) => state.categoryEntities
);

export const selectCategoryIds = createSelector(
  selectCategoryEntitiesState,
  selectIds
);

export const selectCategoryEntities = createSelector(
  selectCategoryEntitiesState,
  selectEntities
);

export const selectAllCategories = createSelector(
  selectCategoryEntitiesState,
  selectAll
);

export const selectCategoryTotal = createSelector(
  selectCategoryEntitiesState,
  selectTotal
);

/**
 * Combinatoric Category Selectors
 */
export const selectSelectedCategory = createSelector(
  selectCategoryEntities,
  selectSelectedCategoryId,
  (entities: Dictionary<DaffCategory>, selectedCategoryId: string) => entities[selectedCategoryId]
);

export const selectCategoryPageProducts = createSelector(
  selectCategoryPageProductIds,
  fromProduct.selectAllProducts,
  (ids, products: DaffProductUnion[]) => products.filter(product => ids.indexOf(product.id) >= 0)
);

export const selectCategory = createSelector(
	selectCategoryEntities,
	(entities, props) =>  entities[props.id]
);

export const selectProductsByCategory = createSelector(
	selectCategoryEntities,
	fromProduct.selectAllProducts,
	(entities, products, props) => entities[props.id] && entities[props.id].product_ids
		? products.filter(product => entities[props.id].product_ids.indexOf(product.id) >= 0)
		: null
);

export const selectTotalProductsByCategory = createSelector(
	selectCategoryEntities,
	fromProduct.selectAllProducts,
	(entities, products, props) => selectProductsByCategory.projector(entities, products, { id: props.id })
		? selectProductsByCategory.projector(entities, products, { id: props.id }).length
		: null
);