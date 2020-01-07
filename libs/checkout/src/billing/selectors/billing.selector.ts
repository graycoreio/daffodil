import { createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import { DaffAddress } from '@daffodil/core';

import { PaymentInfo } from '../../models/payment/payment-info';
import { DaffBillingReducersState } from '../reducers/billing-reducers.interface';
import { DaffBillingReducerState } from '../reducers/billing/billing-reducer.interface';

/**
 * Billing Feature State
 */
export const selectBillingFeatureState: MemoizedSelector<object, DaffBillingReducersState> = createFeatureSelector<DaffBillingReducersState>('billing');

/**
 * Billing State
 */
export const selectBillingState = createSelector(
  selectBillingFeatureState,
  (state: DaffBillingReducersState) => state.billing
)

export const selectBillingAddress: MemoizedSelector<object, DaffAddress> = createSelector(
  selectBillingState,
  (state: DaffBillingReducerState) => state.billingAddress
)

export const selectBillingAddressIsShippingAddress: MemoizedSelector<object, boolean> = createSelector(
  selectBillingState,
  (state: DaffBillingReducerState) => state.billingAddressIsShippingAddress
)

export const selectPaymentInfo: MemoizedSelector<object, PaymentInfo> = createSelector(
  selectBillingState,
  (state: DaffBillingReducerState) => state.paymentInfo
)
