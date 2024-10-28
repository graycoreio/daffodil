import { Dictionary } from '@ngrx/entity';
import {
  createSelector,
  defaultMemoize,
  MemoizedSelector,
} from '@ngrx/store';

import {
  getDaffCartSelectors,
  DaffCartStateRootSlice,
} from '@daffodil/cart/state';
import {
  DaffOrder,
  DaffOrderItem,
  DaffOrderTotal,
  DaffOrderTotalTypeEnum,
} from '@daffodil/order';

import { getDaffOrderReducersStateSelector } from './order-feature.selector';
import {
  DaffOrderStateRootSlice,
  daffGetOrderAdapter,
  DaffOrderEntityState,
} from '../reducers/public_api';

export interface DaffOrderEntitySelectors<T extends DaffOrder = DaffOrder> {
  selectOrderEntitiesState: MemoizedSelector<DaffOrderStateRootSlice<T>, DaffOrderEntityState<T>>;
  /**
   * Selector for order IDs.
   */
  selectOrderIds: MemoizedSelector<DaffOrderStateRootSlice<T>, T['id'][]>;
  /**
   * Selector for order entities.
   */
  selectOrderEntities: MemoizedSelector<DaffOrderStateRootSlice<T>, Dictionary<T>>;
  /**
   * Selector for all orders.
   */
  selectAllOrders: MemoizedSelector<DaffOrderStateRootSlice<T>, T[]>;
  /**
   * Selector for total number of orders.
   */
  selectOrderTotal: MemoizedSelector<DaffOrderStateRootSlice<T>, number>;
  selectOrder: (orderId: T['id']) => MemoizedSelector<DaffOrderStateRootSlice<T>, T>;

  /**
   * Selector for the most recently placed order (if any).
   *
   * @deprecated in favor of {@link DaffCheckoutPlacedOrderSelectors#selectPlacedOrder} Deprecated in version 0.78.0. Will be removed in version 0.81.0.
   */
  selectPlacedOrder: MemoizedSelector<DaffOrderStateRootSlice<T>, T>;
  /**
   * Selector for the existence of the most recently placed order.
   *
   * @deprecated in favor of {@link DaffCheckoutPlacedOrderSelectors#selectHasPlacedOrder} Deprecated in version 0.78.0. Will be removed in version 0.81.0.
   */
  selectHasPlacedOrder: MemoizedSelector<DaffOrderStateRootSlice<T>, boolean>;

  /**
   * Selects the specified order's totals.
   */
  selectOrderTotals: (orderId: T['id']) => MemoizedSelector<DaffOrderStateRootSlice<T>, T['totals']>;
  /**
   * Selects the specified order's applied coupon codes.
   */
  selectOrderAppliedCodes: (orderId: T['id']) => MemoizedSelector<DaffOrderStateRootSlice<T>, T['applied_codes']>;
  /**
   * Selects the specified order's items.
   */
  selectOrderItems: (orderId: T['id']) => MemoizedSelector<DaffOrderStateRootSlice<T>, T['items']>;
  /**
   * Selects the specified order's billing addresses.
   */
  selectOrderBillingAddresses: (orderId: T['id']) => MemoizedSelector<DaffOrderStateRootSlice<T>, T['billing_addresses']>;
  /**
   * Selects the specified order's shipping addresses.
   */
  selectOrderShippingTotalAddresses: (orderId: T['id']) => MemoizedSelector<DaffOrderStateRootSlice<T>, T['shipping_addresses']>;
  /**
   * Selects the specified order's shipments.
   */
  selectOrderShipments: (orderId: T['id']) => MemoizedSelector<DaffOrderStateRootSlice<T>, T['shipments']>;
  /**
   * Selects the specified order's payment.
   */
  selectOrderPayment: (orderId: T['id']) => MemoizedSelector<DaffOrderStateRootSlice<T>, T['payment']>;
  /**
   * Selects the specified order's invoices.
   */
  selectOrderInvoices: (orderId: T['id']) => MemoizedSelector<DaffOrderStateRootSlice<T>, T['invoices']>;
  /**
   * Selects the specified order's credits.
   */
  selectOrderCredits: (orderId: T['id']) => MemoizedSelector<DaffOrderStateRootSlice<T>, T['credits']>;

  /**
   * Selects the specified order's specified item.
   */
  selectOrderItem: (orderId: T['id'], itemId: T['items'][0]['id']) => MemoizedSelector<DaffOrderStateRootSlice<T>, DaffOrderItem>;

  /**
   * Selects the specified order's grand total.
   */
  selectOrderGrandTotal: (orderId: T['id']) => MemoizedSelector<DaffOrderStateRootSlice<T>, DaffOrderTotal>;
  /**
   * Selects the specified order's subtotal.
   */
  selectOrderSubtotal: (orderId: T['id']) => MemoizedSelector<DaffOrderStateRootSlice<T>, DaffOrderTotal>;
  /**
   * Selects the specified order's shipping total.
   */
  selectOrderShippingTotal: (orderId: T['id']) => MemoizedSelector<DaffOrderStateRootSlice<T>, DaffOrderTotal>;
  /**
   * Selects the specified order's discount total.
   */
  selectOrderDiscountTotal: (orderId: T['id']) => MemoizedSelector<DaffOrderStateRootSlice<T>, DaffOrderTotal>;
  /**
   * Selects whether the specified order has a discount.
   */
  selectOrderHasDiscount: (orderId: T['id']) => MemoizedSelector<DaffOrderStateRootSlice<T>, boolean>;
  /**
   * Selects the specified order's tax total.
   */
  selectOrderTaxTotal: (orderId: T['id']) => MemoizedSelector<DaffOrderStateRootSlice<T>, DaffOrderTotal>;
}

const createOrderEntitySelectors = <T extends DaffOrder = DaffOrder>() => {
  const { selectOrderFeatureState } = getDaffOrderReducersStateSelector<T>();
  const selectOrderEntitiesState = createSelector(
    selectOrderFeatureState,
    state => state.orders,
  );
  const { selectIds, selectEntities, selectAll, selectTotal } = daffGetOrderAdapter<T>().getSelectors(selectOrderEntitiesState);
  const { selectCartOrderId } = getDaffCartSelectors();

  const selectOrder: (orderId: T['id']) => MemoizedSelector<DaffOrderStateRootSlice<T>, T> =
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

  const selectOrderTotals: (orderId: T['id']) => MemoizedSelector<DaffOrderStateRootSlice<T>, T['totals']> =
    defaultMemoize((orderId: T['id']) => createSelector(
      selectOrder(orderId),
      (order) => (order && order.totals) || [],
    )).memoized;

  const selectOrderAppliedCodes = defaultMemoize((orderId: T['id']) => createSelector(
    selectOrder(orderId),
    (order) => (order && order.applied_codes) || [],
  )).memoized;

  const selectOrderItems: (orderId: T['id']) => MemoizedSelector<DaffOrderStateRootSlice<T>, T['items']> =
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

  const selectOrderDiscountTotal: (orderId: T['id']) => MemoizedSelector<DaffOrderStateRootSlice<T>, DaffOrderTotal> =
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

  const selectOrderItem = defaultMemoize((orderId: T['id'], itemId: T['items'][0]['id']) => createSelector(
    selectOrderItems(orderId),
    items => items.find(item => item.id === itemId) || null,
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

