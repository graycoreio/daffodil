/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getDaffOrderSelectors } from '../../selectors/public_api';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
/**
 * @template T
 */
var DaffOrderFacade = /** @class */ (function () {
    function DaffOrderFacade(store) {
        this.store = store;
        var _a = getDaffOrderSelectors(), selectOrderIds = _a.selectOrderIds, selectOrderEntities = _a.selectOrderEntities, selectAllOrders = _a.selectAllOrders, selectOrderTotal = _a.selectOrderTotal, selectOrderLoading = _a.selectOrderLoading, selectOrderErrors = _a.selectOrderErrors, selectPlacedOrder = _a.selectPlacedOrder, selectHasPlacedOrder = _a.selectHasPlacedOrder, selectOrder = _a.selectOrder, selectOrderTotals = _a.selectOrderTotals, selectOrderAppliedCodes = _a.selectOrderAppliedCodes, selectOrderItems = _a.selectOrderItems, selectOrderBillingAddresses = _a.selectOrderBillingAddresses, selectOrderShippingTotalAddresses = _a.selectOrderShippingTotalAddresses, selectOrderShipments = _a.selectOrderShipments, selectOrderPayment = _a.selectOrderPayment, selectOrderInvoices = _a.selectOrderInvoices, selectOrderCredits = _a.selectOrderCredits, selectOrderGrandTotal = _a.selectOrderGrandTotal, selectOrderSubtotal = _a.selectOrderSubtotal, selectOrderShippingTotal = _a.selectOrderShippingTotal, selectOrderDiscountTotal = _a.selectOrderDiscountTotal, selectOrderHasDiscount = _a.selectOrderHasDiscount, selectOrderTaxTotal = _a.selectOrderTaxTotal;
        this.loading$ = this.store.pipe(select(selectOrderLoading));
        this.errors$ = this.store.pipe(select(selectOrderErrors));
        this.orders$ = this.store.pipe(select(selectAllOrders));
        this.orderIds$ = this.store.pipe(select(selectOrderIds));
        this.orderCount$ = this.store.pipe(select(selectOrderTotal));
        this.orderEntities$ = this.store.pipe(select(selectOrderEntities));
        this.placedOrder$ = this.store.pipe(select(selectPlacedOrder));
        this.hasPlacedOrder$ = this.store.pipe(select(selectHasPlacedOrder));
        this._order = selectOrder;
        this._totals = selectOrderTotals;
        this._appliedCodes = selectOrderAppliedCodes;
        this._items = selectOrderItems;
        this._billingAddresses = selectOrderBillingAddresses;
        this._shippingAddresses = selectOrderShippingTotalAddresses;
        this._shipments = selectOrderShipments;
        this._payment = selectOrderPayment;
        this._invoices = selectOrderInvoices;
        this._credits = selectOrderCredits;
        this._grandTotal = selectOrderGrandTotal;
        this._subtotal = selectOrderSubtotal;
        this._shipping = selectOrderShippingTotal;
        this._discount = selectOrderDiscountTotal;
        this._hasDiscount = selectOrderHasDiscount;
        this._tax = selectOrderTaxTotal;
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacade.prototype.getOrder$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return this.store.pipe(select(this._order, { id: orderId }));
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacade.prototype.getTotals$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return this.store.pipe(select(this._totals, { id: orderId }));
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacade.prototype.getAppliedCodes$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return this.store.pipe(select(this._appliedCodes, { id: orderId }));
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacade.prototype.getItems$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return this.store.pipe(select(this._items, { id: orderId }));
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacade.prototype.getBillingAddresses$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return this.store.pipe(select(this._billingAddresses, { id: orderId }));
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacade.prototype.getShippingAddresses$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return this.store.pipe(select(this._shippingAddresses, { id: orderId }));
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacade.prototype.getShipments$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return this.store.pipe(select(this._shipments, { id: orderId }));
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacade.prototype.getPayment$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return this.store.pipe(select(this._payment, { id: orderId }));
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacade.prototype.getInvoices$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return this.store.pipe(select(this._invoices, { id: orderId }));
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacade.prototype.getCredits$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return this.store.pipe(select(this._credits, { id: orderId }));
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacade.prototype.getGrandTotal$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return this.store.pipe(select(this._grandTotal, { id: orderId }));
    };
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacade.prototype.getSubtotal$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return this.store.pipe(select(this._subtotal, { id: orderId }));
    };
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacade.prototype.getShippingTotal$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return this.store.pipe(select(this._shipping, { id: orderId }));
    };
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacade.prototype.getDiscountTotal$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return this.store.pipe(select(this._discount, { id: orderId }));
    };
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacade.prototype.hasDiscount$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return this.store.pipe(select(this._hasDiscount, { id: orderId }));
    };
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacade.prototype.getTaxTotal$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return this.store.pipe(select(this._tax, { id: orderId }));
    };
    ;
    /**
     * @param {?} action
     * @return {?}
     */
    DaffOrderFacade.prototype.dispatch = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        this.store.dispatch(action);
    };
    DaffOrderFacade.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffOrderFacade.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ DaffOrderFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffOrderFacade_Factory() { return new DaffOrderFacade(i0.ɵɵinject(i1.Store)); }, token: DaffOrderFacade, providedIn: "root" });
    return DaffOrderFacade;
}());
export { DaffOrderFacade };
if (false) {
    /** @type {?} */
    DaffOrderFacade.prototype.loading$;
    /** @type {?} */
    DaffOrderFacade.prototype.errors$;
    /** @type {?} */
    DaffOrderFacade.prototype.orders$;
    /** @type {?} */
    DaffOrderFacade.prototype.orderIds$;
    /** @type {?} */
    DaffOrderFacade.prototype.orderCount$;
    /** @type {?} */
    DaffOrderFacade.prototype.orderEntities$;
    /** @type {?} */
    DaffOrderFacade.prototype.placedOrder$;
    /** @type {?} */
    DaffOrderFacade.prototype.hasPlacedOrder$;
    /** @type {?} */
    DaffOrderFacade.prototype._order;
    /** @type {?} */
    DaffOrderFacade.prototype._totals;
    /** @type {?} */
    DaffOrderFacade.prototype._appliedCodes;
    /** @type {?} */
    DaffOrderFacade.prototype._items;
    /** @type {?} */
    DaffOrderFacade.prototype._billingAddresses;
    /** @type {?} */
    DaffOrderFacade.prototype._shippingAddresses;
    /** @type {?} */
    DaffOrderFacade.prototype._shipments;
    /** @type {?} */
    DaffOrderFacade.prototype._payment;
    /** @type {?} */
    DaffOrderFacade.prototype._invoices;
    /** @type {?} */
    DaffOrderFacade.prototype._credits;
    /** @type {?} */
    DaffOrderFacade.prototype._grandTotal;
    /** @type {?} */
    DaffOrderFacade.prototype._subtotal;
    /** @type {?} */
    DaffOrderFacade.prototype._shipping;
    /** @type {?} */
    DaffOrderFacade.prototype._discount;
    /** @type {?} */
    DaffOrderFacade.prototype._hasDiscount;
    /** @type {?} */
    DaffOrderFacade.prototype._tax;
    /**
     * @type {?}
     * @private
     */
    DaffOrderFacade.prototype.store;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuZmFjYWRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL29yZGVyL3N0YXRlLyIsInNvdXJjZXMiOlsiZmFjYWRlcy9vcmRlci9vcmRlci5mYWNhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFNcEQsT0FBTyxFQUNMLHFCQUFxQixFQUN0QixNQUFNLDRCQUE0QixDQUFDOzs7Ozs7QUFJcEM7SUFnQ0UseUJBQW9CLEtBQXVDO1FBQXZDLFVBQUssR0FBTCxLQUFLLENBQWtDO1FBQ25ELElBQUEsNEJBNEJ3QixFQTNCNUIsa0NBQWMsRUFDZCw0Q0FBbUIsRUFDbkIsb0NBQWUsRUFDZixzQ0FBZ0IsRUFDaEIsMENBQWtCLEVBQ2xCLHdDQUFpQixFQUVqQix3Q0FBaUIsRUFDakIsOENBQW9CLEVBRXBCLDRCQUFXLEVBQ1gsd0NBQWlCLEVBQ2pCLG9EQUF1QixFQUN2QixzQ0FBZ0IsRUFDaEIsNERBQTJCLEVBQzNCLHdFQUFpQyxFQUNqQyw4Q0FBb0IsRUFDcEIsMENBQWtCLEVBQ2xCLDRDQUFtQixFQUNuQiwwQ0FBa0IsRUFFbEIsZ0RBQXFCLEVBQ3JCLDRDQUFtQixFQUNuQixzREFBd0IsRUFDeEIsc0RBQXdCLEVBQ3hCLGtEQUFzQixFQUN0Qiw0Q0FDNEI7UUFFOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUUxRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxD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SSxFQUFFLEVBQUMsRUFBRSxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUMsQ0FBQTtJQUMxRCxDQUFDO0lBQUEsQ0FBQzs7Ozs7SUFFRixrQ0FBUTs7OztJQUFSLFVBQVMsTUFBYztRQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDOztnQkF6SkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFkZ0IsS0FBSzs7OzBCQUZ0QjtDQXdLQyxBQTFKRCxJQTBKQztTQXZKWSxlQUFlOzs7SUFDMUIsbUNBQThCOztJQUM5QixrQ0FBOEI7O0lBRTlCLGtDQUF5Qjs7SUFDekIsb0NBQTJDOztJQUMzQyxzQ0FBZ0M7O0lBQ2hDLHlDQUEwQzs7SUFFMUMsdUNBQTRCOztJQUM1QiwwQ0FBcUM7O0lBRXJDLGlDQUFtRDs7SUFDbkQsa0NBQTBEOztJQUMxRCx3Q0FBc0U7O0lBQ3RFLGlDQUF3RDs7SUFDeEQsNENBQThFOztJQUM5RSw2Q0FBcUY7O0lBQ3JGLHFDQUFnRTs7SUFDaEUsbUNBQTREOztJQUM1RCxvQ0FBOEQ7O0lBQzlELG1DQUE0RDs7SUFDNUQsc0NBQWtFOztJQUNsRSxvQ0FBOEQ7O0lBQzlELG9DQUFtRTs7SUFDbkUsb0NBQW1FOztJQUNuRSx1Q0FBb0U7O0lBQ3BFLCtCQUF5RDs7Ozs7SUFFN0MsZ0NBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWN0aW9uLCBTdG9yZSwgc2VsZWN0IH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRGljdGlvbmFyeSB9IGZyb20gJ0BuZ3J4L2VudGl0eSc7XG5cbmltcG9ydCB7IERhZmZPcmRlciwgRGFmZk9yZGVyVG90YWwgfSBmcm9tICdAZGFmZm9kaWwvb3JkZXInO1xuXG5pbXBvcnQgeyBEYWZmT3JkZXJSZWR1Y2Vyc1N0YXRlIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcHVibGljX2FwaSc7XG5pbXBvcnQge1xuICBnZXREYWZmT3JkZXJTZWxlY3RvcnNcbn0gZnJvbSAnLi4vLi4vc2VsZWN0b3JzL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgRGFmZk9yZGVyRmFjYWRlSW50ZXJmYWNlIH0gZnJvbSAnLi9vcmRlci1mYWNhZGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhZmZPcmRlckVudGl0eVNlbGVjdG9ycyB9IGZyb20gJy4uLy4uL3NlbGVjdG9ycy9vcmRlci1lbnRpdGllcy5zZWxlY3Rvcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZPcmRlckZhY2FkZTxUIGV4dGVuZHMgRGFmZk9yZGVyID0gRGFmZk9yZGVyPiBpbXBsZW1lbnRzIERhZmZPcmRlckZhY2FkZUludGVyZmFjZTxUPiB7XG4gIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBlcnJvcnMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcblxuICBvcmRlcnMkOiBPYnNlcnZhYmxlPFRbXT47XG4gIG9yZGVySWRzJDogT2JzZXJ2YWJsZTwoc3RyaW5nIHwgbnVtYmVyKVtdPjtcbiAgb3JkZXJDb3VudCQ6IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgb3JkZXJFbnRpdGllcyQ6IE9ic2VydmFibGU8RGljdGlvbmFyeTxUPj47XG5cbiAgcGxhY2VkT3JkZXIkOiBPYnNlcnZhYmxlPFQ+O1xuICBoYXNQbGFjZWRPcmRlciQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgX29yZGVyOiBEYWZmT3JkZXJFbnRpdHlTZWxlY3RvcnM8VD5bJ3NlbGVjdE9yZGVyJ107XG4gIF90b3RhbHM6IERhZmZPcmRlckVudGl0eVNlbGVjdG9yczxUPlsnc2VsZWN0T3JkZXJUb3RhbHMnXTtcbiAgX2FwcGxpZWRDb2RlczogRGFmZk9yZGVyRW50aXR5U2VsZWN0b3JzPFQ+WydzZWxlY3RPcmRlckFwcGxpZWRDb2RlcyddO1xuICBfaXRlbXM6IERhZmZPcmRlckVudGl0eVNlbGVjdG9yczxUPlsnc2VsZWN0T3JkZXJJdGVtcyddO1xuICBfYmlsbGluZ0FkZHJlc3NlczogRGFmZk9yZGVyRW50aXR5U2VsZWN0b3JzPFQ+WydzZWxlY3RPcmRlckJpbGxpbmdBZGRyZXNzZXMnXTtcbiAgX3NoaXBwaW5nQWRkcmVzc2VzOiBEYWZmT3JkZXJFbnRpdHlTZWxlY3RvcnM8VD5bJ3NlbGVjdE9yZGVyU2hpcHBpbmdUb3RhbEFkZHJlc3NlcyddO1xuICBfc2hpcG1lbnRzOiBEYWZmT3JkZXJFbnRpdHlTZWxlY3RvcnM8VD5bJ3NlbGVjdE9yZGVyU2hpcG1lbnRzJ107XG4gIF9wYXltZW50OiBEYWZmT3JkZXJFbnRpdHlTZWxlY3RvcnM8VD5bJ3NlbGVjdE9yZGVyUGF5bWVudCddO1xuICBfaW52b2ljZXM6IERhZmZPcmRlckVudGl0eVNlbGVjdG9yczxUPlsnc2VsZWN0T3JkZXJJbnZvaWNlcyddO1xuICBfY3JlZGl0czogRGFmZk9yZGVyRW50aXR5U2VsZWN0b3JzPFQ+WydzZWxlY3RPcmRlckNyZWRpdHMnXTtcbiAgX2dyYW5kVG90YWw6IERhZmZPcmRlckVudGl0eVNlbGVjdG9yczxUPlsnc2VsZWN0T3JkZXJHcmFuZFRvdGFsJ107XG4gIF9zdWJ0b3RhbDogRGFmZk9yZGVyRW50aXR5U2VsZWN0b3JzPFQ+WydzZWxlY3RPcmRlclN1YnRvdGFsJ107XG4gIF9zaGlwcGluZzogRGFmZk9yZGVyRW50aXR5U2VsZWN0b3JzPFQ+WydzZWxlY3RPcmRlclNoaXBwaW5nVG90YWwnXTtcbiAgX2Rpc2NvdW50OiBEYWZmT3JkZXJFbnRpdHlTZWxlY3RvcnM8VD5bJ3NlbGVjdE9yZGVyRGlzY291bnRUb3RhbCddO1xuICBfaGFzRGlzY291bnQ6IERhZmZPcmRlckVudGl0eVNlbGVjdG9yczxUPlsnc2VsZWN0T3JkZXJIYXNEaXNjb3VudCddO1xuICBfdGF4OiBEYWZmT3JkZXJFbnRpdHlTZWxlY3RvcnM8VD5bJ3NlbGVjdE9yZGVyVGF4VG90YWwnXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxEYWZmT3JkZXJSZWR1Y2Vyc1N0YXRlPFQ+Pikge1xuICAgIGNvbnN0IHtcbiAgICAgIHNlbGVjdE9yZGVySWRzLFxuICAgICAgc2VsZWN0T3JkZXJFbnRpdGllcyxcbiAgICAgIHNlbGVjdEFsbE9yZGVycyxcbiAgICAgIHNlbGVjdE9yZGVyVG90YWwsXG4gICAgICBzZWxlY3RPcmRlckxvYWRpbmcsXG4gICAgICBzZWxlY3RPcmRlckVycm9ycyxcblxuICAgICAgc2VsZWN0UGxhY2VkT3JkZXIsXG4gICAgICBzZWxlY3RIYXNQbGFjZWRPcmRlcixcblxuICAgICAgc2VsZWN0T3JkZXIsXG4gICAgICBzZWxlY3RPcmRlclRvdGFscyxcbiAgICAgIHNlbGVjdE9yZGVyQXBwbGllZENvZGVzLFxuICAgICAgc2VsZWN0T3JkZXJJdGVtcyxcbiAgICAgIHNlbGVjdE9yZGVyQmlsbGluZ0FkZHJlc3NlcyxcbiAgICAgIHNlbGVjdE9yZGVyU2hpcHBpbmdUb3RhbEFkZHJlc3NlcyxcbiAgICAgIHNlbGVjdE9yZGVyU2hpcG1lbnRzLFxuICAgICAgc2VsZWN0T3JkZXJQYXltZW50LFxuICAgICAgc2VsZWN0T3JkZXJJbnZvaWNlcyxcbiAgICAgIHNlbGVjdE9yZGVyQ3JlZGl0cyxcblxuICAgICAgc2VsZWN0T3JkZXJHcmFuZFRvdGFsLFxuICAgICAgc2VsZWN0T3JkZXJTdWJ0b3RhbCxcbiAgICAgIHNlbGVjdE9yZGVyU2hpcHBpbmdUb3RhbCxcbiAgICAgIHNlbGVjdE9yZGVyRGlzY291bnRUb3RhbCxcbiAgICAgIHNlbGVjdE9yZGVySGFzRGlzY291bnQsXG4gICAgICBzZWxlY3RPcmRlclRheFRvdGFsLFxuICAgIH0gPSBnZXREYWZmT3JkZXJTZWxlY3RvcnM8VD4oKTtcblxuICAgIHRoaXMubG9hZGluZyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdE9yZGVyTG9hZGluZykpO1xuICAgIHRoaXMuZXJyb3JzJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0T3JkZXJFcnJvcnMpKTtcblxuICAgIHRoaXMub3JkZXJzJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0QWxsT3JkZXJzKSk7XG4gICAgdGhpcy5vcmRlcklkcyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdE9yZGVySWRzKSk7XG4gICAgdGhpcy5vcmRlckNvdW50JCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0T3JkZXJUb3RhbCkpO1xuICAgIHRoaXMub3JkZXJFbnRpdGllcyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdE9yZGVyRW50aXRpZXMpKTtcblxuICAgIHRoaXMucGxhY2VkT3JkZXIkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RQbGFjZWRPcmRlcikpO1xuICAgIHRoaXMuaGFzUGxhY2VkT3JkZXIkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RIYXNQbGFjZWRPcmRlcikpO1xuXG4gICAgdGhpcy5fb3JkZXIgPSBzZWxlY3RPcmRlcjtcbiAgICB0aGlzLl90b3RhbHMgPSBzZWxlY3RPcmRlclRvdGFscztcbiAgICB0aGlzLl9hcHBsaWVkQ29kZXMgPSBzZWxlY3RPcmRlckFwcGxpZWRDb2RlcztcbiAgICB0aGlzLl9pdGVtcyA9IHNlbGVjdE9yZGVySXRlbXM7XG4gICAgdGhpcy5fYmlsbGluZ0FkZHJlc3NlcyA9IHNlbGVjdE9yZGVyQmlsbGluZ0FkZHJlc3NlcztcbiAgICB0aGlzLl9zaGlwcGluZ0FkZHJlc3NlcyA9IHNlbGVjdE9yZGVyU2hpcHBpbmdUb3RhbEFkZHJlc3NlcztcbiAgICB0aGlzLl9zaGlwbWVudHMgPSBzZWxlY3RPcmRlclNoaXBtZW50cztcbiAgICB0aGlzLl9wYXltZW50ID0gc2VsZWN0T3JkZXJQYXltZW50O1xuICAgIHRoaXMuX2ludm9pY2VzID0gc2VsZWN0T3JkZXJJbnZvaWNlcztcbiAgICB0aGlzLl9jcmVkaXRzID0gc2VsZWN0T3JkZXJDcmVkaXRzO1xuICAgIHRoaXMuX2dyYW5kVG90YWwgPSBzZWxlY3RPcmRlckdyYW5kVG90YWw7XG4gICAgdGhpcy5fc3VidG90YWwgPSBzZWxlY3RPcmRlclN1YnRvdGFsO1xuICAgIHRoaXMuX3NoaXBwaW5nID0gc2VsZWN0T3JkZXJTaGlwcGluZ1RvdGFsO1xuICAgIHRoaXMuX2Rpc2NvdW50ID0gc2VsZWN0T3JkZXJEaXNjb3VudFRvdGFsO1xuICAgIHRoaXMuX2hhc0Rpc2NvdW50ID0gc2VsZWN0T3JkZXJIYXNEaXNjb3VudDtcbiAgICB0aGlzLl90YXggPSBzZWxlY3RPcmRlclRheFRvdGFsO1xuICB9XG5cbiAgZ2V0T3JkZXIkKG9yZGVySWQ6IFRbJ2lkJ10pOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLl9vcmRlciwge2lkOiBvcmRlcklkfSkpXG4gIH1cblxuICBnZXRUb3RhbHMkKG9yZGVySWQ6IFRbJ2lkJ10pOiBPYnNlcnZhYmxlPFRbJ3RvdGFscyddPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5fdG90YWxzLCB7aWQ6IG9yZGVySWR9KSlcbiAgfVxuXG4gIGdldEFwcGxpZWRDb2RlcyQob3JkZXJJZDogVFsnaWQnXSk6IE9ic2VydmFibGU8VFsnYXBwbGllZF9jb2RlcyddPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5fYXBwbGllZENvZGVzLCB7aWQ6IG9yZGVySWR9KSlcbiAgfVxuXG4gIGdldEl0ZW1zJChvcmRlcklkOiBUWydpZCddKTogT2JzZXJ2YWJsZTxUWydpdGVtcyddPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5faXRlbXMsIHtpZDogb3JkZXJJZH0pKVxuICB9XG5cbiAgZ2V0QmlsbGluZ0FkZHJlc3NlcyQob3JkZXJJZDogVFsnaWQnXSk6IE9ic2VydmFibGU8VFsnYmlsbGluZ19hZGRyZXNzZXMnXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuX2JpbGxpbmdBZGRyZXNzZXMsIHtpZDogb3JkZXJJZH0pKVxuICB9XG5cbiAgZ2V0U2hpcHBpbmdBZGRyZXNzZXMkKG9yZGVySWQ6IFRbJ2lkJ10pOiBPYnNlcnZhYmxlPFRbJ3NoaXBwaW5nX2FkZHJlc3NlcyddPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5fc2hpcHBpbmdBZGRyZXNzZXMsIHtpZDogb3JkZXJJZH0pKVxuICB9XG5cbiAgZ2V0U2hpcG1lbnRzJChvcmRlcklkOiBUWydpZCddKTogT2JzZXJ2YWJsZTxUWydzaGlwbWVudHMnXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuX3NoaXBtZW50cywge2lkOiBvcmRlcklkfSkpXG4gIH1cblxuICBnZXRQYXltZW50JChvcmRlcklkOiBUWydpZCddKTogT2JzZXJ2YWJsZTxUWydwYXltZW50J10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLl9wYXltZW50LCB7aWQ6IG9yZGVySWR9KSlcbiAgfVxuXG4gIGdldEludm9pY2VzJChvcmRlcklkOiBUWydpZCddKTogT2JzZXJ2YWJsZTxUWydpbnZvaWNlcyddPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5faW52b2ljZXMsIHtpZDogb3JkZXJJZH0pKVxuICB9XG5cbiAgZ2V0Q3JlZGl0cyQob3JkZXJJZDogVFsnaWQnXSk6IE9ic2VydmFibGU8VFsnY3JlZGl0cyddPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5fY3JlZGl0cywge2lkOiBvcmRlcklkfSkpXG4gIH1cblxuICBnZXRHcmFuZFRvdGFsJChvcmRlcklkOiBUWydpZCddKTogT2JzZXJ2YWJsZTxEYWZmT3JkZXJUb3RhbD4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuX2dyYW5kVG90YWwsIHtpZDogb3JkZXJJZH0pKVxuICB9O1xuICBnZXRTdWJ0b3RhbCQob3JkZXJJZDogVFsnaWQnXSk6IE9ic2VydmFibGU8RGFmZk9yZGVyVG90YWw+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLl9zdWJ0b3RhbCwge2lkOiBvcmRlcklkfSkpXG4gIH07XG4gIGdldFNoaXBwaW5nVG90YWwkKG9yZGVySWQ6IFRbJ2lkJ10pOiBPYnNlcnZhYmxlPERhZmZPcmRlclRvdGFsPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5fc2hpcHBpbmcsIHtpZDogb3JkZXJJZH0pKVxuICB9O1xuICBnZXREaXNjb3VudFRvdGFsJChvcmRlcklkOiBUWydpZCddKTogT2JzZXJ2YWJsZTxEYWZmT3JkZXJUb3RhbD4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuX2Rpc2NvdW50LCB7aWQ6IG9yZGVySWR9KSlcbiAgfTtcbiAgaGFzRGlzY291bnQkKG9yZGVySWQ6IFRbJ2lkJ10pOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLl9oYXNEaXNjb3VudCwge2lkOiBvcmRlcklkfSkpXG4gIH07XG4gIGdldFRheFRvdGFsJChvcmRlcklkOiBUWydpZCddKTogT2JzZXJ2YWJsZTxEYWZmT3JkZXJUb3RhbD4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuX3RheCwge2lkOiBvcmRlcklkfSkpXG4gIH07XG5cbiAgZGlzcGF0Y2goYWN0aW9uOiBBY3Rpb24pIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG4gIH1cbn1cbiJdfQ==