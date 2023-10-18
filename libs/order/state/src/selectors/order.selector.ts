import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import {
  daffOperationStateSelectorFactory,
  DaffOperationStateSelectors,
  DaffStateError,
} from '@daffodil/core/state';
import { DaffOrder } from '@daffodil/order';

import { getDaffOrderCollectionSelectors } from './order-collection/selectors';
import { getDaffOrderEntitySelectors } from './order-entities.selector';
import { getDaffOrderReducersStateSelector } from './order-feature.selector';
import {
  DaffOrderStateRootSlice,
  DaffOrderReducerState,
} from '../reducers/public_api';

export interface DaffOrderSelectors<T extends DaffOrder = DaffOrder> extends DaffOperationStateSelectors<DaffOrderStateRootSlice<T>, DaffOrderReducerState> {
  selectOrderState: MemoizedSelector<DaffOrderStateRootSlice, DaffOrderReducerState>;
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

  const selectOrders = createSelector(
    selectCollectionIds,
    selectOrderEntities,
    (ids, entities) => ids.map((id) => entities[id]),
  );

  return {
    ...daffOperationStateSelectorFactory(selectOrderState),
    selectOrderState,
    selectOrders,
  };
};

export const getOrderSelectors = (() => {
  let cache;
  return <T extends DaffOrder = DaffOrder>(): DaffOrderSelectors<T> =>
    cache = cache || createOrderSelectors<T>();
})();
