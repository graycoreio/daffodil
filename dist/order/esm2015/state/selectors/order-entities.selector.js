/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { DaffOrderTotalTypeEnum } from '@daffodil/order';
import { getDaffCartSelectors } from '@daffodil/cart/state';
import { daffGetOrderAdapter } from '../reducers/public_api';
import { getDaffOrderReducersStateSelector } from './order-feature.selector';
/**
 * @record
 * @template T
 */
export function DaffOrderEntitySelectors() { }
if (false) {
    /** @type {?} */
    DaffOrderEntitySelectors.prototype.selectOrderEntitiesState;
    /**
     * Selector for order IDs.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectOrderIds;
    /**
     * Selector for order entities.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectOrderEntities;
    /**
     * Selector for all orders.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectAllOrders;
    /**
     * Selector for total number of orders.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectOrderTotal;
    /** @type {?} */
    DaffOrderEntitySelectors.prototype.selectOrder;
    /**
     * Selector for the most recently placed order (if any).
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectPlacedOrder;
    /**
     * Selector for the existence of the most recently placed order.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectHasPlacedOrder;
    /**
     * Selects the specified order's totals.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectOrderTotals;
    /**
     * Selects the specified order's applied coupon codes.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectOrderAppliedCodes;
    /**
     * Selects the specified order's items.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectOrderItems;
    /**
     * Selects the specified order's billing addresses.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectOrderBillingAddresses;
    /**
     * Selects the specified order's shipping addresses.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectOrderShippingTotalAddresses;
    /**
     * Selects the specified order's shipments.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectOrderShipments;
    /**
     * Selects the specified order's payment.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectOrderPayment;
    /**
     * Selects the specified order's invoices.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectOrderInvoices;
    /**
     * Selects the specified order's credits.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectOrderCredits;
    /**
     * Selects the specified order's specified item.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectOrderItem;
    /**
     * Selects the specified order's grand total.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectOrderGrandTotal;
    /**
     * Selects the specified order's subtotal.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectOrderSubtotal;
    /**
     * Selects the specified order's shipping total.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectOrderShippingTotal;
    /**
     * Selects the specified order's discount total.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectOrderDiscountTotal;
    /**
     * Selects whether the specified order has a discount.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectOrderHasDiscount;
    /**
     * Selects the specified order's tax total.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectOrderTaxTotal;
}
/** @type {?} */
const createOrderEntitySelectors = (/**
 * @template T
 * @return {?}
 */
() => {
    const { selectOrderFeatureState } = getDaffOrderReducersStateSelector();
    /** @type {?} */
    const selectOrderEntitiesState = createSelector(selectOrderFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    state => state.orders));
    const { selectIds, selectEntities, selectAll, selectTotal } = daffGetOrderAdapter().getSelectors(selectOrderEntitiesState);
    const { selectCartOrderId } = getDaffCartSelectors();
    /** @type {?} */
    const selectOrder = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    (orders, props) => orders[props.id] || null));
    /** @type {?} */
    const selectPlacedOrder = createSelector(selectEntities, selectCartOrderId, (/**
     * @param {?} orders
     * @param {?} orderId
     * @return {?}
     */
    (orders, orderId) => orderId ? selectOrder.projector(orders, { id: orderId }) : null));
    /** @type {?} */
    const selectHasPlacedOrder = createSelector(selectPlacedOrder, (/**
     * @param {?} placedOrder
     * @return {?}
     */
    placedOrder => !!placedOrder));
    /** @type {?} */
    const selectOrderTotals = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    (orders, props) => {
        /** @type {?} */
        const order = selectOrder.projector(orders, { id: props.id });
        return (order && order.totals) || [];
    }));
    /** @type {?} */
    const selectOrderAppliedCodes = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    (orders, props) => {
        /** @type {?} */
        const order = selectOrder.projector(orders, { id: props.id });
        return (order && order.applied_codes) || [];
    }));
    /** @type {?} */
    const selectOrderItems = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    (orders, props) => {
        /** @type {?} */
        const order = selectOrder.projector(orders, { id: props.id });
        return (order && order.items) || [];
    }));
    /** @type {?} */
    const selectOrderBillingAddresses = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    (orders, props) => {
        /** @type {?} */
        const order = selectOrder.projector(orders, { id: props.id });
        return (order && order.billing_addresses) || [];
    }));
    /** @type {?} */
    const selectOrderShippingTotalAddresses = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    (orders, props) => {
        /** @type {?} */
        const order = selectOrder.projector(orders, { id: props.id });
        return (order && order.shipping_addresses) || [];
    }));
    /** @type {?} */
    const selectOrderShipments = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    (orders, props) => {
        /** @type {?} */
        const order = selectOrder.projector(orders, { id: props.id });
        return (order && order.shipments) || [];
    }));
    /** @type {?} */
    const selectOrderPayment = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    (orders, props) => {
        /** @type {?} */
        const order = selectOrder.projector(orders, { id: props.id });
        return (order && order.payment) || null;
    }));
    /** @type {?} */
    const selectOrderInvoices = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    (orders, props) => {
        /** @type {?} */
        const order = selectOrder.projector(orders, { id: props.id });
        return (order && order.invoices) || [];
    }));
    /** @type {?} */
    const selectOrderCredits = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    (orders, props) => {
        /** @type {?} */
        const order = selectOrder.projector(orders, { id: props.id });
        return (order && order.credits) || [];
    }));
    /** @type {?} */
    const selectOrderGrandTotal = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    (orders, props) => {
        /** @type {?} */
        const totals = selectOrderTotals.projector(orders, { id: props.id });
        /** @type {?} */
        const index = totals.findIndex((/**
         * @param {?} total
         * @return {?}
         */
        total => total.type === DaffOrderTotalTypeEnum.GrandTotal));
        return index > -1 ? totals[index] : null;
    }));
    /** @type {?} */
    const selectOrderSubtotal = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    (orders, props) => {
        /** @type {?} */
        const totals = selectOrderTotals.projector(orders, { id: props.id });
        /** @type {?} */
        const index = totals.findIndex((/**
         * @param {?} total
         * @return {?}
         */
        total => total.type === DaffOrderTotalTypeEnum.Subtotal));
        return index > -1 ? totals[index] : null;
    }));
    /** @type {?} */
    const selectOrderShippingTotal = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    (orders, props) => {
        /** @type {?} */
        const totals = selectOrderTotals.projector(orders, { id: props.id });
        /** @type {?} */
        const index = totals.findIndex((/**
         * @param {?} total
         * @return {?}
         */
        total => total.type === DaffOrderTotalTypeEnum.Shipping));
        return index > -1 ? totals[index] : null;
    }));
    /** @type {?} */
    const selectOrderDiscountTotal = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    (orders, props) => {
        /** @type {?} */
        const totals = selectOrderTotals.projector(orders, { id: props.id });
        /** @type {?} */
        const index = totals.findIndex((/**
         * @param {?} total
         * @return {?}
         */
        total => total.type === DaffOrderTotalTypeEnum.Discount));
        return index > -1 ? totals[index] : null;
    }));
    /** @type {?} */
    const selectOrderHasDiscount = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    (orders, props) => {
        /** @type {?} */
        const discountTotal = selectOrderDiscountTotal.projector(orders, { id: props.id });
        //todo: use optional chaining when possible
        return !!discountTotal && discountTotal.value > 0;
    }));
    /** @type {?} */
    const selectOrderTaxTotal = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    (orders, props) => {
        /** @type {?} */
        const totals = selectOrderTotals.projector(orders, { id: props.id });
        /** @type {?} */
        const index = totals.findIndex((/**
         * @param {?} total
         * @return {?}
         */
        total => total.type === DaffOrderTotalTypeEnum.Tax));
        return index > -1 ? totals[index] : null;
    }));
    /** @type {?} */
    const selectOrderItem = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    (orders, props) => selectOrderItems.projector(orders, { id: props.id }).find((/**
     * @param {?} item
     * @return {?}
     */
    item => item.item_id === props.item_id)) || null));
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
});
const ɵ0 = createOrderEntitySelectors;
const ɵ1 = /**
 * @return {?}
 */
