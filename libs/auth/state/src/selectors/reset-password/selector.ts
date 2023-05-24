import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffAuthResetPasswordInfo } from '@daffodil/auth';
import {
  daffOperationStateSelectorFactory,
  DaffOperationStateSelectors,
} from '@daffodil/core/state';

import {
  DaffAuthResetPasswordReducerState,
  DaffAuthStateRootSlice,
} from '../../reducers/public_api';
import { getDaffAuthFeatureStateSelector } from '../auth-feature.selector';

export interface DaffAuthResetPasswordSelectors extends DaffOperationStateSelectors<DaffAuthStateRootSlice, DaffAuthResetPasswordReducerState> {
  selectAuthResetPasswordState: MemoizedSelector<DaffAuthStateRootSlice, DaffAuthResetPasswordReducerState>;
  selectAuthResetPasswordToken: MemoizedSelector<DaffAuthStateRootSlice, DaffAuthResetPasswordInfo['token']>;
}

const createResetPasswordSelectors = (): DaffAuthResetPasswordSelectors => {
  const selectAuthResetPasswordState = createSelector(
    getDaffAuthFeatureStateSelector(),
    state => state.resetPassword,
  );

  const selectAuthResetPasswordToken = createSelector(
    selectAuthResetPasswordState,
    state => state.token,
  );

  return {
    ...daffOperationStateSelectorFactory<DaffAuthStateRootSlice, DaffAuthResetPasswordReducerState>(selectAuthResetPasswordState),
    selectAuthResetPasswordState,
    selectAuthResetPasswordToken,
  };
};

export const getDaffAuthResetPasswordSelectors = (() => {
  let cache;
  return (): DaffAuthResetPasswordSelectors =>
    cache = cache || createResetPasswordSelectors();
})();
