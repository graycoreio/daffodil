import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffProduct } from '@daffodil/product';

import { DaffProductReducersState } from '../../reducers/product-reducers-state.interface';
import { DaffProductReducerState } from '../../reducers/product/product-reducer-state.interface';
import { getDaffProductFeatureSelector } from '../product-feature.selector';

/**
 * An interface for selectors related to the selected product page.
 */
export interface DaffProductPageMemoizedSelectors<T extends DaffProduct = DaffProduct> {
	/**
	 * Selects the entire state object for the product page feature area.
	 */
	selectSelectedProductState: MemoizedSelector<Record<string, any>, DaffProductReducerState>;
	/**
	 * Selects the id of the selected product.
	 * @deprecated
	 */
	selectSelectedProductId: MemoizedSelector<Record<string, any>, T['id']>;
	/**
	 * Selects the qty of the selected product.
	 * @deprecated
	 */
	selectSelectedProductQty: MemoizedSelector<Record<string, any>, number>;
	/**
	 * Selects the loading state of the selected product.
	 */
	selectSelectedProductLoadingState: MemoizedSelector<Record<string, any>, boolean>;
	/**
	 * Selects the selected product, which is the product loaded for a product page.
	 * @deprecated
	 */
	selectSelectedProduct: MemoizedSelector<Record<string, any>, T>;
}

const createProductPageSelectors = <T extends DaffProduct = DaffProduct>(): DaffProductPageMemoizedSelectors<T> => {

  const {
    selectProductState,
  } = getDaffProductFeatureSelector<T>();

  const selectSelectedProductState = createSelector(
    selectProductState,
    (state: DaffProductReducersState<T>) => state.product,
  );

  const selectSelectedProductId = createSelector(
    selectSelectedProductState,
    (state: DaffProductReducerState) => state.selectedProductId,
  );

  const selectSelectedProductQty = createSelector(
    selectSelectedProductState,
    (state: DaffProductReducerState) => state.qty,
  );

  const selectSelectedProductLoadingState = createSelector(
    selectSelectedProductState,
    (state: DaffProductReducerState) => state.loading,
  );

  const selectSelectedProduct = createSelector(
    selectProductState,
    selectSelectedProductId,
    (state: DaffProductReducersState<T>, id: T['id']) => state.products.entities[id],
  );

  return {
    selectSelectedProductState,
    selectSelectedProductId,
    selectSelectedProductQty,
    selectSelectedProductLoadingState,
    selectSelectedProduct,
  };
};

/**
 * A function that returns all selectors related to the product page.
 * Returns {@link DaffProductPageMemoizedSelectors}.
 */
export const getDaffProductPageSelectors = (() => {
  let cache;
  return <T extends DaffProduct>(): DaffProductPageMemoizedSelectors<T> => cache = cache
    ? cache
    : createProductPageSelectors<T>();
})();
