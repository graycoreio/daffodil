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
import { DaffOrderTotal, DaffOrderTotalTypeEnum } from '../models/order-total';

export interface DaffOrderEntitySelectors<T extends DaffOrder = DaffOrder> {
  selectOrderEntitiesState: MemoizedSelector<object, DaffOrderEntityState<T>>;
  /**
   * Selector for order IDs.
   */
  selectOrderIds: MemoizedSelector<object, string[] | number[]>;
  /**
   * Selector for order entities.
   */
  selectOrderEntities: MemoizedSelector<object, Dictionary<T>>;
  /**
   * Selector for all orders.
   */
  selectAllOrders: MemoizedSelector<object, T[]>;
  /**
   * Selector for total number of orders.
   */
  selectOrderTotal: MemoizedSelector<object, number>;
  selectOrder: MemoizedSelector<object, T>;

  /**
   * Selector for the most recently placed order (if any).
   */
  selectPlacedOrder: MemoizedSelector<object, T>;
  /**
   * Selector for the existence of the most recently placed order.
   */
  selectHasPlacedOrder: MemoizedSelector<object, boolean>;

  /**
   * Selects the specified order's totals.
   */
  selectOrderTotals: MemoizedSelector<object, T['totals']>;
  /**
   * Selects the specified order's applied coupon codes.
   */
  selectOrderAppliedCodes: MemoizedSelector<object, T['applied_codes']>;
  /**
   * Selects the specified order's items.
   */
  selectOrderItems: MemoizedSelector<object, T['items']>;
  /**
   * Selects the specified order's billing addresses.
   */
  selectOrderBillingAddresses: MemoizedSelector<object, T['billing_addresses']>;
  /**
   * Selects the specified order's shipping addresses.
   */
  selectOrderShippingAddresses: MemoizedSelector<object, T['shipping_addresses']>;
  /**
   * Selects the specified order's shipments.
   */
  selectOrderShipments: MemoizedSelector<object, T['shipments']>;
  /**
   * Selects the specified order's payment.
   */
  selectOrderPayment: MemoizedSelector<object, T['payment']>;
  /**
   * Selects the specified order's invoices.
   */
  selectOrderInvoices: MemoizedSelector<object, T['invoices']>;
  /**
   * Selects the specified order's credits.
   */
  selectOrderCredits: MemoizedSelector<object, T['credits']>;

  /**
   * Selects the specified order's specified item.
   */
  selectOrderItem: MemoizedSelector<object, DaffOrderItem>;

  /**
   * Selects the specified order's grand total.
   */
  selectOrderGrandTotal: MemoizedSelector<object, DaffOrderTotal>;
  /**
   * Selects the specified order's subtotal.
   */
  selectOrderSubtotal: MemoizedSelector<object, DaffOrderTotal>;
  /**
   * Selects the specified order's shipping total.
   */
  selectOrderShipping: MemoizedSelector<object, DaffOrderTotal>;
  /**
   * Selects the specified order's discount total.
   */
  selectOrderDiscount: MemoizedSelector<object, DaffOrderTotal>;
  /**
   * Selects the specified order's tax total.
   */
  selectOrderTax: MemoizedSelector<object, DaffOrderTotal>;
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
      const order: DaffOrder = selectOrder.projector(orders, {id: props.id});
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

  const selectOrderGrandTotal = createSelector(
    selectEntities,
    (orders, props) => {
      const totals = selectOrderTotals.projector(orders, {id: props.id});
      const index = totals.findIndex(total => total.type === DaffOrderTotalTypeEnum.GrandTotal);

      return index > -1 ? totals[index] : null
    }
  );
  const selectOrderSubtotal = createSelector(
    selectEntities,
    (orders, props) => {
      const totals = selectOrderTotals.projector(orders, { id: props.id });
      const index = totals.findIndex(total => total.type === DaffOrderTotalTypeEnum.Subtotal);

      return index > -1 ? totals[index] : null
    }
  );
  const selectOrderShipping = createSelector(
    selectEntities,
    (orders, props) => {
      const totals = selectOrderTotals.projector(orders, { id: props.id });
      const index = totals.findIndex(total => total.type === DaffOrderTotalTypeEnum.Shipping);

      return index > -1 ? totals[index] : null
    }
  );
  const selectOrderDiscount = createSelector(
    selectEntities,
    (orders, props) => {
      const totals = selectOrderTotals.projector(orders, { id: props.id });
      const index = totals.findIndex(total => total.type === DaffOrderTotalTypeEnum.Discount);

      return index > -1 ? totals[index] : null
    }
  );
  const selectOrderTax = createSelector(
    selectEntities,
    (orders, props) => {
      const totals = selectOrderTotals.projector(orders, { id: props.id });
      const index = totals.findIndex(total => total.type === DaffOrderTotalTypeEnum.Tax);

      return index > -1 ? totals[index] : null
    }
  );

  const selectOrderItem = createSelector(
		selectEntities,
		(orders, props) => selectOrderItems.projector(orders, {id: props.id}).find(item => item.item_id === props.item_id) || null
  );

  return {
    selectOrderEntitiesState,
    selectOrderIds: selectIds,
    selectOrderEntities: selectEntities,
    selectAllOrders: selectAll,
    selectOrderTotal: selectTotal,

    selectPlacedOrder,
    selectHasPlacedOrder,

    selectOrder,
    selectOrderTotals,
    selectOrderAppliedCodes,
    selectOrderItems,
    selectOrderBillingAddresses,
    selectOrderShippingAddresses,
    selectOrderShipments,
    selectOrderPayment,
    selectOrderInvoices,
    selectOrderCredits,
    selectOrderItem,

    selectOrderGrandTotal,
    selectOrderSubtotal,
    selectOrderShipping,
    selectOrderDiscount,
    selectOrderTax,
  }
}

export const getDaffOrderEntitySelectors = (() => {
  let cache;
  return <T extends DaffOrder = DaffOrder>(): DaffOrderEntitySelectors<T> =>
    cache = cache || createOrderEntitySelectors<T>()
})();

