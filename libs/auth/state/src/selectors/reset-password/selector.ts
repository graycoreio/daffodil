import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffAuthResetPasswordInfo } from '@daffodil/auth';
import { DaffStateError } from '@daffodil/core/state';

import { DaffAuthResetPasswordReducerState } from '../../reducers/public_api';
import { getDaffAuthFeatureStateSelector } from '../auth-feature.selector';

export interface DaffAuthResetPasswordSelectors {
  selectAuthResetPasswordState: MemoizedSelector<Record<string, any>, DaffAuthResetPasswordReducerState>;
  selectAuthResetPasswordLoading: MemoizedSelector<Record<string, any>, boolean>;
  selectAuthResetPasswordErrors: MemoizedSelector<Record<string, any>, DaffStateError[]>;
  selectAuthResetPasswordToken: MemoizedSelector<Record<string, any>, DaffAuthResetPasswordInfo['token']>;
}

const createResetPasswordSelectors = (): DaffAuthResetPasswordSelectors => {
  const selectAuthResetPasswordState = createSelector(
    getDaffAuthFeatureStateSelector(),
    state => state.resetPassword,
  );

  const selectAuthResetPasswordLoading = createSelector(
    selectAuthResetPasswordState,
    state => state.loading,
  );

  const selectAuthResetPasswordErrors = createSelector(
    selectAuthResetPasswordState,
    state => state.errors,
  );

  const selectAuthResetPasswordToken = createSelector(
    selectAuthResetPasswordState,
    state => state.token,
  );

  return {
    selectAuthResetPasswordState,
    selectAuthResetPasswordLoading,
    selectAuthResetPasswordErrors,
    selectAuthResetPasswordToken,
  };
};

export const getDaffAuthResetPasswordSelectors = (() => {
  let cache;
  return (): DaffAuthResetPasswordSelectors =>
    cache = cache || createResetPasswordSelectors();
})();
