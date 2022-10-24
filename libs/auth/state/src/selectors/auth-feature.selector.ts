import {
  createFeatureSelector,
  MemoizedSelector,
} from '@ngrx/store';

import {
  DaffAuthFeatureState,
  DAFF_AUTH_STORE_FEATURE_KEY,
} from '../reducers/public_api';

/**
 * Feature State Selector
 */
export const getDaffAuthFeatureStateSelector = (() => {
  let cache;
  return (): MemoizedSelector<Record<string, any>, DaffAuthFeatureState> =>
    cache = cache || createFeatureSelector<DaffAuthFeatureState>(DAFF_AUTH_STORE_FEATURE_KEY);
})();
