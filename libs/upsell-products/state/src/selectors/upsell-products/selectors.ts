import { Dictionary } from '@ngrx/entity';
import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffProduct } from '@daffodil/product';
import { getDaffProductSelectors } from '@daffodil/product/state';

import {
  DaffUpsellProductsReducersState,
  DaffUpsellProductStateRootSlice,
} from '../../reducers/reducers-state.interface';
import { getDaffUpsellProductsFeatureSelector } from '../feature.selector';

/**
 * An interface for selectors of upsell products for the current product page.
 */
export interface DaffUpsellProductsMemoizedSelectors<T extends DaffProduct = DaffProduct> {
  /**
   * Selects the IDs of the upsell products.
   */
  selectUpsellProductIds: MemoizedSelector<DaffUpsellProductStateRootSlice, T['id'][]>;

  /**
   * Selects the upsell products.
   */
  selectUpsellProducts: MemoizedSelector<DaffUpsellProductStateRootSlice, T[]>;
}

const createUpsellProductSelectors = <T extends DaffProduct = DaffProduct>(): DaffUpsellProductsMemoizedSelectors<T> => {

  const {
    selectUpsellProductsState,
  } = getDaffUpsellProductsFeatureSelector<T>();
  const {
    selectProduct,
    selectProductEntities,
  } = getDaffProductSelectors<T>();

  const selectUpsellProductIds = createSelector(
    selectUpsellProductsState,
    (state: DaffUpsellProductsReducersState) => state.upsellProducts.upsellProductIds,
  );

  const selectUpsellProducts = createSelector(
    selectUpsellProductIds,
    <MemoizedSelector<DaffUpsellProductStateRootSlice<T>, Dictionary<T>>>selectProductEntities,
    (upsellIds, entites) =>
      upsellIds.map(id =>
        selectProduct(id).projector(entites),
      ),
  );

  return {
    selectUpsellProductIds,
    selectUpsellProducts,
  };
};

/**
 * A function that returns all selectors of upsell products for the current product page.
 * Returns {@link DaffUpsellProductsMemoizedSelectors}.
 */
export const getDaffUpsellProductsPageSelectors = (() => {
  let cache;
  return <T extends DaffProduct>(): DaffUpsellProductsMemoizedSelectors<T> => cache = cache
    ? cache
    : createUpsellProductSelectors<T>();
})();
