/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffCartShippingMethodsActionTypes = {
    CartShippingMethodsLoadAction: '[DaffCart] Shipping Methods Load Action',
    CartShippingMethodsLoadSuccessAction: '[DaffCart] Shipping Methods Load Success Action',
    CartShippingMethodsLoadFailureAction: '[DaffCart] Shipping Methods Load Failure Action',
};
export { DaffCartShippingMethodsActionTypes };
export class DaffCartShippingMethodsLoad {
    constructor() {
        this.type = DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartShippingMethodsLoad.prototype.type;
}
/**
 * @template T
 */
export class DaffCartShippingMethodsLoadSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartShippingMethodsLoadSuccess.prototype.type;
    /** @type {?} */
    DaffCartShippingMethodsLoadSuccess.prototype.payload;
}
export class DaffCartShippingMethodsLoadFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartShippingMethodsLoadFailure.prototype.type;
    /** @type {?} */
    DaffCartShippingMethodsLoadFailure.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGlwcGluZy1tZXRob2RzLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9zdGF0ZS8iLCJzb3VyY2VzIjpbImFjdGlvbnMvY2FydC1zaGlwcGluZy1tZXRob2RzLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBTUUsK0JBQWdDLHlDQUF5QztJQUN6RSxzQ0FBdUMsaURBQWlEO0lBQ3hGLHNDQUF1QyxpREFBaUQ7OztBQUcxRixNQUFNLE9BQU8sMkJBQTJCO0lBR3RDO1FBRlMsU0FBSSxHQUFHLGtDQUFrQyxDQUFDLDZCQUE2QixDQUFDO0lBRWxFLENBQUM7Q0FDakI7OztJQUhDLDJDQUFpRjs7Ozs7QUFLbkYsTUFBTSxPQUFPLGtDQUFrQzs7OztJQUc3QyxZQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUZ0QixTQUFJLEdBQUcsa0NBQWtDLENBQUMsb0NBQW9DLENBQUM7SUFFdEQsQ0FBQztDQUNwQzs7O0lBSEMsa0RBQXdGOztJQUU1RSxxREFBbUI7O0FBR2pDLE1BQU0sT0FBTyxrQ0FBa0M7Ozs7SUFHN0MsWUFBbUIsT0FBdUI7UUFBdkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFGakMsU0FBSSxHQUFHLGtDQUFrQyxDQUFDLG9DQUFvQyxDQUFDO0lBRTNDLENBQUM7Q0FDL0M7OztJQUhDLGtEQUF3Rjs7SUFFNUUscURBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBEYWZmU3RhdGVFcnJvciB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3N0YXRlJztcbmltcG9ydCB7IERhZmZDYXJ0U2hpcHBpbmdSYXRlIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuXG5leHBvcnQgZW51bSBEYWZmQ2FydFNoaXBwaW5nTWV0aG9kc0FjdGlvblR5cGVzIHtcbiAgQ2FydFNoaXBwaW5nTWV0aG9kc0xvYWRBY3Rpb24gPSAnW0RhZmZDYXJ0XSBTaGlwcGluZyBNZXRob2RzIExvYWQgQWN0aW9uJyxcbiAgQ2FydFNoaXBwaW5nTWV0aG9kc0xvYWRTdWNjZXNzQWN0aW9uID0gJ1tEYWZmQ2FydF0gU2hpcHBpbmcgTWV0aG9kcyBMb2FkIFN1Y2Nlc3MgQWN0aW9uJyxcbiAgQ2FydFNoaXBwaW5nTWV0aG9kc0xvYWRGYWlsdXJlQWN0aW9uID0gJ1tEYWZmQ2FydF0gU2hpcHBpbmcgTWV0aG9kcyBMb2FkIEZhaWx1cmUgQWN0aW9uJyxcbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0U2hpcHBpbmdNZXRob2RzTG9hZCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydFNoaXBwaW5nTWV0aG9kc0FjdGlvblR5cGVzLkNhcnRTaGlwcGluZ01ldGhvZHNMb2FkQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0U2hpcHBpbmdNZXRob2RzTG9hZFN1Y2Nlc3M8VCBleHRlbmRzIERhZmZDYXJ0U2hpcHBpbmdSYXRlID0gRGFmZkNhcnRTaGlwcGluZ1JhdGU+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0U2hpcHBpbmdNZXRob2RzQWN0aW9uVHlwZXMuQ2FydFNoaXBwaW5nTWV0aG9kc0xvYWRTdWNjZXNzQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBUW10pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydFNoaXBwaW5nTWV0aG9kc0xvYWRGYWlsdXJlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0U2hpcHBpbmdNZXRob2RzQWN0aW9uVHlwZXMuQ2FydFNoaXBwaW5nTWV0aG9kc0xvYWRGYWlsdXJlQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBEYWZmU3RhdGVFcnJvcikge31cbn1cblxuZXhwb3J0IHR5cGUgRGFmZkNhcnRTaGlwcGluZ01ldGhvZHNBY3Rpb25zPFQgZXh0ZW5kcyBEYWZmQ2FydFNoaXBwaW5nUmF0ZSA9IERhZmZDYXJ0U2hpcHBpbmdSYXRlPiA9XG4gIHwgRGFmZkNhcnRTaGlwcGluZ01ldGhvZHNMb2FkXG4gIHwgRGFmZkNhcnRTaGlwcGluZ01ldGhvZHNMb2FkU3VjY2VzczxUPlxuICB8IERhZmZDYXJ0U2hpcHBpbmdNZXRob2RzTG9hZEZhaWx1cmVcbiJdfQ==