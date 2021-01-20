/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffCartShippingMethodsActionTypes = {
    CartShippingMethodsLoadAction: '[DaffCart] Shipping Methods Load Action',
    CartShippingMethodsLoadSuccessAction: '[DaffCart] Shipping Methods Load Success Action',
    CartShippingMethodsLoadFailureAction: '[DaffCart] Shipping Methods Load Failure Action',
};
export { DaffCartShippingMethodsActionTypes };
var DaffCartShippingMethodsLoad = /** @class */ (function () {
    function DaffCartShippingMethodsLoad() {
        this.type = DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadAction;
    }
    return DaffCartShippingMethodsLoad;
}());
export { DaffCartShippingMethodsLoad };
if (false) {
    /** @type {?} */
    DaffCartShippingMethodsLoad.prototype.type;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffCartShippingMethodsLoadSuccess = /** @class */ (function () {
    function DaffCartShippingMethodsLoadSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadSuccessAction;
    }
    return DaffCartShippingMethodsLoadSuccess;
}());
/**
 * @template T
 */
export { DaffCartShippingMethodsLoadSuccess };
if (false) {
    /** @type {?} */
    DaffCartShippingMethodsLoadSuccess.prototype.type;
    /** @type {?} */
    DaffCartShippingMethodsLoadSuccess.prototype.payload;
}
var DaffCartShippingMethodsLoadFailure = /** @class */ (function () {
    function DaffCartShippingMethodsLoadFailure(payload) {
        this.payload = payload;
        this.type = DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadFailureAction;
    }
    return DaffCartShippingMethodsLoadFailure;
}());
export { DaffCartShippingMethodsLoadFailure };
if (false) {
    /** @type {?} */
    DaffCartShippingMethodsLoadFailure.prototype.type;
    /** @type {?} */
    DaffCartShippingMethodsLoadFailure.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGlwcGluZy1tZXRob2RzLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9zdGF0ZS8iLCJzb3VyY2VzIjpbImFjdGlvbnMvY2FydC1zaGlwcGluZy1tZXRob2RzLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBTUUsK0JBQWdDLHlDQUF5QztJQUN6RSxzQ0FBdUMsaURBQWlEO0lBQ3hGLHNDQUF1QyxpREFBaUQ7OztBQUcxRjtJQUdFO1FBRlMsU0FBSSxHQUFHLGtDQUFrQyxDQUFDLDZCQUE2QixDQUFDO0lBRWxFLENBQUM7SUFDbEIsa0NBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7OztJQUhDLDJDQUFpRjs7Ozs7QUFLbkY7Ozs7SUFHRSw0Q0FBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFGdEIsU0FBSSxHQUFHLGtDQUFrQyxDQUFDLG9DQUFvQyxDQUFDO0lBRXRELENBQUM7SUFDckMseUNBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7Ozs7OztJQUhDLGtEQUF3Rjs7SUFFNUUscURBQW1COztBQUdqQztJQUdFLDRDQUFtQixPQUF1QjtRQUF2QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUZqQyxTQUFJLEdBQUcsa0NBQWtDLENBQUMsb0NBQW9DLENBQUM7SUFFM0MsQ0FBQztJQUNoRCx5Q0FBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7O0lBSEMsa0RBQXdGOztJQUU1RSxxREFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IERhZmZTdGF0ZUVycm9yIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvc3RhdGUnO1xuaW1wb3J0IHsgRGFmZkNhcnRTaGlwcGluZ1JhdGUgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5cbmV4cG9ydCBlbnVtIERhZmZDYXJ0U2hpcHBpbmdNZXRob2RzQWN0aW9uVHlwZXMge1xuICBDYXJ0U2hpcHBpbmdNZXRob2RzTG9hZEFjdGlvbiA9ICdbRGFmZkNhcnRdIFNoaXBwaW5nIE1ldGhvZHMgTG9hZCBBY3Rpb24nLFxuICBDYXJ0U2hpcHBpbmdNZXRob2RzTG9hZFN1Y2Nlc3NBY3Rpb24gPSAnW0RhZmZDYXJ0XSBTaGlwcGluZyBNZXRob2RzIExvYWQgU3VjY2VzcyBBY3Rpb24nLFxuICBDYXJ0U2hpcHBpbmdNZXRob2RzTG9hZEZhaWx1cmVBY3Rpb24gPSAnW0RhZmZDYXJ0XSBTaGlwcGluZyBNZXRob2RzIExvYWQgRmFpbHVyZSBBY3Rpb24nLFxufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRTaGlwcGluZ01ldGhvZHNMb2FkIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0U2hpcHBpbmdNZXRob2RzQWN0aW9uVHlwZXMuQ2FydFNoaXBwaW5nTWV0aG9kc0xvYWRBY3Rpb247XG5cbiAgY29uc3RydWN0b3IoKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRTaGlwcGluZ01ldGhvZHNMb2FkU3VjY2VzczxUIGV4dGVuZHMgRGFmZkNhcnRTaGlwcGluZ1JhdGUgPSBEYWZmQ2FydFNoaXBwaW5nUmF0ZT4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRTaGlwcGluZ01ldGhvZHNBY3Rpb25UeXBlcy5DYXJ0U2hpcHBpbmdNZXRob2RzTG9hZFN1Y2Nlc3NBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFRbXSkge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0U2hpcHBpbmdNZXRob2RzTG9hZEZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRTaGlwcGluZ01ldGhvZHNBY3Rpb25UeXBlcy5DYXJ0U2hpcHBpbmdNZXRob2RzTG9hZEZhaWx1cmVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IERhZmZTdGF0ZUVycm9yKSB7fVxufVxuXG5leHBvcnQgdHlwZSBEYWZmQ2FydFNoaXBwaW5nTWV0aG9kc0FjdGlvbnM8VCBleHRlbmRzIERhZmZDYXJ0U2hpcHBpbmdSYXRlID0gRGFmZkNhcnRTaGlwcGluZ1JhdGU+ID1cbiAgfCBEYWZmQ2FydFNoaXBwaW5nTWV0aG9kc0xvYWRcbiAgfCBEYWZmQ2FydFNoaXBwaW5nTWV0aG9kc0xvYWRTdWNjZXNzPFQ+XG4gIHwgRGFmZkNhcnRTaGlwcGluZ01ldGhvZHNMb2FkRmFpbHVyZVxuIl19