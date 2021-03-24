import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffAuthToken } from '@daffodil/auth';
import { DaffStateError } from '@daffodil/core/state';

import { DaffAuthReducerState } from '../../reducers/public_api';
import { getDaffAuthFeatureStateSelector } from '../auth-feature.selector';

export interface AuthSelectors {
  selectAuthState: MemoizedSelector<Record<string, any>, DaffAuthReducerState>;
  selectAuthLoading: MemoizedSelector<Record<string, any>, boolean>;
  selectAuthErrors: MemoizedSelector<Record<string, any>, DaffStateError[]>;
}

const createAuthSelectors = <T extends DaffAuthToken = DaffAuthToken>() => {
  const selectAuthState = createSelector(
    getDaffAuthFeatureStateSelector<T>(),
    state => state.auth,
  );

  const selectAuthLoading = createSelector(
    selectAuthState,
    state => state.loading,
  );

  const selectAuthErrors = createSelector(
    selectAuthState,
    state => state.errors,
  );

  return {
    selectAuthState,
    selectAuthLoading,
    selectAuthErrors,
  };
};

export const getAuthSelectors = (() => {
  let cache;
  return <T extends DaffAuthToken = DaffAuthToken>(): AuthSelectors =>
    cache = cache || createAuthSelectors<T>();
})();
