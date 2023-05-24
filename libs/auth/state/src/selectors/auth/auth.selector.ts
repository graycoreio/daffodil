import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import {
  daffOperationStateSelectorFactory,
  DaffOperationStateSelectors,
} from '@daffodil/core/state';

import {
  DaffAuthReducerState,
  DaffAuthStateRootSlice,
} from '../../reducers/public_api';
import { getDaffAuthFeatureStateSelector } from '../auth-feature.selector';

export interface AuthSelectors extends DaffOperationStateSelectors<DaffAuthStateRootSlice, DaffAuthReducerState> {
  selectAuthState: MemoizedSelector<DaffAuthStateRootSlice, DaffAuthReducerState>;
  selectAuthLoggedIn: MemoizedSelector<DaffAuthStateRootSlice, boolean>;
}

const createAuthSelectors = () => {
  const selectAuthState = createSelector(
    getDaffAuthFeatureStateSelector(),
    state => state.auth,
  );

  const selectAuthLoggedIn = createSelector(
    selectAuthState,
    state => state.loggedIn,
  );

  return {
    ...daffOperationStateSelectorFactory<DaffAuthStateRootSlice, DaffAuthReducerState>(selectAuthState),
    selectAuthState,
    selectAuthLoggedIn,
  };
};

export const daffAuthSelectorFactory = (() => {
  let cache;
  return (): AuthSelectors =>
    cache = cache || createAuthSelectors();
})();
