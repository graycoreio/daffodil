import { ActionReducerMap, createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import * as fromPayment from './payment.reducer';
import { PaymentInfo } from '../models/payment-info';

export interface PaymentState {
  payment: fromPayment.State;
}

export interface State {
  payment: PaymentState
}

export const reducers : ActionReducerMap<PaymentState> = {
  payment: fromPayment.reducer
}

/**
 * Payment State
 */
export const selectPaymentState: MemoizedSelector<object, PaymentState> = createFeatureSelector<PaymentState>('payment');

export const paymentStateSelector = createSelector(
  selectPaymentState,
  (state: PaymentState) => state.payment
)

export const selectPaymentInfoState: MemoizedSelector<object, PaymentInfo> = createSelector(
  paymentStateSelector,
  fromPayment.getPaymentInfo
)
