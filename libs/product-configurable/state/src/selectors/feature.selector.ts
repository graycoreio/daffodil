import {
  createFeatureSelector,
  MemoizedSelector,
} from '@ngrx/store';

import {
  DAFF_CONFIGURABLE_PRODUCT_STORE_FEATURE_KEY,
  DaffConfigurableProductReducersState,
} from '../reducers/public_api';

/**
 * An interface for the entire configurable product feature state.
 */
export interface DaffConfigurableProductFeatureMemoizedSelector {
  selectConfigurableProductState: MemoizedSelector<Record<string, any>, DaffConfigurableProductReducersState>;
}

/**
 * A function that returns a selector for the entire configurable product feature state.
 */
export const getDaffConfigurableProductFeatureSelector = (() => {
  let cache;
  return (): DaffConfigurableProductFeatureMemoizedSelector => cache = cache
    ? cache
    : { selectConfigurableProductState: createFeatureSelector<DaffConfigurableProductReducersState>(DAFF_CONFIGURABLE_PRODUCT_STORE_FEATURE_KEY) };
})();
