import {
  createSelector,
  createFeatureSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';

import { DaffPaypalExpressReducerState } from '../reducers/express/public_api';
import {
  DaffPaypalReducersState,
  DaffPaypalStateRootSlice,
} from '../reducers/paypal-reducers.interface';
import { DAFF_PAYPAL_STORE_FEATURE_KEY } from '../reducers/paypal-store-feature-key';
import { DaffPaypalReducerState } from '../reducers/paypal/paypal-reducer.interface';

export interface DaffPaypalMemoizedSelectors {
  selectPaypalFeatureState: MemoizedSelector<DaffPaypalStateRootSlice, DaffPaypalReducersState>;
  selectPaypalState: MemoizedSelector<DaffPaypalStateRootSlice, DaffPaypalReducerState>;
  selectPaypalExpressState: MemoizedSelector<DaffPaypalStateRootSlice, DaffPaypalExpressReducerState>;
  selectPaypalLoading: MemoizedSelector<DaffPaypalStateRootSlice, boolean>;
  selectPaypalError: MemoizedSelector<DaffPaypalStateRootSlice, DaffStateError>;
  selectPaypalStartUrl: MemoizedSelector<DaffPaypalStateRootSlice, string>;
  selectPaypalEditUrl: MemoizedSelector<DaffPaypalStateRootSlice, string>;
}

const createPaypalSelectors = (): DaffPaypalMemoizedSelectors => {

  /**
   * Paypal Feature State
   */
  const selectPaypalFeatureState = createFeatureSelector<DaffPaypalReducersState>(DAFF_PAYPAL_STORE_FEATURE_KEY);

  /**
   * Paypal State
   */
  const selectPaypalState = createSelector(selectPaypalFeatureState, (state: DaffPaypalReducersState) => state.paypal);
  const selectPaypalExpressState = createSelector(selectPaypalFeatureState, state => state.express);

  const selectPaypalLoading = createSelector<DaffPaypalStateRootSlice, any[], boolean>(selectPaypalState, (state: DaffPaypalReducerState) => state.loading);

  const selectPaypalError = createSelector<DaffPaypalStateRootSlice, any[], DaffStateError>(selectPaypalState, (state: DaffPaypalReducerState) => state.error);

  const selectPaypalStartUrl = createSelector(selectPaypalExpressState, state => state.startUrl);

  const selectPaypalEditUrl = createSelector(selectPaypalExpressState, state => state.editUrl);

  return {
    selectPaypalFeatureState,
    selectPaypalState,
    selectPaypalExpressState,
    selectPaypalLoading,
    selectPaypalError,
    selectPaypalStartUrl,
    selectPaypalEditUrl,
  };
};

export const getDaffPaypalSelectors = (() => {
  let cache;
  return (): DaffPaypalMemoizedSelectors => cache = cache
    ? cache
    : createPaypalSelectors();
})();
