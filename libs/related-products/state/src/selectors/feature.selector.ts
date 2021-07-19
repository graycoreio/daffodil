import {
  createFeatureSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffProduct } from '@daffodil/product';

import {
  DaffRelatedProductsReducersState,
  DaffRelatedProductStateRootSlice,
} from '../reducers/reducers-state.interface';
import { DAFF_RELATED_PRODUCTS_STORE_FEATURE_KEY } from '../reducers/store-feature-key';

/**
 * An interface for the entire related products feature state.
 */
export interface DaffRelatedProductsFeatureMemoizedSelector<T extends DaffProduct = DaffProduct> {
	selectRelatedProductsState: MemoizedSelector<DaffRelatedProductStateRootSlice<T>, DaffRelatedProductsReducersState>;
}

/**
 * A function that returns a selector for the entire related products feature state.
 */
export const getDaffRelatedProductsFeatureSelector = (() => {
  let cache;
  return <T extends DaffProduct>(): DaffRelatedProductsFeatureMemoizedSelector<T> => cache = cache
    ? cache
    : { selectRelatedProductsState: createFeatureSelector<DaffRelatedProductsReducersState>(DAFF_RELATED_PRODUCTS_STORE_FEATURE_KEY) };
})();
