/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffCartOrderActionTypes = {
    CartPlaceOrderAction: '[DaffCart] Cart Place Order Action',
    CartPlaceOrderSuccessAction: '[DaffCart] Cart Place Order Success Action',
    CartPlaceOrderFailureAction: '[DaffCart] Cart Place Order Failure Action',
};
export { DaffCartOrderActionTypes };
/**
 * @template T
 */
var /**
 * @template T
 */
DaffCartPlaceOrder = /** @class */ (function () {
    function DaffCartPlaceOrder(payload) {
        this.payload = payload;
        this.type = DaffCartOrderActionTypes.CartPlaceOrderAction;
    }
    return DaffCartPlaceOrder;
}());
/**
 * @template T
 */
export { DaffCartPlaceOrder };
if (false) {
    /** @type {?} */
    DaffCartPlaceOrder.prototype.type;
    /** @type {?} */
    DaffCartPlaceOrder.prototype.payload;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffCartPlaceOrderSuccess = /** @class */ (function () {
    function DaffCartPlaceOrderSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartOrderActionTypes.CartPlaceOrderSuccessAction;
    }
    return DaffCartPlaceOrderSuccess;
}());
/**
 * @template T
 */
export { DaffCartPlaceOrderSuccess };
if (false) {
    /** @type {?} */
    DaffCartPlaceOrderSuccess.prototype.type;
    /** @type {?} */
    DaffCartPlaceOrderSuccess.prototype.payload;
}
var DaffCartPlaceOrderFailure = /** @class */ (function () {
    function DaffCartPlaceOrderFailure(payload) {
        this.payload = payload;
        this.type = DaffCartOrderActionTypes.CartPlaceOrderFailureAction;
    }
    return DaffCartPlaceOrderFailure;
}());
export { DaffCartPlaceOrderFailure };
if (false) {
    /** @type {?} */
    DaffCartPlaceOrderFailure.prototype.type;
    /** @type {?} */
    DaffCartPlaceOrderFailure.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1vcmRlci5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvc3RhdGUvIiwic291cmNlcyI6WyJhY3Rpb25zL2NhcnQtb3JkZXIuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFNRSxzQkFBdUIsb0NBQW9DO0lBQzNELDZCQUE4Qiw0Q0FBNEM7SUFDMUUsNkJBQThCLDRDQUE0Qzs7Ozs7O0FBRzVFOzs7O0lBR0UsNEJBQW1CLE9BQVc7UUFBWCxZQUFPLEdBQVAsT0FBTyxDQUFJO1FBRnJCLFNBQUksR0FBRyx3QkFBd0IsQ0FBQyxvQkFBb0IsQ0FBQztJQUU3QixDQUFDO0lBQ3BDLHlCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7Ozs7SUFIQyxrQ0FBOEQ7O0lBRWxELHFDQUFrQjs7Ozs7QUFHaEM7Ozs7SUFHRSxtQ0FBbUIsT0FBVTtRQUFWLFlBQU8sR0FBUCxPQUFPLENBQUc7UUFGcEIsU0FBSSxHQUFHLHdCQUF3QixDQUFDLDJCQUEyQixDQUFDO0lBRXJDLENBQUM7SUFDbkMsZ0NBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7Ozs7OztJQUhDLHlDQUFxRTs7SUFFekQsNENBQWlCOztBQUcvQjtJQUdFLG1DQUFtQixPQUF1QjtRQUF2QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUZqQyxTQUFJLEdBQUcsd0JBQXdCLENBQUMsMkJBQTJCLENBQUM7SUFFeEIsQ0FBQztJQUNoRCxnQ0FBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7O0lBSEMseUNBQXFFOztJQUV6RCw0Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IERhZmZTdGF0ZUVycm9yIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvc3RhdGUnO1xuaW1wb3J0IHsgRGFmZkNhcnRQYXltZW50TWV0aG9kLCBEYWZmQ2FydE9yZGVyUmVzdWx0IH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuXG5leHBvcnQgZW51bSBEYWZmQ2FydE9yZGVyQWN0aW9uVHlwZXMge1xuICBDYXJ0UGxhY2VPcmRlckFjdGlvbiA9ICdbRGFmZkNhcnRdIENhcnQgUGxhY2UgT3JkZXIgQWN0aW9uJyxcbiAgQ2FydFBsYWNlT3JkZXJTdWNjZXNzQWN0aW9uID0gJ1tEYWZmQ2FydF0gQ2FydCBQbGFjZSBPcmRlciBTdWNjZXNzIEFjdGlvbicsXG4gIENhcnRQbGFjZU9yZGVyRmFpbHVyZUFjdGlvbiA9ICdbRGFmZkNhcnRdIENhcnQgUGxhY2UgT3JkZXIgRmFpbHVyZSBBY3Rpb24nXG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydFBsYWNlT3JkZXI8VCBleHRlbmRzIERhZmZDYXJ0UGF5bWVudE1ldGhvZCA9IERhZmZDYXJ0UGF5bWVudE1ldGhvZD4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRPcmRlckFjdGlvblR5cGVzLkNhcnRQbGFjZU9yZGVyQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkPzogVCkge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0UGxhY2VPcmRlclN1Y2Nlc3M8VCBleHRlbmRzIERhZmZDYXJ0T3JkZXJSZXN1bHQgPSBEYWZmQ2FydE9yZGVyUmVzdWx0PiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydE9yZGVyQWN0aW9uVHlwZXMuQ2FydFBsYWNlT3JkZXJTdWNjZXNzQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBUKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRQbGFjZU9yZGVyRmFpbHVyZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydE9yZGVyQWN0aW9uVHlwZXMuQ2FydFBsYWNlT3JkZXJGYWlsdXJlQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBEYWZmU3RhdGVFcnJvcikge31cbn1cblxuZXhwb3J0IHR5cGUgRGFmZkNhcnRPcmRlckFjdGlvbnM8XG4gIFQgZXh0ZW5kcyBEYWZmQ2FydE9yZGVyUmVzdWx0ID0gRGFmZkNhcnRPcmRlclJlc3VsdCxcbiAgViBleHRlbmRzIERhZmZDYXJ0UGF5bWVudE1ldGhvZCA9IERhZmZDYXJ0UGF5bWVudE1ldGhvZFxuPiA9XG4gIHwgRGFmZkNhcnRQbGFjZU9yZGVyPFY+XG4gIHwgRGFmZkNhcnRQbGFjZU9yZGVyU3VjY2VzczxUPlxuICB8IERhZmZDYXJ0UGxhY2VPcmRlckZhaWx1cmU7XG4iXX0=