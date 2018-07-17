import { ActionReducerMap, createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import * as fromShipping from './shipping.reducer';
import { ShippingAddress } from '../models/shipping-address';

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
export const selectShippingState: MemoizedSelector<object, ShippingState> = createFeatureSelector<ShippingState>('shipping');

export const shippingStateSelector = createSelector(
  selectShippingState,
  (state: ShippingState) => state.shipping
)

export const selectShippingInfoState: MemoizedSelector<object, ShippingAddress> = createSelector(
  shippingStateSelector,
  fromShipping.getShippingInfo
)

export const selectShippingOptionState: MemoizedSelector<object, string> = createSelector(
  shippingStateSelector,
  fromShipping.getSelectedShippingOption
)

export const selectIsShippingInfoValid: MemoizedSelector<object, boolean> = createSelector(
  selectShippingInfoState,
  fromShipping.isShippingInfoValid
)

export const selectIsShippingOptionSelected: MemoizedSelector<object, boolean> = createSelector(
  selectShippingOptionState,
  fromShipping.isShippingOptionSelected
)