() => {
    /** @type {?} */
    let cache;
    return (/**
     * @template T
     * @return {?}
     */
    () => cache = cache || createOrderEntitySelectors());
};
/** @type {?} */
export const getDaffOrderEntitySelectors = ((ɵ1))();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZW50aXRpZXMuc2VsZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvb3JkZXIvc3RhdGUvIiwic291cmNlcyI6WyJzZWxlY3RvcnMvb3JkZXItZW50aXRpZXMuc2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBRy9ELE9BQU8sRUFBNEMsc0JBQXNCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUU1RCxPQUFPLEVBQ0wsbUJBQW1CLEVBRXBCLE1BQU0sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7O0FBRTdFLDhDQStGQzs7O0lBOUZDLDREQUE0RTs7Ozs7SUFJNUUsa0RBQThEOzs7OztJQUk5RCx1REFBNkQ7Ozs7O0lBSTdELG1EQUErQzs7Ozs7SUFJL0Msb0RBQW1EOztJQUNuRCwrQ0FBeUM7Ozs7O0lBS3pDLHFEQUErQzs7Ozs7SUFJL0Msd0RBQXdEOzs7OztJQUt4RCxxREFBeUQ7Ozs7O0lBSXpELDJEQUFzRTs7Ozs7SUFJdEUsb0RBQXVEOzs7OztJQUl2RCwrREFBOEU7Ozs7O0lBSTlFLHFFQUFxRjs7Ozs7SUFJckYsd0RBQStEOzs7OztJQUkvRCxzREFBMkQ7Ozs7O0lBSTNELHVEQUE2RDs7Ozs7SUFJN0Qsc0RBQTJEOzs7OztJQUszRCxtREFBeUQ7Ozs7O0lBS3pELHlEQUFnRTs7Ozs7SUFJaEUsdURBQThEOzs7OztJQUk5RCw0REFBbUU7Ozs7O0lBSXBFLDREQUFtRTs7Ozs7SUFJbkUsMERBQTBEOzs7OztJQUl6RCx1REFBOEQ7OztNQUcxRCwwQkFBMEI7Ozs7QUFBRyxHQUFvQyxFQUFFO1VBQ2pFLEVBQUUsdUJBQXVCLEVBQUUsR0FBRyxpQ0FBaUMsRUFBSzs7VUFDcEUsd0JBQXdC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eEIsd0JBQXdCO1FBQ3hCLHNCQUFzQjtRQUN0QixtQkFBbUI7S0FDcEIsQ0FBQTtBQUNILENBQUMsQ0FBQTs7Ozs7QUFFMkMsR0FBRyxFQUFFOztRQUMzQyxLQUFLO0lBQ1Q7Ozs7SUFBTyxHQUFpRSxFQUFFLENBQ3hFLEtBQUssR0FBRyxLQUFLLElBQUksMEJBQTBCLEVBQUssRUFBQTtBQUNwRCxDQUFDOztBQUpELE1BQU0sT0FBTywyQkFBMkIsR0FBRyxNQUl6QyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBEaWN0aW9uYXJ5IH0gZnJvbSAnQG5ncngvZW50aXR5JztcblxuaW1wb3J0IHsgRGFmZk9yZGVyLCBEYWZmT3JkZXJJdGVtLCBEYWZmT3JkZXJUb3RhbCwgRGFmZk9yZGVyVG90YWxUeXBlRW51bSB9IGZyb20gJ0BkYWZmb2RpbC9vcmRlcic7XG5pbXBvcnQgeyBnZXREYWZmQ2FydFNlbGVjdG9ycyB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L3N0YXRlJztcblxuaW1wb3J0IHtcbiAgZGFmZkdldE9yZGVyQWRhcHRlcixcbiAgRGFmZk9yZGVyRW50aXR5U3RhdGVcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyBnZXREYWZmT3JkZXJSZWR1Y2Vyc1N0YXRlU2VsZWN0b3IgfSBmcm9tICcuL29yZGVyLWZlYXR1cmUuc2VsZWN0b3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhZmZPcmRlckVudGl0eVNlbGVjdG9yczxUIGV4dGVuZHMgRGFmZk9yZGVyID0gRGFmZk9yZGVyPiB7XG4gIHNlbGVjdE9yZGVyRW50aXRpZXNTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZPcmRlckVudGl0eVN0YXRlPFQ+PjtcbiAgLyoqXG4gICAqIFNlbGVjdG9yIGZvciBvcmRlciBJRHMuXG4gICAqL1xuICBzZWxlY3RPcmRlcklkczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIHN0cmluZ1tdIHwgbnVtYmVyW10+O1xuICAvKipcbiAgICogU2VsZWN0b3IgZm9yIG9yZGVyIGVudGl0aWVzLlxuICAgKi9cbiAgc2VsZWN0T3JkZXJFbnRpdGllczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERpY3Rpb25hcnk8VD4+O1xuICAvKipcbiAgICogU2VsZWN0b3IgZm9yIGFsbCBvcmRlcnMuXG4gICAqL1xuICBzZWxlY3RBbGxPcmRlcnM6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBUW10+O1xuICAvKipcbiAgICogU2VsZWN0b3IgZm9yIHRvdGFsIG51bWJlciBvZiBvcmRlcnMuXG4gICAqL1xuICBzZWxlY3RPcmRlclRvdGFsOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgbnVtYmVyPjtcbiAgc2VsZWN0T3JkZXI6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBUPjtcblxuICAvKipcbiAgICogU2VsZWN0b3IgZm9yIHRoZSBtb3N0IHJlY2VudGx5IHBsYWNlZCBvcmRlciAoaWYgYW55KS5cbiAgICovXG4gIHNlbGVjdFBsYWNlZE9yZGVyOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgVD47XG4gIC8qKlxuICAgKiBTZWxlY3RvciBmb3IgdGhlIGV4aXN0ZW5jZSBvZiB0aGUgbW9zdCByZWNlbnRseSBwbGFjZWQgb3JkZXIuXG4gICAqL1xuICBzZWxlY3RIYXNQbGFjZWRPcmRlcjogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIGJvb2xlYW4+O1xuXG4gIC8qKlxuICAgKiBTZWxlY3RzIHRoZSBzcGVjaWZpZWQgb3JkZXIncyB0b3RhbHMuXG4gICAqL1xuICBzZWxlY3RPcmRlclRvdGFsczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIFRbJ3RvdGFscyddPjtcbiAgLyoqXG4gICAqIFNlbGVjdHMgdGhlIHNwZWNpZmllZCBvcmRlcidzIGFwcGxpZWQgY291cG9uIGNvZGVzLlxuICAgKi9cbiAgc2VsZWN0T3JkZXJBcHBsaWVkQ29kZXM6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBUWydhcHBsaWVkX2NvZGVzJ10+O1xuICAvKipcbiAgICogU2VsZWN0cyB0aGUgc3BlY2lmaWVkIG9yZGVyJ3MgaXRlbXMuXG4gICAqL1xuICBzZWxlY3RPcmRlckl0ZW1zOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgVFsnaXRlbXMnXT47XG4gIC8qKlxuICAgKiBTZWxlY3RzIHRoZSBzcGVjaWZpZWQgb3JkZXIncyBiaWxsaW5nIGFkZHJlc3Nlcy5cbiAgICovXG4gIHNlbGVjdE9yZGVyQmlsbGluZ0FkZHJlc3NlczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIFRbJ2JpbGxpbmdfYWRkcmVzc2VzJ10+O1xuICAvKipcbiAgICogU2VsZWN0cyB0aGUgc3BlY2lmaWVkIG9yZGVyJ3Mgc2hpcHBpbmcgYWRkcmVzc2VzLlxuICAgKi9cbiAgc2VsZWN0T3JkZXJTaGlwcGluZ1RvdGFsQWRkcmVzc2VzOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgVFsnc2hpcHBpbmdfYWRkcmVzc2VzJ10+O1xuICAvKipcbiAgICogU2VsZWN0cyB0aGUgc3BlY2lmaWVkIG9yZGVyJ3Mgc2hpcG1lbnRzLlxuICAgKi9cbiAgc2VsZWN0T3JkZXJTaGlwbWVudHM6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBUWydzaGlwbWVudHMnXT47XG4gIC8qKlxuICAgKiBTZWxlY3RzIHRoZSBzcGVjaWZpZWQgb3JkZXIncyBwYXltZW50LlxuICAgKi9cbiAgc2VsZWN0T3JkZXJQYXltZW50OiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgVFsncGF5bWVudCddPjtcbiAgLyoqXG4gICAqIFNlbGVjdHMgdGhlIHNwZWNpZmllZCBvcmRlcidzIGludm9pY2VzLlxuICAgKi9cbiAgc2VsZWN0T3JkZXJJbnZvaWNlczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIFRbJ2ludm9pY2VzJ10+O1xuICAvKipcbiAgICogU2VsZWN0cyB0aGUgc3BlY2lmaWVkIG9yZGVyJ3MgY3JlZGl0cy5cbiAgICovXG4gIHNlbGVjdE9yZGVyQ3JlZGl0czogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIFRbJ2NyZWRpdHMnXT47XG5cbiAgLyoqXG4gICAqIFNlbGVjdHMgdGhlIHNwZWNpZmllZCBvcmRlcidzIHNwZWNpZmllZCBpdGVtLlxuICAgKi9cbiAgc2VsZWN0T3JkZXJJdGVtOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRGFmZk9yZGVySXRlbT47XG5cbiAgLyoqXG4gICAqIFNlbGVjdHMgdGhlIHNwZWNpZmllZCBvcmRlcidzIGdyYW5kIHRvdGFsLlxuICAgKi9cbiAgc2VsZWN0T3JkZXJHcmFuZFRvdGFsOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRGFmZk9yZGVyVG90YWw+O1xuICAvKipcbiAgICogU2VsZWN0cyB0aGUgc3BlY2lmaWVkIG9yZGVyJ3Mgc3VidG90YWwuXG4gICAqL1xuICBzZWxlY3RPcmRlclN1YnRvdGFsOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRGFmZk9yZGVyVG90YWw+O1xuICAvKipcbiAgICogU2VsZWN0cyB0aGUgc3BlY2lmaWVkIG9yZGVyJ3Mgc2hpcHBpbmcgdG90YWwuXG4gICAqL1xuICBzZWxlY3RPcmRlclNoaXBwaW5nVG90YWw6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBEYWZmT3JkZXJUb3RhbD47XG4gIC8qKlxuICAgKiBTZWxlY3RzIHRoZSBzcGVjaWZpZWQgb3JkZXIncyBkaXNjb3VudCB0b3RhbC5cbiAgICovXG5cdHNlbGVjdE9yZGVyRGlzY291bnRUb3RhbDogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZPcmRlclRvdGFsPjtcblx0LyoqXG5cdCAqIFNlbGVjdHMgd2hldGhlciB0aGUgc3BlY2lmaWVkIG9yZGVyIGhhcyBhIGRpc2NvdW50LlxuXHQgKi9cblx0c2VsZWN0T3JkZXJIYXNEaXNjb3VudDogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIGJvb2xlYW4+O1xuICAvKipcbiAgICogU2VsZWN0cyB0aGUgc3BlY2lmaWVkIG9yZGVyJ3MgdGF4IHRvdGFsLlxuICAgKi9cbiAgc2VsZWN0T3JkZXJUYXhUb3RhbDogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZPcmRlclRvdGFsPjtcbn1cblxuY29uc3QgY3JlYXRlT3JkZXJFbnRpdHlTZWxlY3RvcnMgPSA8VCBleHRlbmRzIERhZmZPcmRlciA9IERhZmZPcmRlcj4oKSA9PiB7XG4gIGNvbnN0IHsgc2VsZWN0T3JkZXJGZWF0dXJlU3RhdGUgfSA9IGdldERhZmZPcmRlclJlZHVjZXJzU3RhdGVTZWxlY3RvcjxUPigpO1xuICBjb25zdCBzZWxlY3RPcmRlckVudGl0aWVzU3RhdGUgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBzZWxlY3RPcmRlckZlYXR1cmVTdGF0ZSxcbiAgICBzdGF0ZSA9PiBzdGF0ZS5vcmRlcnNcbiAgKVxuICBjb25zdCB7IHNlbGVjdElkcywgc2VsZWN0RW50aXRpZXMsIHNlbGVjdEFsbCwgc2VsZWN0VG90YWwgfSA9IGRhZmZHZXRPcmRlckFkYXB0ZXI8VD4oKS5nZXRTZWxlY3RvcnMoc2VsZWN0T3JkZXJFbnRpdGllc1N0YXRlKTtcbiAgY29uc3QgeyBzZWxlY3RDYXJ0T3JkZXJJZCB9ID0gZ2V0RGFmZkNhcnRTZWxlY3RvcnMoKTtcblxuICBjb25zdCBzZWxlY3RPcmRlciA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgIHNlbGVjdEVudGl0aWVzLFxuICAgIChvcmRlcnMsIHByb3BzKSA9PiBvcmRlcnNbcHJvcHMuaWRdIHx8IG51bGxcbiAgKVxuXG4gIGNvbnN0IHNlbGVjdFBsYWNlZE9yZGVyID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgc2VsZWN0RW50aXRpZXMsXG4gICAgc2VsZWN0Q2FydE9yZGVySWQsXG4gICAgKG9yZGVycywgb3JkZXJJZCkgPT4gb3JkZXJJZCA/IHNlbGVjdE9yZGVyLnByb2plY3RvcihvcmRlcnMsIHtpZDogb3JkZXJJZH0pIDogbnVsbFxuICApXG4gIGNvbnN0IHNlbGVjdEhhc1BsYWNlZE9yZGVyID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgc2VsZWN0UGxhY2VkT3JkZXIsXG4gICAgcGxhY2VkT3JkZXIgPT4gISFwbGFjZWRPcmRlclxuICApXG5cbiAgY29uc3Qgc2VsZWN0T3JkZXJUb3RhbHMgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBzZWxlY3RFbnRpdGllcyxcbiAgICAob3JkZXJzLCBwcm9wcykgPT4ge1xuICAgICAgY29uc3Qgb3JkZXI6IERhZmZPcmRlciA9IHNlbGVjdE9yZGVyLnByb2plY3RvcihvcmRlcnMsIHtpZDogcHJvcHMuaWR9KTtcbiAgICAgIHJldHVybiAob3JkZXIgJiYgb3JkZXIudG90YWxzKSB8fCBbXVxuICAgIH1cbiAgKTtcbiAgY29uc3Qgc2VsZWN0T3JkZXJBcHBsaWVkQ29kZXMgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBzZWxlY3RFbnRpdGllcyxcbiAgICAob3JkZXJzLCBwcm9wcykgPT4ge1xuICAgICAgY29uc3Qgb3JkZXIgPSBzZWxlY3RPcmRlci5wcm9qZWN0b3Iob3JkZXJzLCB7aWQ6IHByb3BzLmlkfSk7XG4gICAgICByZXR1cm4gKG9yZGVyICYmIG9yZGVyLmFwcGxpZWRfY29kZXMpIHx8IFtdXG4gICAgfVxuICApO1xuICBjb25zdCBzZWxlY3RPcmRlckl0ZW1zID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgc2VsZWN0RW50aXRpZXMsXG4gICAgKG9yZGVycywgcHJvcHMpID0+IHtcbiAgICAgIGNvbnN0IG9yZGVyID0gc2VsZWN0T3JkZXIucHJvamVjdG9yKG9yZGVycywge2lkOiBwcm9wcy5pZH0pO1xuICAgICAgcmV0dXJuIChvcmRlciAmJiBvcmRlci5pdGVtcykgfHwgW11cbiAgICB9XG4gICk7XG4gIGNvbnN0IHNlbGVjdE9yZGVyQmlsbGluZ0FkZHJlc3NlcyA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgIHNlbGVjdEVudGl0aWVzLFxuICAgIChvcmRlcnMsIHByb3BzKSA9PiB7XG4gICAgICBjb25zdCBvcmRlciA9IHNlbGVjdE9yZGVyLnByb2plY3RvcihvcmRlcnMsIHtpZDogcHJvcHMuaWR9KTtcbiAgICAgIHJldHVybiAob3JkZXIgJiYgb3JkZXIuYmlsbGluZ19hZGRyZXNzZXMpIHx8IFtdXG4gICAgfVxuICApO1xuICBjb25zdCBzZWxlY3RPcmRlclNoaXBwaW5nVG90YWxBZGRyZXNzZXMgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBzZWxlY3RFbnRpdGllcyxcbiAgICAob3JkZXJzLCBwcm9wcykgPT4ge1xuICAgICAgY29uc3Qgb3JkZXIgPSBzZWxlY3RPcmRlci5wcm9qZWN0b3Iob3JkZXJzLCB7aWQ6IHByb3BzLmlkfSk7XG4gICAgICByZXR1cm4gKG9yZGVyICYmIG9yZGVyLnNoaXBwaW5nX2FkZHJlc3NlcykgfHwgW11cbiAgICB9XG4gICk7XG4gIGNvbnN0IHNlbGVjdE9yZGVyU2hpcG1lbnRzID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgc2VsZWN0RW50aXRpZXMsXG4gICAgKG9yZGVycywgcHJvcHMpID0+IHtcbiAgICAgIGNvbnN0IG9yZGVyID0gc2VsZWN0T3JkZXIucHJvamVjdG9yKG9yZGVycywge2lkOiBwcm9wcy5pZH0pO1xuICAgICAgcmV0dXJuIChvcmRlciAmJiBvcmRlci5zaGlwbWVudHMpIHx8IFtdXG4gICAgfVxuICApO1xuICBjb25zdCBzZWxlY3RPcmRlclBheW1lbnQgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBzZWxlY3RFbnRpdGllcyxcbiAgICAob3JkZXJzLCBwcm9wcykgPT4ge1xuICAgICAgY29uc3Qgb3JkZXIgPSBzZWxlY3RPcmRlci5wcm9qZWN0b3Iob3JkZXJzLCB7aWQ6IHByb3BzLmlkfSk7XG4gICAgICByZXR1cm4gKG9yZGVyICYmIG9yZGVyLnBheW1lbnQpIHx8IG51bGxcbiAgICB9XG4gICk7XG4gIGNvbnN0IHNlbGVjdE9yZGVySW52b2ljZXMgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBzZWxlY3RFbnRpdGllcyxcbiAgICAob3JkZXJzLCBwcm9wcykgPT4ge1xuICAgICAgY29uc3Qgb3JkZXIgPSBzZWxlY3RPcmRlci5wcm9qZWN0b3Iob3JkZXJzLCB7aWQ6IHByb3BzLmlkfSk7XG4gICAgICByZXR1cm4gKG9yZGVyICYmIG9yZGVyLmludm9pY2VzKSB8fCBbXVxuICAgIH1cbiAgKTtcbiAgY29uc3Qgc2VsZWN0T3JkZXJDcmVkaXRzID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgc2VsZWN0RW50aXRpZXMsXG4gICAgKG9yZGVycywgcHJvcHMpID0+IHtcbiAgICAgIGNvbnN0IG9yZGVyID0gc2VsZWN0T3JkZXIucHJvamVjdG9yKG9yZGVycywge2lkOiBwcm9wcy5pZH0pO1xuICAgICAgcmV0dXJuIChvcmRlciAmJiBvcmRlci5jcmVkaXRzKSB8fCBbXVxuICAgIH1cbiAgKTtcblxuICBjb25zdCBzZWxlY3RPcmRlckdyYW5kVG90YWwgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBzZWxlY3RFbnRpdGllcyxcbiAgICAob3JkZXJzLCBwcm9wcykgPT4ge1xuICAgICAgY29uc3QgdG90YWxzID0gc2VsZWN0T3JkZXJUb3RhbHMucHJvamVjdG9yKG9yZGVycywge2lkOiBwcm9wcy5pZH0pO1xuICAgICAgY29uc3QgaW5kZXggPSB0b3RhbHMuZmluZEluZGV4KHRvdGFsID0+IHRvdGFsLnR5cGUgPT09IERhZmZPcmRlclRvdGFsVHlwZUVudW0uR3JhbmRUb3RhbCk7XG5cbiAgICAgIHJldHVybiBpbmRleCA+IC0xID8gdG90YWxzW2luZGV4XSA6IG51bGxcbiAgICB9XG4gICk7XG4gIGNvbnN0IHNlbGVjdE9yZGVyU3VidG90YWwgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBzZWxlY3RFbnRpdGllcyxcbiAgICAob3JkZXJzLCBwcm9wcykgPT4ge1xuICAgICAgY29uc3QgdG90YWxzID0gc2VsZWN0T3JkZXJUb3RhbHMucHJvamVjdG9yKG9yZGVycywgeyBpZDogcHJvcHMuaWQgfSk7XG4gICAgICBjb25zdCBpbmRleCA9IHRvdGFscy5maW5kSW5kZXgodG90YWwgPT4gdG90YWwudHlwZSA9PT0gRGFmZk9yZGVyVG90YWxUeXBlRW51bS5TdWJ0b3RhbCk7XG5cbiAgICAgIHJldHVybiBpbmRleCA+IC0xID8gdG90YWxzW2luZGV4XSA6IG51bGxcbiAgICB9XG4gICk7XG4gIGNvbnN0IHNlbGVjdE9yZGVyU2hpcHBpbmdUb3RhbCA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgIHNlbGVjdEVudGl0aWVzLFxuICAgIChvcmRlcnMsIHByb3BzKSA9PiB7XG4gICAgICBjb25zdCB0b3RhbHMgPSBzZWxlY3RPcmRlclRvdGFscy5wcm9qZWN0b3Iob3JkZXJzLCB7IGlkOiBwcm9wcy5pZCB9KTtcbiAgICAgIGNvbnN0IGluZGV4ID0gdG90YWxzLmZpbmRJbmRleCh0b3RhbCA9PiB0b3RhbC50eXBlID09PSBEYWZmT3JkZXJUb3RhbFR5cGVFbnVtLlNoaXBwaW5nKTtcblxuICAgICAgcmV0dXJuIGluZGV4ID4gLTEgPyB0b3RhbHNbaW5kZXhdIDogbnVsbFxuICAgIH1cbiAgKTtcbiAgY29uc3Qgc2VsZWN0T3JkZXJEaXNjb3VudFRvdGFsID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgc2VsZWN0RW50aXRpZXMsXG4gICAgKG9yZGVycywgcHJvcHMpID0+IHtcbiAgICAgIGNvbnN0IHRvdGFscyA9IHNlbGVjdE9yZGVyVG90YWxzLnByb2plY3RvcihvcmRlcnMsIHsgaWQ6IHByb3BzLmlkIH0pO1xuICAgICAgY29uc3QgaW5kZXggPSB0b3RhbHMuZmluZEluZGV4KHRvdGFsID0+IHRvdGFsLnR5cGUgPT09IERhZmZPcmRlclRvdGFsVHlwZUVudW0uRGlzY291bnQpO1xuXG4gICAgICByZXR1cm4gaW5kZXggPiAtMSA/IHRvdGFsc1tpbmRleF0gOiBudWxsXG4gICAgfVxuICApO1xuICBjb25zdCBzZWxlY3RPcmRlckhhc0Rpc2NvdW50ID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgc2VsZWN0RW50aXRpZXMsXG4gICAgKG9yZGVycywgcHJvcHMpID0+IHtcbiAgICAgIGNvbnN0IGRpc2NvdW50VG90YWwgPSBzZWxlY3RPcmRlckRpc2NvdW50VG90YWwucHJvamVjdG9yKG9yZGVycywgeyBpZDogcHJvcHMuaWQgfSk7XG5cblx0XHRcdC8vdG9kbzogdXNlIG9wdGlvbmFsIGNoYWluaW5nIHdoZW4gcG9zc2libGVcbiAgICAgIHJldHVybiAhIWRpc2NvdW50VG90YWwgJiYgZGlzY291bnRUb3RhbC52YWx1ZSA+IDA7XG4gICAgfVxuICApO1xuICBjb25zdCBzZWxlY3RPcmRlclRheFRvdGFsID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgc2VsZWN0RW50aXRpZXMsXG4gICAgKG9yZGVycywgcHJvcHMpID0+IHtcbiAgICAgIGNvbnN0IHRvdGFscyA9IHNlbGVjdE9yZGVyVG90YWxzLnByb2plY3RvcihvcmRlcnMsIHsgaWQ6IHByb3BzLmlkIH0pO1xuICAgICAgY29uc3QgaW5kZXggPSB0b3RhbHMuZmluZEluZGV4KHRvdGFsID0+IHRvdGFsLnR5cGUgPT09IERhZmZPcmRlclRvdGFsVHlwZUVudW0uVGF4KTtcblxuICAgICAgcmV0dXJuIGluZGV4ID4gLTEgPyB0b3RhbHNbaW5kZXhdIDogbnVsbFxuICAgIH1cbiAgKTtcblxuICBjb25zdCBzZWxlY3RPcmRlckl0ZW0gPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RFbnRpdGllcyxcblx0XHQob3JkZXJzLCBwcm9wcykgPT4gc2VsZWN0T3JkZXJJdGVtcy5wcm9qZWN0b3Iob3JkZXJzLCB7aWQ6IHByb3BzLmlkfSkuZmluZChpdGVtID0+IGl0ZW0uaXRlbV9pZCA9PT0gcHJvcHMuaXRlbV9pZCkgfHwgbnVsbFxuICApO1xuXG4gIHJldHVybiB7XG4gICAgc2VsZWN0T3JkZXJFbnRpdGllc1N0YXRlLFxuICAgIHNlbGVjdE9yZGVySWRzOiBzZWxlY3RJZHMsXG4gICAgc2VsZWN0T3JkZXJFbnRpdGllczogc2VsZWN0RW50aXRpZXMsXG4gICAgc2VsZWN0QWxsT3JkZXJzOiBzZWxlY3RBbGwsXG4gICAgc2VsZWN0T3JkZXJUb3RhbDogc2VsZWN0VG90YWwsXG5cbiAgICBzZWxlY3RQbGFjZWRPcmRlcixcbiAgICBzZWxlY3RIYXNQbGFjZWRPcmRlcixcblxuICAgIHNlbGVjdE9yZGVyLFxuICAgIHNlbGVjdE9yZGVyVG90YWxzLFxuICAgIHNlbGVjdE9yZGVyQXBwbGllZENvZGVzLFxuICAgIHNlbGVjdE9yZGVySXRlbXMsXG4gICAgc2VsZWN0T3JkZXJCaWxsaW5nQWRkcmVzc2VzLFxuICAgIHNlbGVjdE9yZGVyU2hpcHBpbmdUb3RhbEFkZHJlc3NlcyxcbiAgICBzZWxlY3RPcmRlclNoaXBtZW50cyxcbiAgICBzZWxlY3RPcmRlclBheW1lbnQsXG4gICAgc2VsZWN0T3JkZXJJbnZvaWNlcyxcbiAgICBzZWxlY3RPcmRlckNyZWRpdHMsXG4gICAgc2VsZWN0T3JkZXJJdGVtLFxuXG4gICAgc2VsZWN0T3JkZXJHcmFuZFRvdGFsLFxuICAgIHNlbGVjdE9yZGVyU3VidG90YWwsXG4gICAgc2VsZWN0T3JkZXJTaGlwcGluZ1RvdGFsLFxuICAgIHNlbGVjdE9yZGVyRGlzY291bnRUb3RhbCxcbiAgICBzZWxlY3RPcmRlckhhc0Rpc2NvdW50LFxuICAgIHNlbGVjdE9yZGVyVGF4VG90YWwsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldERhZmZPcmRlckVudGl0eVNlbGVjdG9ycyA9ICgoKSA9PiB7XG4gIGxldCBjYWNoZTtcbiAgcmV0dXJuIDxUIGV4dGVuZHMgRGFmZk9yZGVyID0gRGFmZk9yZGVyPigpOiBEYWZmT3JkZXJFbnRpdHlTZWxlY3RvcnM8VD4gPT5cbiAgICBjYWNoZSA9IGNhY2hlIHx8IGNyZWF0ZU9yZGVyRW50aXR5U2VsZWN0b3JzPFQ+KClcbn0pKCk7XG5cbiJdfQ==