/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffCartOrderActionTypes = {
    CartPlaceOrderAction: '[DaffCart] Cart Place Order Action',
    CartPlaceOrderSuccessAction: '[DaffCart] Cart Place Order Success Action',
    CartPlaceOrderFailureAction: '[DaffCart] Cart Place Order Failure Action',
};
export { DaffCartOrderActionTypes };
/**
 * @template T
 */
export class DaffCartPlaceOrder {
    /**
     * @param {?=} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartOrderActionTypes.CartPlaceOrderAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartPlaceOrder.prototype.type;
    /** @type {?} */
    DaffCartPlaceOrder.prototype.payload;
}
/**
 * @template T
 */
export class DaffCartPlaceOrderSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartOrderActionTypes.CartPlaceOrderSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartPlaceOrderSuccess.prototype.type;
    /** @type {?} */
    DaffCartPlaceOrderSuccess.prototype.payload;
}
export class DaffCartPlaceOrderFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartOrderActionTypes.CartPlaceOrderFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartPlaceOrderFailure.prototype.type;
    /** @type {?} */
    DaffCartPlaceOrderFailure.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1vcmRlci5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvc3RhdGUvIiwic291cmNlcyI6WyJhY3Rpb25zL2NhcnQtb3JkZXIuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFNRSxzQkFBdUIsb0NBQW9DO0lBQzNELDZCQUE4Qiw0Q0FBNEM7SUFDMUUsNkJBQThCLDRDQUE0Qzs7Ozs7O0FBRzVFLE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFHN0IsWUFBbUIsT0FBVztRQUFYLFlBQU8sR0FBUCxPQUFPLENBQUk7UUFGckIsU0FBSSxHQUFHLHdCQUF3QixDQUFDLG9CQUFvQixDQUFDO0lBRTdCLENBQUM7Q0FDbkM7OztJQUhDLGtDQUE4RDs7SUFFbEQscUNBQWtCOzs7OztBQUdoQyxNQUFNLE9BQU8seUJBQXlCOzs7O0lBR3BDLFlBQW1CLE9BQVU7UUFBVixZQUFPLEdBQVAsT0FBTyxDQUFHO1FBRnBCLFNBQUksR0FBRyx3QkFBd0IsQ0FBQywyQkFBMkIsQ0FBQztJQUVyQyxDQUFDO0NBQ2xDOzs7SUFIQyx5Q0FBcUU7O0lBRXpELDRDQUFpQjs7QUFHL0IsTUFBTSxPQUFPLHlCQUF5Qjs7OztJQUdwQyxZQUFtQixPQUF1QjtRQUF2QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUZqQyxTQUFJLEdBQUcsd0JBQXdCLENBQUMsMkJBQTJCLENBQUM7SUFFeEIsQ0FBQztDQUMvQzs7O0lBSEMseUNBQXFFOztJQUV6RCw0Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IERhZmZTdGF0ZUVycm9yIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvc3RhdGUnO1xuaW1wb3J0IHsgRGFmZkNhcnRQYXltZW50TWV0aG9kLCBEYWZmQ2FydE9yZGVyUmVzdWx0IH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuXG5leHBvcnQgZW51bSBEYWZmQ2FydE9yZGVyQWN0aW9uVHlwZXMge1xuICBDYXJ0UGxhY2VPcmRlckFjdGlvbiA9ICdbRGFmZkNhcnRdIENhcnQgUGxhY2UgT3JkZXIgQWN0aW9uJyxcbiAgQ2FydFBsYWNlT3JkZXJTdWNjZXNzQWN0aW9uID0gJ1tEYWZmQ2FydF0gQ2FydCBQbGFjZSBPcmRlciBTdWNjZXNzIEFjdGlvbicsXG4gIENhcnRQbGFjZU9yZGVyRmFpbHVyZUFjdGlvbiA9ICdbRGFmZkNhcnRdIENhcnQgUGxhY2UgT3JkZXIgRmFpbHVyZSBBY3Rpb24nXG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydFBsYWNlT3JkZXI8VCBleHRlbmRzIERhZmZDYXJ0UGF5bWVudE1ldGhvZCA9IERhZmZDYXJ0UGF5bWVudE1ldGhvZD4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRPcmRlckFjdGlvblR5cGVzLkNhcnRQbGFjZU9yZGVyQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkPzogVCkge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0UGxhY2VPcmRlclN1Y2Nlc3M8VCBleHRlbmRzIERhZmZDYXJ0T3JkZXJSZXN1bHQgPSBEYWZmQ2FydE9yZGVyUmVzdWx0PiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydE9yZGVyQWN0aW9uVHlwZXMuQ2FydFBsYWNlT3JkZXJTdWNjZXNzQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBUKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRQbGFjZU9yZGVyRmFpbHVyZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydE9yZGVyQWN0aW9uVHlwZXMuQ2FydFBsYWNlT3JkZXJGYWlsdXJlQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBEYWZmU3RhdGVFcnJvcikge31cbn1cblxuZXhwb3J0IHR5cGUgRGFmZkNhcnRPcmRlckFjdGlvbnM8XG4gIFQgZXh0ZW5kcyBEYWZmQ2FydE9yZGVyUmVzdWx0ID0gRGFmZkNhcnRPcmRlclJlc3VsdCxcbiAgViBleHRlbmRzIERhZmZDYXJ0UGF5bWVudE1ldGhvZCA9IERhZmZDYXJ0UGF5bWVudE1ldGhvZFxuPiA9XG4gIHwgRGFmZkNhcnRQbGFjZU9yZGVyPFY+XG4gIHwgRGFmZkNhcnRQbGFjZU9yZGVyU3VjY2VzczxUPlxuICB8IERhZmZDYXJ0UGxhY2VPcmRlckZhaWx1cmU7XG4iXX0=