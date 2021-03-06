import {
  createSelector,
  createFeatureSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';

import { DaffAuthorizeNetReducersState } from '../reducers/authorize-net-reducers.interface';
import { DaffAuthorizeNetReducerState } from '../reducers/authorize-net/authorize-net-reducer.interface';
import { DAFF_AUTHORIZENET_STORE_FEATURE_KEY } from '../reducers/authorizenet-store-feature-key';

export interface DaffAuthorizeNetMemoizedSelectors {
	selectAuthorizeNetFeatureState: MemoizedSelector<Record<string, any>, DaffAuthorizeNetReducersState>;
	selectAuthorizeNetState: MemoizedSelector<Record<string, any>, DaffAuthorizeNetReducerState> ;
	selectLoading: MemoizedSelector<Record<string, any>, boolean>;
	selectPaymentError: MemoizedSelector<Record<string, any>, DaffStateError>;
	selectAcceptJsLoadError: MemoizedSelector<Record<string, any>, DaffStateError>;
	selectIsAcceptJsLoaded: MemoizedSelector<Record<string, any>, boolean>;
}

const createAuthorizeNetSelectors = (): DaffAuthorizeNetMemoizedSelectors => {

  /**
   * AuthorizeNet Feature State
   */
  const selectAuthorizeNetFeatureState = createFeatureSelector<DaffAuthorizeNetReducersState>(DAFF_AUTHORIZENET_STORE_FEATURE_KEY);

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
