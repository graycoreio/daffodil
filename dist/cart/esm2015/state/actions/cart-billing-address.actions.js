/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffCartBillingAddressActionTypes = {
    CartBillingAddressLoadAction: '[DaffCart] Billing Address Load Action',
    CartBillingAddressLoadSuccessAction: '[DaffCart] Billing Address Load Success Action',
    CartBillingAddressLoadFailureAction: '[DaffCart] Billing Address Load Failure Action',
    CartBillingAddressUpdateAction: '[DaffCart] Billing Address Update Action',
    CartBillingAddressUpdateSuccessAction: '[DaffCart] Billing Address Update Success Action',
    CartBillingAddressUpdateFailureAction: '[DaffCart] Billing Address Update Failure Action',
};
export { DaffCartBillingAddressActionTypes };
export class DaffCartBillingAddressLoad {
    constructor() {
        this.type = DaffCartBillingAddressActionTypes.CartBillingAddressLoadAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartBillingAddressLoad.prototype.type;
}
/**
 * @template T
 */
export class DaffCartBillingAddressLoadSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartBillingAddressActionTypes.CartBillingAddressLoadSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartBillingAddressLoadSuccess.prototype.type;
    /** @type {?} */
    DaffCartBillingAddressLoadSuccess.prototype.payload;
}
export class DaffCartBillingAddressLoadFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartBillingAddressActionTypes.CartBillingAddressLoadFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartBillingAddressLoadFailure.prototype.type;
    /** @type {?} */
    DaffCartBillingAddressLoadFailure.prototype.payload;
}
/**
 * @template T
 */
export class DaffCartBillingAddressUpdate {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartBillingAddressActionTypes.CartBillingAddressUpdateAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartBillingAddressUpdate.prototype.type;
    /** @type {?} */
    DaffCartBillingAddressUpdate.prototype.payload;
}
/**
 * @template T
 */
export class DaffCartBillingAddressUpdateSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartBillingAddressActionTypes.CartBillingAddressUpdateSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartBillingAddressUpdateSuccess.prototype.type;
    /** @type {?} */
    DaffCartBillingAddressUpdateSuccess.prototype.payload;
}
export class DaffCartBillingAddressUpdateFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartBillingAddressActionTypes.CartBillingAddressUpdateFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartBillingAddressUpdateFailure.prototype.type;
    /** @type {?} */
    DaffCartBillingAddressUpdateFailure.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1iaWxsaW5nLWFkZHJlc3MuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L3N0YXRlLyIsInNvdXJjZXMiOlsiYWN0aW9ucy9jYXJ0LWJpbGxpbmctYWRkcmVzcy5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQU1FLDhCQUErQix3Q0FBd0M7SUFDdkUscUNBQXNDLGdEQUFnRDtJQUN0RixxQ0FBc0MsZ0RBQWdEO0lBQ3RGLGdDQUFpQywwQ0FBMEM7SUFDM0UsdUNBQXdDLGtEQUFrRDtJQUMxRix1Q0FBd0Msa0RBQWtEOzs7QUFHNUYsTUFBTSxPQUFPLDBCQUEwQjtJQUF2QztRQUNXLFNBQUksR0FBRyxpQ0FBaUMsQ0FBQyw0QkFBNEIsQ0FBQztJQUNqRixDQUFDO0NBQUE7OztJQURDLDBDQUErRTs7Ozs7QUFHakYsTUFBTSxPQUFPLGlDQUFpQzs7OztJQUc1QyxZQUFtQixPQUFVO1FBQVYsWUFBTyxHQUFQLE9BQU8sQ0FBRztRQUZwQixTQUFJLEdBQUcsaUNBQWlDLENBQUMsbUNBQW1DLENBQUM7SUFFdEQsQ0FBQztDQUNsQzs7O0lBSEMsaURBQXNGOztJQUUxRSxvREFBaUI7O0FBRy9CLE1BQU0sT0FBTyxpQ0FBaUM7Ozs7SUFHNUMsWUFBbUIsT0FBdUI7UUFBdkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFGakMsU0FBSSxHQUFHLGlDQUFpQyxDQUFDLG1DQUFtQyxDQUFDO0lBRXpDLENBQUM7Q0FDL0M7OztJQUhDLGlEQUFzRjs7SUFFMUUsb0RBQThCOzs7OztBQUc1QyxNQUFNLE9BQU8sNEJBQTRCOzs7O0lBR3ZDLFlBQW1CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFGN0IsU0FBSSxHQUFHLGlDQUFpQyxDQUFDLDhCQUE4QixDQUFDO0lBRXhDLENBQUM7Q0FDM0M7OztJQUhDLDRDQUFpRjs7SUFFckUsK0NBQTBCOzs7OztBQUd4QyxNQUFNLE9BQU8sbUNBQW1DOzs7O0lBRzlDLFlBQW1CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFGN0IsU0FBSSxHQUFHLGlDQUFpQyxDQUFDLHFDQUFxQyxDQUFDO0lBRS9DLENBQUM7Q0FDM0M7OztJQUhDLG1EQUF3Rjs7SUFFNUUsc0RBQTBCOztBQUd4QyxNQUFNLE9BQU8sbUNBQW1DOzs7O0lBRzlDLFlBQW1CLE9BQXVCO1FBQXZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBRmpDLFNBQUksR0FBRyxpQ0FBaUMsQ0FBQyxxQ0FBcUMsQ0FBQztJQUUzQyxDQUFDO0NBQy9DOzs7SUFIQyxtREFBd0Y7O0lBRTVFLHNEQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgRGFmZlN0YXRlRXJyb3IgfSBmcm9tICdAZGFmZm9kaWwvY29yZS9zdGF0ZSc7XG5pbXBvcnQgeyBEYWZmQ2FydEFkZHJlc3MsIERhZmZDYXJ0IH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuXG5leHBvcnQgZW51bSBEYWZmQ2FydEJpbGxpbmdBZGRyZXNzQWN0aW9uVHlwZXMge1xuICBDYXJ0QmlsbGluZ0FkZHJlc3NMb2FkQWN0aW9uID0gJ1tEYWZmQ2FydF0gQmlsbGluZyBBZGRyZXNzIExvYWQgQWN0aW9uJyxcbiAgQ2FydEJpbGxpbmdBZGRyZXNzTG9hZFN1Y2Nlc3NBY3Rpb24gPSAnW0RhZmZDYXJ0XSBCaWxsaW5nIEFkZHJlc3MgTG9hZCBTdWNjZXNzIEFjdGlvbicsXG4gIENhcnRCaWxsaW5nQWRkcmVzc0xvYWRGYWlsdXJlQWN0aW9uID0gJ1tEYWZmQ2FydF0gQmlsbGluZyBBZGRyZXNzIExvYWQgRmFpbHVyZSBBY3Rpb24nLFxuICBDYXJ0QmlsbGluZ0FkZHJlc3NVcGRhdGVBY3Rpb24gPSAnW0RhZmZDYXJ0XSBCaWxsaW5nIEFkZHJlc3MgVXBkYXRlIEFjdGlvbicsXG4gIENhcnRCaWxsaW5nQWRkcmVzc1VwZGF0ZVN1Y2Nlc3NBY3Rpb24gPSAnW0RhZmZDYXJ0XSBCaWxsaW5nIEFkZHJlc3MgVXBkYXRlIFN1Y2Nlc3MgQWN0aW9uJyxcbiAgQ2FydEJpbGxpbmdBZGRyZXNzVXBkYXRlRmFpbHVyZUFjdGlvbiA9ICdbRGFmZkNhcnRdIEJpbGxpbmcgQWRkcmVzcyBVcGRhdGUgRmFpbHVyZSBBY3Rpb24nLFxufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRCaWxsaW5nQWRkcmVzc0xvYWQgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRCaWxsaW5nQWRkcmVzc0FjdGlvblR5cGVzLkNhcnRCaWxsaW5nQWRkcmVzc0xvYWRBY3Rpb247XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydEJpbGxpbmdBZGRyZXNzTG9hZFN1Y2Nlc3M8VCBleHRlbmRzIERhZmZDYXJ0QWRkcmVzcz4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRCaWxsaW5nQWRkcmVzc0FjdGlvblR5cGVzLkNhcnRCaWxsaW5nQWRkcmVzc0xvYWRTdWNjZXNzQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBUKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRCaWxsaW5nQWRkcmVzc0xvYWRGYWlsdXJlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0QmlsbGluZ0FkZHJlc3NBY3Rpb25UeXBlcy5DYXJ0QmlsbGluZ0FkZHJlc3NMb2FkRmFpbHVyZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRGFmZlN0YXRlRXJyb3IpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydEJpbGxpbmdBZGRyZXNzVXBkYXRlPFQgZXh0ZW5kcyBEYWZmQ2FydEFkZHJlc3MgPSBEYWZmQ2FydEFkZHJlc3M+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0QmlsbGluZ0FkZHJlc3NBY3Rpb25UeXBlcy5DYXJ0QmlsbGluZ0FkZHJlc3NVcGRhdGVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBhcnRpYWw8VD4pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydEJpbGxpbmdBZGRyZXNzVXBkYXRlU3VjY2VzczxUIGV4dGVuZHMgRGFmZkNhcnQgPSBEYWZmQ2FydD4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRCaWxsaW5nQWRkcmVzc0FjdGlvblR5cGVzLkNhcnRCaWxsaW5nQWRkcmVzc1VwZGF0ZVN1Y2Nlc3NBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBhcnRpYWw8VD4pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydEJpbGxpbmdBZGRyZXNzVXBkYXRlRmFpbHVyZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydEJpbGxpbmdBZGRyZXNzQWN0aW9uVHlwZXMuQ2FydEJpbGxpbmdBZGRyZXNzVXBkYXRlRmFpbHVyZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRGFmZlN0YXRlRXJyb3IpIHt9XG59XG5cbmV4cG9ydCB0eXBlIERhZmZDYXJ0QmlsbGluZ0FkZHJlc3NBY3Rpb25zPFxuICBUIGV4dGVuZHMgRGFmZkNhcnRBZGRyZXNzID0gRGFmZkNhcnRBZGRyZXNzLFxuICBWIGV4dGVuZHMgRGFmZkNhcnQgPSBEYWZmQ2FydFxuPiA9XG4gIHwgRGFmZkNhcnRCaWxsaW5nQWRkcmVzc0xvYWRcbiAgfCBEYWZmQ2FydEJpbGxpbmdBZGRyZXNzTG9hZFN1Y2Nlc3M8VD5cbiAgfCBEYWZmQ2FydEJpbGxpbmdBZGRyZXNzTG9hZEZhaWx1cmVcbiAgfCBEYWZmQ2FydEJpbGxpbmdBZGRyZXNzVXBkYXRlPFQ+XG4gIHwgRGFmZkNhcnRCaWxsaW5nQWRkcmVzc1VwZGF0ZVN1Y2Nlc3M8Vj5cbiAgfCBEYWZmQ2FydEJpbGxpbmdBZGRyZXNzVXBkYXRlRmFpbHVyZVxuIl19