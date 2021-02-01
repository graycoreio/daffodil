import {
  createSelector,
  createFeatureSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffOrder } from '../../models/order/order';
import { DaffOrderReducersState } from '../reducers/order-reducers.interface';
import { DaffOrderReducerState } from '../reducers/order/order-reducer.interface';

/**
 * Order Feature State
 *
 * @deprecated
 */
export const selectOrderFeatureState: MemoizedSelector<Record<string, any>, DaffOrderReducersState> = createFeatureSelector<DaffOrderReducersState>('order');

/**
 * Order State
 *
 * @deprecated
 */
export const selectOrderState = createSelector(
  selectOrderFeatureState,
  (state: DaffOrderReducersState) => state.order,
);

/**
 * @deprecated
 */
export const selectOrder: MemoizedSelector<Record<string, any>, DaffOrder> = createSelector(
  selectOrderState,
  (state: DaffOrderReducerState) => state.order,
);

/**
 * @deprecated
 */
export const selectLoading: MemoizedSelector<Record<string, any>, boolean> = createSelector(
  selectOrderState,
  (state: DaffOrderReducerState) => state.loading,
);

/**
 * @deprecated
 */
export const selectErrors: MemoizedSelector<Record<string, any>, string[]> = createSelector(
  selectOrderState,
  (state: DaffOrderReducerState) => state.errors,
);
