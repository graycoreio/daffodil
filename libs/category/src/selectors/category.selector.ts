import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { CategoryReducerState } from '../reducers/category/category-reducer-state.interface';
import { CategoryReducersState } from '../reducers/category-reducers.interface';
import { categoryEntitiesAdapter } from '../reducers/category-entities/category-entities-adapter';
import { DaffCategory } from '../models/category';
import { DaffCategoryPageConfigurationState } from '../models/category-page-configuration-state';

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
  (state: CategoryReducerState) => state.loading
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
