import {
  createSelector,
  createFeatureSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffPaypalTokenResponse } from '../models/paypal-token-response';
import { DaffPaypalReducersState } from '../reducers/paypal-reducers.interface';
import { DaffPaypalReducerState } from '../reducers/paypal/paypal-reducer.interface';
import { DAFF_PAYPAL_STORE_FEATURE_KEY } from '../reducers/paypal-store-feature-key';

export interface DaffPaypalMemoizedSelectors<T extends DaffPaypalTokenResponse = DaffPaypalTokenResponse> {
	selectPaypalFeatureState: MemoizedSelector<Record<string, any>, DaffPaypalReducersState<T>>;
	selectPaypalState: MemoizedSelector<Record<string, any>, DaffPaypalReducerState<T>>;
	selectPaypalTokenResponse: MemoizedSelector<Record<string, any>, T>;
	selectPaypalLoading: MemoizedSelector<Record<string, any>, boolean>;
	selectPaypalError: MemoizedSelector<Record<string, any>, string>;
	selectPaypalToken: MemoizedSelector<Record<string, any>, string>;
	selectPaypalStartUrl: MemoizedSelector<Record<string, any>, string>;
	selectPaypalEditUrl: MemoizedSelector<Record<string, any>, string>;
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
