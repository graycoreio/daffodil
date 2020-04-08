import { createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import { DaffAuthorizeNetReducersState } from '../reducers/authorize-net-reducers.interface';
import { DaffAuthorizeNetReducerState } from '../reducers/authorize-net/authorize-net-reducer.interface';
import { DaffAuthorizeNetTokenResponse } from '../models/response/authorize-net-token-response';

export interface DaffAuthorizeNetMemoizedSelectors<T extends DaffAuthorizeNetTokenResponse> {
	selectAuthorizeNetFeatureState: MemoizedSelector<object, DaffAuthorizeNetReducersState<T>>;
	selectAuthorizeNetState: MemoizedSelector<object, DaffAuthorizeNetReducerState<T>> ;
	selectTokenResponse: MemoizedSelector<object, T>;
	selectToken: MemoizedSelector<object, string>;
	selectError: MemoizedSelector<object, string>;
}

const createAuthorizeNetSelectors = <T extends DaffAuthorizeNetTokenResponse>(): DaffAuthorizeNetMemoizedSelectors<T> => {

	/**
	 * AuthorizeNet Feature State
	 */
	const selectAuthorizeNetFeatureState = createFeatureSelector<DaffAuthorizeNetReducersState<T>>('authorizenet');

	/**
	 * AuthorizeNet State
	 */
	const selectAuthorizeNetState = createSelector(selectAuthorizeNetFeatureState, (state: DaffAuthorizeNetReducersState<T>) => state.authorizeNet);

	/**
	 * AuthorizeNet token response
	 */
	const selectTokenResponse = createSelector(selectAuthorizeNetState,(state: DaffAuthorizeNetReducerState<T>) => state.tokenResponse);

	/**
	 * AuthorizeNet token nonce
	 */
	const selectToken = createSelector(selectTokenResponse,(state: T) => state.token);

	/**
	 * AuthorizeNet error
	 */
	const selectError = createSelector(selectAuthorizeNetState, (state: DaffAuthorizeNetReducerState<T>) => state.error);

	return { 
		selectAuthorizeNetFeatureState,
		selectAuthorizeNetState,
		selectTokenResponse,
		selectToken,
		selectError
	}
}

export const daffAuthorizeNetSelectors = (() => {
	let cache;
	return <T extends DaffAuthorizeNetTokenResponse>(): DaffAuthorizeNetMemoizedSelectors<T> => cache = cache 
		? cache 
		: createAuthorizeNetSelectors<T>();
})();
