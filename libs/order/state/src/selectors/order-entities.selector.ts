import { Dictionary } from '@ngrx/entity';
import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { getDaffCartSelectors } from '@daffodil/cart/state';
import {
  DaffOrder,
  DaffOrderItem,
  DaffOrderTotal,
  DaffOrderTotalTypeEnum,
} from '@daffodil/order';

import {
  daffGetOrderAdapter,
  DaffOrderEntityState,
} from '../reducers/public_api';
import { getDaffOrderReducersStateSelector } from './order-feature.selector';

export interface DaffOrderEntitySelectors<T extends DaffOrder = DaffOrder> {
  selectOrderEntitiesState: MemoizedSelector<Record<string, any>, DaffOrderEntityState<T>>;
  /**
   * Selector for order IDs.
   */
  selectOrderIds: MemoizedSelector<Record<string, any>, T['id'][]>;
  /**
   * Selector for order entities.
   */
  selectOrderEntities: MemoizedSelector<Record<string, any>, Dictionary<T>>;
  /**
   * Selector for all orders.
   */
  selectAllOrders: MemoizedSelector<Record<string, any>, T[]>;
  /**
   * Selector for total number of orders.
   */
  selectOrderTotal: MemoizedSelector<Record<string, any>, number>;
  selectOrder: MemoizedSelector<Record<string, any>, T>;

  /**
   * Selector for the most recently placed order (if any).
   */
  selectPlacedOrder: MemoizedSelector<Record<string, any>, T>;
  /**
   * Selector for the existence of the most recently placed order.
   */
  selectHasPlacedOrder: MemoizedSelector<Record<string, any>, boolean>;

  /**
   * Selects the specified order's totals.
   */
  selectOrderTotals: MemoizedSelector<Record<string, any>, T['totals']>;
  /**
   * Selects the specified order's applied coupon codes.
   */
  selectOrderAppliedCodes: MemoizedSelector<Record<string, any>, T['applied_codes']>;
  /**
   * Selects the specified order's items.
   */
  selectOrderItems: MemoizedSelector<Record<string, any>, T['items']>;
  /**
   * Selects the specified order's billing addresses.
   */
  selectOrderBillingAddresses: MemoizedSelector<Record<string, any>, T['billing_addresses']>;
  /**
   * Selects the specified order's shipping addresses.
   */
  selectOrderShippingTotalAddresses: MemoizedSelector<Record<string, any>, T['shipping_addresses']>;
  /**
   * Selects the specified order's shipments.
   */
  selectOrderShipments: MemoizedSelector<Record<string, any>, T['shipments']>;
  /**
   * Selects the specified order's payment.
   */
  selectOrderPayment: MemoizedSelector<Record<string, any>, T['payment']>;
  /**
   * Selects the specified order's invoices.
   */
  selectOrderInvoices: MemoizedSelector<Record<string, any>, T['invoices']>;
  /**
   * Selects the specified order's credits.
   */
  selectOrderCredits: MemoizedSelector<Record<string, any>, T['credits']>;

  /**
   * Selects the specified order's specified item.
   */
  selectOrderItem: MemoizedSelector<Record<string, any>, DaffOrderItem>;

  /**
   * Selects the specified order's grand total.
   */
  selectOrderGrandTotal: MemoizedSelector<Record<string, any>, DaffOrderTotal>;
  /**
   * Selects the specified order's subtotal.
   */
  selectOrderSubtotal: MemoizedSelector<Record<string, any>, DaffOrderTotal>;
  /**
   * Selects the specified order's shipping total.
   */
  selectOrderShippingTotal: MemoizedSelector<Record<string, any>, DaffOrderTotal>;
  /**
   * Selects the specified order's discount total.
   */
	selectOrderDiscountTotal: MemoizedSelector<Record<string, any>, DaffOrderTotal>;
	/**
	 * Selects whether the specified order has a discount.
	 */
	selectOrderHasDiscount: MemoizedSelector<Record<string, any>, boolean>;
  /**
   * Selects the specified order's tax total.
   */
  selectOrderTaxTotal: MemoizedSelector<Record<string, any>, DaffOrderTotal>;
}

const createOrderEntitySelectors = <T extends DaffOrder = DaffOrder>() => {
  const { selectOrderFeatureState } = getDaffOrderReducersStateSelector<T>();
  const selectOrderEntitiesState = createSelector(
    selectOrderFeatureState,
    state => state.orders,
  );
  const { selectIds, selectEntities, selectAll, selectTotal } = daffGetOrderAdapter<T>().getSelectors(selectOrderEntitiesState);
  const { selectCartOrderId } = getDaffCartSelectors();

  const selectOrder = createSelector(
    selectEntities,
    (orders, props) => orders[props.id] || null,
  );

  const selectPlacedOrder = createSelector(
    selectEntities,
    selectCartOrderId,
    (orders, orderId) => orderId ? selectOrder.projector(orders, { id: orderId }) : null,
  );
  const selectHasPlacedOrder = createSelector(
    selectPlacedOrder,
    placedOrder => !!placedOrder,
  );

  const selectOrderTotals = createSelector(
    selectEntities,
    (orders, props) => {
      const order: DaffOrder = selectOrder.projector(orders, { id: props.id });
      return (order && order.totals) || [];
    },
  );
  const selectOrderAppliedCodes = createSelector(
    selectEntities,
    (orders, props) => {
      const order = selectOrder.projector(orders, { id: props.id });
      return (order && order.applied_codes) || [];
    },
  );
  const selectOrderItems = createSelector(
    selectEntities,
    (orders, props) => {
      const order = selectOrder.projector(orders, { id: props.id });
      return (order && order.items) || [];
    },
  );
  const selectOrderBillingAddresses = createSelector(
    selectEntities,
    (orders, props) => {
      const order = selectOrder.projector(orders, { id: props.id });
      return (order && order.billing_addresses) || [];
    },
  );
  const selectOrderShippingTotalAddresses = createSelector(
    selectEntities,
    (orders, props) => {
      const order = selectOrder.projector(orders, { id: props.id });
      return (order && order.shipping_addresses) || [];
    },
  );
  const selectOrderShipments = createSelector(
    selectEntities,
    (orders, props) => {
      const order = selectOrder.projector(orders, { id: props.id });
      return (order && order.shipments) || [];
    },
  );
  const selectOrderPayment = createSelector(
    selectEntities,
    (orders, props) => {
      const order = selectOrder.projector(orders, { id: props.id });
      return (order && order.payment) || null;
    },
  );
  const selectOrderInvoices = createSelector(
    selectEntities,
    (orders, props) => {
      const order = selectOrder.projector(orders, { id: props.id });
      return (order && order.invoices) || [];
    },
  );
  const selectOrderCredits = createSelector(
    selectEntities,
    (orders, props) => {
      const order = selectOrder.projector(orders, { id: props.id });
      return (order && order.credits) || [];
    },
  );

  const selectOrderGrandTotal = createSelector(
    selectEntities,
    (orders, props) => {
      const totals = selectOrderTotals.projector(orders, { id: props.id });
      const index = totals.findIndex(total => total.type === DaffOrderTotalTypeEnum.GrandTotal);

      return index > -1 ? totals[index] : null;
    },
  );
  const selectOrderSubtotal = createSelector(
    selectEntities,
    (orders, props) => {
      const totals = selectOrderTotals.projector(orders, { id: props.id });
      const index = totals.findIndex(total => total.type === DaffOrderTotalTypeEnum.Subtotal);

      return index > -1 ? totals[index] : null;
    },
  );
  const selectOrderShippingTotal = createSelector(
    selectEntities,
    (orders, props) => {
      const totals = selectOrderTotals.projector(orders, { id: props.id });
      const index = totals.findIndex(total => total.type === DaffOrderTotalTypeEnum.Shipping);

      return index > -1 ? totals[index] : null;
    },
  );
  const selectOrderDiscountTotal = createSelector(
    selectEntities,
    (orders, props) => {
      const totals = selectOrderTotals.projector(orders, { id: props.id });
      const index = totals.findIndex(total => total.type === DaffOrderTotalTypeEnum.Discount);

      return index > -1 ? totals[index] : null;
    },
  );
  const selectOrderHasDiscount = createSelector(
    selectEntities,
    (orders, props) => {
      const discountTotal = selectOrderDiscountTotal.projector(orders, { id: props.id });

      return discountTotal?.value > 0;
    },
  );
  const selectOrderTaxTotal = createSelector(
    selectEntities,
    (orders, props) => {
      const totals = selectOrderTotals.projector(orders, { id: props.id });
      const index = totals.findIndex(total => total.type === DaffOrderTotalTypeEnum.Tax);

      return index > -1 ? totals[index] : null;
    },
  );

  const selectOrderItem = createSelector(
    selectEntities,
    (orders, props) => selectOrderItems.projector(orders, { id: props.id }).find(item => item.item_id === props.item_id) || null,
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
    selectOrderShippingTotalAddresses,
    selectOrderShipments,
    selectOrderPayment,
    selectOrderInvoices,
    selectOrderCredits,
    selectOrderItem,

    selectOrderGrandTotal,
    selectOrderSubtotal,
    selectOrderShippingTotal,
    selectOrderDiscountTotal,
    selectOrderHasDiscount,
    selectOrderTaxTotal,
  };
};

export const getDaffOrderEntitySelectors = (() => {
  let cache;
  return <T extends DaffOrder = DaffOrder>(): DaffOrderEntitySelectors<T> =>
    cache = cache || createOrderEntitySelectors<T>();
})();

