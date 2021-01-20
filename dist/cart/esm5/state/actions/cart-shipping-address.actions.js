/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffCartShippingAddressActionTypes = {
    CartShippingAddressLoadAction: '[DaffCart] Shipping Address Load Action',
    CartShippingAddressLoadSuccessAction: '[DaffCart] Shipping Address Load Success Action',
    CartShippingAddressLoadFailureAction: '[DaffCart] Shipping Address Load Failure Action',
    CartShippingAddressUpdateAction: '[DaffCart] Shipping Address Update Action',
    CartShippingAddressUpdateSuccessAction: '[DaffCart] Shipping Address Update Success Action',
    CartShippingAddressUpdateFailureAction: '[DaffCart] Shipping Address Update Failure Action',
};
export { DaffCartShippingAddressActionTypes };
var DaffCartShippingAddressLoad = /** @class */ (function () {
    function DaffCartShippingAddressLoad() {
        this.type = DaffCartShippingAddressActionTypes.CartShippingAddressLoadAction;
    }
    return DaffCartShippingAddressLoad;
}());
export { DaffCartShippingAddressLoad };
if (false) {
    /** @type {?} */
    DaffCartShippingAddressLoad.prototype.type;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffCartShippingAddressLoadSuccess = /** @class */ (function () {
    function DaffCartShippingAddressLoadSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartShippingAddressActionTypes.CartShippingAddressLoadSuccessAction;
    }
    return DaffCartShippingAddressLoadSuccess;
}());
/**
 * @template T
 */
