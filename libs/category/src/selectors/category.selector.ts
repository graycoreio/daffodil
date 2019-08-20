import { createSelector, createFeatureSelector } from '@ngrx/store';

import { CategoryReducerState } from '../reducers/category/category-reducer-state.interface';
import { CategoryReducersState } from '../reducers/category-reducers.interface';

/**
 * Category Feature State
 */
const selectCategoryFeatureState = createFeatureSelector<CategoryReducersState>('category');

/**
 * Category State
 */
const selectCategoryState = createSelector(
  selectCategoryFeatureState,
  (state: CategoryReducersState) => state.category
);

export const DaffCategorySelectors = {
  selectCategory: createSelector(
    selectCategoryState,
    (state: CategoryReducerState) => state.category
  ),
  selectCategoryLoading: createSelector(
    selectCategoryState,
    (state: CategoryReducerState) => state.loading
  ),
  selectCategoryErrors: createSelector(
    selectCategoryState,
    (state: CategoryReducerState) => state.errors
  )
}
