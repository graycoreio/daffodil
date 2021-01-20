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
var createOrderEntitySelectors = (/**
 * @template T
 * @return {?}
 */
function () {
    var selectOrderFeatureState = getDaffOrderReducersStateSelector().selectOrderFeatureState;
    /** @type {?} */
    var selectOrderEntitiesState = createSelector(selectOrderFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.orders; }));
    var _a = daffGetOrderAdapter().getSelectors(selectOrderEntitiesState), selectIds = _a.selectIds, selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;
    var selectCartOrderId = getDaffCartSelectors().selectCartOrderId;
    /** @type {?} */
    var selectOrder = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    function (orders, props) { return orders[props.id] || null; }));
    /** @type {?} */
    var selectPlacedOrder = createSelector(selectEntities, selectCartOrderId, (/**
     * @param {?} orders
     * @param {?} orderId
     * @return {?}
     */
    function (orders, orderId) { return orderId ? selectOrder.projector(orders, { id: orderId }) : null; }));
    /** @type {?} */
    var selectHasPlacedOrder = createSelector(selectPlacedOrder, (/**
     * @param {?} placedOrder
     * @return {?}
     */
    function (placedOrder) { return !!placedOrder; }));
    /** @type {?} */
    var selectOrderTotals = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    function (orders, props) {
        /** @type {?} */
        var order = selectOrder.projector(orders, { id: props.id });
        return (order && order.totals) || [];
    }));
    /** @type {?} */
    var selectOrderAppliedCodes = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    function (orders, props) {
        /** @type {?} */
        var order = selectOrder.projector(orders, { id: props.id });
        return (order && order.applied_codes) || [];
    }));
    /** @type {?} */
    var selectOrderItems = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    function (orders, props) {
        /** @type {?} */
        var order = selectOrder.projector(orders, { id: props.id });
        return (order && order.items) || [];
    }));
    /** @type {?} */
    var selectOrderBillingAddresses = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    function (orders, props) {
        /** @type {?} */
        var order = selectOrder.projector(orders, { id: props.id });
        return (order && order.billing_addresses) || [];
    }));
    /** @type {?} */
    var selectOrderShippingTotalAddresses = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    function (orders, props) {
        /** @type {?} */
        var order = selectOrder.projector(orders, { id: props.id });
        return (order && order.shipping_addresses) || [];
    }));
    /** @type {?} */
    var selectOrderShipments = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    function (orders, props) {
        /** @type {?} */
        var order = selectOrder.projector(orders, { id: props.id });
        return (order && order.shipments) || [];
    }));
    /** @type {?} */
    var selectOrderPayment = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    function (orders, props) {
        /** @type {?} */
        var order = selectOrder.projector(orders, { id: props.id });
        return (order && order.payment) || null;
    }));
    /** @type {?} */
    var selectOrderInvoices = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    function (orders, props) {
        /** @type {?} */
        var order = selectOrder.projector(orders, { id: props.id });
        return (order && order.invoices) || [];
    }));
    /** @type {?} */
    var selectOrderCredits = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    function (orders, props) {
        /** @type {?} */
        var order = selectOrder.projector(orders, { id: props.id });
        return (order && order.credits) || [];
    }));
    /** @type {?} */
    var selectOrderGrandTotal = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    function (orders, props) {
        /** @type {?} */
        var totals = selectOrderTotals.projector(orders, { id: props.id });
        /** @type {?} */
        var index = totals.findIndex((/**
         * @param {?} total
         * @return {?}
         */
        function (total) { return total.type === DaffOrderTotalTypeEnum.GrandTotal; }));
        return index > -1 ? totals[index] : null;
    }));
    /** @type {?} */
    var selectOrderSubtotal = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    function (orders, props) {
        /** @type {?} */
        var totals = selectOrderTotals.projector(orders, { id: props.id });
        /** @type {?} */
        var index = totals.findIndex((/**
         * @param {?} total
         * @return {?}
         */
        function (total) { return total.type === DaffOrderTotalTypeEnum.Subtotal; }));
        return index > -1 ? totals[index] : null;
    }));
    /** @type {?} */
    var selectOrderShippingTotal = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    function (orders, props) {
        /** @type {?} */
        var totals = selectOrderTotals.projector(orders, { id: props.id });
        /** @type {?} */
        var index = totals.findIndex((/**
         * @param {?} total
         * @return {?}
         */
        function (total) { return total.type === DaffOrderTotalTypeEnum.Shipping; }));
        return index > -1 ? totals[index] : null;
    }));
    /** @type {?} */
    var selectOrderDiscountTotal = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    function (orders, props) {
        /** @type {?} */
        var totals = selectOrderTotals.projector(orders, { id: props.id });
        /** @type {?} */
        var index = totals.findIndex((/**
         * @param {?} total
         * @return {?}
         */
        function (total) { return total.type === DaffOrderTotalTypeEnum.Discount; }));
        return index > -1 ? totals[index] : null;
    }));
    /** @type {?} */
    var selectOrderHasDiscount = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    function (orders, props) {
        /** @type {?} */
        var discountTotal = selectOrderDiscountTotal.projector(orders, { id: props.id });
        //todo: use optional chaining when possible
        return !!discountTotal && discountTotal.value > 0;
    }));
    /** @type {?} */
    var selectOrderTaxTotal = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    function (orders, props) {
        /** @type {?} */
        var totals = selectOrderTotals.projector(orders, { id: props.id });
        /** @type {?} */
        var index = totals.findIndex((/**
         * @param {?} total
         * @return {?}
         */
        function (total) { return total.type === DaffOrderTotalTypeEnum.Tax; }));
        return index > -1 ? totals[index] : null;
    }));
    /** @type {?} */
    var selectOrderItem = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    function (orders, props) { return selectOrderItems.projector(orders, { id: props.id }).find((/**
     * @param {?} item
     * @return {?}
     */
    function (item) { return item.item_id === props.item_id; })) || null; }));
    return {
        selectOrderEntitiesState: selectOrderEntitiesState,
        selectOrderIds: selectIds,
        selectOrderEntities: selectEntities,
        selectAllOrders: selectAll,
        selectOrderTotal: selectTotal,
        selectPlacedOrder: selectPlacedOrder,
        selectHasPlacedOrder: selectHasPlacedOrder,
        selectOrder: selectOrder,
        selectOrderTotals: selectOrderTotals,
        selectOrderAppliedCodes: selectOrderAppliedCodes,
        selectOrderItems: selectOrderItems,
        selectOrderBillingAddresses: selectOrderBillingAddresses,
        selectOrderShippingTotalAddresses: selectOrderShippingTotalAddresses,
        selectOrderShipments: selectOrderShipments,
        selectOrderPayment: selectOrderPayment,
        selectOrderInvoices: selectOrderInvoices,
        selectOrderCredits: selectOrderCredits,
        selectOrderItem: selectOrderItem,
        selectOrderGrandTotal: selectOrderGrandTotal,
        selectOrderSubtotal: selectOrderSubtotal,
        selectOrderShippingTotal: selectOrderShippingTotal,
        selectOrderDiscountTotal: selectOrderDiscountTotal,
        selectOrderHasDiscount: selectOrderHasDiscount,
        selectOrderTaxTotal: selectOrderTaxTotal,
    };
});
var ɵ0 = createOrderEntitySelectors;
var ɵ1 = /**
 * @return {?}
 */
