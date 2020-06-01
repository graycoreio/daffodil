import { createSelector, MemoizedSelector } from '@ngrx/store';

import { getDaffOrderReducersStateSelector } from './order-feature.selector';
import { DaffOrder } from '../models/order';
import {
  DaffOrderReducerState,
} from '../reducers/public_api';

export interface DaffOrderSelectors {
  selectOrderState: MemoizedSelector<object, DaffOrderReducerState>;
  selectOrderLoading: MemoizedSelector<object, boolean>;
  selectOrderErrors: MemoizedSelector<object, string[]>;
}

const createOrderSelectors = <T extends DaffOrder = DaffOrder>() => {
  const { selectOrderFeatureState } = getDaffOrderReducersStateSelector<T>();
  const selectOrderState = createSelector(
    selectOrderFeatureState,
    state => state.order
  );

  const selectOrderLoading = createSelector(
    selectOrderState,
    state => state.loading
  );

  const selectOrderErrors = createSelector(
    selectOrderState,
    state => state.errors
  );

  return {
    selectOrderState,
    selectOrderLoading,
    selectOrderErrors
  }
}

export const getOrderSelectors = (() => {
  let cache;
  return <T extends DaffOrder = DaffOrder>(): DaffOrderSelectors =>
    cache = cache || createOrderSelectors<T>()
})();
