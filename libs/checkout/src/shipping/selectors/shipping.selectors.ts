import { createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import { DaffAddress } from '@daffodil/core';

import { DaffShippingReducerState } from '../reducers/shipping/shipping-reducer.interface';
import { DaffShippingReducersState } from '../reducers/shipping-reducers.interface';

/**
 * Shipping Feature State
 */
export const selectShippingFeatureState: MemoizedSelector<object, DaffShippingReducersState> = createFeatureSelector<DaffShippingReducersState>('shipping');

/**
 * Shipping State
 */
export const selectShippingState = createSelector(
  selectShippingFeatureState,
  (state: DaffShippingReducersState) => state.shipping
);

export const selectShippingAddress: MemoizedSelector<object, DaffAddress> = createSelector(
  selectShippingState,
  (state: DaffShippingReducerState) => state.shippingAddress
);

export const selectShippingOptionId: MemoizedSelector<object, string> = createSelector(
  selectShippingState,
  (state: DaffShippingReducerState) => state.selectedShippingOptionId
);

export const selectIsShippingAddressValid: MemoizedSelector<object, boolean> = createSelector(
  selectShippingAddress,
  (state: DaffAddress) => !!state
);
