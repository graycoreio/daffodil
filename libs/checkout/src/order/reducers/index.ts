import { ActionReducerMap, createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import * as fromOrder from './order.reducer';
import { Order } from '../../models/order/order';

export interface OrderState {
  order: fromOrder.State;
}

export interface State {
  order: OrderState
}

export const reducers : ActionReducerMap<OrderState> = {
  order: fromOrder.reducer
}

/**
 * Order State
 */
export const selectOrderState: MemoizedSelector<object, OrderState> = createFeatureSelector<OrderState>('order');

export const orderStateSelector = createSelector(
  selectOrderState,
  (state: OrderState) => state.order
)

export const selectOrderValueState: MemoizedSelector<object, Order> = createSelector(
  orderStateSelector,
  fromOrder.getOrder
)

export const selectLoadingState: MemoizedSelector<object, boolean> = createSelector(
  orderStateSelector,
  fromOrder.getLoading
)
