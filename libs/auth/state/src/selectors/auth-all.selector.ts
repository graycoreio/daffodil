import { MemoizedSelector } from '@ngrx/store';

import {
  daffAuthSelectorFactory,
  AuthSelectors,
} from './auth/auth.selector';
import { getDaffAuthFeatureStateSelector } from './auth-feature.selector';
import {
  daffAuthLoginSelectorFactory,
  DaffAuthLoginSelectors,
} from './login/login.selector';
import {
  daffAuthRegisterSelectorFactory,
  DaffAuthRegisterSelectors,
} from './register/register.selector';
import {
  DaffAuthResetPasswordSelectors,
  daffAuthResetPasswordSelectorFactory,
} from './reset-password/selector';
import { DaffAuthFeatureState } from '../reducers/public_api';

export interface DaffAuthSelectors extends
  DaffAuthRegisterSelectors,
  DaffAuthLoginSelectors,
  DaffAuthResetPasswordSelectors,
  AuthSelectors {
  selectAuthFeatureState: MemoizedSelector<Record<string, any>, DaffAuthFeatureState>;
}

export const getDaffAuthSelectors = (() => {
  let cache;
  return (): DaffAuthSelectors =>
    cache = cache || {
      ...daffAuthSelectorFactory(),
      ...daffAuthLoginSelectorFactory(),
      ...daffAuthRegisterSelectorFactory(),
      ...daffAuthResetPasswordSelectorFactory(),
      selectAuthFeatureState: getDaffAuthFeatureStateSelector(),
    };
})();
