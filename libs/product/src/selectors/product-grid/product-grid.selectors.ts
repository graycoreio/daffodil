import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffProduct } from '../../models/product';
import { DaffProductGridReducerState } from '../../reducers/product-grid/product-grid-reducer-state.interface';
import { DaffProductReducersState } from '../../reducers/product-reducers-state.interface';
import { getDaffProductFeatureSelector } from '../product-feature.selector';

export interface DaffProductGridMemoizedSelectors<T extends DaffProduct = DaffProduct> {
	selectProductGridState: MemoizedSelector<Record<string, any>, DaffProductGridReducerState<T>>;
	selectProductGridLoadingState: MemoizedSelector<Record<string, any>, boolean>;
}

const createProductGridSelectors = <T extends DaffProduct>(): DaffProductGridMemoizedSelectors<T> => {
  const {
    selectProductState,
  } = getDaffProductFeatureSelector<T>();
  /**
   * Selector for Product Grid state.
   */
  const selectProductGridState = createSelector(
    selectProductState,
    (state: DaffProductReducersState<T>) => state.productGrid,
  );

  /**
   * Selector for product grid loading state.
   */
  const selectProductGridLoadingState = createSelector(
    selectProductGridState,
    (state: DaffProductGridReducerState<T>) => state.loading,
  );

  return {
    selectProductGridState,
    selectProductGridLoadingState,
  };
};

export const getDaffProductGridSelectors = (() => {
  let cache;
  return <T extends DaffProduct>(): DaffProductGridMemoizedSelectors<T> => cache = cache
    ? cache
    : createProductGridSelectors<T>();
})();
