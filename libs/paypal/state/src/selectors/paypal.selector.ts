import {
  createSelector,
  createFeatureSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';
import { DaffPaypalTokenResponse } from '@daffodil/paypal';

import {
  DaffPaypalReducersState,
  DaffPaypalStateRootSlice,
} from '../reducers/paypal-reducers.interface';
import { DAFF_PAYPAL_STORE_FEATURE_KEY } from '../reducers/paypal-store-feature-key';
import { DaffPaypalReducerState } from '../reducers/paypal/paypal-reducer.interface';

export interface DaffPaypalMemoizedSelectors<T extends DaffPaypalTokenResponse = DaffPaypalTokenResponse> {
	selectPaypalFeatureState: MemoizedSelector<DaffPaypalStateRootSlice<T>, DaffPaypalReducersState<T>>;
	selectPaypalState: MemoizedSelector<DaffPaypalStateRootSlice<T>, DaffPaypalReducerState<T>>;
	selectPaypalTokenResponse: MemoizedSelector<DaffPaypalStateRootSlice<T>, T>;
	selectPaypalLoading: MemoizedSelector<DaffPaypalStateRootSlice<T>, boolean>;
	selectPaypalError: MemoizedSelector<DaffPaypalStateRootSlice<T>, DaffStateError>;
	selectPaypalToken: MemoizedSelector<DaffPaypalStateRootSlice<T>, string>;
	selectPaypalStartUrl: MemoizedSelector<DaffPaypalStateRootSlice<T>, string>;
	selectPaypalEditUrl: MemoizedSelector<DaffPaypalStateRootSlice<T>, string>;
}

const createPaypalSelectors = <T extends DaffPaypalTokenResponse>(): DaffPaypalMemoizedSelectors<T> => {

  /**
   * Paypal Feature State
   */
  const selectPaypalFeatureState = createFeatureSelector<DaffPaypalReducersState<T>>(DAFF_PAYPAL_STORE_FEATURE_KEY);

  /**
   * Paypal State
   */
  const selectPaypalState = createSelector(selectPaypalFeatureState, (state: DaffPaypalReducersState<T>) => state.paypal);

  const selectPaypalTokenResponse = createSelector(selectPaypalState,(state: DaffPaypalReducerState<T>) => state.paypalTokenResponse);

  const selectPaypalLoading = createSelector(selectPaypalState,(state: DaffPaypalReducerState<T>) => state.loading);

  const selectPaypalError = createSelector(selectPaypalState,(state: DaffPaypalReducerState<T>) => state.error);

  const selectPaypalToken = createSelector(selectPaypalTokenResponse,(state: T) => state.token);

  const selectPaypalStartUrl = createSelector(selectPaypalTokenResponse,(state: T) => state.urls.start);

  const selectPaypalEditUrl = createSelector(selectPaypalTokenResponse,(state: T) => state.urls.edit);

  return {
    selectPaypalFeatureState,
    selectPaypalState,
    selectPaypalTokenResponse,
    selectPaypalLoading,
    selectPaypalError,
    selectPaypalToken,
    selectPaypalStartUrl,
    selectPaypalEditUrl,
  };
};

export const getDaffPaypalSelectors = (() => {
  let cache;
  return <T extends DaffPaypalTokenResponse = DaffPaypalTokenResponse>(): DaffPaypalMemoizedSelectors<T> => cache = cache
    ? cache
    : createPaypalSelectors<T>();
})();
