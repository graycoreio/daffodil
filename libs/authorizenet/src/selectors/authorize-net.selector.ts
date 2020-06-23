import { createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import { DaffAuthorizeNetReducersState } from '../reducers/authorize-net-reducers.interface';
import { DaffAuthorizeNetReducerState } from '../reducers/authorize-net/authorize-net-reducer.interface';

export interface DaffAuthorizeNetMemoizedSelectors {
	selectAuthorizeNetFeatureState: MemoizedSelector<object, DaffAuthorizeNetReducersState>;
	selectAuthorizeNetState: MemoizedSelector<object, DaffAuthorizeNetReducerState> ;
	selectLoading: MemoizedSelector<object, boolean>;
	selectError: MemoizedSelector<object, string>;
}

const createAuthorizeNetSelectors = (): DaffAuthorizeNetMemoizedSelectors => {

	/**
	 * AuthorizeNet Feature State
	 */
	const selectAuthorizeNetFeatureState = createFeatureSelector<DaffAuthorizeNetReducersState>('authorizenet');

	/**
	 * AuthorizeNet State
	 */
	const selectAuthorizeNetState = createSelector(
		selectAuthorizeNetFeatureState, 
		(state: DaffAuthorizeNetReducersState) => state.authorizeNet
	);

	/**
	 * AuthorizeNet loading state
	 */
	const selectLoading = createSelector(
		selectAuthorizeNetState,
		(state: DaffAuthorizeNetReducerState) => state.loading
	);

	/**
	 * AuthorizeNet error
	 */
	const selectError = createSelector(
		selectAuthorizeNetState, 
		(state: DaffAuthorizeNetReducerState) => state.error
	);

	return { 
		selectAuthorizeNetFeatureState,
		selectAuthorizeNetState,
		selectLoading,
		selectError
	}
}

export const daffAuthorizeNetSelectors = (() => {
	let cache;
	return (): DaffAuthorizeNetMemoizedSelectors => cache = cache 
		? cache 
		: createAuthorizeNetSelectors();
})();
