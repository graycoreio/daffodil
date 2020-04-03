import { createSelector, MemoizedSelector } from '@ngrx/store';

import { DaffProductGridReducerState } from '../reducers/product-grid/product-grid-reducer-state.interface';
import { DaffProductReducersState } from '../reducers/product-reducers-state.interface';
import { selectProductState } from './product-feature.selector';
import { DaffProduct } from '../models/product';

/**
 * Selector for Product Grid state.
 */
export function selectProductGridState<T extends DaffProduct>():
	MemoizedSelector<object, DaffProductGridReducerState<T>> {
	return createSelector(
		selectProductState(),
		(state: DaffProductReducersState<T>) => state.productGrid
	);
}

/**
 * Selector for product grid loading state.
 */
export function selectProductGridLoadingState<T extends DaffProduct>():
	MemoizedSelector<object, boolean> {
	return createSelector(
		selectProductGridState(),
		(state: DaffProductGridReducerState<T>) => state.loading
	);
}
