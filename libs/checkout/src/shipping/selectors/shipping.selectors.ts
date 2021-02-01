import {
  createSelector,
  createFeatureSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffAddress } from '@daffodil/core';

import { DaffShippingReducersState } from '../reducers/shipping-reducers.interface';
import { DaffShippingReducerState } from '../reducers/shipping/shipping-reducer.interface';

/**
 * Shipping Feature State
 */
export const selectShippingFeatureState: MemoizedSelector<Record<string, any>, DaffShippingReducersState> = createFeatureSelector<DaffShippingReducersState>('shipping');

/**
 * Shipping State
 */
export const selectShippingState = createSelector(
  selectShippingFeatureState,
  (state: DaffShippingReducersState) => state.shipping,
);

export const selectShippingAddress: MemoizedSelector<Record<string, any>, DaffAddress> = createSelector(
  selectShippingState,
  (state: DaffShippingReducerState) => state.shippingAddress,
);

export const selectShippingOptionId: MemoizedSelector<Record<string, any>, string> = createSelector(
  selectShippingState,
  (state: DaffShippingReducerState) => state.selectedShippingOptionId,
);

export const selectIsShippingAddressValid: MemoizedSelector<Record<string, any>, boolean> = createSelector(
  selectShippingAddress,
  (state: DaffAddress) => !!state,
);
