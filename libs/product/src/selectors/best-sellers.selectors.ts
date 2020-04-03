import { createSelector, MemoizedSelector } from '@ngrx/store';

import { selectProductState } from './product-feature.selector';
import { DaffProductReducersState } from '../reducers/product-reducers-state.interface';
import { DaffBestSellersReducerState } from '../reducers/best-sellers/best-sellers-reducer-state.interface';
import { selectAllProducts } from './product-entities.selectors';
import { DaffProduct } from '../models/product';

/**
 * Selector for Best Seller State
 */
export function selectBestSellersState<T extends DaffProduct>():
	MemoizedSelector<object, DaffBestSellersReducerState> {
	return createSelector(
		selectProductState(),
		(state: DaffProductReducersState<T>) => state.bestSellers
	);
}

/**
 * Selector for the loading state of best selling products.
 */
export function selectBestSellersLoadingState(): 
	MemoizedSelector<object, boolean> {
	return createSelector(
		selectBestSellersState(),
		(state: DaffBestSellersReducerState) => state.loading
	);
}

/**
 * Selector for the IDs of best selling products.
 */
export function selectBestSellersIdsState(): 
	MemoizedSelector<object, string[]> {
	return createSelector(
		selectBestSellersState(),
		(state: DaffBestSellersReducerState) => state.productIds
	);
}

/**
 * Selector for the best selling products.
 */
export function selectBestSellersProducts<T extends DaffProduct>(): 
	MemoizedSelector<object, T[]> {
	return createSelector(
		selectBestSellersIdsState(),
		selectAllProducts(),
		(ids: string[], products: T[]) => products.filter(product => ids.indexOf(product.id) > -1)
	)
}
