import {
  createFeatureSelector,
  MemoizedSelector,
  defaultMemoize,
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
export const getDaffUpsellProductsFeatureSelector: <T extends DaffProduct>() => DaffUpsellProductsFeatureMemoizedSelector<T> = defaultMemoize(<T extends DaffProduct>() => ({ selectUpsellProductsState: createFeatureSelector<DaffUpsellProductsReducersState>(DAFF_UPSELL_PRODUCTS_STORE_FEATURE_KEY) })).memoized;
