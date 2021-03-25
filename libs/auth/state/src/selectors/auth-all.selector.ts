import { MemoizedSelector } from '@ngrx/store';

import { DaffAuthToken } from '@daffodil/auth';

import { DaffAuthFeatureState } from '../reducers/public_api';
import { getDaffAuthFeatureStateSelector } from './auth-feature.selector';
import {
  getAuthSelectors,
  AuthSelectors,
} from './auth/auth.selector';
import {
  getDaffAuthLoginSelectors,
  DaffAuthLoginSelectors,
} from './login/login.selector';
import {
  getDaffAuthRegisterSelectors,
  DaffAuthRegisterSelectors,
} from './register/register.selector';

export interface DaffAuthSelectors<T extends DaffAuthToken = DaffAuthToken> extends
  DaffAuthRegisterSelectors,
  DaffAuthLoginSelectors<T>,
  AuthSelectors {
  selectAuthFeatureState: MemoizedSelector<Record<string, any>, DaffAuthFeatureState<T>>;
}

export const getDaffAuthSelectors = (() => {
  let cache;
  return <T extends DaffAuthToken = DaffAuthToken>(): DaffAuthSelectors<T> =>
    cache = cache || {
      ...getAuthSelectors<T>(),
      ...getDaffAuthLoginSelectors<T>(),
      ...getDaffAuthRegisterSelectors<T>(),
      selectAuthFeatureState: getDaffAuthFeatureStateSelector<T>(),
    };
})();
