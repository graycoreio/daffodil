import { createSelector, MemoizedSelector } from '@ngrx/store';

import { selectAuthFeatureState } from './auth-feature.selector';
import { DaffAuthToken } from '../models/auth-token';
import {
  DaffAuthRegisterReducerState,
  DaffAuthFeatureState
} from '../reducers/public_api';

export interface DaffAuthRegisterSelectors<T extends DaffAuthToken> {
  selectAuthRegisterState: MemoizedSelector<object, DaffAuthRegisterReducerState>;
  selectAuthRegisterLoading: MemoizedSelector<object, boolean>;
  selectAuthRegisterErrors: MemoizedSelector<object, string[]>;
}

const createRegisterSelectors = <T extends DaffAuthToken>() => {
  const selectAuthRegisterState = createSelector(
    selectAuthFeatureState<T>(),
    state => state.register
  )

  const selectAuthRegisterLoading = createSelector(
    selectAuthRegisterState,
    state => state.loading
  );

  const selectAuthRegisterErrors = createSelector(
    selectAuthRegisterState,
    state => state.errors
  );

  return {
    selectAuthRegisterState,
    selectAuthRegisterLoading,
    selectAuthRegisterErrors,
  }
};

export const daffAuthRegisterSelectors = (() => {
  let cache;
  return <T extends DaffAuthToken>(): DaffAuthRegisterSelectors<T> =>
    cache = cache || createRegisterSelectors<T>()
})();
