import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';

import { DaffAuthLoginReducerState } from '../../reducers/public_api';
import { getDaffAuthFeatureStateSelector } from '../auth-feature.selector';

export interface DaffAuthLoginSelectors {
  selectAuthLoginState: MemoizedSelector<Record<string, any>, DaffAuthLoginReducerState>;
  selectAuthLoginLoading: MemoizedSelector<Record<string, any>, boolean>;
  selectAuthLoginErrors: MemoizedSelector<Record<string, any>, DaffStateError[]>;
}

const createLoginSelectors = () => {
  const selectAuthLoginState = createSelector(
    getDaffAuthFeatureStateSelector(),
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

  return {
    selectAuthLoginState,
    selectAuthLoginLoading,
    selectAuthLoginErrors,
  };
};

export const getDaffAuthLoginSelectors = (() => {
  let cache;
  return (): DaffAuthLoginSelectors =>
    cache = cache || createLoginSelectors();
})();
