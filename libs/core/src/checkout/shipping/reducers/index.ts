import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromShipping from './shipping.reducer';

export interface ShippingState {
  shipping: fromShipping.State;
}

export interface State {
  shipping: ShippingState
}

export const reducers : ActionReducerMap<ShippingState> = {
  shipping: fromShipping.reducer
}

/**
 * Shipping State
 */
export const selectShippingState = createFeatureSelector<ShippingState>('shipping');

export const shippingStateSelector = createSelector(
  selectShippingState,
  (state: ShippingState) => state.shipping
)

export const selectShippingValueState = createSelector(
  shippingStateSelector,
  fromShipping.getShipping
)
