import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  MemoizedSelector,
} from '@ngrx/store';

import * as fromDemoCheckout from './checkout.reducer';
import * as fromDemoPayment from './payment.reducer';
import * as fromDemoShipping from './shipping.reducer';

export interface DemoCheckoutState {
  demoShipping: fromDemoShipping.State;
  demoPayment: fromDemoPayment.State;
  demoCheckout: fromDemoCheckout.State;
}

export interface State {
  demoCheckout: DemoCheckoutState;
}

export const reducers: ActionReducerMap<DemoCheckoutState> = {
  demoShipping: fromDemoShipping.reducer,
  demoPayment: fromDemoPayment.reducer,
  demoCheckout: fromDemoCheckout.reducer,
};

/**
 * Demo Checkout State
 */
export const selectDemoCheckoutState: MemoizedSelector<Record<string, any>, DemoCheckoutState> = createFeatureSelector<DemoCheckoutState>('demoCheckout');

/**
 * Demo Checkout Shipping State
 */
export const demoShippingStateSelector = createSelector(
  selectDemoCheckoutState,
  (state: DemoCheckoutState) => state.demoShipping,
);

export const selectShowShippingForm: MemoizedSelector<Record<string, any>, boolean> = createSelector(
  demoShippingStateSelector,
  fromDemoShipping.getShowShippingForm,
);

/**
 * Demo Checkout Payment State
 */
export const demoPaymentStateSelector = createSelector(
  selectDemoCheckoutState,
  (state: DemoCheckoutState) => state.demoPayment,
);

export const selectShowPaymentView: MemoizedSelector<Record<string, any>, boolean> = createSelector(
  demoPaymentStateSelector,
  fromDemoPayment.getShowPaymentView,
);

export const selectShowPaymentForm: MemoizedSelector<Record<string, any>, boolean> = createSelector(
  demoPaymentStateSelector,
  fromDemoPayment.getShowPaymentForm,
);

/**
 * Demo Checkout Checkout State
 */
export const demoCheckoutStateSelector = createSelector(
  selectDemoCheckoutState,
  (state: DemoCheckoutState) => state.demoCheckout,
);

export const selectEnablePlaceOrderButton: MemoizedSelector<Record<string, any>, boolean> = createSelector(
  demoCheckoutStateSelector,
  fromDemoCheckout.getEnablePlaceOrderButton,
);

export const selectShowReviewView: MemoizedSelector<Record<string, any>, boolean> = createSelector(
  demoCheckoutStateSelector,
  fromDemoCheckout.getShowReviewView,
);
