import { ActionReducerMap, createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import { DaffodilAddress } from '@daffodil/core';

import * as fromBilling from './billing.reducer';
import { PaymentInfo } from '../../models/payment/payment-info';

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
