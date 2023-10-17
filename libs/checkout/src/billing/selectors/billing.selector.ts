import {
  createSelector,
  createFeatureSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffAddress } from '@daffodil/core';

import { PaymentInfo } from '../../models/payment/payment-info';
import { DaffBillingReducerState } from '../reducers/billing/billing-reducer.interface';
import { DaffBillingReducersState } from '../reducers/billing-reducers.interface';

/**
 * Billing Feature State
 */
export const selectBillingFeatureState: MemoizedSelector<Record<string, any>, DaffBillingReducersState> = createFeatureSelector<DaffBillingReducersState>('billing');

/**
 * Billing State
 */
export const selectBillingState = createSelector(
  selectBillingFeatureState,
  (state: DaffBillingReducersState) => state.billing,
);

export const selectBillingAddress: MemoizedSelector<Record<string, any>, DaffAddress> = createSelector(
  selectBillingState,
  (state: DaffBillingReducerState) => state.billingAddress,
);

export const selectBillingAddressIsShippingAddress: MemoizedSelector<Record<string, any>, boolean> = createSelector(
  selectBillingState,
  (state: DaffBillingReducerState) => state.billingAddressIsShippingAddress,
);

export const selectPaymentInfo: MemoizedSelector<Record<string, any>, PaymentInfo> = createSelector(
  selectBillingState,
  (state: DaffBillingReducerState) => state.paymentInfo,
);
