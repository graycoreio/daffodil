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
export class DaffOrderFacade {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        const { selectOrderIds, selectOrderEntities, selectAllOrders, selectOrderTotal, selectOrderLoading, selectOrderErrors, selectPlacedOrder, selectHasPlacedOrder, selectOrder, selectOrderTotals, selectOrderAppliedCodes, selectOrderItems, selectOrderBillingAddresses, selectOrderShippingTotalAddresses, selectOrderShipments, selectOrderPayment, selectOrderInvoices, selectOrderCredits, selectOrderGrandTotal, selectOrderSubtotal, selectOrderShippingTotal, selectOrderDiscountTotal, selectOrderHasDiscount, selectOrderTaxTotal, } = getDaffOrderSelectors();
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
    getOrder$(orderId) {
        return this.store.pipe(select(this._order, { id: orderId }));
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getTotals$(orderId) {
        return this.store.pipe(select(this._totals, { id: orderId }));
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getAppliedCodes$(orderId) {
        return this.store.pipe(select(this._appliedCodes, { id: orderId }));
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getItems$(orderId) {
        return this.store.pipe(select(this._items, { id: orderId }));
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getBillingAddresses$(orderId) {
        return this.store.pipe(select(this._billingAddresses, { id: orderId }));
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getShippingAddresses$(orderId) {
        return this.store.pipe(select(this._shippingAddresses, { id: orderId }));
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getShipments$(orderId) {
        return this.store.pipe(select(this._shipments, { id: orderId }));
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getPayment$(orderId) {
        return this.store.pipe(select(this._payment, { id: orderId }));
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getInvoices$(orderId) {
        return this.store.pipe(select(this._invoices, { id: orderId }));
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getCredits$(orderId) {
        return this.store.pipe(select(this._credits, { id: orderId }));
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getGrandTotal$(orderId) {
        return this.store.pipe(select(this._grandTotal, { id: orderId }));
    }
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    getSubtotal$(orderId) {
        return this.store.pipe(select(this._subtotal, { id: orderId }));
    }
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    getShippingTotal$(orderId) {
        return this.store.pipe(select(this._shipping, { id: orderId }));
    }
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    getDiscountTotal$(orderId) {
        return this.store.pipe(select(this._discount, { id: orderId }));
    }
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    hasDiscount$(orderId) {
        return this.store.pipe(select(this._hasDiscount, { id: orderId }));
    }
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    getTaxTotal$(orderId) {
        return this.store.pipe(select(this._tax, { id: orderId }));
    }
    ;
    /**
     * @param {?} action
     * @return {?}
     */
    dispatch(action) {
        this.store.dispatch(action);
    }
}
DaffOrderFacade.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffOrderFacade.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ DaffOrderFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffOrderFacade_Factory() { return new DaffOrderFacade(i0.ɵɵinject(i1.Store)); }, token: DaffOrderFacade, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuZmFjYWRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL29yZGVyL3N0YXRlLyIsInNvdXJjZXMiOlsiZmFjYWRlcy9vcmRlci9vcmRlci5mYWNhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFNcEQsT0FBTyxFQUNMLHFCQUFxQixFQUN0QixNQUFNLDRCQUE0QixDQUFDOzs7Ozs7QUFPcEMsTUFBTSxPQUFPLGVBQWU7Ozs7SUE2QjFCLFlBQW9CLEtBQXVDO1FBQXZDLFVBQUssR0FBTCxLQUFLLENBQWtDO2NBQ25ELEVBQ0osY0FBYyxFQUNkLG1CQUFtQixFQUNuQixlQUFlLEVBQ2YsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixpQkFBaUIsRUFFakIsaUJBQWlCLEVBQ2pCLG9CQUFvQixFQUVwQixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2pCLHVCQUF1QixFQUN2QixnQkFBZ0IsRUFDaEIsMkJBQTJCLEVBQzNCLGlDQUFpQyxFQUNqQyxvQkFBb0IsRUFDcEIsa0JBQWtCLEVBQ2xCLG1CQUFtQixFQUNuQixrQkFBa0IsRUFFbEIscUJBQXFCLEVBQ3JCLG1CQUFtQixFQUNuQix3QkFBd0IsRUFDeEIsd0JBQXdCLEVBQ3hCLHNCQUFzQixFQUN0QixtQkFBbUIsR0FDcEIsR0FBRyxxQkFBcUIsRUFBSztRQUU5QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1FBRTFELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFB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QyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUF6SkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBZGdCLEtBQUs7Ozs7O0lBZ0JwQixtQ0FBOEI7O0lBQzlCLGtDQUE4Qjs7SUFFOUIsa0NBQXlCOztJQUN6QixvQ0FBMkM7O0lBQzNDLHNDQUFnQzs7SUFDaEMseUNBQTBDOztJQUUxQyx1Q0FBNEI7O0lBQzVCLDBDQUFxQzs7SUFFckMsaUNBQW1EOztJQUNuRCxrQ0FBMEQ7O0lBQzFELHdDQUFzRTs7SUFDdEUsaUNBQXdEOztJQUN4RCw0Q0FBOEU7O0lBQzlFLDZDQUFxRjs7SUFDckYscUNBQWdFOztJQUNoRSxtQ0FBNEQ7O0lBQzVELG9DQUE4RDs7SUFDOUQsbUNBQTREOztJQUM1RCxzQ0FBa0U7O0lBQ2xFLG9DQUE4RDs7SUFDOUQsb0NBQW1FOztJQUNuRSxvQ0FBbUU7O0lBQ25FLHVDQUFvRTs7SUFDcEUsK0JBQXlEOzs7OztJQUU3QyxnQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBY3Rpb24sIFN0b3JlLCBzZWxlY3QgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBEaWN0aW9uYXJ5IH0gZnJvbSAnQG5ncngvZW50aXR5JztcblxuaW1wb3J0IHsgRGFmZk9yZGVyLCBEYWZmT3JkZXJUb3RhbCB9IGZyb20gJ0BkYWZmb2RpbC9vcmRlcic7XG5cbmltcG9ydCB7IERhZmZPcmRlclJlZHVjZXJzU3RhdGUgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9wdWJsaWNfYXBpJztcbmltcG9ydCB7XG4gIGdldERhZmZPcmRlclNlbGVjdG9yc1xufSBmcm9tICcuLi8uLi9zZWxlY3RvcnMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyBEYWZmT3JkZXJGYWNhZGVJbnRlcmZhY2UgfSBmcm9tICcuL29yZGVyLWZhY2FkZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGFmZk9yZGVyRW50aXR5U2VsZWN0b3JzIH0gZnJvbSAnLi4vLi4vc2VsZWN0b3JzL29yZGVyLWVudGl0aWVzLnNlbGVjdG9yJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk9yZGVyRmFjYWRlPFQgZXh0ZW5kcyBEYWZmT3JkZXIgPSBEYWZmT3JkZXI+IGltcGxlbWVudHMgRGFmZk9yZGVyRmFjYWRlSW50ZXJmYWNlPFQ+IHtcbiAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGVycm9ycyQ6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuXG4gIG9yZGVycyQ6IE9ic2VydmFibGU8VFtdPjtcbiAgb3JkZXJJZHMkOiBPYnNlcnZhYmxlPChzdHJpbmcgfCBudW1iZXIpW10+O1xuICBvcmRlckNvdW50JDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuICBvcmRlckVudGl0aWVzJDogT2JzZXJ2YWJsZTxEaWN0aW9uYXJ5PFQ+PjtcblxuICBwbGFjZWRPcmRlciQ6IE9ic2VydmFibGU8VD47XG4gIGhhc1BsYWNlZE9yZGVyJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICBfb3JkZXI6IERhZmZPcmRlckVudGl0eVNlbGVjdG9yczxUPlsnc2VsZWN0T3JkZXInXTtcbiAgX3RvdGFsczogRGFmZk9yZGVyRW50aXR5U2VsZWN0b3JzPFQ+WydzZWxlY3RPcmRlclRvdGFscyddO1xuICBfYXBwbGllZENvZGVzOiBEYWZmT3JkZXJFbnRpdHlTZWxlY3RvcnM8VD5bJ3NlbGVjdE9yZGVyQXBwbGllZENvZGVzJ107XG4gIF9pdGVtczogRGFmZk9yZGVyRW50aXR5U2VsZWN0b3JzPFQ+WydzZWxlY3RPcmRlckl0ZW1zJ107XG4gIF9iaWxsaW5nQWRkcmVzc2VzOiBEYWZmT3JkZXJFbnRpdHlTZWxlY3RvcnM8VD5bJ3NlbGVjdE9yZGVyQmlsbGluZ0FkZHJlc3NlcyddO1xuICBfc2hpcHBpbmdBZGRyZXNzZXM6IERhZmZPcmRlckVudGl0eVNlbGVjdG9yczxUPlsnc2VsZWN0T3JkZXJTaGlwcGluZ1RvdGFsQWRkcmVzc2VzJ107XG4gIF9zaGlwbWVudHM6IERhZmZPcmRlckVudGl0eVNlbGVjdG9yczxUPlsnc2VsZWN0T3JkZXJTaGlwbWVudHMnXTtcbiAgX3BheW1lbnQ6IERhZmZPcmRlckVudGl0eVNlbGVjdG9yczxUPlsnc2VsZWN0T3JkZXJQYXltZW50J107XG4gIF9pbnZvaWNlczogRGFmZk9yZGVyRW50aXR5U2VsZWN0b3JzPFQ+WydzZWxlY3RPcmRlckludm9pY2VzJ107XG4gIF9jcmVkaXRzOiBEYWZmT3JkZXJFbnRpdHlTZWxlY3RvcnM8VD5bJ3NlbGVjdE9yZGVyQ3JlZGl0cyddO1xuICBfZ3JhbmRUb3RhbDogRGFmZk9yZGVyRW50aXR5U2VsZWN0b3JzPFQ+WydzZWxlY3RPcmRlckdyYW5kVG90YWwnXTtcbiAgX3N1YnRvdGFsOiBEYWZmT3JkZXJFbnRpdHlTZWxlY3RvcnM8VD5bJ3NlbGVjdE9yZGVyU3VidG90YWwnXTtcbiAgX3NoaXBwaW5nOiBEYWZmT3JkZXJFbnRpdHlTZWxlY3RvcnM8VD5bJ3NlbGVjdE9yZGVyU2hpcHBpbmdUb3RhbCddO1xuICBfZGlzY291bnQ6IERhZmZPcmRlckVudGl0eVNlbGVjdG9yczxUPlsnc2VsZWN0T3JkZXJEaXNjb3VudFRvdGFsJ107XG4gIF9oYXNEaXNjb3VudDogRGFmZk9yZGVyRW50aXR5U2VsZWN0b3JzPFQ+WydzZWxlY3RPcmRlckhhc0Rpc2NvdW50J107XG4gIF90YXg6IERhZmZPcmRlckVudGl0eVNlbGVjdG9yczxUPlsnc2VsZWN0T3JkZXJUYXhUb3RhbCddO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPERhZmZPcmRlclJlZHVjZXJzU3RhdGU8VD4+KSB7XG4gICAgY29uc3Qge1xuICAgICAgc2VsZWN0T3JkZXJJZHMsXG4gICAgICBzZWxlY3RPcmRlckVudGl0aWVzLFxuICAgICAgc2VsZWN0QWxsT3JkZXJzLFxuICAgICAgc2VsZWN0T3JkZXJUb3RhbCxcbiAgICAgIHNlbGVjdE9yZGVyTG9hZGluZyxcbiAgICAgIHNlbGVjdE9yZGVyRXJyb3JzLFxuXG4gICAgICBzZWxlY3RQbGFjZWRPcmRlcixcbiAgICAgIHNlbGVjdEhhc1BsYWNlZE9yZGVyLFxuXG4gICAgICBzZWxlY3RPcmRlcixcbiAgICAgIHNlbGVjdE9yZGVyVG90YWxzLFxuICAgICAgc2VsZWN0T3JkZXJBcHBsaWVkQ29kZXMsXG4gICAgICBzZWxlY3RPcmRlckl0ZW1zLFxuICAgICAgc2VsZWN0T3JkZXJCaWxsaW5nQWRkcmVzc2VzLFxuICAgICAgc2VsZWN0T3JkZXJTaGlwcGluZ1RvdGFsQWRkcmVzc2VzLFxuICAgICAgc2VsZWN0T3JkZXJTaGlwbWVudHMsXG4gICAgICBzZWxlY3RPcmRlclBheW1lbnQsXG4gICAgICBzZWxlY3RPcmRlckludm9pY2VzLFxuICAgICAgc2VsZWN0T3JkZXJDcmVkaXRzLFxuXG4gICAgICBzZWxlY3RPcmRlckdyYW5kVG90YWwsXG4gICAgICBzZWxlY3RPcmRlclN1YnRvdGFsLFxuICAgICAgc2VsZWN0T3JkZXJTaGlwcGluZ1RvdGFsLFxuICAgICAgc2VsZWN0T3JkZXJEaXNjb3VudFRvdGFsLFxuICAgICAgc2VsZWN0T3JkZXJIYXNEaXNjb3VudCxcbiAgICAgIHNlbGVjdE9yZGVyVGF4VG90YWwsXG4gICAgfSA9IGdldERhZmZPcmRlclNlbGVjdG9yczxUPigpO1xuXG4gICAgdGhpcy5sb2FkaW5nJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0T3JkZXJMb2FkaW5nKSk7XG4gICAgdGhpcy5lcnJvcnMkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RPcmRlckVycm9ycykpO1xuXG4gICAgdGhpcy5vcmRlcnMkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RBbGxPcmRlcnMpKTtcbiAgICB0aGlzLm9yZGVySWRzJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0T3JkZXJJZHMpKTtcbiAgICB0aGlzLm9yZGVyQ291bnQkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RPcmRlclRvdGFsKSk7XG4gICAgdGhpcy5vcmRlckVudGl0aWVzJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0T3JkZXJFbnRpdGllcykpO1xuXG4gICAgdGhpcy5wbGFjZWRPcmRlciQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdFBsYWNlZE9yZGVyKSk7XG4gICAgdGhpcy5oYXNQbGFjZWRPcmRlciQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdEhhc1BsYWNlZE9yZGVyKSk7XG5cbiAgICB0aGlzLl9vcmRlciA9IHNlbGVjdE9yZGVyO1xuICAgIHRoaXMuX3RvdGFscyA9IHNlbGVjdE9yZGVyVG90YWxzO1xuICAgIHRoaXMuX2FwcGxpZWRDb2RlcyA9IHNlbGVjdE9yZGVyQXBwbGllZENvZGVzO1xuICAgIHRoaXMuX2l0ZW1zID0gc2VsZWN0T3JkZXJJdGVtcztcbiAgICB0aGlzLl9iaWxsaW5nQWRkcmVzc2VzID0gc2VsZWN0T3JkZXJCaWxsaW5nQWRkcmVzc2VzO1xuICAgIHRoaXMuX3NoaXBwaW5nQWRkcmVzc2VzID0gc2VsZWN0T3JkZXJTaGlwcGluZ1RvdGFsQWRkcmVzc2VzO1xuICAgIHRoaXMuX3NoaXBtZW50cyA9IHNlbGVjdE9yZGVyU2hpcG1lbnRzO1xuICAgIHRoaXMuX3BheW1lbnQgPSBzZWxlY3RPcmRlclBheW1lbnQ7XG4gICAgdGhpcy5faW52b2ljZXMgPSBzZWxlY3RPcmRlckludm9pY2VzO1xuICAgIHRoaXMuX2NyZWRpdHMgPSBzZWxlY3RPcmRlckNyZWRpdHM7XG4gICAgdGhpcy5fZ3JhbmRUb3RhbCA9IHNlbGVjdE9yZGVyR3JhbmRUb3RhbDtcbiAgICB0aGlzLl9zdWJ0b3RhbCA9IHNlbGVjdE9yZGVyU3VidG90YWw7XG4gICAgdGhpcy5fc2hpcHBpbmcgPSBzZWxlY3RPcmRlclNoaXBwaW5nVG90YWw7XG4gICAgdGhpcy5fZGlzY291bnQgPSBzZWxlY3RPcmRlckRpc2NvdW50VG90YWw7XG4gICAgdGhpcy5faGFzRGlzY291bnQgPSBzZWxlY3RPcmRlckhhc0Rpc2NvdW50O1xuICAgIHRoaXMuX3RheCA9IHNlbGVjdE9yZGVyVGF4VG90YWw7XG4gIH1cblxuICBnZXRPcmRlciQob3JkZXJJZDogVFsnaWQnXSk6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuX29yZGVyLCB7aWQ6IG9yZGVySWR9KSlcbiAgfVxuXG4gIGdldFRvdGFscyQob3JkZXJJZDogVFsnaWQnXSk6IE9ic2VydmFibGU8VFsndG90YWxzJ10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLl90b3RhbHMsIHtpZDogb3JkZXJJZH0pKVxuICB9XG5cbiAgZ2V0QXBwbGllZENvZGVzJChvcmRlcklkOiBUWydpZCddKTogT2JzZXJ2YWJsZTxUWydhcHBsaWVkX2NvZGVzJ10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLl9hcHBsaWVkQ29kZXMsIHtpZDogb3JkZXJJZH0pKVxuICB9XG5cbiAgZ2V0SXRlbXMkKG9yZGVySWQ6IFRbJ2lkJ10pOiBPYnNlcnZhYmxlPFRbJ2l0ZW1zJ10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLl9pdGVtcywge2lkOiBvcmRlcklkfSkpXG4gIH1cblxuICBnZXRCaWxsaW5nQWRkcmVzc2VzJChvcmRlcklkOiBUWydpZCddKTogT2JzZXJ2YWJsZTxUWydiaWxsaW5nX2FkZHJlc3NlcyddPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5fYmlsbGluZ0FkZHJlc3Nlcywge2lkOiBvcmRlcklkfSkpXG4gIH1cblxuICBnZXRTaGlwcGluZ0FkZHJlc3NlcyQob3JkZXJJZDogVFsnaWQnXSk6IE9ic2VydmFibGU8VFsnc2hpcHBpbmdfYWRkcmVzc2VzJ10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLl9zaGlwcGluZ0FkZHJlc3Nlcywge2lkOiBvcmRlcklkfSkpXG4gIH1cblxuICBnZXRTaGlwbWVudHMkKG9yZGVySWQ6IFRbJ2lkJ10pOiBPYnNlcnZhYmxlPFRbJ3NoaXBtZW50cyddPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5fc2hpcG1lbnRzLCB7aWQ6IG9yZGVySWR9KSlcbiAgfVxuXG4gIGdldFBheW1lbnQkKG9yZGVySWQ6IFRbJ2lkJ10pOiBPYnNlcnZhYmxlPFRbJ3BheW1lbnQnXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuX3BheW1lbnQsIHtpZDogb3JkZXJJZH0pKVxuICB9XG5cbiAgZ2V0SW52b2ljZXMkKG9yZGVySWQ6IFRbJ2lkJ10pOiBPYnNlcnZhYmxlPFRbJ2ludm9pY2VzJ10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLl9pbnZvaWNlcywge2lkOiBvcmRlcklkfSkpXG4gIH1cblxuICBnZXRDcmVkaXRzJChvcmRlcklkOiBUWydpZCddKTogT2JzZXJ2YWJsZTxUWydjcmVkaXRzJ10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLl9jcmVkaXRzLCB7aWQ6IG9yZGVySWR9KSlcbiAgfVxuXG4gIGdldEdyYW5kVG90YWwkKG9yZGVySWQ6IFRbJ2lkJ10pOiBPYnNlcnZhYmxlPERhZmZPcmRlclRvdGFsPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5fZ3JhbmRUb3RhbCwge2lkOiBvcmRlcklkfSkpXG4gIH07XG4gIGdldFN1YnRvdGFsJChvcmRlcklkOiBUWydpZCddKTogT2JzZXJ2YWJsZTxEYWZmT3JkZXJUb3RhbD4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuX3N1YnRvdGFsLCB7aWQ6IG9yZGVySWR9KSlcbiAgfTtcbiAgZ2V0U2hpcHBpbmdUb3RhbCQob3JkZXJJZDogVFsnaWQnXSk6IE9ic2VydmFibGU8RGFmZk9yZGVyVG90YWw+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLl9zaGlwcGluZywge2lkOiBvcmRlcklkfSkpXG4gIH07XG4gIGdldERpc2NvdW50VG90YWwkKG9yZGVySWQ6IFRbJ2lkJ10pOiBPYnNlcnZhYmxlPERhZmZPcmRlclRvdGFsPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5fZGlzY291bnQsIHtpZDogb3JkZXJJZH0pKVxuICB9O1xuICBoYXNEaXNjb3VudCQob3JkZXJJZDogVFsnaWQnXSk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuX2hhc0Rpc2NvdW50LCB7aWQ6IG9yZGVySWR9KSlcbiAgfTtcbiAgZ2V0VGF4VG90YWwkKG9yZGVySWQ6IFRbJ2lkJ10pOiBPYnNlcnZhYmxlPERhZmZPcmRlclRvdGFsPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5fdGF4LCB7aWQ6IG9yZGVySWR9KSlcbiAgfTtcblxuICBkaXNwYXRjaChhY3Rpb246IEFjdGlvbikge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcbiAgfVxufVxuIl19