import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffOrder } from '@daffodil/order';

import { DaffOrderReducerState } from '../reducers/public_api';
import { getDaffOrderReducersStateSelector } from './order-feature.selector';

export interface DaffOrderSelectors {
  selectOrderState: MemoizedSelector<Record<string, any>, DaffOrderReducerState>;
  selectOrderLoading: MemoizedSelector<Record<string, any>, boolean>;
  selectOrderErrors: MemoizedSelector<Record<string, any>, string[]>;
}

const createOrderSelectors = <T extends DaffOrder = DaffOrder>() => {
  const { selectOrderFeatureState } = getDaffOrderReducersStateSelector<T>();
  const selectOrderState = createSelector(
    selectOrderFeatureState,
    state => state.order,
  );

  const selectOrderLoading = createSelector(
    selectOrderState,
    state => state.loading,
  );

  const selectOrderErrors = createSelector(
    selectOrderState,
    state => state.errors,
  );

  return {
    selectOrderState,
    selectOrderLoading,
    selectOrderErrors,
  };
};

export const getOrderSelectors = (() => {
  let cache;
  return <T extends DaffOrder = DaffOrder>(): DaffOrderSelectors =>
    cache = cache || createOrderSelectors<T>();
})();