function () {
    /** @type {?} */
    var cache;
    return (/**
     * @template T
     * @return {?}
     */
    function () {
        return cache = cache || createOrderEntitySelectors();
    });
};
/** @type {?} */
export var getDaffOrderEntitySelectors = ((ɵ1))();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZW50aXRpZXMuc2VsZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvb3JkZXIvc3RhdGUvIiwic291cmNlcyI6WyJzZWxlY3RvcnMvb3JkZXItZW50aXRpZXMuc2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBRy9ELE9BQU8sRUFBNEMsc0JBQXNCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUU1RCxPQUFPLEVBQ0wsbUJBQW1CLEVBRXBCLE1BQU0sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7O0FBRTdFLDhDQStGQzs7O0lBOUZDLDREQUE0RTs7Ozs7SUFJNUUsa0RBQThEOzs7OztJQUk5RCx1REFBNkQ7Ozs7O0lBSTdELG1EQUErQzs7Ozs7SUFJL0Msb0RBQW1EOztJQUNuRCwrQ0FBeUM7Ozs7O0lBS3pDLHFEQUErQzs7Ozs7SUFJL0Msd0RBQXdEOzs7OztJQUt4RCxxREFBeUQ7Ozs7O0lBSXpELDJEQUFzRTs7Ozs7SUFJdEUsb0RBQXVEOzs7OztJQUl2RCwrREFBOEU7Ozs7O0lBSTlFLHFFQUFxRjs7Ozs7SUFJckYsd0RBQStEOzs7OztJQUkvRCxzREFBMkQ7Ozs7O0lBSTNELHVEQUE2RDs7Ozs7SUFJN0Qsc0RBQTJEOzs7OztJQUszRCxtREFBeUQ7Ozs7O0lBS3pELHlEQUFnRTs7Ozs7SUFJaEUsdURBQThEOzs7OztJQUk5RCw0REFBbUU7Ozs7O0lBSXBFLDREQUFtRTs7Ozs7SUFJbkUsMERBQTBEOzs7OztJQUl6RCx1REFBOEQ7OztJQUcxRCwwQkFBMEI7Ozs7QUFBRztJQUN6QixJQUFBLHFGQUF1Qjs7UUFDekIsd0JBQXdCLEdBQUcsY0FBYyxDQUM3Qyx1QkFBdUI7Ozs7SUFDdkIs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c0JBQXNCLHdCQUFBO1FBQ3RCLG1CQUFtQixxQkFBQTtLQUNwQixDQUFBO0FBQ0gsQ0FBQyxDQUFBOzs7OztBQUUyQzs7UUFDdEMsS0FBSztJQUNUOzs7O0lBQU87UUFDTCxPQUFBLEtBQUssR0FBRyxLQUFLLElBQUksMEJBQTBCLEVBQUs7SUFBaEQsQ0FBZ0QsRUFBQTtBQUNwRCxDQUFDOztBQUpELE1BQU0sS0FBTywyQkFBMkIsR0FBRyxNQUl6QyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBEaWN0aW9uYXJ5IH0gZnJvbSAnQG5ncngvZW50aXR5JztcblxuaW1wb3J0IHsgRGFmZk9yZGVyLCBEYWZmT3JkZXJJdGVtLCBEYWZmT3JkZXJUb3RhbCwgRGFmZk9yZGVyVG90YWxUeXBlRW51bSB9IGZyb20gJ0BkYWZmb2RpbC9vcmRlcic7XG5pbXBvcnQgeyBnZXREYWZmQ2FydFNlbGVjdG9ycyB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L3N0YXRlJztcblxuaW1wb3J0IHtcbiAgZGFmZkdldE9yZGVyQWRhcHRlcixcbiAgRGFmZk9yZGVyRW50aXR5U3RhdGVcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyBnZXREYWZmT3JkZXJSZWR1Y2Vyc1N0YXRlU2VsZWN0b3IgfSBmcm9tICcuL29yZGVyLWZlYXR1cmUuc2VsZWN0b3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhZmZPcmRlckVudGl0eVNlbGVjdG9yczxUIGV4dGVuZHMgRGFmZk9yZGVyID0gRGFmZk9yZGVyPiB7XG4gIHNlbGVjdE9yZGVyRW50aXRpZXNTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZPcmRlckVudGl0eVN0YXRlPFQ+PjtcbiAgLyoqXG4gICAqIFNlbGVjdG9yIGZvciBvcmRlciBJRHMuXG4gICAqL1xuICBzZWxlY3RPcmRlcklkczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIHN0cmluZ1tdIHwgbnVtYmVyW10+O1xuICAvKipcbiAgICogU2VsZWN0b3IgZm9yIG9yZGVyIGVudGl0aWVzLlxuICAgKi9cbiAgc2VsZWN0T3JkZXJFbnRpdGllczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERpY3Rpb25hcnk8VD4+O1xuICAvKipcbiAgICogU2VsZWN0b3IgZm9yIGFsbCBvcmRlcnMuXG4gICAqL1xuICBzZWxlY3RBbGxPcmRlcnM6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBUW10+O1xuICAvKipcbiAgICogU2VsZWN0b3IgZm9yIHRvdGFsIG51bWJlciBvZiBvcmRlcnMuXG4gICAqL1xuICBzZWxlY3RPcmRlclRvdGFsOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgbnVtYmVyPjtcbiAgc2VsZWN0T3JkZXI6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBUPjtcblxuICAvKipcbiAgICogU2VsZWN0b3IgZm9yIHRoZSBtb3N0IHJlY2VudGx5IHBsYWNlZCBvcmRlciAoaWYgYW55KS5cbiAgICovXG4gIHNlbGVjdFBsYWNlZE9yZGVyOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgVD47XG4gIC8qKlxuICAgKiBTZWxlY3RvciBmb3IgdGhlIGV4aXN0ZW5jZSBvZiB0aGUgbW9zdCByZWNlbnRseSBwbGFjZWQgb3JkZXIuXG4gICAqL1xuICBzZWxlY3RIYXNQbGFjZWRPcmRlcjogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIGJvb2xlYW4+O1xuXG4gIC8qKlxuICAgKiBTZWxlY3RzIHRoZSBzcGVjaWZpZWQgb3JkZXIncyB0b3RhbHMuXG4gICAqL1xuICBzZWxlY3RPcmRlclRvdGFsczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIFRbJ3RvdGFscyddPjtcbiAgLyoqXG4gICAqIFNlbGVjdHMgdGhlIHNwZWNpZmllZCBvcmRlcidzIGFwcGxpZWQgY291cG9uIGNvZGVzLlxuICAgKi9cbiAgc2VsZWN0T3JkZXJBcHBsaWVkQ29kZXM6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBUWydhcHBsaWVkX2NvZGVzJ10+O1xuICAvKipcbiAgICogU2VsZWN0cyB0aGUgc3BlY2lmaWVkIG9yZGVyJ3MgaXRlbXMuXG4gICAqL1xuICBzZWxlY3RPcmRlckl0ZW1zOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgVFsnaXRlbXMnXT47XG4gIC8qKlxuICAgKiBTZWxlY3RzIHRoZSBzcGVjaWZpZWQgb3JkZXIncyBiaWxsaW5nIGFkZHJlc3Nlcy5cbiAgICovXG4gIHNlbGVjdE9yZGVyQmlsbGluZ0FkZHJlc3NlczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIFRbJ2JpbGxpbmdfYWRkcmVzc2VzJ10+O1xuICAvKipcbiAgICogU2VsZWN0cyB0aGUgc3BlY2lmaWVkIG9yZGVyJ3Mgc2hpcHBpbmcgYWRkcmVzc2VzLlxuICAgKi9cbiAgc2VsZWN0T3JkZXJTaGlwcGluZ1RvdGFsQWRkcmVzc2VzOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgVFsnc2hpcHBpbmdfYWRkcmVzc2VzJ10+O1xuICAvKipcbiAgICogU2VsZWN0cyB0aGUgc3BlY2lmaWVkIG9yZGVyJ3Mgc2hpcG1lbnRzLlxuICAgKi9cbiAgc2VsZWN0T3JkZXJTaGlwbWVudHM6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBUWydzaGlwbWVudHMnXT47XG4gIC8qKlxuICAgKiBTZWxlY3RzIHRoZSBzcGVjaWZpZWQgb3JkZXIncyBwYXltZW50LlxuICAgKi9cbiAgc2VsZWN0T3JkZXJQYXltZW50OiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgVFsncGF5bWVudCddPjtcbiAgLyoqXG4gICAqIFNlbGVjdHMgdGhlIHNwZWNpZmllZCBvcmRlcidzIGludm9pY2VzLlxuICAgKi9cbiAgc2VsZWN0T3JkZXJJbnZvaWNlczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIFRbJ2ludm9pY2VzJ10+O1xuICAvKipcbiAgICogU2VsZWN0cyB0aGUgc3BlY2lmaWVkIG9yZGVyJ3MgY3JlZGl0cy5cbiAgICovXG4gIHNlbGVjdE9yZGVyQ3JlZGl0czogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIFRbJ2NyZWRpdHMnXT47XG5cbiAgLyoqXG4gICAqIFNlbGVjdHMgdGhlIHNwZWNpZmllZCBvcmRlcidzIHNwZWNpZmllZCBpdGVtLlxuICAgKi9cbiAgc2VsZWN0T3JkZXJJdGVtOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRGFmZk9yZGVySXRlbT47XG5cbiAgLyoqXG4gICAqIFNlbGVjdHMgdGhlIHNwZWNpZmllZCBvcmRlcidzIGdyYW5kIHRvdGFsLlxuICAgKi9cbiAgc2VsZWN0T3JkZXJHcmFuZFRvdGFsOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRGFmZk9yZGVyVG90YWw+O1xuICAvKipcbiAgICogU2VsZWN0cyB0aGUgc3BlY2lmaWVkIG9yZGVyJ3Mgc3VidG90YWwuXG4gICAqL1xuICBzZWxlY3RPcmRlclN1YnRvdGFsOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRGFmZk9yZGVyVG90YWw+O1xuICAvKipcbiAgICogU2VsZWN0cyB0aGUgc3BlY2lmaWVkIG9yZGVyJ3Mgc2hpcHBpbmcgdG90YWwuXG4gICAqL1xuICBzZWxlY3RPcmRlclNoaXBwaW5nVG90YWw6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBEYWZmT3JkZXJUb3RhbD47XG4gIC8qKlxuICAgKiBTZWxlY3RzIHRoZSBzcGVjaWZpZWQgb3JkZXIncyBkaXNjb3VudCB0b3RhbC5cbiAgICovXG5cdHNlbGVjdE9yZGVyRGlzY291bnRUb3RhbDogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZPcmRlclRvdGFsPjtcblx0LyoqXG5cdCAqIFNlbGVjdHMgd2hldGhlciB0aGUgc3BlY2lmaWVkIG9yZGVyIGhhcyBhIGRpc2NvdW50LlxuXHQgKi9cblx0c2VsZWN0T3JkZXJIYXNEaXNjb3VudDogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIGJvb2xlYW4+O1xuICAvKipcbiAgICogU2VsZWN0cyB0aGUgc3BlY2lmaWVkIG9yZGVyJ3MgdGF4IHRvdGFsLlxuICAgKi9cbiAgc2VsZWN0T3JkZXJUYXhUb3RhbDogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZPcmRlclRvdGFsPjtcbn1cblxuY29uc3QgY3JlYXRlT3JkZXJFbnRpdHlTZWxlY3RvcnMgPSA8VCBleHRlbmRzIERhZmZPcmRlciA9IERhZmZPcmRlcj4oKSA9PiB7XG4gIGNvbnN0IHsgc2VsZWN0T3JkZXJGZWF0dXJlU3RhdGUgfSA9IGdldERhZmZPcmRlclJlZHVjZXJzU3RhdGVTZWxlY3RvcjxUPigpO1xuICBjb25zdCBzZWxlY3RPcmRlckVudGl0aWVzU3RhdGUgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBzZWxlY3RPcmRlckZlYXR1cmVTdGF0ZSxcbiAgICBzdGF0ZSA9PiBzdGF0ZS5vcmRlcnNcbiAgKVxuICBjb25zdCB7IHNlbGVjdElkcywgc2VsZWN0RW50aXRpZXMsIHNlbGVjdEFsbCwgc2VsZWN0VG90YWwgfSA9IGRhZmZHZXRPcmRlckFkYXB0ZXI8VD4oKS5nZXRTZWxlY3RvcnMoc2VsZWN0T3JkZXJFbnRpdGllc1N0YXRlKTtcbiAgY29uc3QgeyBzZWxlY3RDYXJ0T3JkZXJJZCB9ID0gZ2V0RGFmZkNhcnRTZWxlY3RvcnMoKTtcblxuICBjb25zdCBzZWxlY3RPcmRlciA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgIHNlbGVjdEVudGl0aWVzLFxuICAgIChvcmRlcnMsIHByb3BzKSA9PiBvcmRlcnNbcHJvcHMuaWRdIHx8IG51bGxcbiAgKVxuXG4gIGNvbnN0IHNlbGVjdFBsYWNlZE9yZGVyID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgc2VsZWN0RW50aXRpZXMsXG4gICAgc2VsZWN0Q2FydE9yZGVySWQsXG4gICAgKG9yZGVycywgb3JkZXJJZCkgPT4gb3JkZXJJZCA/IHNlbGVjdE9yZGVyLnByb2plY3RvcihvcmRlcnMsIHtpZDogb3JkZXJJZH0pIDogbnVsbFxuICApXG4gIGNvbnN0IHNlbGVjdEhhc1BsYWNlZE9yZGVyID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgc2VsZWN0UGxhY2VkT3JkZXIsXG4gICAgcGxhY2VkT3JkZXIgPT4gISFwbGFjZWRPcmRlclxuICApXG5cbiAgY29uc3Qgc2VsZWN0T3JkZXJUb3RhbHMgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBzZWxlY3RFbnRpdGllcyxcbiAgICAob3JkZXJzLCBwcm9wcykgPT4ge1xuICAgICAgY29uc3Qgb3JkZXI6IERhZmZPcmRlciA9IHNlbGVjdE9yZGVyLnByb2plY3RvcihvcmRlcnMsIHtpZDogcHJvcHMuaWR9KTtcbiAgICAgIHJldHVybiAob3JkZXIgJiYgb3JkZXIudG90YWxzKSB8fCBbXVxuICAgIH1cbiAgKTtcbiAgY29uc3Qgc2VsZWN0T3JkZXJBcHBsaWVkQ29kZXMgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBzZWxlY3RFbnRpdGllcyxcbiAgICAob3JkZXJzLCBwcm9wcykgPT4ge1xuICAgICAgY29uc3Qgb3JkZXIgPSBzZWxlY3RPcmRlci5wcm9qZWN0b3Iob3JkZXJzLCB7aWQ6IHByb3BzLmlkfSk7XG4gICAgICByZXR1cm4gKG9yZGVyICYmIG9yZGVyLmFwcGxpZWRfY29kZXMpIHx8IFtdXG4gICAgfVxuICApO1xuICBjb25zdCBzZWxlY3RPcmRlckl0ZW1zID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgc2VsZWN0RW50aXRpZXMsXG4gICAgKG9yZGVycywgcHJvcHMpID0+IHtcbiAgICAgIGNvbnN0IG9yZGVyID0gc2VsZWN0T3JkZXIucHJvamVjdG9yKG9yZGVycywge2lkOiBwcm9wcy5pZH0pO1xuICAgICAgcmV0dXJuIChvcmRlciAmJiBvcmRlci5pdGVtcykgfHwgW11cbiAgICB9XG4gICk7XG4gIGNvbnN0IHNlbGVjdE9yZGVyQmlsbGluZ0FkZHJlc3NlcyA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgIHNlbGVjdEVudGl0aWVzLFxuICAgIChvcmRlcnMsIHByb3BzKSA9PiB7XG4gICAgICBjb25zdCBvcmRlciA9IHNlbGVjdE9yZGVyLnByb2plY3RvcihvcmRlcnMsIHtpZDogcHJvcHMuaWR9KTtcbiAgICAgIHJldHVybiAob3JkZXIgJiYgb3JkZXIuYmlsbGluZ19hZGRyZXNzZXMpIHx8IFtdXG4gICAgfVxuICApO1xuICBjb25zdCBzZWxlY3RPcmRlclNoaXBwaW5nVG90YWxBZGRyZXNzZXMgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBzZWxlY3RFbnRpdGllcyxcbiAgICAob3JkZXJzLCBwcm9wcykgPT4ge1xuICAgICAgY29uc3Qgb3JkZXIgPSBzZWxlY3RPcmRlci5wcm9qZWN0b3Iob3JkZXJzLCB7aWQ6IHByb3BzLmlkfSk7XG4gICAgICByZXR1cm4gKG9yZGVyICYmIG9yZGVyLnNoaXBwaW5nX2FkZHJlc3NlcykgfHwgW11cbiAgICB9XG4gICk7XG4gIGNvbnN0IHNlbGVjdE9yZGVyU2hpcG1lbnRzID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgc2VsZWN0RW50aXRpZXMsXG4gICAgKG9yZGVycywgcHJvcHMpID0+IHtcbiAgICAgIGNvbnN0IG9yZGVyID0gc2VsZWN0T3JkZXIucHJvamVjdG9yKG9yZGVycywge2lkOiBwcm9wcy5pZH0pO1xuICAgICAgcmV0dXJuIChvcmRlciAmJiBvcmRlci5zaGlwbWVudHMpIHx8IFtdXG4gICAgfVxuICApO1xuICBjb25zdCBzZWxlY3RPcmRlclBheW1lbnQgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBzZWxlY3RFbnRpdGllcyxcbiAgICAob3JkZXJzLCBwcm9wcykgPT4ge1xuICAgICAgY29uc3Qgb3JkZXIgPSBzZWxlY3RPcmRlci5wcm9qZWN0b3Iob3JkZXJzLCB7aWQ6IHByb3BzLmlkfSk7XG4gICAgICByZXR1cm4gKG9yZGVyICYmIG9yZGVyLnBheW1lbnQpIHx8IG51bGxcbiAgICB9XG4gICk7XG4gIGNvbnN0IHNlbGVjdE9yZGVySW52b2ljZXMgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBzZWxlY3RFbnRpdGllcyxcbiAgICAob3JkZXJzLCBwcm9wcykgPT4ge1xuICAgICAgY29uc3Qgb3JkZXIgPSBzZWxlY3RPcmRlci5wcm9qZWN0b3Iob3JkZXJzLCB7aWQ6IHByb3BzLmlkfSk7XG4gICAgICByZXR1cm4gKG9yZGVyICYmIG9yZGVyLmludm9pY2VzKSB8fCBbXVxuICAgIH1cbiAgKTtcbiAgY29uc3Qgc2VsZWN0T3JkZXJDcmVkaXRzID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgc2VsZWN0RW50aXRpZXMsXG4gICAgKG9yZGVycywgcHJvcHMpID0+IHtcbiAgICAgIGNvbnN0IG9yZGVyID0gc2VsZWN0T3JkZXIucHJvamVjdG9yKG9yZGVycywge2lkOiBwcm9wcy5pZH0pO1xuICAgICAgcmV0dXJuIChvcmRlciAmJiBvcmRlci5jcmVkaXRzKSB8fCBbXVxuICAgIH1cbiAgKTtcblxuICBjb25zdCBzZWxlY3RPcmRlckdyYW5kVG90YWwgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBzZWxlY3RFbnRpdGllcyxcbiAgICAob3JkZXJzLCBwcm9wcykgPT4ge1xuICAgICAgY29uc3QgdG90YWxzID0gc2VsZWN0T3JkZXJUb3RhbHMucHJvamVjdG9yKG9yZGVycywge2lkOiBwcm9wcy5pZH0pO1xuICAgICAgY29uc3QgaW5kZXggPSB0b3RhbHMuZmluZEluZGV4KHRvdGFsID0+IHRvdGFsLnR5cGUgPT09IERhZmZPcmRlclRvdGFsVHlwZUVudW0uR3JhbmRUb3RhbCk7XG5cbiAgICAgIHJldHVybiBpbmRleCA+IC0xID8gdG90YWxzW2luZGV4XSA6IG51bGxcbiAgICB9XG4gICk7XG4gIGNvbnN0IHNlbGVjdE9yZGVyU3VidG90YWwgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBzZWxlY3RFbnRpdGllcyxcbiAgICAob3JkZXJzLCBwcm9wcykgPT4ge1xuICAgICAgY29uc3QgdG90YWxzID0gc2VsZWN0T3JkZXJUb3RhbHMucHJvamVjdG9yKG9yZGVycywgeyBpZDogcHJvcHMuaWQgfSk7XG4gICAgICBjb25zdCBpbmRleCA9IHRvdGFscy5maW5kSW5kZXgodG90YWwgPT4gdG90YWwudHlwZSA9PT0gRGFmZk9yZGVyVG90YWxUeXBlRW51bS5TdWJ0b3RhbCk7XG5cbiAgICAgIHJldHVybiBpbmRleCA+IC0xID8gdG90YWxzW2luZGV4XSA6IG51bGxcbiAgICB9XG4gICk7XG4gIGNvbnN0IHNlbGVjdE9yZGVyU2hpcHBpbmdUb3RhbCA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgIHNlbGVjdEVudGl0aWVzLFxuICAgIChvcmRlcnMsIHByb3BzKSA9PiB7XG4gICAgICBjb25zdCB0b3RhbHMgPSBzZWxlY3RPcmRlclRvdGFscy5wcm9qZWN0b3Iob3JkZXJzLCB7IGlkOiBwcm9wcy5pZCB9KTtcbiAgICAgIGNvbnN0IGluZGV4ID0gdG90YWxzLmZpbmRJbmRleCh0b3RhbCA9PiB0b3RhbC50eXBlID09PSBEYWZmT3JkZXJUb3RhbFR5cGVFbnVtLlNoaXBwaW5nKTtcblxuICAgICAgcmV0dXJuIGluZGV4ID4gLTEgPyB0b3RhbHNbaW5kZXhdIDogbnVsbFxuICAgIH1cbiAgKTtcbiAgY29uc3Qgc2VsZWN0T3JkZXJEaXNjb3VudFRvdGFsID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgc2VsZWN0RW50aXRpZXMsXG4gICAgKG9yZGVycywgcHJvcHMpID0+IHtcbiAgICAgIGNvbnN0IHRvdGFscyA9IHNlbGVjdE9yZGVyVG90YWxzLnByb2plY3RvcihvcmRlcnMsIHsgaWQ6IHByb3BzLmlkIH0pO1xuICAgICAgY29uc3QgaW5kZXggPSB0b3RhbHMuZmluZEluZGV4KHRvdGFsID0+IHRvdGFsLnR5cGUgPT09IERhZmZPcmRlclRvdGFsVHlwZUVudW0uRGlzY291bnQpO1xuXG4gICAgICByZXR1cm4gaW5kZXggPiAtMSA/IHRvdGFsc1tpbmRleF0gOiBudWxsXG4gICAgfVxuICApO1xuICBjb25zdCBzZWxlY3RPcmRlckhhc0Rpc2NvdW50ID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgc2VsZWN0RW50aXRpZXMsXG4gICAgKG9yZGVycywgcHJvcHMpID0+IHtcbiAgICAgIGNvbnN0IGRpc2NvdW50VG90YWwgPSBzZWxlY3RPcmRlckRpc2NvdW50VG90YWwucHJvamVjdG9yKG9yZGVycywgeyBpZDogcHJvcHMuaWQgfSk7XG5cblx0XHRcdC8vdG9kbzogdXNlIG9wdGlvbmFsIGNoYWluaW5nIHdoZW4gcG9zc2libGVcbiAgICAgIHJldHVybiAhIWRpc2NvdW50VG90YWwgJiYgZGlzY291bnRUb3RhbC52YWx1ZSA+IDA7XG4gICAgfVxuICApO1xuICBjb25zdCBzZWxlY3RPcmRlclRheFRvdGFsID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgc2VsZWN0RW50aXRpZXMsXG4gICAgKG9yZGVycywgcHJvcHMpID0+IHtcbiAgICAgIGNvbnN0IHRvdGFscyA9IHNlbGVjdE9yZGVyVG90YWxzLnByb2plY3RvcihvcmRlcnMsIHsgaWQ6IHByb3BzLmlkIH0pO1xuICAgICAgY29uc3QgaW5kZXggPSB0b3RhbHMuZmluZEluZGV4KHRvdGFsID0+IHRvdGFsLnR5cGUgPT09IERhZmZPcmRlclRvdGFsVHlwZUVudW0uVGF4KTtcblxuICAgICAgcmV0dXJuIGluZGV4ID4gLTEgPyB0b3RhbHNbaW5kZXhdIDogbnVsbFxuICAgIH1cbiAgKTtcblxuICBjb25zdCBzZWxlY3RPcmRlckl0ZW0gPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RFbnRpdGllcyxcblx0XHQob3JkZXJzLCBwcm9wcykgPT4gc2VsZWN0T3JkZXJJdGVtcy5wcm9qZWN0b3Iob3JkZXJzLCB7aWQ6IHByb3BzLmlkfSkuZmluZChpdGVtID0+IGl0ZW0uaXRlbV9pZCA9PT0gcHJvcHMuaXRlbV9pZCkgfHwgbnVsbFxuICApO1xuXG4gIHJldHVybiB7XG4gICAgc2VsZWN0T3JkZXJFbnRpdGllc1N0YXRlLFxuICAgIHNlbGVjdE9yZGVySWRzOiBzZWxlY3RJZHMsXG4gICAgc2VsZWN0T3JkZXJFbnRpdGllczogc2VsZWN0RW50aXRpZXMsXG4gICAgc2VsZWN0QWxsT3JkZXJzOiBzZWxlY3RBbGwsXG4gICAgc2VsZWN0T3JkZXJUb3RhbDogc2VsZWN0VG90YWwsXG5cbiAgICBzZWxlY3RQbGFjZWRPcmRlcixcbiAgICBzZWxlY3RIYXNQbGFjZWRPcmRlcixcblxuICAgIHNlbGVjdE9yZGVyLFxuICAgIHNlbGVjdE9yZGVyVG90YWxzLFxuICAgIHNlbGVjdE9yZGVyQXBwbGllZENvZGVzLFxuICAgIHNlbGVjdE9yZGVySXRlbXMsXG4gICAgc2VsZWN0T3JkZXJCaWxsaW5nQWRkcmVzc2VzLFxuICAgIHNlbGVjdE9yZGVyU2hpcHBpbmdUb3RhbEFkZHJlc3NlcyxcbiAgICBzZWxlY3RPcmRlclNoaXBtZW50cyxcbiAgICBzZWxlY3RPcmRlclBheW1lbnQsXG4gICAgc2VsZWN0T3JkZXJJbnZvaWNlcyxcbiAgICBzZWxlY3RPcmRlckNyZWRpdHMsXG4gICAgc2VsZWN0T3JkZXJJdGVtLFxuXG4gICAgc2VsZWN0T3JkZXJHcmFuZFRvdGFsLFxuICAgIHNlbGVjdE9yZGVyU3VidG90YWwsXG4gICAgc2VsZWN0T3JkZXJTaGlwcGluZ1RvdGFsLFxuICAgIHNlbGVjdE9yZGVyRGlzY291bnRUb3RhbCxcbiAgICBzZWxlY3RPcmRlckhhc0Rpc2NvdW50LFxuICAgIHNlbGVjdE9yZGVyVGF4VG90YWwsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldERhZmZPcmRlckVudGl0eVNlbGVjdG9ycyA9ICgoKSA9PiB7XG4gIGxldCBjYWNoZTtcbiAgcmV0dXJuIDxUIGV4dGVuZHMgRGFmZk9yZGVyID0gRGFmZk9yZGVyPigpOiBEYWZmT3JkZXJFbnRpdHlTZWxlY3RvcnM8VD4gPT5cbiAgICBjYWNoZSA9IGNhY2hlIHx8IGNyZWF0ZU9yZGVyRW50aXR5U2VsZWN0b3JzPFQ+KClcbn0pKCk7XG5cbiJdfQ==