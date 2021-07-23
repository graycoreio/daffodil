import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffProduct } from '@daffodil/product';

import {
  DaffProductReducersState,
  DaffProductStateRootSlice,
} from '../../reducers/product-reducers-state.interface';
import { DaffProductReducerState } from '../../reducers/product/product-reducer-state.interface';
import { getDaffProductFeatureSelector } from '../product-feature.selector';

/**
 * An interface for selectors related to the current product page.
 */
export interface DaffProductPageMemoizedSelectors<T extends DaffProduct = DaffProduct> {
	/**
	 * Selects the entire state object for the product page feature area.
	 */
	selectCurrentProductState: MemoizedSelector<DaffProductStateRootSlice, DaffProductReducerState>;
	/**
	 * Selects the loading state of the current product.
	 */
	selectCurrentProductLoadingState: MemoizedSelector<DaffProductStateRootSlice, boolean>;
	/**
	 * Selects the id of the current product.
	 */
	selectCurrentProductId: MemoizedSelector<DaffProductStateRootSlice, T['id']>;
  /**
   * Selects the current product, which is the product loaded for a product page.
   */
	selectCurrentProduct: MemoizedSelector<DaffProductStateRootSlice, T>;
}

const createProductPageSelectors = <T extends DaffProduct = DaffProduct>(): DaffProductPageMemoizedSelectors<T> => {

  const {
    selectProductState,
  } = getDaffProductFeatureSelector<T>();

  const selectCurrentProductState = createSelector(
    selectProductState,
    (state: DaffProductReducersState<T>) => state.product,
  );

  const selectCurrentProductLoadingState = createSelector(
    selectCurrentProductState,
    (state: DaffProductReducerState) => state.loading,
  );

  const selectCurrentProductId = createSelector(
    selectCurrentProductState,
    (state: DaffProductReducerState) => state.currentProductId,
  );

  const selectCurrentProduct = createSelector(
    selectProductState,
    selectCurrentProductId,
    (state: DaffProductReducersState<T>, id: T['id']) => state.products.entities[id],
  );

  return {
    selectCurrentProductState,
    selectCurrentProductLoadingState,
    selectCurrentProductId,
    selectCurrentProduct,
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
