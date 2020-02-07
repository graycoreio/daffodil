import { createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import { DaffPaypalReducerState } from '../reducers/paypal/paypal-reducer.interface';
import { DaffPaypalReducersState } from '../reducers/paypal-reducers.interface';
import { DaffPaypalTokenResponse } from '../models/paypal-token-response';

/**
 * Paypal Feature State
 */
export function selectPaypalFeatureState<T extends DaffPaypalTokenResponse>(): 
	MemoizedSelector<object, DaffPaypalReducersState<T>> {
		return createFeatureSelector<DaffPaypalReducersState<T>>('paypal');
	}

/**
 * Paypal State
 */
export function selectPaypalState<T extends DaffPaypalTokenResponse>(): 
	MemoizedSelector<object, DaffPaypalReducerState<T>> {
		return createSelector(selectPaypalFeatureState(), (state: DaffPaypalReducersState<T>) => state.paypal);
	}

export function selectPaypalTokenResponse<T extends DaffPaypalTokenResponse>(): 
	MemoizedSelector<object, T> {
		return createSelector(selectPaypalState(),(state: DaffPaypalReducerState<T>) => state.paypalTokenResponse);
	}

export function selectPaypalLoading<T extends DaffPaypalTokenResponse>(): 
	MemoizedSelector<object, boolean> {
		return createSelector(selectPaypalState(),(state: DaffPaypalReducerState<T>) => state.loading);
	}

export function selectPaypalError<T extends DaffPaypalTokenResponse>(): 
	MemoizedSelector<object, string> {
		return createSelector(selectPaypalState(),(state: DaffPaypalReducerState<T>) => state.error);
	}

export function selectPaypalToken<T extends DaffPaypalTokenResponse>(): 
	MemoizedSelector<object, string> {
		return createSelector(selectPaypalTokenResponse(),(state: T) => state.token);
	}

export function selectPaypalStartUrl<T extends DaffPaypalTokenResponse>(): 
	MemoizedSelector<object, string> {
		return createSelector(selectPaypalTokenResponse(),(state: T) => state.urls.start);
	}

export function selectPaypalEditUrl<T extends DaffPaypalTokenResponse>(): 
	MemoizedSelector<object, string> {
		return createSelector(selectPaypalTokenResponse(),(state: T) => state.urls.edit);
	}
