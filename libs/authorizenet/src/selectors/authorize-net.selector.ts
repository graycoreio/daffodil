import { createSelector, createFeatureSelector } from '@ngrx/store';

import { DaffAuthorizeNetReducersState } from '../reducers/authorize-net-reducers.interface';
import { DaffAuthorizeNetReducerState } from '../reducers/authorize-net/authorize-net-reducer.interface';

/**
 * AuthorizeNet Feature State
 */
export const selectAuthorizeNetFeatureState = createFeatureSelector<DaffAuthorizeNetReducersState>('authorizenet');

/**
 * AuthorizeNet State
 */
export const selectAuthorizeNetState = createSelector(
  selectAuthorizeNetFeatureState,
  (state: DaffAuthorizeNetReducersState) => state.authorizeNet
);

/**
 * AuthorizeNet payment nonce
 */
export const selectPaymentNonce = createSelector(
  selectAuthorizeNetState,
  (state: DaffAuthorizeNetReducerState) => state.paymentNonce
);

/**
 * AuthorizeNet error
 */
export const selectPaymentNonceRequestError = createSelector(
  selectAuthorizeNetState,
  (state: DaffAuthorizeNetReducerState) => state.error
);
