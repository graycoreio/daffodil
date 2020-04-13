import { createSelector, MemoizedSelector } from '@ngrx/store';

import { selectAuthFeatureState } from './auth-feature.selector';
import { DaffAuthToken } from '../models/auth-token';
import {
  DaffAuthFeatureState,
  DaffAuthReducerState
} from '../reducers/public_api';
import { DaffAuthRegisterSelectors, daffAuthRegisterSelectors } from './register.selector';
import { DaffAuthLoginSelectors, daffAuthLoginSelectors } from './login.selector';


export interface DaffAuthSelectors<T extends DaffAuthToken> extends DaffAuthRegisterSelectors<T>, DaffAuthLoginSelectors<T> {
  selectAuthState: MemoizedSelector<object, DaffAuthReducerState>;
  selectAuthLoading: MemoizedSelector<object, boolean>;
  selectAuthErrors: MemoizedSelector<object, string[]>;
}

const createRegisterSelectors = <T extends DaffAuthToken>() => {
  const selectAuthState = createSelector(
    selectAuthFeatureState<T>(),
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

export const daffAuthSelectors = (() => {
  let cache;
  return <T extends DaffAuthToken>(): DaffAuthSelectors<T> =>
    cache = cache || {
      ...createRegisterSelectors<T>(),
      ...daffAuthLoginSelectors<T>(),
      ...daffAuthRegisterSelectors<T>()
    }
})();
