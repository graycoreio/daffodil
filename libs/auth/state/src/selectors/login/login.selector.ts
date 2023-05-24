import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import {
  daffOperationStateSelectorFactory,
  DaffOperationStateSelectors,
  DaffStateError,
} from '@daffodil/core/state';

import {
  DaffAuthLoginReducerState,
  DaffAuthStateRootSlice,
} from '../../reducers/public_api';
import { getDaffAuthFeatureStateSelector } from '../auth-feature.selector';

export interface DaffAuthLoginSelectors extends DaffOperationStateSelectors<DaffAuthStateRootSlice, DaffAuthLoginReducerState> {
  selectAuthLoginState: MemoizedSelector<DaffAuthStateRootSlice, DaffAuthLoginReducerState>;
}

const createLoginSelectors = () => {
  const selectAuthLoginState = createSelector(
    getDaffAuthFeatureStateSelector(),
    state => state.login,
  );


  return {
    ...daffOperationStateSelectorFactory<DaffAuthStateRootSlice, DaffAuthLoginReducerState>(selectAuthLoginState),
    selectAuthLoginState,
  };
};

export const daffAuthLoginSelectorFactory = (() => {
  let cache;
  return (): DaffAuthLoginSelectors =>
    cache = cache || createLoginSelectors();
})();
