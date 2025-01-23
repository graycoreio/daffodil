import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffProduct } from '@daffodil/product';

import { DaffBestSellersReducerState } from '../../reducers/best-sellers/best-sellers-reducer-state.interface';
import {
  DaffProductReducersState,
  DaffProductStateRootSlice,
} from '../../reducers/product-reducers-state.interface';
import { getDaffProductEntitiesSelectors } from '../product-entities/product-entities.selectors';
import { getDaffProductFeatureSelector } from '../product-feature.selector';

/**
 * An interface for the available best sellers selectors.
 * @deprecated in favor of features from `@daffodil/related-products/state` and `@daffodil/upsell-products/state`.
 */
export interface DaffBestSellersMemoizedSelectors<T extends DaffProduct = DaffProduct> {
  /**
   * Selector for best sellers feature state
   */
  selectBestSellersState: MemoizedSelector<DaffProductStateRootSlice<T>, DaffBestSellersReducerState>;
  /**
   * Selector for the loading state of best selling products.
   */
  selectBestSellersLoadingState: MemoizedSelector<DaffProductStateRootSlice<T>, boolean>;
  /**
   * Selector for the IDs of best selling products.
   */
  selectBestSellersIdsState: MemoizedSelector<DaffProductStateRootSlice<T>, T['id'][]>;
  /**
   * Selector for the best selling products.
   */
  selectBestSellersProducts: MemoizedSelector<DaffProductStateRootSlice<T>, T[]>;
}

const createBestSellersSelectors = <T extends DaffProduct>(): DaffBestSellersMemoizedSelectors<T> => {
  const {
    selectAllProducts,
  } = getDaffProductEntitiesSelectors<T>();
  const {
    selectProductState,
  } = getDaffProductFeatureSelector<T>();

  const selectBestSellersState = createSelector(
    selectProductState,
    (state: DaffProductReducersState<T>) => state.bestSellers,
  );

  const selectBestSellersLoadingState = createSelector(
    selectBestSellersState,
    (state: DaffBestSellersReducerState) => state.loading,
  );

  const selectBestSellersIdsState = createSelector(
    selectBestSellersState,
    (state: DaffBestSellersReducerState) => state.productIds,
  );

  const selectBestSellersProducts = createSelector<DaffProductStateRootSlice<T>, [string[], T[]], T[]>(
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

/**
 * A function that returns all selectors related to best sellers state.
 *
 * Returns {@link DaffBestSellersMemoizedSelectors}.
 * @deprecated in favor of features from `@daffodil/related-products/state` and `@daffodil/upsell-products/state`.
 */
export const getDaffBestSellersSelectors = (() => {
  let cache;
  return <T extends DaffProduct>(): DaffBestSellersMemoizedSelectors<T> => cache = cache
    ? cache
    : createBestSellersSelectors<T>();
})();
