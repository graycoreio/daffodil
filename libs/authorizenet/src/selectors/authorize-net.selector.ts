import { createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import { DaffAuthorizeNetReducersState } from '../reducers/authorize-net-reducers.interface';
import { DaffAuthorizeNetReducerState } from '../reducers/authorize-net/authorize-net-reducer.interface';
import { DaffAuthorizeNetTokenResponse } from '../models/response/authorize-net-token-response';

/**
 * AuthorizeNet Feature State
 */
export function selectAuthorizeNetFeatureState<T extends DaffAuthorizeNetTokenResponse>(): 
	MemoizedSelector<object, DaffAuthorizeNetReducersState<T>> {
		return createFeatureSelector<DaffAuthorizeNetReducersState<T>>('authorizenet');
	};

/**
 * AuthorizeNet State
 */
export function selectAuthorizeNetState<T extends DaffAuthorizeNetTokenResponse>():
	MemoizedSelector<object, DaffAuthorizeNetReducerState<T>> { 
		return createSelector(selectAuthorizeNetFeatureState(), (state: DaffAuthorizeNetReducersState<T>) => state.authorizeNet)
	};

/**
 * AuthorizeNet token response
 */
export function selectTokenResponse<T extends DaffAuthorizeNetTokenResponse>(): 
	MemoizedSelector<object, T> {
		return createSelector(selectAuthorizeNetState(),(state: DaffAuthorizeNetReducerState<T>) => state.tokenResponse);
	}

/**
 * AuthorizeNet token nonce
 */
export function selectToken<T extends DaffAuthorizeNetTokenResponse>(): 
	MemoizedSelector<object, string> {
		return createSelector(selectTokenResponse(),(state: T) => state.token);
	}

/**
 * AuthorizeNet error
 */
export function selectError<T extends DaffAuthorizeNetTokenResponse>():
	MemoizedSelector<object, string> {
		return createSelector(selectAuthorizeNetState(), (state: DaffAuthorizeNetReducerState<T>) => state.error);
	}
