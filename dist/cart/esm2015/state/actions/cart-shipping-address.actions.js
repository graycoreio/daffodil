/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffCartShippingAddressActionTypes = {
    CartShippingAddressLoadAction: '[DaffCart] Shipping Address Load Action',
    CartShippingAddressLoadSuccessAction: '[DaffCart] Shipping Address Load Success Action',
    CartShippingAddressLoadFailureAction: '[DaffCart] Shipping Address Load Failure Action',
    CartShippingAddressUpdateAction: '[DaffCart] Shipping Address Update Action',
    CartShippingAddressUpdateSuccessAction: '[DaffCart] Shipping Address Update Success Action',
    CartShippingAddressUpdateFailureAction: '[DaffCart] Shipping Address Update Failure Action',
};
export { DaffCartShippingAddressActionTypes };
export class DaffCartShippingAddressLoad {
    constructor() {
        this.type = DaffCartShippingAddressActionTypes.CartShippingAddressLoadAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartShippingAddressLoad.prototype.type;
}
/**
 * @template T
 */
export class DaffCartShippingAddressLoadSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartShippingAddressActionTypes.CartShippingAddressLoadSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartShippingAddressLoadSuccess.prototype.type;
    /** @type {?} */
    DaffCartShippingAddressLoadSuccess.prototype.payload;
}
export class DaffCartShippingAddressLoadFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartShippingAddressActionTypes.CartShippingAddressLoadFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartShippingAddressLoadFailure.prototype.type;
    /** @type {?} */
    DaffCartShippingAddressLoadFailure.prototype.payload;
}
/**
 * @template T
 */
export class DaffCartShippingAddressUpdate {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartShippingAddressActionTypes.CartShippingAddressUpdateAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartShippingAddressUpdate.prototype.type;
    /** @type {?} */
    DaffCartShippingAddressUpdate.prototype.payload;
}
/**
 * @template T
 */
export class DaffCartShippingAddressUpdateSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartShippingAddressActionTypes.CartShippingAddressUpdateSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartShippingAddressUpdateSuccess.prototype.type;
    /** @type {?} */
    DaffCartShippingAddressUpdateSuccess.prototype.payload;
}
export class DaffCartShippingAddressUpdateFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartShippingAddressActionTypes.CartShippingAddressUpdateFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartShippingAddressUpdateFailure.prototype.type;
    /** @type {?} */
    DaffCartShippingAddressUpdateFailure.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGlwcGluZy1hZGRyZXNzLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9zdGF0ZS8iLCJzb3VyY2VzIjpbImFjdGlvbnMvY2FydC1zaGlwcGluZy1hZGRyZXNzLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBTUUsK0JBQWdDLHlDQUF5QztJQUN6RSxzQ0FBdUMsaURBQWlEO0lBQ3hGLHNDQUF1QyxpREFBaUQ7SUFDeEYsaUNBQWtDLDJDQUEyQztJQUM3RSx3Q0FBeUMsbURBQW1EO0lBQzVGLHdDQUF5QyxtREFBbUQ7OztBQUc5RixNQUFNLE9BQU8sMkJBQTJCO0lBQXhDO1FBQ1csU0FBSSxHQUFHLGtDQUFrQyxDQUFDLDZCQUE2QixDQUFDO0lBQ25GLENBQUM7Q0FBQTs7O0lBREMsMkNBQWlGOzs7OztBQUduRixNQUFNLE9BQU8sa0NBQWtDOzs7O0lBRzdDLFlBQW1CLE9BQVU7UUFBVixZQUFPLEdBQVAsT0FBTyxDQUFHO1FBRnBCLFNBQUksR0FBRyxrQ0FBa0MsQ0FBQyxvQ0FBb0MsQ0FBQztJQUV4RCxDQUFDO0NBQ2xDOzs7SUFIQyxrREFBd0Y7O0lBRTVFLHFEQUFpQjs7QUFHL0IsTUFBTSxPQUFPLGtDQUFrQzs7OztJQUc3QyxZQUFtQixPQUF1QjtRQUF2QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUZqQyxTQUFJLEdBQUcsa0NBQWtDLENBQUMsb0NBQW9DLENBQUM7SUFFM0MsQ0FBQztDQUMvQzs7O0lBSEMsa0RBQXdGOztJQUU1RSxxREFBOEI7Ozs7O0FBRzVDLE1BQU0sT0FBTyw2QkFBNkI7Ozs7SUFHeEMsWUFBbUIsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUY3QixTQUFJLEdBQUcsa0NBQWtDLENBQUMsK0JBQStCLENBQUM7SUFFMUMsQ0FBQztDQUMzQzs7O0lBSEMsNkNBQW1GOztJQUV2RSxnREFBMEI7Ozs7O0FBR3hDLE1BQU0sT0FBTyxvQ0FBb0M7Ozs7SUFHL0MsWUFBbUIsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUY3QixTQUFJLEdBQUcsa0NBQWtDLENBQUMsc0NBQXNDLENBQUM7SUFFakQsQ0FBQztDQUMzQzs7O0lBSEMsb0RBQTBGOztJQUU5RSx1REFBMEI7O0FBR3hDLE1BQU0sT0FBTyxvQ0FBb0M7Ozs7SUFHL0MsWUFBbUIsT0FBdUI7UUFBdkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFGakMsU0FBSSxHQUFHLGtDQUFrQyxDQUFDLHNDQUFzQyxDQUFDO0lBRTdDLENBQUM7Q0FDL0M7OztJQUhDLG9EQUEwRjs7SUFFOUUsdURBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBEYWZmU3RhdGVFcnJvciB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3N0YXRlJztcbmltcG9ydCB7IERhZmZDYXJ0QWRkcmVzcywgRGFmZkNhcnQgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5cbmV4cG9ydCBlbnVtIERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzQWN0aW9uVHlwZXMge1xuICBDYXJ0U2hpcHBpbmdBZGRyZXNzTG9hZEFjdGlvbiA9ICdbRGFmZkNhcnRdIFNoaXBwaW5nIEFkZHJlc3MgTG9hZCBBY3Rpb24nLFxuICBDYXJ0U2hpcHBpbmdBZGRyZXNzTG9hZFN1Y2Nlc3NBY3Rpb24gPSAnW0RhZmZDYXJ0XSBTaGlwcGluZyBBZGRyZXNzIExvYWQgU3VjY2VzcyBBY3Rpb24nLFxuICBDYXJ0U2hpcHBpbmdBZGRyZXNzTG9hZEZhaWx1cmVBY3Rpb24gPSAnW0RhZmZDYXJ0XSBTaGlwcGluZyBBZGRyZXNzIExvYWQgRmFpbHVyZSBBY3Rpb24nLFxuICBDYXJ0U2hpcHBpbmdBZGRyZXNzVXBkYXRlQWN0aW9uID0gJ1tEYWZmQ2FydF0gU2hpcHBpbmcgQWRkcmVzcyBVcGRhdGUgQWN0aW9uJyxcbiAgQ2FydFNoaXBwaW5nQWRkcmVzc1VwZGF0ZVN1Y2Nlc3NBY3Rpb24gPSAnW0RhZmZDYXJ0XSBTaGlwcGluZyBBZGRyZXNzIFVwZGF0ZSBTdWNjZXNzIEFjdGlvbicsXG4gIENhcnRTaGlwcGluZ0FkZHJlc3NVcGRhdGVGYWlsdXJlQWN0aW9uID0gJ1tEYWZmQ2FydF0gU2hpcHBpbmcgQWRkcmVzcyBVcGRhdGUgRmFpbHVyZSBBY3Rpb24nLFxufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRTaGlwcGluZ0FkZHJlc3NMb2FkIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzQWN0aW9uVHlwZXMuQ2FydFNoaXBwaW5nQWRkcmVzc0xvYWRBY3Rpb247XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydFNoaXBwaW5nQWRkcmVzc0xvYWRTdWNjZXNzPFQgZXh0ZW5kcyBEYWZmQ2FydEFkZHJlc3MgPSBEYWZmQ2FydEFkZHJlc3M+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzQWN0aW9uVHlwZXMuQ2FydFNoaXBwaW5nQWRkcmVzc0xvYWRTdWNjZXNzQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBUKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRTaGlwcGluZ0FkZHJlc3NMb2FkRmFpbHVyZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydFNoaXBwaW5nQWRkcmVzc0FjdGlvblR5cGVzLkNhcnRTaGlwcGluZ0FkZHJlc3NMb2FkRmFpbHVyZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRGFmZlN0YXRlRXJyb3IpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydFNoaXBwaW5nQWRkcmVzc1VwZGF0ZTxUIGV4dGVuZHMgRGFmZkNhcnRBZGRyZXNzID0gRGFmZkNhcnRBZGRyZXNzPiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydFNoaXBwaW5nQWRkcmVzc0FjdGlvblR5cGVzLkNhcnRTaGlwcGluZ0FkZHJlc3NVcGRhdGVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBhcnRpYWw8VD4pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydFNoaXBwaW5nQWRkcmVzc1VwZGF0ZVN1Y2Nlc3M8VCBleHRlbmRzIERhZmZDYXJ0ID0gRGFmZkNhcnQ+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzQWN0aW9uVHlwZXMuQ2FydFNoaXBwaW5nQWRkcmVzc1VwZGF0ZVN1Y2Nlc3NBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBhcnRpYWw8VD4pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydFNoaXBwaW5nQWRkcmVzc1VwZGF0ZUZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRTaGlwcGluZ0FkZHJlc3NBY3Rpb25UeXBlcy5DYXJ0U2hpcHBpbmdBZGRyZXNzVXBkYXRlRmFpbHVyZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRGFmZlN0YXRlRXJyb3IpIHt9XG59XG5cbmV4cG9ydCB0eXBlIERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzQWN0aW9uczxcbiAgVCBleHRlbmRzIERhZmZDYXJ0QWRkcmVzcyA9IERhZmZDYXJ0QWRkcmVzcyxcbiAgViBleHRlbmRzIERhZmZDYXJ0ID0gRGFmZkNhcnRcbj4gPVxuICB8IERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzTG9hZFxuICB8IERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzTG9hZFN1Y2Nlc3M8VD5cbiAgfCBEYWZmQ2FydFNoaXBwaW5nQWRkcmVzc0xvYWRGYWlsdXJlXG4gIHwgRGFmZkNhcnRTaGlwcGluZ0FkZHJlc3NVcGRhdGU8VD5cbiAgfCBEYWZmQ2FydFNoaXBwaW5nQWRkcmVzc1VwZGF0ZVN1Y2Nlc3M8Vj5cbiAgfCBEYWZmQ2FydFNoaXBwaW5nQWRkcmVzc1VwZGF0ZUZhaWx1cmVcbiJdfQ==