import {
  createFeatureSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffProduct } from '@daffodil/product';

import {
  DaffUpsellProductsReducersState,
  DaffUpsellProductStateRootSlice,
} from '../reducers/reducers-state.interface';
import { DAFF_UPSELL_PRODUCTS_STORE_FEATURE_KEY } from '../reducers/store-feature-key';

/**
 * An interface for the entire upsell products feature state.
 */
export interface DaffUpsellProductsFeatureMemoizedSelector<T extends DaffProduct = DaffProduct> {
  selectUpsellProductsState: MemoizedSelector<DaffUpsellProductStateRootSlice<T>, DaffUpsellProductsReducersState>;
}

/**
 * A function that returns a selector for the entire upsell products feature state.
 */
export const getDaffUpsellProductsFeatureSelector = (() => {
  let cache;
  return <T extends DaffProduct>(): DaffUpsellProductsFeatureMemoizedSelector<T> => cache = cache
    ? cache
    : { selectUpsellProductsState: createFeatureSelector<DaffUpsellProductsReducersState>(DAFF_UPSELL_PRODUCTS_STORE_FEATURE_KEY) };
})();
