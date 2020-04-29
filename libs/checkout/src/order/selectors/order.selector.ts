import { createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import { DaffOrder } from '../../models/order/order';
import { DaffOrderReducersState } from '../reducers/order-reducers.interface';
import { DaffOrderReducerState } from '../reducers/order/order-reducer.interface';

/**
 * Order Feature State
 */
export const selectOrderFeatureState: MemoizedSelector<object, DaffOrderReducersState> = createFeatureSelector<DaffOrderReducersState>('order');

/**
 * Order State
 */
export const selectOrderState = createSelector(
  selectOrderFeatureState,
  (state: DaffOrderReducersState) => state.order
)

export const selectOrder: MemoizedSelector<object, DaffOrder> = createSelector(
  selectOrderState,
  (state: DaffOrderReducerState) => state.order
)

export const selectLoading: MemoizedSelector<object, boolean> = createSelector(
  selectOrderState,
  (state: DaffOrderReducerState) => state.loading
)

export const selectErrors: MemoizedSelector<object, string[]> = createSelector(
  selectOrderState,
  (state: DaffOrderReducerState) => state.errors
)
