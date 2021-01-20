import { MemoizedSelector } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';
import { DaffOrder, DaffOrderItem, DaffOrderTotal } from '@daffodil/order';
import { DaffOrderEntityState } from '../reducers/public_api';
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
    selectOrderShippingTotalAddresses: MemoizedSelector<object, T['shipping_addresses']>;
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
    selectOrderShippingTotal: MemoizedSelector<object, DaffOrderTotal>;
    /**
     * Selects the specified order's discount total.
     */
    selectOrderDiscountTotal: MemoizedSelector<object, DaffOrderTotal>;
    /**
     * Selects whether the specified order has a discount.
     */
    selectOrderHasDiscount: MemoizedSelector<object, boolean>;
    /**
     * Selects the specified order's tax total.
     */
    selectOrderTaxTotal: MemoizedSelector<object, DaffOrderTotal>;
}
export declare const getDaffOrderEntitySelectors: <T extends DaffOrder = DaffOrder>() => DaffOrderEntitySelectors<T>;
