import {
  createFeatureSelector,
  MemoizedSelector,
  defaultMemoize,
} from '@ngrx/store';

import {
  DaffAuthFeatureState,
  DAFF_AUTH_STORE_FEATURE_KEY,
} from '../reducers/public_api';

/**
 * Feature State Selector
 */
export const getDaffAuthFeatureStateSelector: () => MemoizedSelector<Record<string, any>, DaffAuthFeatureState> = defaultMemoize(() => createFeatureSelector<DaffAuthFeatureState>(DAFF_AUTH_STORE_FEATURE_KEY)).memoized;
