import { Dictionary } from '@ngrx/entity';
import {
  createSelector,
  defaultMemoize,
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
  selectOrder: (orderId: T['id']) => MemoizedSelector<Record<string, any>, T>;

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
  selectOrderTotals: (orderId: T['id']) => MemoizedSelector<Record<string, any>, T['totals']>;
  /**
   * Selects the specified order's applied coupon codes.
   */
  selectOrderAppliedCodes: (orderId: T['id']) => MemoizedSelector<Record<string, any>, T['applied_codes']>;
  /**
   * Selects the specified order's items.
   */
  selectOrderItems: (orderId: T['id']) => MemoizedSelector<Record<string, any>, T['items']>;
  /**
   * Selects the specified order's billing addresses.
   */
  selectOrderBillingAddresses: (orderId: T['id']) => MemoizedSelector<Record<string, any>, T['billing_addresses']>;
  /**
   * Selects the specified order's shipping addresses.
   */
  selectOrderShippingTotalAddresses: (orderId: T['id']) => MemoizedSelector<Record<string, any>, T['shipping_addresses']>;
  /**
   * Selects the specified order's shipments.
   */
  selectOrderShipments: (orderId: T['id']) => MemoizedSelector<Record<string, any>, T['shipments']>;
  /**
   * Selects the specified order's payment.
   */
  selectOrderPayment: (orderId: T['id']) => MemoizedSelector<Record<string, any>, T['payment']>;
  /**
   * Selects the specified order's invoices.
   */
  selectOrderInvoices: (orderId: T['id']) => MemoizedSelector<Record<string, any>, T['invoices']>;
  /**
   * Selects the specified order's credits.
   */
  selectOrderCredits: (orderId: T['id']) => MemoizedSelector<Record<string, any>, T['credits']>;

  /**
   * Selects the specified order's specified item.
   */
  selectOrderItem: (orderId: T['id'], itemId: T['items'][0]['item_id']) => MemoizedSelector<Record<string, any>, DaffOrderItem>;

  /**
   * Selects the specified order's grand total.
   */
  selectOrderGrandTotal: (orderId: T['id']) => MemoizedSelector<Record<string, any>, DaffOrderTotal>;
  /**
   * Selects the specified order's subtotal.
   */
  selectOrderSubtotal: (orderId: T['id']) => MemoizedSelector<Record<string, any>, DaffOrderTotal>;
  /**
   * Selects the specified order's shipping total.
   */
  selectOrderShippingTotal: (orderId: T['id']) => MemoizedSelector<Record<string, any>, DaffOrderTotal>;
  /**
   * Selects the specified order's discount total.
   */
	selectOrderDiscountTotal: (orderId: T['id']) => MemoizedSelector<Record<string, any>, DaffOrderTotal>;
	/**
	 * Selects whether the specified order has a discount.
	 */
	selectOrderHasDiscount: (orderId: T['id']) => MemoizedSelector<Record<string, any>, boolean>;
  /**
   * Selects the specified order's tax total.
   */
  selectOrderTaxTotal: (orderId: T['id']) => MemoizedSelector<Record<string, any>, DaffOrderTotal>;
}

