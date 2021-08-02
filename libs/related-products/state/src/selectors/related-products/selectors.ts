import { Dictionary } from '@ngrx/entity';
import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffProduct } from '@daffodil/product';
import { getDaffProductSelectors } from '@daffodil/product/state';

import {
  DaffRelatedProductsReducersState,
  DaffRelatedProductStateRootSlice,
} from '../../reducers/reducers-state.interface';
import { getDaffRelatedProductsFeatureSelector } from '../feature.selector';

/**
 * An interface for selectors of related products for the current product page.
 */
export interface DaffRelatedProductsMemoizedSelectors<T extends DaffProduct = DaffProduct> {
	/**
	 * Selects the IDs of the related products.
	 */
	selectRelatedProductIds: MemoizedSelector<DaffRelatedProductStateRootSlice, T['id'][]>;

  /**
   * Selects the related products.
   */
	selectRelatedProducts: MemoizedSelector<DaffRelatedProductStateRootSlice, T[]>;
}

const createRelatedProductSelectors = <T extends DaffProduct = DaffProduct>(): DaffRelatedProductsMemoizedSelectors<T> => {

  const {
    selectRelatedProductsState,
  } = getDaffRelatedProductsFeatureSelector<T>();
  const {
    selectProduct,
    selectProductEntities,
  } = getDaffProductSelectors<T>();

  const selectRelatedProductIds = createSelector(
    selectRelatedProductsState,
    (state: DaffRelatedProductsReducersState) => state.relatedProducts.relatedProductIds,
  );

  const selectRelatedProducts = createSelector(
    selectRelatedProductIds,
    <MemoizedSelector<DaffRelatedProductStateRootSlice<T>, Dictionary<T>>>selectProductEntities,
    (relatedIds, entites) =>
      relatedIds.map(id =>
        selectProduct(id).projector(entites),
      ),
  );

  return {
    selectRelatedProductIds,
    selectRelatedProducts,
  };
};

/**
 * A function that returns all selectors of related products for the current product page.
 * Returns {@link DaffRelatedProductsMemoizedSelectors}.
 */
export const getDaffRelatedProductsPageSelectors = (() => {
  let cache;
  return <T extends DaffProduct>(): DaffRelatedProductsMemoizedSelectors<T> => cache = cache
    ? cache
    : createRelatedProductSelectors<T>();
})();
