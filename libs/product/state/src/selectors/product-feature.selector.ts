import {
  createFeatureSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffProduct } from '@daffodil/product';

import { DaffProductReducersState } from '../reducers/product-reducers-state.interface';
import { DAFF_PRODUCT_STORE_FEATURE_KEY } from '../reducers/product-store-feature-key';

/**
 * An interface for the entire product feature state.
 */
export interface DaffProductFeatureMemoizedSelector<T extends DaffProduct = DaffProduct> {
	selectProductState: MemoizedSelector<Record<string, any>, DaffProductReducersState<T>>;
}

/**
 * A function that returns a selector for the entire product feature state.
 */
export const getDaffProductFeatureSelector = (() => {
  let cache;
  return <T extends DaffProduct>(): DaffProductFeatureMemoizedSelector<T> => cache = cache
    ? cache
    : { selectProductState: createFeatureSelector<DaffProductReducersState<T>>(DAFF_PRODUCT_STORE_FEATURE_KEY) };
})();
