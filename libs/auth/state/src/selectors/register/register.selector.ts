import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import {
  daffOperationStateSelectorFactory,
  DaffOperationStateSelectors,
} from '@daffodil/core/state';

import {
  DaffAuthRegisterReducerState,
  DaffAuthStateRootSlice,
} from '../../reducers/public_api';
import { getDaffAuthFeatureStateSelector } from '../auth-feature.selector';

export interface DaffAuthRegisterSelectors extends DaffOperationStateSelectors<DaffAuthStateRootSlice, DaffAuthRegisterReducerState> {
  selectAuthRegisterState: MemoizedSelector<DaffAuthStateRootSlice, DaffAuthRegisterReducerState>;
}

const createRegisterSelectors = () => {
  const selectAuthRegisterState = createSelector(
    getDaffAuthFeatureStateSelector(),
    state => state.register,
  );

  return {
    ...daffOperationStateSelectorFactory<DaffAuthStateRootSlice, DaffAuthRegisterReducerState>(selectAuthRegisterState),
    selectAuthRegisterState,
  };
};

export const getDaffAuthRegisterSelectors = (() => {
  let cache;
  return (): DaffAuthRegisterSelectors =>
    cache = cache || createRegisterSelectors();
})();
