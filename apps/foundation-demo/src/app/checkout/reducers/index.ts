import { ActionReducerMap, createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import * as fromFoundationShipping from './shipping.reducer';
import * as fromFoundationPayment from './payment.reducer';

export interface FoundationCheckoutState {
  foundationShipping: fromFoundationShipping.State;
  foundationPayment: fromFoundationPayment.State;
}

export interface State {
  foundationCheckout: FoundationCheckoutState
}

export const reducers : ActionReducerMap<FoundationCheckoutState> = {
  foundationShipping: fromFoundationShipping.reducer,
  foundationPayment: fromFoundationPayment.reducer
}

/**
 * Foundation Checkout State
 */
export const selectFoundationCheckoutState: MemoizedSelector<object, FoundationCheckoutState> = createFeatureSelector<FoundationCheckoutState>('foundationCheckout');

/**
 * Foundation Checkout Shipping State
 */
export const foundationShippingStateSelector = createSelector(
  selectFoundationCheckoutState,
  (state: FoundationCheckoutState) => state.foundationShipping
);

export const selectShowShippingForm: MemoizedSelector<object, boolean> = createSelector(
  foundationShippingStateSelector,
  fromFoundationShipping.getShowShippingForm
);

/**
 * Foundation Checkout Payment State
 */
export const foundationPaymentStateSelector = createSelector(
  selectFoundationCheckoutState,
  (state: FoundationCheckoutState) => state.foundationPayment
);

export const selectShowPaymentView: MemoizedSelector<object, boolean> = createSelector(
  foundationPaymentStateSelector,
  fromFoundationPayment.getShowPaymentView
)

export const selectShowPaymentForm: MemoizedSelector<object, boolean> = createSelector(
  foundationPaymentStateSelector,
  fromFoundationPayment.getShowPaymentForm
)
