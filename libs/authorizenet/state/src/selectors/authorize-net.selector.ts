import {
  createSelector,
  createFeatureSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';

import {
  DaffAuthorizeNetReducersState,
  DaffAuthorizeNetReducerState,
  DaffAuthorizeNetStateRootSlice,
  DAFF_AUTHORIZENET_STORE_FEATURE_KEY,
} from '../reducers/public_api';


export interface DaffAuthorizeNetMemoizedSelectors {
	selectAuthorizeNetFeatureState: MemoizedSelector<DaffAuthorizeNetStateRootSlice, DaffAuthorizeNetReducersState>;
	selectAuthorizeNetState: MemoizedSelector<DaffAuthorizeNetStateRootSlice, DaffAuthorizeNetReducerState> ;
	selectLoading: MemoizedSelector<DaffAuthorizeNetStateRootSlice, boolean>;
	selectPaymentError: MemoizedSelector<DaffAuthorizeNetStateRootSlice, DaffStateError>;
	selectAcceptJsLoadError: MemoizedSelector<DaffAuthorizeNetStateRootSlice, DaffStateError>;
	selectIsAcceptJsLoaded: MemoizedSelector<DaffAuthorizeNetStateRootSlice, boolean>;
}

const createAuthorizeNetSelectors = (): DaffAuthorizeNetMemoizedSelectors => {

  /**
   * AuthorizeNet Feature State
   */
  const selectAuthorizeNetFeatureState = createFeatureSelector<DaffAuthorizeNetStateRootSlice, DaffAuthorizeNetReducersState>(DAFF_AUTHORIZENET_STORE_FEATURE_KEY);

  /**
   * AuthorizeNet State
   */
  const selectAuthorizeNetState = createSelector(
    selectAuthorizeNetFeatureState,
    (state: DaffAuthorizeNetReducersState) => state.authorizeNet,
  );

  /**
   * AuthorizeNet loading state
   */
  const selectLoading = createSelector(
    selectAuthorizeNetState,
    (state: DaffAuthorizeNetReducerState) => state.loading,
  );

  /**
   * AuthorizeNet payment error
   */
  const selectPaymentError = createSelector(
    selectAuthorizeNetState,
    (state: DaffAuthorizeNetReducerState) => state.paymentError,
  );

  /**
   * AcceptJs load error
   */
  const selectAcceptJsLoadError = createSelector(
    selectAuthorizeNetState,
    (state: DaffAuthorizeNetReducerState) => state.acceptJsLoadError,
  );

  /**
   * AcceptJs is loaded
   */
  const selectIsAcceptJsLoaded = createSelector(
    selectAuthorizeNetState,
    (state: DaffAuthorizeNetReducerState) => state.isAcceptLoaded,
  );

  return {
    selectAuthorizeNetFeatureState,
    selectAuthorizeNetState,
    selectLoading,
    selectPaymentError,
    selectAcceptJsLoadError,
    selectIsAcceptJsLoaded,
  };
};

export const daffAuthorizeNetSelectors = (() => {
  let cache;
  return (): DaffAuthorizeNetMemoizedSelectors => cache = cache
    ? cache
    : createAuthorizeNetSelectors();
})();
