import { ActionReducerMap, createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import * as fromBilling from './billing.reducer';
import { DaffodilAddress, PaymentInfo } from '@daffodil/core';

export interface BillingState {
  billing: fromBilling.State;
}

export interface State {
  billing: BillingState
}

export const reducers : ActionReducerMap<BillingState> = {
  billing: fromBilling.reducer
}

/**
 * Billing State
 */
export const selectBillingState: MemoizedSelector<object, BillingState> = createFeatureSelector<BillingState>('billing');

export const billingStateSelector = createSelector(
  selectBillingState,
  (state: BillingState) => state.billing
)

export const selectBillingAddressState: MemoizedSelector<object, DaffodilAddress> = createSelector(
  billingStateSelector,
  fromBilling.getBillingAddress
)

export const selectBillingAddressIsShippingAddressState: MemoizedSelector<object, boolean> = createSelector(
  billingStateSelector,
  fromBilling.getBillingAddressIsShippingAddress
)

export const selectPaymentInfoState: MemoizedSelector<object, PaymentInfo> = createSelector(
  billingStateSelector,
  fromBilling.getPaymentInfo
)
