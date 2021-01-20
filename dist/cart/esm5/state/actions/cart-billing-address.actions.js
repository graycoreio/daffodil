/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffCartBillingAddressActionTypes = {
    CartBillingAddressLoadAction: '[DaffCart] Billing Address Load Action',
    CartBillingAddressLoadSuccessAction: '[DaffCart] Billing Address Load Success Action',
    CartBillingAddressLoadFailureAction: '[DaffCart] Billing Address Load Failure Action',
    CartBillingAddressUpdateAction: '[DaffCart] Billing Address Update Action',
    CartBillingAddressUpdateSuccessAction: '[DaffCart] Billing Address Update Success Action',
    CartBillingAddressUpdateFailureAction: '[DaffCart] Billing Address Update Failure Action',
};
export { DaffCartBillingAddressActionTypes };
var DaffCartBillingAddressLoad = /** @class */ (function () {
    function DaffCartBillingAddressLoad() {
        this.type = DaffCartBillingAddressActionTypes.CartBillingAddressLoadAction;
    }
    return DaffCartBillingAddressLoad;
}());
export { DaffCartBillingAddressLoad };
if (false) {
    /** @type {?} */
    DaffCartBillingAddressLoad.prototype.type;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffCartBillingAddressLoadSuccess = /** @class */ (function () {
    function DaffCartBillingAddressLoadSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartBillingAddressActionTypes.CartBillingAddressLoadSuccessAction;
    }
    return DaffCartBillingAddressLoadSuccess;
}());
/**
 * @template T
 */
