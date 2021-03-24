import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffAuthToken } from '@daffodil/auth';
import { DaffStateError } from '@daffodil/core/state';

import { DaffAuthRegisterReducerState } from '../../reducers/public_api';
import { getDaffAuthFeatureStateSelector } from '../auth-feature.selector';

export interface DaffAuthRegisterSelectors {
  selectAuthRegisterState: MemoizedSelector<Record<string, any>, DaffAuthRegisterReducerState>;
  selectAuthRegisterLoading: MemoizedSelector<Record<string, any>, boolean>;
  selectAuthRegisterErrors: MemoizedSelector<Record<string, any>, DaffStateError[]>;
}

const createRegisterSelectors = <T extends DaffAuthToken = DaffAuthToken>() => {
  const selectAuthRegisterState = createSelector(
    getDaffAuthFeatureStateSelector<T>(),
    state => state.register,
  );

  const selectAuthRegisterLoading = createSelector(
    selectAuthRegisterState,
    state => state.loading,
  );

  const selectAuthRegisterErrors = createSelector(
    selectAuthRegisterState,
    state => state.errors,
  );

  return {
    selectAuthRegisterState,
    selectAuthRegisterLoading,
    selectAuthRegisterErrors,
  };
};

export const getDaffAuthRegisterSelectors = (() => {
  let cache;
  return <T extends DaffAuthToken = DaffAuthToken>(): DaffAuthRegisterSelectors =>
    cache = cache || createRegisterSelectors<T>();
})();