export { DaffCartShippingAddressLoadSuccess };
if (false) {
    /** @type {?} */
    DaffCartShippingAddressLoadSuccess.prototype.type;
    /** @type {?} */
    DaffCartShippingAddressLoadSuccess.prototype.payload;
}
var DaffCartShippingAddressLoadFailure = /** @class */ (function () {
    function DaffCartShippingAddressLoadFailure(payload) {
        this.payload = payload;
        this.type = DaffCartShippingAddressActionTypes.CartShippingAddressLoadFailureAction;
    }
    return DaffCartShippingAddressLoadFailure;
}());
export { DaffCartShippingAddressLoadFailure };
if (false) {
    /** @type {?} */
    DaffCartShippingAddressLoadFailure.prototype.type;
    /** @type {?} */
    DaffCartShippingAddressLoadFailure.prototype.payload;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffCartShippingAddressUpdate = /** @class */ (function () {
    function DaffCartShippingAddressUpdate(payload) {
        this.payload = payload;
        this.type = DaffCartShippingAddressActionTypes.CartShippingAddressUpdateAction;
    }
    return DaffCartShippingAddressUpdate;
}());
/**
 * @template T
 */
export { DaffCartShippingAddressUpdate };
if (false) {
    /** @type {?} */
    DaffCartShippingAddressUpdate.prototype.type;
    /** @type {?} */
    DaffCartShippingAddressUpdate.prototype.payload;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffCartShippingAddressUpdateSuccess = /** @class */ (function () {
    function DaffCartShippingAddressUpdateSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartShippingAddressActionTypes.CartShippingAddressUpdateSuccessAction;
    }
    return DaffCartShippingAddressUpdateSuccess;
}());
/**
 * @template T
 */
export { DaffCartShippingAddressUpdateSuccess };
if (false) {
    /** @type {?} */
    DaffCartShippingAddressUpdateSuccess.prototype.type;
    /** @type {?} */
    DaffCartShippingAddressUpdateSuccess.prototype.payload;
}
var DaffCartShippingAddressUpdateFailure = /** @class */ (function () {
    function DaffCartShippingAddressUpdateFailure(payload) {
        this.payload = payload;
        this.type = DaffCartShippingAddressActionTypes.CartShippingAddressUpdateFailureAction;
    }
    return DaffCartShippingAddressUpdateFailure;
}());
export { DaffCartShippingAddressUpdateFailure };
if (false) {
    /** @type {?} */
    DaffCartShippingAddressUpdateFailure.prototype.type;
    /** @type {?} */
    DaffCartShippingAddressUpdateFailure.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGlwcGluZy1hZGRyZXNzLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9zdGF0ZS8iLCJzb3VyY2VzIjpbImFjdGlvbnMvY2FydC1zaGlwcGluZy1hZGRyZXNzLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBTUUsK0JBQWdDLHlDQUF5QztJQUN6RSxzQ0FBdUMsaURBQWlEO0lBQ3hGLHNDQUF1QyxpREFBaUQ7SUFDeEYsaUNBQWtDLDJDQUEyQztJQUM3RSx3Q0FBeUMsbURBQW1EO0lBQzVGLHdDQUF5QyxtREFBbUQ7OztBQUc5RjtJQUFBO1FBQ1csU0FBSSxHQUFHLGtDQUFrQyxDQUFDLDZCQUE2QixDQUFDO0lBQ25GLENBQUM7SUFBRCxrQ0FBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0lBREMsMkNBQWlGOzs7OztBQUduRjs7OztJQUdFLDRDQUFtQixPQUFVO1FBQVYsWUFBTyxHQUFQLE9BQU8sQ0FBRztRQUZwQixTQUFJLEdBQUcsa0NBQWtDLENBQUMsb0NBQW9DLENBQUM7SUFFeEQsQ0FBQztJQUNuQyx5Q0FBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7Ozs7O0lBSEMsa0RBQXdGOztJQUU1RSxxREFBaUI7O0FBRy9CO0lBR0UsNENBQW1CLE9BQXVCO1FBQXZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBRmpDLFNBQUksR0FBRyxrQ0FBa0MsQ0FBQyxvQ0FBb0MsQ0FBQztJQUUzQyxDQUFDO0lBQ2hELHlDQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7SUFIQyxrREFBd0Y7O0lBRTVFLHFEQUE4Qjs7Ozs7QUFHNUM7Ozs7SUFHRSx1Q0FBbUIsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUY3QixTQUFJLEdBQUcsa0NBQWtDLENBQUMsK0JBQStCLENBQUM7SUFFMUMsQ0FBQztJQUM1QyxvQ0FBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7Ozs7O0lBSEMsNkNBQW1GOztJQUV2RSxnREFBMEI7Ozs7O0FBR3hDOzs7O0lBR0UsOENBQW1CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFGN0IsU0FBSSxHQUFHLGtDQUFrQyxDQUFDLHNDQUFzQyxDQUFDO0lBRWpELENBQUM7SUFDNUMsMkNBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7Ozs7OztJQUhDLG9EQUEwRjs7SUFFOUUsdURBQTBCOztBQUd4QztJQUdFLDhDQUFtQixPQUF1QjtRQUF2QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUZqQyxTQUFJLEdBQUcsa0NBQWtDLENBQUMsc0NBQXNDLENBQUM7SUFFN0MsQ0FBQztJQUNoRCwyQ0FBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7O0lBSEMsb0RBQTBGOztJQUU5RSx1REFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IERhZmZTdGF0ZUVycm9yIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvc3RhdGUnO1xuaW1wb3J0IHsgRGFmZkNhcnRBZGRyZXNzLCBEYWZmQ2FydCB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcblxuZXhwb3J0IGVudW0gRGFmZkNhcnRTaGlwcGluZ0FkZHJlc3NBY3Rpb25UeXBlcyB7XG4gIENhcnRTaGlwcGluZ0FkZHJlc3NMb2FkQWN0aW9uID0gJ1tEYWZmQ2FydF0gU2hpcHBpbmcgQWRkcmVzcyBMb2FkIEFjdGlvbicsXG4gIENhcnRTaGlwcGluZ0FkZHJlc3NMb2FkU3VjY2Vzc0FjdGlvbiA9ICdbRGFmZkNhcnRdIFNoaXBwaW5nIEFkZHJlc3MgTG9hZCBTdWNjZXNzIEFjdGlvbicsXG4gIENhcnRTaGlwcGluZ0FkZHJlc3NMb2FkRmFpbHVyZUFjdGlvbiA9ICdbRGFmZkNhcnRdIFNoaXBwaW5nIEFkZHJlc3MgTG9hZCBGYWlsdXJlIEFjdGlvbicsXG4gIENhcnRTaGlwcGluZ0FkZHJlc3NVcGRhdGVBY3Rpb24gPSAnW0RhZmZDYXJ0XSBTaGlwcGluZyBBZGRyZXNzIFVwZGF0ZSBBY3Rpb24nLFxuICBDYXJ0U2hpcHBpbmdBZGRyZXNzVXBkYXRlU3VjY2Vzc0FjdGlvbiA9ICdbRGFmZkNhcnRdIFNoaXBwaW5nIEFkZHJlc3MgVXBkYXRlIFN1Y2Nlc3MgQWN0aW9uJyxcbiAgQ2FydFNoaXBwaW5nQWRkcmVzc1VwZGF0ZUZhaWx1cmVBY3Rpb24gPSAnW0RhZmZDYXJ0XSBTaGlwcGluZyBBZGRyZXNzIFVwZGF0ZSBGYWlsdXJlIEFjdGlvbicsXG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydFNoaXBwaW5nQWRkcmVzc0xvYWQgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRTaGlwcGluZ0FkZHJlc3NBY3Rpb25UeXBlcy5DYXJ0U2hpcHBpbmdBZGRyZXNzTG9hZEFjdGlvbjtcbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzTG9hZFN1Y2Nlc3M8VCBleHRlbmRzIERhZmZDYXJ0QWRkcmVzcyA9IERhZmZDYXJ0QWRkcmVzcz4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRTaGlwcGluZ0FkZHJlc3NBY3Rpb25UeXBlcy5DYXJ0U2hpcHBpbmdBZGRyZXNzTG9hZFN1Y2Nlc3NBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFQpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydFNoaXBwaW5nQWRkcmVzc0xvYWRGYWlsdXJlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzQWN0aW9uVHlwZXMuQ2FydFNoaXBwaW5nQWRkcmVzc0xvYWRGYWlsdXJlQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBEYWZmU3RhdGVFcnJvcikge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzVXBkYXRlPFQgZXh0ZW5kcyBEYWZmQ2FydEFkZHJlc3MgPSBEYWZmQ2FydEFkZHJlc3M+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzQWN0aW9uVHlwZXMuQ2FydFNoaXBwaW5nQWRkcmVzc1VwZGF0ZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFydGlhbDxUPikge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzVXBkYXRlU3VjY2VzczxUIGV4dGVuZHMgRGFmZkNhcnQgPSBEYWZmQ2FydD4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRTaGlwcGluZ0FkZHJlc3NBY3Rpb25UeXBlcy5DYXJ0U2hpcHBpbmdBZGRyZXNzVXBkYXRlU3VjY2Vzc0FjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFydGlhbDxUPikge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzVXBkYXRlRmFpbHVyZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydFNoaXBwaW5nQWRkcmVzc0FjdGlvblR5cGVzLkNhcnRTaGlwcGluZ0FkZHJlc3NVcGRhdGVGYWlsdXJlQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBEYWZmU3RhdGVFcnJvcikge31cbn1cblxuZXhwb3J0IHR5cGUgRGFmZkNhcnRTaGlwcGluZ0FkZHJlc3NBY3Rpb25zPFxuICBUIGV4dGVuZHMgRGFmZkNhcnRBZGRyZXNzID0gRGFmZkNhcnRBZGRyZXNzLFxuICBWIGV4dGVuZHMgRGFmZkNhcnQgPSBEYWZmQ2FydFxuPiA9XG4gIHwgRGFmZkNhcnRTaGlwcGluZ0FkZHJlc3NMb2FkXG4gIHwgRGFmZkNhcnRTaGlwcGluZ0FkZHJlc3NMb2FkU3VjY2VzczxUPlxuICB8IERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzTG9hZEZhaWx1cmVcbiAgfCBEYWZmQ2FydFNoaXBwaW5nQWRkcmVzc1VwZGF0ZTxUPlxuICB8IERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzVXBkYXRlU3VjY2VzczxWPlxuICB8IERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzVXBkYXRlRmFpbHVyZVxuIl19