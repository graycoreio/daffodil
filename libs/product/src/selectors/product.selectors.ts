import { createSelector, MemoizedSelector } from '@ngrx/store';

import { DaffProductReducersState } from '../reducers/product-reducers-state.interface';
import { selectProductState } from './product-feature.selector';
import { DaffProductReducerState } from '../reducers/product/product-reducer-state.interface';
import { DaffProduct } from '../models/product';

/**
 * Selector for the selected product.
 */
export function selectSelectedProductState<T extends DaffProduct>():
	MemoizedSelector<object, DaffProductReducerState> {
	return createSelector(
		selectProductState(),
		(state: DaffProductReducersState<T>) => state.product
);
}

/**
 * Selector for the selected product's ID.
 */
export function selectSelectedProductId():
	MemoizedSelector<object, string> {
	return createSelector(
		selectSelectedProductState(),
  (state: DaffProductReducerState) => state.selectedProductId
);
}

/**
 * Selector for the quantity of the product.
 */
export function selectSelectedProductQty():
	MemoizedSelector<object, number> {
	return createSelector(
		selectSelectedProductState(),
  (state: DaffProductReducerState) => state.qty
);
}

/**
 * Selector for the loading state of the selected product.
 */
export function selectSelectedProductLoadingState():
	MemoizedSelector<object, boolean> {
	return createSelector(
		selectSelectedProductState(),
  (state: DaffProductReducerState) => state.loading
);
}

/**
 * Selects the selected product from product state and the selected product ID.
 */
export function selectSelectedProduct<T extends DaffProduct>():
	MemoizedSelector<object, T> {
	return createSelector(
		selectProductState(),
		selectSelectedProductId(),
		(state: DaffProductReducersState<T>, id: string) => state.products.entities[id]
	);
}
