import {
  createFeatureSelector,
  MemoizedSelector,
  defaultMemoize,
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
export const getDaffConfigurableProductFeatureSelector: () => DaffConfigurableProductFeatureMemoizedSelector = defaultMemoize(() => ({ selectConfigurableProductState: createFeatureSelector<DaffConfigurableProductReducersState>(DAFF_CONFIGURABLE_PRODUCT_STORE_FEATURE_KEY) })).memoized;
