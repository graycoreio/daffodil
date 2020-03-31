import { createSelector } from '@ngrx/store';

import { DaffProductGridReducerState } from '../reducers/product-grid/product-grid-reducer-state.interface';
import { DaffProductReducersState } from '../reducers/product-reducers-state.interface';
import { selectProductState } from './product-feature.selector';

/**
 * Selector for Product Grid state.
 */
export const selectProductGridState = createSelector(
  selectProductState,
  (state: DaffProductReducersState) => state.productGrid
);

/**
 * Selector for product grid loading state.
 */
export const selectProductGridLoadingState = createSelector(
  selectProductGridState,
  (state: DaffProductGridReducerState) => state.loading
);
