import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';
import { DaffOrder } from '@daffodil/order';

import {
  DaffOrderStateRootSlice,
  DaffOrderReducerState,
} from '../reducers/public_api';
import { getDaffOrderCollectionSelectors } from './order-collection/selectors';
import { getDaffOrderEntitySelectors } from './order-entities.selector';
import { getDaffOrderReducersStateSelector } from './order-feature.selector';

export interface DaffOrderSelectors<T extends DaffOrder = DaffOrder> {
  selectOrderState: MemoizedSelector<DaffOrderStateRootSlice, DaffOrderReducerState>;
  selectOrderLoading: MemoizedSelector<DaffOrderStateRootSlice, boolean>;
  selectOrderErrors: MemoizedSelector<DaffOrderStateRootSlice, DaffStateError[]>;
  selectOrders: MemoizedSelector<DaffOrderStateRootSlice, T[]>;
}

const createOrderSelectors = <T extends DaffOrder = DaffOrder>() => {
  const { selectOrderFeatureState } = getDaffOrderReducersStateSelector<T>();
  const {
    selectCollectionIds,
  } = getDaffOrderCollectionSelectors();
  const {
    selectOrderEntities,
  } = getDaffOrderEntitySelectors<T>();
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

  const selectOrders = createSelector(
    selectCollectionIds,
    selectOrderEntities,
    (ids, entities) => ids.map((id) => entities[id]),
  );

  return {
    selectOrderState,
    selectOrderLoading,
    selectOrderErrors,
    selectOrders,
  };
};

export const getOrderSelectors = (() => {
  let cache;
  return <T extends DaffOrder = DaffOrder>(): DaffOrderSelectors<T> =>
    cache = cache || createOrderSelectors<T>();
})();
