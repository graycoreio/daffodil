import { ActionReducerMap, createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import * as fromCategory from './category.reducer';
import * as fromCategories from './categories.reducer';
import * as fromCategoryEntities from './category-entities.reducer';
import { DaffCategory } from '../models/category';

export interface State {
  category: fromCategory.State;
  categories: fromCategories.State;
  categoryEntities: fromCategoryEntities.State;
}

export const reducers : ActionReducerMap<State> = {
  category: fromCategory.reducer,
  categories: fromCategories.reducer,
  categoryEntities: fromCategoryEntities.reducer
}

/**
 * Category Feature State
 */
const selectCategoryFeatureState = createFeatureSelector<State>('category');

/**
 * Category State
 */
const selectCategoryState = createSelector(
  selectCategoryFeatureState,
  (state: State) => state.category
);

export const selectCategoryLoading = createSelector(
  selectCategoryState,
  (state: fromCategory.State) => state.loading
);

export const selectCategoryErrors = createSelector(
  selectCategoryState,
  (state: fromCategory.State) => state.errors
);

/**
 * Categories State
 */
const selectCategoriesState = createSelector(
  selectCategoryFeatureState,
  (state: State) => state.categories
);

export const selectCategoriesLoading = createSelector(
  selectCategoriesState,
  (state: fromCategories.State) => state.loading
);

export const selectCategoriesErrors = createSelector(
  selectCategoriesState,
  (state: fromCategories.State) => state.errors
);

/**
 * Category Entities
 */
export const selectCategoryEntitiesState = createSelector(
  selectCategoryFeatureState,
  (state: State) => state.categoryEntities
)

export const selectCategoryIds = createSelector(
  selectCategoryEntitiesState,
  fromCategoryEntities.selectCategoryIds
);

export const selectCategoryEntities : MemoizedSelector<object, Dictionary<DaffCategory>> = createSelector(
  selectCategoryEntitiesState,
  fromCategoryEntities.selectCategoryEntities
);

export const selectAllCategories = createSelector(
  selectCategoryEntitiesState,
  fromCategoryEntities.selectAllCategories
);

export const selectCategoryTotal = createSelector(
  selectCategoryEntitiesState,
  fromCategoryEntities.selectCategoryTotal
);

/**
 * Select Category by Id
 */
export const selectCategory = createSelector(
  selectCategoryEntitiesState,
  (categories, props) => categories.entities[props.id]
);
