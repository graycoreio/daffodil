import { createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import { DaffPaypalReducerState } from '../reducers/paypal/paypal-reducer.interface';
import { DaffPaypalReducersState } from '../reducers/paypal-reducers.interface';
import { DaffPaypalTokenResponse } from '../models/paypal-token-response';

export interface DaffPaypalMemoizedSelectors<T extends DaffPaypalTokenResponse> {
	selectPaypalFeatureState: MemoizedSelector<object, DaffPaypalReducersState<T>>;
	selectPaypalState: MemoizedSelector<object, DaffPaypalReducerState<T>>;
	selectPaypalTokenResponse: MemoizedSelector<object, T>;
	selectPaypalLoading: MemoizedSelector<object, boolean>;
	selectPaypalError: MemoizedSelector<object, string>;
	selectPaypalToken: MemoizedSelector<object, string>;
	selectPaypalStartUrl: MemoizedSelector<object, string>;
	selectPaypalEditUrl: MemoizedSelector<object, string>;
}

const createPaypalSelectors = <T extends DaffPaypalTokenResponse>(): DaffPaypalMemoizedSelectors<T> => {

	/**
	 * Paypal Feature State
	 */
	const selectPaypalFeatureState = createFeatureSelector<DaffPaypalReducersState<T>>('paypal');

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
		selectPaypalEditUrl
	}
}

export const daffPaypalSelectors = (() => {
	let cache;
	return <T extends DaffPaypalTokenResponse>(): DaffPaypalMemoizedSelectors<T> => cache = cache 
		? cache 
		: createPaypalSelectors<T>();
})();
