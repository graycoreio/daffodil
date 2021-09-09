import {
  createFeatureSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffCompositeProductReducersState } from '../reducers/composite-product-reducers-state.interface';
import { DAFF_COMPOSITE_PRODUCT_STORE_FEATURE_KEY } from '../reducers/composite-product-store-feature-key';

/**
 * An interface for the composite product feature state.
 */
export interface DaffCompositeProductFeatureMemoizedSelector {
	selectCompositeProductState: MemoizedSelector<Record<string, any>, DaffCompositeProductReducersState>;
}

/**
 * A function that returns a selector for the composite product feature state.
 */
export const getDaffCompositeProductFeatureSelector = (() => {
  let cache;
  return (): DaffCompositeProductFeatureMemoizedSelector => cache = cache
    ? cache
    : { selectCompositeProductState: createFeatureSelector<DaffCompositeProductReducersState>(DAFF_COMPOSITE_PRODUCT_STORE_FEATURE_KEY) };
})();
