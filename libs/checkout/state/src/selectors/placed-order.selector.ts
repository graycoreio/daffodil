import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { getDaffCartSelectors } from '@daffodil/cart/state';
import { DaffOrder } from '@daffodil/order';
import { getDaffOrderSelectors } from '@daffodil/order/state';

import { DaffCheckoutStateRootSlice } from '../reducers/public_api';

/**
 * Selectors for the most recently placed order.
 */
export interface DaffCheckoutPlacedOrderSelectors<T extends DaffOrder = DaffOrder> {
  /**
   * Selector for the most recently placed order (if any).
   */
  selectPlacedOrder: MemoizedSelector<DaffCheckoutStateRootSlice<T>, T>;
  /**
   * Selector for the existence of the most recently placed order.
   */
  selectHasPlacedOrder: MemoizedSelector<DaffCheckoutStateRootSlice<T>, boolean>;
}

const createCheckoutPlacedOrderSelectors = <T extends DaffOrder = DaffOrder>(): DaffCheckoutPlacedOrderSelectors<T> => {
  const { selectCartOrderId } = getDaffCartSelectors();
  const { selectOrder, selectOrderEntities } = getDaffOrderSelectors<T>();

  const selectPlacedOrder = createSelector(
    selectOrderEntities,
    selectCartOrderId,
    (orders, orderId) => orderId ? selectOrder(orderId).projector(orders) : null,
  );

  const selectHasPlacedOrder = createSelector(
    selectPlacedOrder,
    placedOrder => !!placedOrder,
  );

  return {
    selectPlacedOrder,
    selectHasPlacedOrder,
  };
};

/**
 * Gets the placed order selectors.
 */
export const getCheckoutPlacedOrderSelectors = (() => {
  let cache;
  return <T extends DaffOrder = DaffOrder>(): DaffCheckoutPlacedOrderSelectors<T> =>
    cache = cache || createCheckoutPlacedOrderSelectors<T>();
})();
