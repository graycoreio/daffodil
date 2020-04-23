import { createSelector, MemoizedSelector } from '@ngrx/store';

import { getDaffProductFeatureSelector } from '../product-feature.selector';
import { DaffProductReducersState } from '../../reducers/product-reducers-state.interface';
import { DaffBestSellersReducerState } from '../../reducers/best-sellers/best-sellers-reducer-state.interface';
import { getDaffProductEntitiesSelectors } from '../product-entities/product-entities.selectors';
import { DaffProduct } from '../../models/product';

export interface DaffBestSellersMemoizedSelectors<T extends DaffProduct = DaffProduct> {
	selectBestSellersState: MemoizedSelector<object, DaffBestSellersReducerState>;
	selectBestSellersLoadingState: MemoizedSelector<object, boolean>;
	selectBestSellersIdsState: MemoizedSelector<object, string[]>;
	selectBestSellersProducts: MemoizedSelector<object, T[]>;
}

const createBestSellersSelectors = <T extends DaffProduct>(): DaffBestSellersMemoizedSelectors<T> => {
	const {
		selectAllProducts
	} = getDaffProductEntitiesSelectors<T>();
	const {
		selectProductState
	} = getDaffProductFeatureSelector<T>();
	/**
	 * Selector for Best Seller State
	 */
	const selectBestSellersState = createSelector(
		selectProductState,
		(state: DaffProductReducersState<T>) => state.bestSellers
	);

	/**
	 * Selector for the loading state of best selling products.
	 */
	const selectBestSellersLoadingState = createSelector(
		selectBestSellersState,
		(state: DaffBestSellersReducerState) => state.loading
	);

	/**
	 * Selector for the IDs of best selling products.
	 */
	const selectBestSellersIdsState = createSelector(
		selectBestSellersState,
		(state: DaffBestSellersReducerState) => state.productIds
	);

	/**
	 * Selector for the best selling products.
	 */
	const selectBestSellersProducts = createSelector(
		selectBestSellersIdsState,
		selectAllProducts,
		(ids: string[], products: T[]) => products.filter(product => ids.indexOf(product.id) > -1)
	)

	return { 
		selectBestSellersState,
		selectBestSellersLoadingState,
		selectBestSellersIdsState,
		selectBestSellersProducts
	}
}

export const getDaffBestSellersSelectors = (() => {
	let cache;
	return <T extends DaffProduct>(): DaffBestSellersMemoizedSelectors<T> => cache = cache 
		? cache 
		: createBestSellersSelectors<T>();
})();
