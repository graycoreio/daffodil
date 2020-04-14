import { createSelector, MemoizedSelector } from '@ngrx/store';

import { getDaffAuthFeatureStateSelector } from './auth-feature.selector';
import { DaffAuthToken } from '../models/auth-token';
import {
  DaffAuthRegisterReducerState,
} from '../reducers/public_api';

export interface DaffAuthRegisterSelectors {
  selectAuthRegisterState: MemoizedSelector<object, DaffAuthRegisterReducerState>;
  selectAuthRegisterLoading: MemoizedSelector<object, boolean>;
  selectAuthRegisterErrors: MemoizedSelector<object, string[]>;
}

const createRegisterSelectors = <T extends DaffAuthToken>() => {
  const selectAuthRegisterState = createSelector(
    getDaffAuthFeatureStateSelector<T>(),
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

export const getDaffAuthRegisterSelectors = (() => {
  let cache;
  return <T extends DaffAuthToken>(): DaffAuthRegisterSelectors =>
    cache = cache || createRegisterSelectors<T>()
})();
