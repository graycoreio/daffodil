import { MemoizedSelector } from '@ngrx/store';

import { getAuthSelectors, AuthSelectors } from './auth.selector';
import { getDaffAuthLoginSelectors, DaffAuthLoginSelectors } from './login.selector';
import { getDaffAuthRegisterSelectors, DaffAuthRegisterSelectors } from './register.selector';
import { DaffAuthToken } from '../models/auth-token';
import { DaffAuthFeatureState } from '../reducers/public_api';
import { getDaffAuthFeatureStateSelector } from './auth-feature.selector';

export interface DaffAuthSelectors<T extends DaffAuthToken> extends
  DaffAuthRegisterSelectors,
  DaffAuthLoginSelectors<T>,
  AuthSelectors {
  selectAuthFeatureState: MemoizedSelector<object, DaffAuthFeatureState<T>>;
}

export const getDaffAuthSelectors = (() => {
  let cache;
  return <T extends DaffAuthToken>(): DaffAuthSelectors<T> =>
    cache = cache || {
      ...getAuthSelectors<T>(),
      ...getDaffAuthLoginSelectors<T>(),
      ...getDaffAuthRegisterSelectors<T>(),
      selectAuthFeatureState: getDaffAuthFeatureStateSelector<T>()
    }
})();
