import { ActionReducerMap, createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import { DaffodilAddress } from '@daffodil/core';

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
export const selectShippingState: MemoizedSelector<object, ShippingState> = createFeatureSelector<ShippingState>('shipping');

export const shippingStateSelector = createSelector(
  selectShippingState,
  (state: ShippingState) => state.shipping
)

export const selectShippingAddressState: MemoizedSelector<object, DaffodilAddress> = createSelector(
  shippingStateSelector,
  fromShipping.getShippingAddress
)

export const selectShippingOptionState: MemoizedSelector<object, string> = createSelector(
  shippingStateSelector,
  fromShipping.getSelectedShippingOptionIndex
)

export const selectIsShippingAddressValid: MemoizedSelector<object, boolean> = createSelector(
  selectShippingAddressState,
  fromShipping.isShippingAddressValid
)
