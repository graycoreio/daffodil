import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffProduct } from '@daffodil/product';

import { DaffBestSellersReducerState } from '../../reducers/best-sellers/best-sellers-reducer-state.interface';
import { DaffProductReducersState } from '../../reducers/product-reducers-state.interface';
import { getDaffProductEntitiesSelectors } from '../product-entities/product-entities.selectors';
import { getDaffProductFeatureSelector } from '../product-feature.selector';

export interface DaffBestSellersMemoizedSelectors<T extends DaffProduct = DaffProduct> {
	selectBestSellersState: MemoizedSelector<Record<string, any>, DaffBestSellersReducerState>;
	selectBestSellersLoadingState: MemoizedSelector<Record<string, any>, boolean>;
	selectBestSellersIdsState: MemoizedSelector<Record<string, any>, T['id'][]>;
	selectBestSellersProducts: MemoizedSelector<Record<string, any>, T[]>;
}

const createBestSellersSelectors = <T extends DaffProduct>(): DaffBestSellersMemoizedSelectors<T> => {
  const {
    selectAllProducts,
  } = getDaffProductEntitiesSelectors<T>();
  const {
    selectProductState,
  } = getDaffProductFeatureSelector<T>();
  /**
   * Selector for Best Seller State
   */
  const selectBestSellersState = createSelector(
    selectProductState,
    (state: DaffProductReducersState<T>) => state.bestSellers,
  );

  /**
   * Selector for the loading state of best selling products.
   */
  const selectBestSellersLoadingState = createSelector(
    selectBestSellersState,
    (state: DaffBestSellersReducerState) => state.loading,
  );

  /**
   * Selector for the IDs of best selling products.
   */
  const selectBestSellersIdsState = createSelector(
    selectBestSellersState,
    (state: DaffBestSellersReducerState) => state.productIds,
  );

  /**
   * Selector for the best selling products.
   */
  const selectBestSellersProducts = createSelector(
    selectBestSellersIdsState,
    selectAllProducts,
    (ids: T['id'][], products: T[]) => products.filter(product => ids.indexOf(product.id) > -1),
  );

  return {
    selectBestSellersState,
    selectBestSellersLoadingState,
    selectBestSellersIdsState,
    selectBestSellersProducts,
  };
};

export const getDaffBestSellersSelectors = (() => {
  let cache;
  return <T extends DaffProduct>(): DaffBestSellersMemoizedSelectors<T> => cache = cache
    ? cache
    : createBestSellersSelectors<T>();
})();
