import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';

import { DaffAuthReducerState } from '../../reducers/public_api';
import { getDaffAuthFeatureStateSelector } from '../auth-feature.selector';

export interface AuthSelectors {
  selectAuthState: MemoizedSelector<Record<string, any>, DaffAuthReducerState>;
  selectAuthLoading: MemoizedSelector<Record<string, any>, boolean>;
  selectAuthErrors: MemoizedSelector<Record<string, any>, DaffStateError[]>;
  selectAuthLoggedIn: MemoizedSelector<Record<string, any>, boolean>;
}

const createAuthSelectors = () => {
  const selectAuthState = createSelector(
    getDaffAuthFeatureStateSelector(),
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

  const selectAuthLoggedIn = createSelector(
    selectAuthState,
    state => state.loggedIn,
  );

  return {
    selectAuthState,
    selectAuthLoading,
    selectAuthErrors,
    selectAuthLoggedIn,
  };
};

export const getAuthSelectors = (() => {
  let cache;
  return (): AuthSelectors =>
    cache = cache || createAuthSelectors();
})();
