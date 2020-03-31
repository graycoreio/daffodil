import { createSelector, MemoizedSelector } from '@ngrx/store';

import { selectProductState } from './product-feature.selector';
import { DaffProductReducersState } from '../reducers/product-reducers-state.interface';
import { DaffBestSellersReducerState } from '../reducers/best-sellers/best-sellers-reducer-state.interface';
import { DaffProductUnion } from '../models/product-union';
import { selectAllProducts } from './product-entities.selectors';

/**
 * Selector for Best Seller State
 */
export const selectBestSellersState = createSelector(
  selectProductState,
  (state: DaffProductReducersState) => state.bestSellers
);
/**
 * Selector for the loading state of best selling products.
 */
export const selectBestSellersLoadingState : MemoizedSelector<object, boolean> = createSelector(
  selectBestSellersState,
  (state: DaffBestSellersReducerState) => state.loading
);
/**
 * Selector for the IDs of best selling products.
 */
export const selectBestSellersIdsState : MemoizedSelector<object, string[]> = createSelector(
  selectBestSellersState,
  (state: DaffBestSellersReducerState) => state.productIds
);
/**
 * Selector for the best selling products.
 */
export const selectBestSellersProducts: MemoizedSelector<object, DaffProductUnion[]> = createSelector(
  selectBestSellersIdsState,
  selectAllProducts,
  (ids: string[], products: DaffProductUnion[]) => products.filter(product => ids.indexOf(product.id) > -1)
)
