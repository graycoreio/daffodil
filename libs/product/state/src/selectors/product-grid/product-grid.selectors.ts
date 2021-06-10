import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffProduct } from '@daffodil/product';

import { DaffProductGridReducerState } from '../../reducers/product-grid/product-grid-reducer-state.interface';
import { DaffProductReducersState } from '../../reducers/product-reducers-state.interface';
import { getDaffProductFeatureSelector } from '../product-feature.selector';

/**
 * An interface for selectors related to loading a grid of products.
 */
export interface DaffProductGridMemoizedSelectors<T extends DaffProduct = DaffProduct> {
	/**
	 * Selects the redux state for the product grid feature area. Returns {@link DaffProductGridReducerState}.
	 */
	selectProductGridState: MemoizedSelector<Record<string, any>, DaffProductGridReducerState<T>>;
	/**
	 * Selects whether any product grid requests are loading.
	 */
	selectProductGridLoadingState: MemoizedSelector<Record<string, any>, boolean>;
}

const createProductGridSelectors = <T extends DaffProduct>(): DaffProductGridMemoizedSelectors<T> => {
  const {
    selectProductState,
  } = getDaffProductFeatureSelector<T>();

  const selectProductGridState = createSelector(
    selectProductState,
    (state: DaffProductReducersState<T>) => state.productGrid,
  );

  const selectProductGridLoadingState = createSelector(
    selectProductGridState,
    (state: DaffProductGridReducerState<T>) => state.loading,
  );

  return {
    selectProductGridState,
    selectProductGridLoadingState,
  };
};

/**
 * A function that returns all selectors related to loading a grid of products.
 * Returns {@link DaffProductGridMemoizedSelectors}.
 */
export const getDaffProductGridSelectors = (() => {
  let cache;
  return <T extends DaffProduct>(): DaffProductGridMemoizedSelectors<T> => cache = cache
    ? cache
    : createProductGridSelectors<T>();
})();
