import { createSelector, MemoizedSelector } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import {
  daffGetOrderAdapter,
  DaffOrderEntityState
} from '../reducers/public_api';
import { getDaffOrderReducersStateSelector } from './order-feature.selector';
import { DaffOrder } from '../models/order';

export interface DaffOrderEntitySelectors<T extends DaffOrder = DaffOrder> {
  selectOrderEntitiesState: MemoizedSelector<object, DaffOrderEntityState<T>>;
  selectOrderIds: MemoizedSelector<object, string[] | number[]>;
  selectOrderEntities: MemoizedSelector<object, Dictionary<T>>;
  selectAllOrders: MemoizedSelector<object, T[]>;
  selectOrderTotal: MemoizedSelector<object, number>;
}

const createOrderEntitySelectors = <T extends DaffOrder = DaffOrder>() => {
  const { selectOrderFeatureState } = getDaffOrderReducersStateSelector<T>();
  const selectOrderEntitiesState = createSelector(
    selectOrderFeatureState,
    state => state.orders
  )
  const { selectIds, selectEntities, selectAll, selectTotal } = daffGetOrderAdapter<T>().getSelectors(selectOrderEntitiesState);

  return {
    selectOrderEntitiesState,
    /**
     * Selector for order IDs.
     */
    selectOrderIds: selectIds,
    /**
     * Selector for order entities.
     */
    selectOrderEntities: selectEntities,
    /**
     * Selector for all orders.
     */
    selectAllOrders: selectAll,
    /**
     * Selector for total number of orders.
     */
    selectOrderTotal: selectTotal
  }
}

export const getDaffOrderEntitySelectors = (() => {
  let cache;
  return <T extends DaffOrder = DaffOrder>(): DaffOrderEntitySelectors<T> =>
    cache = cache || createOrderEntitySelectors<T>()
})();

