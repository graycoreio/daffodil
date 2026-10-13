import {
  createSelector,
  MemoizedSelector,
  defaultMemoize,
} from '@ngrx/store';

import { getDaffCartSelectors } from '@daffodil/cart/state';
import { DaffCartWithCrossSellProducts } from '@daffodil/cross-sell-products';
import { DaffProduct } from '@daffodil/product';
import { getDaffProductSelectors } from '@daffodil/product/state';

import { DaffCrossSellProductStateRootSlice } from '../../reducers/reducers-state.interface';

/**
 * An interface for selectors of cross-sell products for the current product page.
 */
export interface DaffCrossSellProductsMemoizedSelectors<T extends DaffProduct = DaffProduct> {
  /**
   * Selects the IDs of the cross-sell products.
   */
  selectCrossSellProductIds: MemoizedSelector<DaffCrossSellProductStateRootSlice<T>, T['id'][]>;

  /**
   * Selects the cross-sell products.
   */
  selectCrossSellProducts: MemoizedSelector<DaffCrossSellProductStateRootSlice<T>, T[]>;
}

const createCrossSellProductSelectors = <T extends DaffProduct = DaffProduct>(): DaffCrossSellProductsMemoizedSelectors<T> => {

  const {
    selectCartValue,
  } = getDaffCartSelectors<DaffCartWithCrossSellProducts<T>>();
  const {
    selectProduct,
    selectProductEntities,
  } = getDaffProductSelectors<T>();

  const selectCrossSellProductIds = createSelector<DaffCrossSellProductStateRootSlice<T>, DaffCartWithCrossSellProducts<T>, Array<T['id']>>(
    selectCartValue,
    (state) => state.crossSellIds ?? [],
  );

  const selectCrossSellProducts = createSelector(
    selectCrossSellProductIds,
    selectProductEntities,
    (crossSellIds, entites) =>
      crossSellIds.map(id =>
        selectProduct(id).projector(entites),
      ),
  );

  return {
    selectCrossSellProductIds,
    selectCrossSellProducts,
  };
};

/**
 * A function that returns all selectors of cross-sell products for the current product page.
 * Returns {@link DaffCrossSellProductsMemoizedSelectors}.
 */
export const getDaffCrossSellProductsPageSelectors: <T extends DaffProduct>() => DaffCrossSellProductsMemoizedSelectors<T> = defaultMemoize(<T extends DaffProduct>() => createCrossSellProductSelectors<T>()).memoized;
