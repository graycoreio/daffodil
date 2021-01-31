import {
  createFeatureSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffAuthToken } from '../models/auth-token';
import {
  DaffAuthFeatureState,
  DAFF_AUTH_STORE_FEATURE_KEY,
} from '../reducers/public_api';

/**
 * Feature State Selector
 */
export const getDaffAuthFeatureStateSelector = (() => {
  let cache;
  return <T extends DaffAuthToken>(): MemoizedSelector<Record<string, any>, DaffAuthFeatureState<T>> =>
    cache = cache || createFeatureSelector<DaffAuthFeatureState<T>>(DAFF_AUTH_STORE_FEATURE_KEY);
})();
