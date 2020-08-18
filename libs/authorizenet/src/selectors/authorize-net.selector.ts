import { createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import { DaffAuthorizeNetReducersState } from '../reducers/authorize-net-reducers.interface';
import { DaffAuthorizeNetReducerState } from '../reducers/authorize-net/authorize-net-reducer.interface';

export interface DaffAuthorizeNetMemoizedSelectors {
	selectAuthorizeNetFeatureState: MemoizedSelector<object, DaffAuthorizeNetReducersState>;
	selectAuthorizeNetState: MemoizedSelector<object, DaffAuthorizeNetReducerState> ;
	selectLoading: MemoizedSelector<object, boolean>;
	selectPaymentError: MemoizedSelector<object, string>;
	selectAcceptJsLoadError: MemoizedSelector<object, string>;
	selectIsAcceptJsLoaded: MemoizedSelector<object, boolean>;
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
	 * AuthorizeNet payment error
	 */
	const selectPaymentError = createSelector(
		selectAuthorizeNetState, 
		(state: DaffAuthorizeNetReducerState) => state.paymentError
	);

	/**
	 * AcceptJs load error
	 */
	const selectAcceptJsLoadError = createSelector(
		selectAuthorizeNetState, 
		(state: DaffAuthorizeNetReducerState) => state.acceptJsLoadError
	);

	/**
	 * AcceptJs is loaded
	 */
	const selectIsAcceptJsLoaded = createSelector(
		selectAuthorizeNetState, 
		(state: DaffAuthorizeNetReducerState) => state.isAcceptLoaded
	);

	return { 
		selectAuthorizeNetFeatureState,
		selectAuthorizeNetState,
		selectLoading,
		selectPaymentError,
		selectAcceptJsLoadError,
		selectIsAcceptJsLoaded
	}
}

export const daffAuthorizeNetSelectors = (() => {
	let cache;
	return (): DaffAuthorizeNetMemoizedSelectors => cache = cache 
		? cache 
		: createAuthorizeNetSelectors();
})();
