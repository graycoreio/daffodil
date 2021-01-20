/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffBillingActionTypes = {
    UpdateBillingAddressAction: '[Billing] Update Billing Address Action',
    UpdatePaymentInfoAction: '[Billing] Update Payment Info Action',
    ToggleBillingAddressIsShippingAddressAction: '[Billing] Billing Address Is Shipping Address Action',
};
export { DaffBillingActionTypes };
export class DaffUpdateBillingAddress {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffBillingActionTypes.UpdateBillingAddressAction;
    }
}
if (false) {
    /** @type {?} */
    DaffUpdateBillingAddress.prototype.type;
    /** @type {?} */
    DaffUpdateBillingAddress.prototype.payload;
}
export class DaffUpdatePaymentInfo {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffBillingActionTypes.UpdatePaymentInfoAction;
    }
}
if (false) {
    /** @type {?} */
    DaffUpdatePaymentInfo.prototype.type;
    /** @type {?} */
    DaffUpdatePaymentInfo.prototype.payload;
}
export class DaffToggleBillingAddressIsShippingAddress {
    constructor() {
        this.type = DaffBillingActionTypes.ToggleBillingAddressIsShippingAddressAction;
    }
}
if (false) {
    /** @type {?} */
    DaffToggleBillingAddressIsShippingAddress.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbGluZy5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NoZWNrb3V0LyIsInNvdXJjZXMiOlsiYmlsbGluZy9hY3Rpb25zL2JpbGxpbmcuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFPRSw0QkFBNkIseUNBQXlDO0lBQ3RFLHlCQUEwQixzQ0FBc0M7SUFDaEUsNkNBQThDLHNEQUFzRDs7O0FBR3RHLE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUFHbkMsWUFBbUIsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUY5QixTQUFJLEdBQUcsc0JBQXNCLENBQUMsMEJBQTBCLENBQUM7SUFFeEIsQ0FBQztDQUM1Qzs7O0lBSEMsd0NBQWtFOztJQUV0RCwyQ0FBMkI7O0FBR3pDLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFHaEMsWUFBbUIsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUY5QixTQUFJLEdBQUcsc0JBQXNCLENBQUMsdUJBQXVCLENBQUM7SUFFckIsQ0FBQztDQUM1Qzs7O0lBSEMscUNBQStEOztJQUVuRCx3Q0FBMkI7O0FBR3pDLE1BQU0sT0FBTyx5Q0FBeUM7SUFBdEQ7UUFDVyxTQUFJLEdBQUcsc0JBQXNCLENBQUMsMkNBQTJDLENBQUM7SUFDckYsQ0FBQztDQUFBOzs7SUFEQyx5REFBbUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IERhZmZBZGRyZXNzIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUnO1xuXG5pbXBvcnQgeyBQYXltZW50SW5mbyB9IGZyb20gJy4uLy4uL21vZGVscy9wYXltZW50L3BheW1lbnQtaW5mbyc7XG5cbmV4cG9ydCBlbnVtIERhZmZCaWxsaW5nQWN0aW9uVHlwZXMge1xuICBVcGRhdGVCaWxsaW5nQWRkcmVzc0FjdGlvbiA9ICdbQmlsbGluZ10gVXBkYXRlIEJpbGxpbmcgQWRkcmVzcyBBY3Rpb24nLFxuICBVcGRhdGVQYXltZW50SW5mb0FjdGlvbiA9ICdbQmlsbGluZ10gVXBkYXRlIFBheW1lbnQgSW5mbyBBY3Rpb24nLFxuICBUb2dnbGVCaWxsaW5nQWRkcmVzc0lzU2hpcHBpbmdBZGRyZXNzQWN0aW9uID0gJ1tCaWxsaW5nXSBCaWxsaW5nIEFkZHJlc3MgSXMgU2hpcHBpbmcgQWRkcmVzcyBBY3Rpb24nXG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmVXBkYXRlQmlsbGluZ0FkZHJlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkJpbGxpbmdBY3Rpb25UeXBlcy5VcGRhdGVCaWxsaW5nQWRkcmVzc0FjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRGFmZkFkZHJlc3MpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmVXBkYXRlUGF5bWVudEluZm8gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkJpbGxpbmdBY3Rpb25UeXBlcy5VcGRhdGVQYXltZW50SW5mb0FjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGF5bWVudEluZm8pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmVG9nZ2xlQmlsbGluZ0FkZHJlc3NJc1NoaXBwaW5nQWRkcmVzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQmlsbGluZ0FjdGlvblR5cGVzLlRvZ2dsZUJpbGxpbmdBZGRyZXNzSXNTaGlwcGluZ0FkZHJlc3NBY3Rpb247XG59XG5cbmV4cG9ydCB0eXBlIERhZmZCaWxsaW5nQWN0aW9ucyA9XG4gICAgfCBEYWZmVXBkYXRlQmlsbGluZ0FkZHJlc3NcbiAgICB8IERhZmZVcGRhdGVQYXltZW50SW5mb1xuICAgIHwgRGFmZlRvZ2dsZUJpbGxpbmdBZGRyZXNzSXNTaGlwcGluZ0FkZHJlc3M7XG4iXX0=