const createOrderEntitySelectors = <T extends DaffOrder = DaffOrder>() => {
  const { selectOrderFeatureState } = getDaffOrderReducersStateSelector<T>();
  const selectOrderEntitiesState = createSelector(
    selectOrderFeatureState,
    state => state.orders,
  );
  const { selectIds, selectEntities, selectAll, selectTotal } = daffGetOrderAdapter<T>().getSelectors(selectOrderEntitiesState);
  const { selectCartOrderId } = getDaffCartSelectors();

  const selectOrder: (orderId: T['id']) => MemoizedSelector<Record<string, any>, T> =
    defaultMemoize((orderId: T['id']) => createSelector(
      selectEntities,
      (orders: Dictionary<T>) => orders[orderId] || null,
    )).memoized;

  const selectPlacedOrder = createSelector(
    selectEntities,
    selectCartOrderId,
    (orders, orderId) => orderId ? selectOrder(orderId).projector(orders) : null,
  );

  const selectHasPlacedOrder = createSelector(
    selectPlacedOrder,
    placedOrder => !!placedOrder,
  );

  const selectOrderTotals: (orderId: T['id']) => MemoizedSelector<Record<string, any>, T['totals']> =
    defaultMemoize((orderId: T['id']) => createSelector(
      selectOrder(orderId),
      (order) => (order && order.totals) || [],
    )).memoized;

  const selectOrderAppliedCodes = defaultMemoize((orderId: T['id']) => createSelector(
    selectOrder(orderId),
    (order) => (order && order.applied_codes) || [],
  )).memoized;

  const selectOrderItems: (orderId: T['id']) => MemoizedSelector<Record<string, any>, T['items']> =
    defaultMemoize((orderId: T['id']) => createSelector(
      selectOrder(orderId),
      (order) => (order && order.items) || [],
    )).memoized;

  const selectOrderBillingAddresses = defaultMemoize((orderId: T['id']) => createSelector(
    selectOrder(orderId),
    (order) => (order && order.billing_addresses) || [],
  )).memoized;

  const selectOrderShippingTotalAddresses = defaultMemoize((orderId: T['id']) => createSelector(
    selectOrder(orderId),
    (order) => (order && order.shipping_addresses) || [],
  )).memoized;

  const selectOrderShipments = defaultMemoize((orderId: T['id']) => createSelector(
    selectOrder(orderId),
    (order) => (order && order.shipments) || [],
  )).memoized;

  const selectOrderPayment = defaultMemoize((orderId: T['id']) => createSelector(
    selectOrder(orderId),
    (order) => (order && order.payment) || null,
  )).memoized;

  const selectOrderInvoices = defaultMemoize((orderId: T['id']) => createSelector(
    selectOrder(orderId),
    (order) => (order && order.invoices) || [],
  )).memoized;

  const selectOrderCredits = defaultMemoize((orderId: T['id']) => createSelector(
    selectOrder(orderId),
    (order) => (order && order.credits) || [],
  )).memoized;

  const selectOrderGrandTotal = defaultMemoize((orderId: T['id']) => createSelector(
    selectOrderTotals(orderId),
    totals => {
      const index = totals.findIndex(total => total.type === DaffOrderTotalTypeEnum.GrandTotal);

      return index > -1 ? totals[index] : null;
    },
  )).memoized;

  const selectOrderSubtotal = defaultMemoize((orderId: T['id']) => createSelector(
    selectOrderTotals(orderId),
    totals => {
      const index = totals.findIndex(total => total.type === DaffOrderTotalTypeEnum.Subtotal);

      return index > -1 ? totals[index] : null;
    },
  )).memoized;

  const selectOrderShippingTotal = defaultMemoize((orderId: T['id']) => createSelector(
    selectOrderTotals(orderId),
    totals => {
      const index = totals.findIndex(total => total.type === DaffOrderTotalTypeEnum.Shipping);

      return index > -1 ? totals[index] : null;
    },
  )).memoized;

  const selectOrderDiscountTotal: (orderId: T['id']) => MemoizedSelector<Record<string, any>, DaffOrderTotal> =
    defaultMemoize((orderId: T['id']) => createSelector(
      selectOrderTotals(orderId),
      totals => {
        const index = totals.findIndex(total => total.type === DaffOrderTotalTypeEnum.Discount);

        return index > -1 ? totals[index] : null;
      },
    )).memoized;

  const selectOrderHasDiscount = defaultMemoize((orderId: T['id']) => createSelector(
    selectOrderDiscountTotal(orderId),
    discountTotal => discountTotal?.value > 0,
  )).memoized;

  const selectOrderTaxTotal = defaultMemoize((orderId: T['id']) => createSelector(
    selectOrderTotals(orderId),
    totals => {
      const index = totals.findIndex(total => total.type === DaffOrderTotalTypeEnum.Tax);

      return index > -1 ? totals[index] : null;
    },
  )).memoized;

  const selectOrderItem = defaultMemoize((orderId: T['id'], itemId: T['items'][0]['item_id']) => createSelector(
    selectOrderItems(orderId),
    items => items.find(item => item.item_id === itemId) || null,
  )).memoized;

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

