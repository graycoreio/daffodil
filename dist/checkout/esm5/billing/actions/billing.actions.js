/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffBillingActionTypes = {
    UpdateBillingAddressAction: '[Billing] Update Billing Address Action',
    UpdatePaymentInfoAction: '[Billing] Update Payment Info Action',
    ToggleBillingAddressIsShippingAddressAction: '[Billing] Billing Address Is Shipping Address Action',
};
export { DaffBillingActionTypes };
var DaffUpdateBillingAddress = /** @class */ (function () {
    function DaffUpdateBillingAddress(payload) {
        this.payload = payload;
        this.type = DaffBillingActionTypes.UpdateBillingAddressAction;
    }
    return DaffUpdateBillingAddress;
}());
export { DaffUpdateBillingAddress };
if (false) {
    /** @type {?} */
    DaffUpdateBillingAddress.prototype.type;
    /** @type {?} */
    DaffUpdateBillingAddress.prototype.payload;
}
var DaffUpdatePaymentInfo = /** @class */ (function () {
    function DaffUpdatePaymentInfo(payload) {
        this.payload = payload;
        this.type = DaffBillingActionTypes.UpdatePaymentInfoAction;
    }
    return DaffUpdatePaymentInfo;
}());
export { DaffUpdatePaymentInfo };
if (false) {
    /** @type {?} */
    DaffUpdatePaymentInfo.prototype.type;
    /** @type {?} */
    DaffUpdatePaymentInfo.prototype.payload;
}
var DaffToggleBillingAddressIsShippingAddress = /** @class */ (function () {
    function DaffToggleBillingAddressIsShippingAddress() {
        this.type = DaffBillingActionTypes.ToggleBillingAddressIsShippingAddressAction;
    }
    return DaffToggleBillingAddressIsShippingAddress;
}());
export { DaffToggleBillingAddressIsShippingAddress };
if (false) {
    /** @type {?} */
    DaffToggleBillingAddressIsShippingAddress.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbGluZy5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NoZWNrb3V0LyIsInNvdXJjZXMiOlsiYmlsbGluZy9hY3Rpb25zL2JpbGxpbmcuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFPRSw0QkFBNkIseUNBQXlDO0lBQ3RFLHlCQUEwQixzQ0FBc0M7SUFDaEUsNkNBQThDLHNEQUFzRDs7O0FBR3RHO0lBR0Usa0NBQW1CLE9BQW9CO1FBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFGOUIsU0FBSSxHQUFHLHNCQUFzQixDQUFDLDBCQUEwQixDQUFDO0lBRXhCLENBQUM7SUFDN0MsK0JBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7OztJQUhDLHdDQUFrRTs7SUFFdEQsMkNBQTJCOztBQUd6QztJQUdFLCtCQUFtQixPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBRjlCLFNBQUksR0FBRyxzQkFBc0IsQ0FBQyx1QkFBdUIsQ0FBQztJQUVyQixDQUFDO0lBQzdDLDRCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7SUFIQyxxQ0FBK0Q7O0lBRW5ELHdDQUEyQjs7QUFHekM7SUFBQTtRQUNXLFNBQUksR0FBRyxzQkFBc0IsQ0FBQywyQ0FBMkMsQ0FBQztJQUNyRixDQUFDO0lBQUQsZ0RBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7OztJQURDLHlEQUFtRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgRGFmZkFkZHJlc3MgfSBmcm9tICdAZGFmZm9kaWwvY29yZSc7XG5cbmltcG9ydCB7IFBheW1lbnRJbmZvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3BheW1lbnQvcGF5bWVudC1pbmZvJztcblxuZXhwb3J0IGVudW0gRGFmZkJpbGxpbmdBY3Rpb25UeXBlcyB7XG4gIFVwZGF0ZUJpbGxpbmdBZGRyZXNzQWN0aW9uID0gJ1tCaWxsaW5nXSBVcGRhdGUgQmlsbGluZyBBZGRyZXNzIEFjdGlvbicsXG4gIFVwZGF0ZVBheW1lbnRJbmZvQWN0aW9uID0gJ1tCaWxsaW5nXSBVcGRhdGUgUGF5bWVudCBJbmZvIEFjdGlvbicsXG4gIFRvZ2dsZUJpbGxpbmdBZGRyZXNzSXNTaGlwcGluZ0FkZHJlc3NBY3Rpb24gPSAnW0JpbGxpbmddIEJpbGxpbmcgQWRkcmVzcyBJcyBTaGlwcGluZyBBZGRyZXNzIEFjdGlvbidcbn1cblxuZXhwb3J0IGNsYXNzIERhZmZVcGRhdGVCaWxsaW5nQWRkcmVzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQmlsbGluZ0FjdGlvblR5cGVzLlVwZGF0ZUJpbGxpbmdBZGRyZXNzQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBEYWZmQWRkcmVzcykge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZVcGRhdGVQYXltZW50SW5mbyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQmlsbGluZ0FjdGlvblR5cGVzLlVwZGF0ZVBheW1lbnRJbmZvQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQYXltZW50SW5mbykge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZUb2dnbGVCaWxsaW5nQWRkcmVzc0lzU2hpcHBpbmdBZGRyZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZCaWxsaW5nQWN0aW9uVHlwZXMuVG9nZ2xlQmlsbGluZ0FkZHJlc3NJc1NoaXBwaW5nQWRkcmVzc0FjdGlvbjtcbn1cblxuZXhwb3J0IHR5cGUgRGFmZkJpbGxpbmdBY3Rpb25zID1cbiAgICB8IERhZmZVcGRhdGVCaWxsaW5nQWRkcmVzc1xuICAgIHwgRGFmZlVwZGF0ZVBheW1lbnRJbmZvXG4gICAgfCBEYWZmVG9nZ2xlQmlsbGluZ0FkZHJlc3NJc1NoaXBwaW5nQWRkcmVzcztcbiJdfQ==