import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffAuthToken } from '@daffodil/auth';
import { DaffStateError } from '@daffodil/core/state';

import { DaffAuthLoginReducerState } from '../../reducers/public_api';
import { getDaffAuthFeatureStateSelector } from '../auth-feature.selector';

export interface DaffAuthLoginSelectors<T extends DaffAuthToken = DaffAuthToken> {
  selectAuthLoginState: MemoizedSelector<Record<string, any>, DaffAuthLoginReducerState<T>>;
  selectAuthLoginLoading: MemoizedSelector<Record<string, any>, boolean>;
  selectAuthLoginErrors: MemoizedSelector<Record<string, any>, DaffStateError[]>;
  selectAuthLoginToken: MemoizedSelector<Record<string, any>, T>;
  selectAuthLoginTokenValue: MemoizedSelector<Record<string, any>, T['token']>;
}

const createLoginSelectors = <T extends DaffAuthToken = DaffAuthToken>() => {
  const selectAuthLoginState = createSelector(
    getDaffAuthFeatureStateSelector<T>(),
    state => state.login,
  );

  const selectAuthLoginLoading = createSelector(
    selectAuthLoginState,
    state => state.loading,
  );

  const selectAuthLoginErrors = createSelector(
    selectAuthLoginState,
    state => state.errors,
  );

  const selectAuthLoginToken = createSelector(
    selectAuthLoginState,
    state => state.auth,
  );

  const selectAuthLoginTokenValue = createSelector(
    selectAuthLoginToken,
    state => state ? state.token : null,
  );

  return {
    selectAuthLoginState,
    selectAuthLoginLoading,
    selectAuthLoginErrors,
    selectAuthLoginToken,
    selectAuthLoginTokenValue,
  };
};

export const getDaffAuthLoginSelectors = (() => {
  let cache;
  return <T extends DaffAuthToken = DaffAuthToken>(): DaffAuthLoginSelectors<T> =>
    cache = cache || createLoginSelectors<T>();
})();
