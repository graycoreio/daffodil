import { createSelector, MemoizedSelector } from '@ngrx/store';

import { getDaffAuthFeatureStateSelector } from '../auth-feature.selector';
import { DaffAuthToken } from '../../models/auth-token';
import { DaffAuthFeatureState } from '../../reducers/auth-feature-state.interface';
import { DaffAuthLoginReducerState } from '../../reducers/public_api';

export interface DaffAuthLoginSelectors<T extends DaffAuthToken> {
  selectAuthLoginState: MemoizedSelector<object, DaffAuthLoginReducerState<T>>;
  selectAuthLoginLoading: MemoizedSelector<object, boolean>;
  selectAuthLoginErrors: MemoizedSelector<object, string[]>;
  selectAuthLoginToken: MemoizedSelector<object, T>;
  selectAuthLoginTokenValue: MemoizedSelector<object, T['token']>;
}

const createLoginSelectors = <T extends DaffAuthToken>() => {
  const selectAuthLoginState = createSelector(
    getDaffAuthFeatureStateSelector<T>(),
    state => state.login
  )

  const selectAuthLoginLoading = createSelector(
    selectAuthLoginState,
    state => state.loading
  );

  const selectAuthLoginErrors = createSelector(
    selectAuthLoginState,
    state => state.errors
  );

  const selectAuthLoginToken = createSelector(
    selectAuthLoginState,
    state => state.auth
  );

  const selectAuthLoginTokenValue = createSelector(
    selectAuthLoginToken,
    state => state ? state.token : null
  );

  return {
    selectAuthLoginState,
    selectAuthLoginLoading,
    selectAuthLoginErrors,
    selectAuthLoginToken,
    selectAuthLoginTokenValue
  }
};

export const getDaffAuthLoginSelectors = (() => {
  let cache;
  return <T extends DaffAuthToken>(): DaffAuthLoginSelectors<T> =>
    cache = cache || createLoginSelectors<T>()
})();
