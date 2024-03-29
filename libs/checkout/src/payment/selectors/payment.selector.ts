import {
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';

import { DaffPaymentReducerState } from '../reducers/payment/payment-reducer.interface';
import { DaffPaymentReducersState } from '../reducers/payment-reducers.interface';

/**
 * Payment Feature State
 */
export const selectPaymentFeatureState = createFeatureSelector<DaffPaymentReducersState>('payment');

/**
 * Payment State
 */
export const selectPaymentState = createSelector(
  selectPaymentFeatureState,
  (state: DaffPaymentReducersState) => state.payment,
);

export const selectPaymentInfo = createSelector(
  selectPaymentState,
  (state: DaffPaymentReducerState) => state.paymentInfo,
);
