import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import { DaffAuthFeatureState, DAFF_AUTH_STORE_FEATURE_KEY } from '../reducers/public_api';
import { DaffAuthToken } from '../models/auth-token';

/**
 * Feature State Selector
 */
export const selectAuthFeatureState = (() => {
  let cache;
  return <T extends DaffAuthToken>(): MemoizedSelector<object, DaffAuthFeatureState<T>> =>
    cache = cache || createFeatureSelector<DaffAuthFeatureState<T>>(DAFF_AUTH_STORE_FEATURE_KEY)
})();
