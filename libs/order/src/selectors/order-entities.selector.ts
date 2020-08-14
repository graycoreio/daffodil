import { createSelector, MemoizedSelector } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { daffSubtract } from '@daffodil/core';
import { getDaffCartSelectors } from '@daffodil/cart';

import {
  daffGetOrderAdapter,
  DaffOrderEntityState
} from '../reducers/public_api';
import { getDaffOrderReducersStateSelector } from './order-feature.selector';
import { DaffOrder } from '../models/order';
import { DaffOrderItem } from '../models/public_api';

export interface DaffOrderEntitySelectors<T extends DaffOrder = DaffOrder> {
  selectOrderEntitiesState: MemoizedSelector<object, DaffOrderEntityState<T>>;
  selectOrderIds: MemoizedSelector<object, string[] | number[]>;
  selectOrderEntities: MemoizedSelector<object, Dictionary<T>>;
  selectAllOrders: MemoizedSelector<object, T[]>;
  selectOrderTotal: MemoizedSelector<object, number>;
  selectOrder: MemoizedSelector<object, T>;

  selectPlacedOrder: MemoizedSelector<object, T>;
  selectHasPlacedOrder: MemoizedSelector<object, boolean>;

  selectOrderTotals: MemoizedSelector<object, T['totals']>;
  selectOrderAppliedCodes: MemoizedSelector<object, T['applied_codes']>;
  selectOrderItems: MemoizedSelector<object, T['items']>;
  selectOrderBillingAddresses: MemoizedSelector<object, T['billing_addresses']>;
  selectOrderShippingAddresses: MemoizedSelector<object, T['shipping_addresses']>;
  selectOrderShipments: MemoizedSelector<object, T['shipments']>;
  selectOrderPayment: MemoizedSelector<object, T['payment']>;
  selectOrderInvoices: MemoizedSelector<object, T['invoices']>;
  selectOrderCredits: MemoizedSelector<object, T['credits']>;

  selectOrderItem: MemoizedSelector<object, DaffOrderItem>;
}

const createOrderEntitySelectors = <T extends DaffOrder = DaffOrder>() => {
  const { selectOrderFeatureState } = getDaffOrderReducersStateSelector<T>();
  const selectOrderEntitiesState = createSelector(
    selectOrderFeatureState,
    state => state.orders
  )
  const { selectIds, selectEntities, selectAll, selectTotal } = daffGetOrderAdapter<T>().getSelectors(selectOrderEntitiesState);
  const { selectCartOrderId } = getDaffCartSelectors();

  const selectOrder = createSelector(
    selectEntities,
    (orders, props) => orders[props.id] || null
  )

  const selectPlacedOrder = createSelector(
    selectEntities,
    selectCartOrderId,
    (orders, orderId) => orderId ? selectOrder.projector(orders, {id: orderId}) : null
  )
  const selectHasPlacedOrder = createSelector(
    selectPlacedOrder,
    placedOrder => !!placedOrder
  )

  const selectOrderTotals = createSelector(
    selectEntities,
    (orders, props) => {
      const order = selectOrder.projector(orders, {id: props.id});
      return (order && order.totals) || []
    }
  );
  const selectOrderAppliedCodes = createSelector(
    selectEntities,
    (orders, props) => {
      const order = selectOrder.projector(orders, {id: props.id});
      return (order && order.applied_codes) || []
    }
  );
  const selectOrderItems = createSelector(
    selectEntities,
    (orders, props) => {
      const order = selectOrder.projector(orders, {id: props.id});
      return (order && order.items) || []
    }
  );
  const selectOrderBillingAddresses = createSelector(
    selectEntities,
    (orders, props) => {
      const order = selectOrder.projector(orders, {id: props.id});
      return (order && order.billing_addresses) || []
    }
  );
  const selectOrderShippingAddresses = createSelector(
    selectEntities,
    (orders, props) => {
      const order = selectOrder.projector(orders, {id: props.id});
      return (order && order.shipping_addresses) || []
    }
  );
  const selectOrderShipments = createSelector(
    selectEntities,
    (orders, props) => {
      const order = selectOrder.projector(orders, {id: props.id});
      return (order && order.shipments) || []
    }
  );
  const selectOrderPayment = createSelector(
    selectEntities,
    (orders, props) => {
      const order = selectOrder.projector(orders, {id: props.id});
      return (order && order.payment) || null
    }
  );
  const selectOrderInvoices = createSelector(
    selectEntities,
    (orders, props) => {
      const order = selectOrder.projector(orders, {id: props.id});
      return (order && order.invoices) || []
    }
  );
  const selectOrderCredits = createSelector(
    selectEntities,
    (orders, props) => {
      const order = selectOrder.projector(orders, {id: props.id});
      return (order && order.credits) || []
    }
  );

  const selectOrderItem = createSelector(
		selectEntities,
		(orders, props) => selectOrderItems.projector(orders, {id: props.id}).find(item => item.item_id === props.item_id) || null
  );

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
    selectOrderTotal: selectTotal,

    /**
     * Selector for the most recently placed order (if any).
     */
    selectPlacedOrder,
    /**
     * Selector for the existence of the most recently placed order.
     */
    selectHasPlacedOrder,

    selectOrder,
    /**
     * Selects the specified order's totals.
     */
    selectOrderTotals,
    /**
     * Selects the specified order's applied coupon codes.
     */
    selectOrderAppliedCodes,
    /**
     * Selects the specified order's items.
     */
    selectOrderItems,
    /**
     * Selects the specified order's billing addresses.
     */
    selectOrderBillingAddresses,
    /**
     * Selects the specified order's shipping addresses.
     */
    selectOrderShippingAddresses,
    /**
     * Selects the specified order's shipments.
     */
    selectOrderShipments,
    /**
     * Selects the specified order's payment.
     */
    selectOrderPayment,
    /**
     * Selects the specified order's invoices.
     */
    selectOrderInvoices,
    /**
     * Selects the specified order's credits.
     */
    selectOrderCredits,
    /**
     * Selects the specified order's specified item.
     */
    selectOrderItem,
  }
}

export const getDaffOrderEntitySelectors = (() => {
  let cache;
  return <T extends DaffOrder = DaffOrder>(): DaffOrderEntitySelectors<T> =>
    cache = cache || createOrderEntitySelectors<T>()
})();

