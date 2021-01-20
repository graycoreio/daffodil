/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffOrderActionTypes = {
    PlaceOrderAction: '[Order] Place Order Action',
    PlaceOrderSuccessAction: '[Order] Place Order Success Action',
    PlaceOrderFailureAction: '[Order] Place Order Failure Action',
};
export { DaffOrderActionTypes };
/** @enum {string} */
const OrderActionTypes = {
    PlaceOrderAction: '[Order] Place Order Action',
    PlaceOrderSuccessAction: '[Order] Place Order Success Action',
    PlaceOrderFailureAction: '[Order] Place Order Failure Action',
};
export { OrderActionTypes };
/**
 * @deprecated
 */
export class PlaceOrder {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffOrderActionTypes.PlaceOrderAction;
    }
}
if (false) {
    /** @type {?} */
    PlaceOrder.prototype.type;
    /** @type {?} */
    PlaceOrder.prototype.payload;
}
/**
 * @deprecated
 */
export class DaffPlaceOrder {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffOrderActionTypes.PlaceOrderAction;
    }
}
if (false) {
    /** @type {?} */
    DaffPlaceOrder.prototype.type;
    /** @type {?} */
    DaffPlaceOrder.prototype.payload;
}
/**
 * @deprecated
 */
export class DaffPlaceOrderSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffOrderActionTypes.PlaceOrderSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffPlaceOrderSuccess.prototype.type;
    /** @type {?} */
    DaffPlaceOrderSuccess.prototype.payload;
}
/**
 * @deprecated
 */
export class DaffPlaceOrderFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffOrderActionTypes.PlaceOrderFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffPlaceOrderFailure.prototype.type;
    /** @type {?} */
    DaffPlaceOrderFailure.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jaGVja291dC8iLCJzb3VyY2VzIjpbIm9yZGVyL2FjdGlvbnMvb3JkZXIuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFTRSxrQkFBbUIsNEJBQTRCO0lBQy9DLHlCQUEwQixvQ0FBb0M7SUFDOUQseUJBQTBCLG9DQUFvQzs7Ozs7SUFPOUQsa0JBQW1CLDRCQUE0QjtJQUMvQyx5QkFBMEIsb0NBQW9DO0lBQzlELHlCQUEwQixvQ0FBb0M7Ozs7OztBQU1oRSxNQUFNLE9BQU8sVUFBVTs7OztJQUdyQixZQUFtQixPQUFpQjtRQUFqQixZQUFPLEdBQVAsT0FBTyxDQUFVO1FBRjNCLFNBQUksR0FBRyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQztJQUVmLENBQUM7Q0FDekM7OztJQUhDLDBCQUFzRDs7SUFFMUMsNkJBQXdCOzs7OztBQU10QyxNQUFNLE9BQU8sY0FBYzs7OztJQUd6QixZQUFtQixPQUFpQjtRQUFqQixZQUFPLEdBQVAsT0FBTyxDQUFVO1FBRjNCLFNBQUksR0FBRyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQztJQUVmLENBQUM7Q0FDekM7OztJQUhDLDhCQUFzRDs7SUFFMUMsaUNBQXdCOzs7OztBQU10QyxNQUFNLE9BQU8scUJBQXFCOzs7O0lBR2hDLFlBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFGNUIsU0FBSSxHQUFHLG9CQUFvQixDQUFDLHVCQUF1QixDQUFDO0lBRXJCLENBQUM7Q0FDMUM7OztJQUhDLHFDQUE2RDs7SUFFakQsd0NBQXlCOzs7OztBQU12QyxNQUFNLE9BQU8scUJBQXFCOzs7O0lBR2hDLFlBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRnpCLFNBQUksR0FBRyxvQkFBb0IsQ0FBQyx1QkFBdUIsQ0FBQztJQUV4QixDQUFDO0NBQ3ZDOzs7SUFIQyxxQ0FBNkQ7O0lBRWpELHdDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IERhZmZDYXJ0IH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuXG5pbXBvcnQgeyBEYWZmT3JkZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvb3JkZXIvb3JkZXInO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBlbnVtIERhZmZPcmRlckFjdGlvblR5cGVzIHtcbiAgUGxhY2VPcmRlckFjdGlvbiA9ICdbT3JkZXJdIFBsYWNlIE9yZGVyIEFjdGlvbicsXG4gIFBsYWNlT3JkZXJTdWNjZXNzQWN0aW9uID0gJ1tPcmRlcl0gUGxhY2UgT3JkZXIgU3VjY2VzcyBBY3Rpb24nLFxuICBQbGFjZU9yZGVyRmFpbHVyZUFjdGlvbiA9ICdbT3JkZXJdIFBsYWNlIE9yZGVyIEZhaWx1cmUgQWN0aW9uJ1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBlbnVtIE9yZGVyQWN0aW9uVHlwZXMge1xuICBQbGFjZU9yZGVyQWN0aW9uID0gJ1tPcmRlcl0gUGxhY2UgT3JkZXIgQWN0aW9uJyxcbiAgUGxhY2VPcmRlclN1Y2Nlc3NBY3Rpb24gPSAnW09yZGVyXSBQbGFjZSBPcmRlciBTdWNjZXNzIEFjdGlvbicsXG4gIFBsYWNlT3JkZXJGYWlsdXJlQWN0aW9uID0gJ1tPcmRlcl0gUGxhY2UgT3JkZXIgRmFpbHVyZSBBY3Rpb24nXG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNsYXNzIFBsYWNlT3JkZXIgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZk9yZGVyQWN0aW9uVHlwZXMuUGxhY2VPcmRlckFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRGFmZkNhcnQpIHt9XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZQbGFjZU9yZGVyIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZPcmRlckFjdGlvblR5cGVzLlBsYWNlT3JkZXJBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IERhZmZDYXJ0KSB7fVxufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmUGxhY2VPcmRlclN1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZk9yZGVyQWN0aW9uVHlwZXMuUGxhY2VPcmRlclN1Y2Nlc3NBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IERhZmZPcmRlcikge31cbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY2xhc3MgRGFmZlBsYWNlT3JkZXJGYWlsdXJlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZPcmRlckFjdGlvblR5cGVzLlBsYWNlT3JkZXJGYWlsdXJlQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IHR5cGUgRGFmZk9yZGVyQWN0aW9ucyA9XG4gICAgfCBEYWZmUGxhY2VPcmRlclxuICAgIHwgUGxhY2VPcmRlclxuICAgIHwgRGFmZlBsYWNlT3JkZXJTdWNjZXNzXG4gICAgfCBEYWZmUGxhY2VPcmRlckZhaWx1cmU7XG4iXX0=