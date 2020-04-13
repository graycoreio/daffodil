import { createSelector, MemoizedSelector } from '@ngrx/store';

import { getDaffAuthFeatureStateSelector } from './auth-feature.selector';
import { DaffAuthToken } from '../models/auth-token';
import {
  DaffAuthReducerState
} from '../reducers/public_api';
import { DaffAuthRegisterSelectors, getDaffAuthRegisterSelectors } from './register.selector';
import { DaffAuthLoginSelectors, getDaffAuthLoginSelectors } from './login.selector';


export interface DaffAuthSelectors<T extends DaffAuthToken> extends DaffAuthRegisterSelectors, DaffAuthLoginSelectors<T> {
  selectAuthState: MemoizedSelector<object, DaffAuthReducerState>;
  selectAuthLoading: MemoizedSelector<object, boolean>;
  selectAuthErrors: MemoizedSelector<object, string[]>;
}

const createAuthSelectors = <T extends DaffAuthToken>() => {
  const selectAuthState = createSelector(
    getDaffAuthFeatureStateSelector<T>(),
    state => state.auth
  )

  const selectAuthLoading = createSelector(
    selectAuthState,
    state => state.loading
  );

  const selectAuthErrors = createSelector(
    selectAuthState,
    state => state.errors
  );

  return {
    selectAuthState,
    selectAuthLoading,
    selectAuthErrors,
  }
};

export const getDaffAuthSelectors = (() => {
  let cache;
  return <T extends DaffAuthToken>(): DaffAuthSelectors<T> =>
    cache = cache || {
      ...createAuthSelectors<T>(),
      ...getDaffAuthLoginSelectors<T>(),
      ...getDaffAuthRegisterSelectors<T>()
    }
})();
