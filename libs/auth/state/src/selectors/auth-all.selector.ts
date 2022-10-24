import { MemoizedSelector } from '@ngrx/store';

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

export interface DaffAuthSelectors extends
  DaffAuthRegisterSelectors,
  DaffAuthLoginSelectors,
  AuthSelectors {
  selectAuthFeatureState: MemoizedSelector<Record<string, any>, DaffAuthFeatureState>;
}

export const getDaffAuthSelectors = (() => {
  let cache;
  return (): DaffAuthSelectors =>
    cache = cache || {
      ...getAuthSelectors(),
      ...getDaffAuthLoginSelectors(),
      ...getDaffAuthRegisterSelectors(),
      selectAuthFeatureState: getDaffAuthFeatureStateSelector(),
    };
})();