export { DaffCartBillingAddressLoadSuccess };
if (false) {
    /** @type {?} */
    DaffCartBillingAddressLoadSuccess.prototype.type;
    /** @type {?} */
    DaffCartBillingAddressLoadSuccess.prototype.payload;
}
var DaffCartBillingAddressLoadFailure = /** @class */ (function () {
    function DaffCartBillingAddressLoadFailure(payload) {
        this.payload = payload;
        this.type = DaffCartBillingAddressActionTypes.CartBillingAddressLoadFailureAction;
    }
    return DaffCartBillingAddressLoadFailure;
}());
export { DaffCartBillingAddressLoadFailure };
if (false) {
    /** @type {?} */
    DaffCartBillingAddressLoadFailure.prototype.type;
    /** @type {?} */
    DaffCartBillingAddressLoadFailure.prototype.payload;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffCartBillingAddressUpdate = /** @class */ (function () {
    function DaffCartBillingAddressUpdate(payload) {
        this.payload = payload;
        this.type = DaffCartBillingAddressActionTypes.CartBillingAddressUpdateAction;
    }
    return DaffCartBillingAddressUpdate;
}());
/**
 * @template T
 */
export { DaffCartBillingAddressUpdate };
if (false) {
    /** @type {?} */
    DaffCartBillingAddressUpdate.prototype.type;
    /** @type {?} */
    DaffCartBillingAddressUpdate.prototype.payload;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffCartBillingAddressUpdateSuccess = /** @class */ (function () {
    function DaffCartBillingAddressUpdateSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartBillingAddressActionTypes.CartBillingAddressUpdateSuccessAction;
    }
    return DaffCartBillingAddressUpdateSuccess;
}());
/**
 * @template T
 */
export { DaffCartBillingAddressUpdateSuccess };
if (false) {
    /** @type {?} */
    DaffCartBillingAddressUpdateSuccess.prototype.type;
    /** @type {?} */
    DaffCartBillingAddressUpdateSuccess.prototype.payload;
}
var DaffCartBillingAddressUpdateFailure = /** @class */ (function () {
    function DaffCartBillingAddressUpdateFailure(payload) {
        this.payload = payload;
        this.type = DaffCartBillingAddressActionTypes.CartBillingAddressUpdateFailureAction;
    }
    return DaffCartBillingAddressUpdateFailure;
}());
export { DaffCartBillingAddressUpdateFailure };
if (false) {
    /** @type {?} */
    DaffCartBillingAddressUpdateFailure.prototype.type;
    /** @type {?} */
    DaffCartBillingAddressUpdateFailure.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1iaWxsaW5nLWFkZHJlc3MuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L3N0YXRlLyIsInNvdXJjZXMiOlsiYWN0aW9ucy9jYXJ0LWJpbGxpbmctYWRkcmVzcy5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQU1FLDhCQUErQix3Q0FBd0M7SUFDdkUscUNBQXNDLGdEQUFnRDtJQUN0RixxQ0FBc0MsZ0RBQWdEO0lBQ3RGLGdDQUFpQywwQ0FBMEM7SUFDM0UsdUNBQXdDLGtEQUFrRDtJQUMxRix1Q0FBd0Msa0RBQWtEOzs7QUFHNUY7SUFBQTtRQUNXLFNBQUksR0FBRyxpQ0FBaUMsQ0FBQyw0QkFBNEIsQ0FBQztJQUNqRixDQUFDO0lBQUQsaUNBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7OztJQURDLDBDQUErRTs7Ozs7QUFHakY7Ozs7SUFHRSwyQ0FBbUIsT0FBVTtRQUFWLFlBQU8sR0FBUCxPQUFPLENBQUc7UUFGcEIsU0FBSSxHQUFHLGlDQUFpQyxDQUFDLG1DQUFtQyxDQUFDO0lBRXRELENBQUM7SUFDbkMsd0NBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7Ozs7OztJQUhDLGlEQUFzRjs7SUFFMUUsb0RBQWlCOztBQUcvQjtJQUdFLDJDQUFtQixPQUF1QjtRQUF2QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUZqQyxTQUFJLEdBQUcsaUNBQWlDLENBQUMsbUNBQW1DLENBQUM7SUFFekMsQ0FBQztJQUNoRCx3Q0FBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7O0lBSEMsaURBQXNGOztJQUUxRSxvREFBOEI7Ozs7O0FBRzVDOzs7O0lBR0Usc0NBQW1CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFGN0IsU0FBSSxHQUFHLGlDQUFpQyxDQUFDLDhCQUE4QixDQUFDO0lBRXhDLENBQUM7SUFDNUMsbUNBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7Ozs7OztJQUhDLDRDQUFpRjs7SUFFckUsK0NBQTBCOzs7OztBQUd4Qzs7OztJQUdFLDZDQUFtQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBRjdCLFNBQUksR0FBRyxpQ0FBaUMsQ0FBQyxxQ0FBcUMsQ0FBQztJQUUvQyxDQUFDO0lBQzVDLDBDQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7Ozs7SUFIQyxtREFBd0Y7O0lBRTVFLHNEQUEwQjs7QUFHeEM7SUFHRSw2Q0FBbUIsT0FBdUI7UUFBdkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFGakMsU0FBSSxHQUFHLGlDQUFpQyxDQUFDLHFDQUFxQyxDQUFDO0lBRTNDLENBQUM7SUFDaEQsMENBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7OztJQUhDLG1EQUF3Rjs7SUFFNUUsc0RBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBEYWZmU3RhdGVFcnJvciB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3N0YXRlJztcbmltcG9ydCB7IERhZmZDYXJ0QWRkcmVzcywgRGFmZkNhcnQgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5cbmV4cG9ydCBlbnVtIERhZmZDYXJ0QmlsbGluZ0FkZHJlc3NBY3Rpb25UeXBlcyB7XG4gIENhcnRCaWxsaW5nQWRkcmVzc0xvYWRBY3Rpb24gPSAnW0RhZmZDYXJ0XSBCaWxsaW5nIEFkZHJlc3MgTG9hZCBBY3Rpb24nLFxuICBDYXJ0QmlsbGluZ0FkZHJlc3NMb2FkU3VjY2Vzc0FjdGlvbiA9ICdbRGFmZkNhcnRdIEJpbGxpbmcgQWRkcmVzcyBMb2FkIFN1Y2Nlc3MgQWN0aW9uJyxcbiAgQ2FydEJpbGxpbmdBZGRyZXNzTG9hZEZhaWx1cmVBY3Rpb24gPSAnW0RhZmZDYXJ0XSBCaWxsaW5nIEFkZHJlc3MgTG9hZCBGYWlsdXJlIEFjdGlvbicsXG4gIENhcnRCaWxsaW5nQWRkcmVzc1VwZGF0ZUFjdGlvbiA9ICdbRGFmZkNhcnRdIEJpbGxpbmcgQWRkcmVzcyBVcGRhdGUgQWN0aW9uJyxcbiAgQ2FydEJpbGxpbmdBZGRyZXNzVXBkYXRlU3VjY2Vzc0FjdGlvbiA9ICdbRGFmZkNhcnRdIEJpbGxpbmcgQWRkcmVzcyBVcGRhdGUgU3VjY2VzcyBBY3Rpb24nLFxuICBDYXJ0QmlsbGluZ0FkZHJlc3NVcGRhdGVGYWlsdXJlQWN0aW9uID0gJ1tEYWZmQ2FydF0gQmlsbGluZyBBZGRyZXNzIFVwZGF0ZSBGYWlsdXJlIEFjdGlvbicsXG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydEJpbGxpbmdBZGRyZXNzTG9hZCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydEJpbGxpbmdBZGRyZXNzQWN0aW9uVHlwZXMuQ2FydEJpbGxpbmdBZGRyZXNzTG9hZEFjdGlvbjtcbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0QmlsbGluZ0FkZHJlc3NMb2FkU3VjY2VzczxUIGV4dGVuZHMgRGFmZkNhcnRBZGRyZXNzPiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydEJpbGxpbmdBZGRyZXNzQWN0aW9uVHlwZXMuQ2FydEJpbGxpbmdBZGRyZXNzTG9hZFN1Y2Nlc3NBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFQpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydEJpbGxpbmdBZGRyZXNzTG9hZEZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRCaWxsaW5nQWRkcmVzc0FjdGlvblR5cGVzLkNhcnRCaWxsaW5nQWRkcmVzc0xvYWRGYWlsdXJlQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBEYWZmU3RhdGVFcnJvcikge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0QmlsbGluZ0FkZHJlc3NVcGRhdGU8VCBleHRlbmRzIERhZmZDYXJ0QWRkcmVzcyA9IERhZmZDYXJ0QWRkcmVzcz4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRCaWxsaW5nQWRkcmVzc0FjdGlvblR5cGVzLkNhcnRCaWxsaW5nQWRkcmVzc1VwZGF0ZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFydGlhbDxUPikge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0QmlsbGluZ0FkZHJlc3NVcGRhdGVTdWNjZXNzPFQgZXh0ZW5kcyBEYWZmQ2FydCA9IERhZmZDYXJ0PiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydEJpbGxpbmdBZGRyZXNzQWN0aW9uVHlwZXMuQ2FydEJpbGxpbmdBZGRyZXNzVXBkYXRlU3VjY2Vzc0FjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFydGlhbDxUPikge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0QmlsbGluZ0FkZHJlc3NVcGRhdGVGYWlsdXJlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0QmlsbGluZ0FkZHJlc3NBY3Rpb25UeXBlcy5DYXJ0QmlsbGluZ0FkZHJlc3NVcGRhdGVGYWlsdXJlQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBEYWZmU3RhdGVFcnJvcikge31cbn1cblxuZXhwb3J0IHR5cGUgRGFmZkNhcnRCaWxsaW5nQWRkcmVzc0FjdGlvbnM8XG4gIFQgZXh0ZW5kcyBEYWZmQ2FydEFkZHJlc3MgPSBEYWZmQ2FydEFkZHJlc3MsXG4gIFYgZXh0ZW5kcyBEYWZmQ2FydCA9IERhZmZDYXJ0XG4+ID1cbiAgfCBEYWZmQ2FydEJpbGxpbmdBZGRyZXNzTG9hZFxuICB8IERhZmZDYXJ0QmlsbGluZ0FkZHJlc3NMb2FkU3VjY2VzczxUPlxuICB8IERhZmZDYXJ0QmlsbGluZ0FkZHJlc3NMb2FkRmFpbHVyZVxuICB8IERhZmZDYXJ0QmlsbGluZ0FkZHJlc3NVcGRhdGU8VD5cbiAgfCBEYWZmQ2FydEJpbGxpbmdBZGRyZXNzVXBkYXRlU3VjY2VzczxWPlxuICB8IERhZmZDYXJ0QmlsbGluZ0FkZHJlc3NVcGRhdGVGYWlsdXJlXG4iXX0=