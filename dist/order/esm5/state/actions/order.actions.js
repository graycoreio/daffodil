/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffOrderActionTypes = {
    OrderLoadAction: '[Order] Order Load Action',
    OrderLoadSuccessAction: '[Order] Order Load Success Action',
    OrderLoadFailureAction: '[Order] Order Load Failure Action',
    OrderListAction: '[Order] Order List Action',
    OrderListSuccessAction: '[Order] Order List Success Action',
    OrderListFailureAction: '[Order] Order List Failure Action',
};
export { DaffOrderActionTypes };
/**
 * Triggers the loading of the specified order.
 *
 * @param orderId The order ID.
 * @param cartId The optional guest cart ID.
 * @template T, V
 */
var /**
 * Triggers the loading of the specified order.
 *
 * @param orderId The order ID.
 * @param cartId The optional guest cart ID.
 * @template T, V
 */
DaffOrderLoad = /** @class */ (function () {
    function DaffOrderLoad(orderId, cartId) {
        this.orderId = orderId;
        this.cartId = cartId;
        this.type = DaffOrderActionTypes.OrderLoadAction;
    }
    return DaffOrderLoad;
}());
/**
 * Triggers the loading of the specified order.
 *
 * @param orderId The order ID.
 * @param cartId The optional guest cart ID.
 * @template T, V
 */
export { DaffOrderLoad };
if (false) {
    /** @type {?} */
    DaffOrderLoad.prototype.type;
    /** @type {?} */
    DaffOrderLoad.prototype.orderId;
    /** @type {?} */
    DaffOrderLoad.prototype.cartId;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffOrderLoadSuccess = /** @class */ (function () {
    function DaffOrderLoadSuccess(payload) {
        this.payload = payload;
        this.type = DaffOrderActionTypes.OrderLoadSuccessAction;
    }
    return DaffOrderLoadSuccess;
}());
/**
 * @template T
 */
export { DaffOrderLoadSuccess };
if (false) {
    /** @type {?} */
    DaffOrderLoadSuccess.prototype.type;
    /** @type {?} */
    DaffOrderLoadSuccess.prototype.payload;
}
var DaffOrderLoadFailure = /** @class */ (function () {
    function DaffOrderLoadFailure(payload) {
        this.payload = payload;
        this.type = DaffOrderActionTypes.OrderLoadFailureAction;
    }
    return DaffOrderLoadFailure;
}());
export { DaffOrderLoadFailure };
if (false) {
    /** @type {?} */
    DaffOrderLoadFailure.prototype.type;
    /** @type {?} */
    DaffOrderLoadFailure.prototype.payload;
}
/**
 * Triggers the loading of the orders for either the currently logged-in user or the specified guest cart.
 *
 * @param payload The guest cart ID.
 * @template T
 */
var /**
 * Triggers the loading of the orders for either the currently logged-in user or the specified guest cart.
 *
 * @param payload The guest cart ID.
 * @template T
 */
DaffOrderList = /** @class */ (function () {
    function DaffOrderList(payload) {
        this.payload = payload;
        this.type = DaffOrderActionTypes.OrderListAction;
    }
    return DaffOrderList;
}());
/**
 * Triggers the loading of the orders for either the currently logged-in user or the specified guest cart.
 *
 * @param payload The guest cart ID.
 * @template T
 */
export { DaffOrderList };
if (false) {
    /** @type {?} */
    DaffOrderList.prototype.type;
    /** @type {?} */
    DaffOrderList.prototype.payload;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffOrderListSuccess = /** @class */ (function () {
    function DaffOrderListSuccess(payload) {
        this.payload = payload;
        this.type = DaffOrderActionTypes.OrderListSuccessAction;
    }
    return DaffOrderListSuccess;
}());
/**
 * @template T
 */
export { DaffOrderListSuccess };
if (false) {
    /** @type {?} */
    DaffOrderListSuccess.prototype.type;
    /** @type {?} */
    DaffOrderListSuccess.prototype.payload;
}
var DaffOrderListFailure = /** @class */ (function () {
    function DaffOrderListFailure(payload) {
        this.payload = payload;
        this.type = DaffOrderActionTypes.OrderListFailureAction;
    }
    return DaffOrderListFailure;
}());
export { DaffOrderListFailure };
if (false) {
    /** @type {?} */
    DaffOrderListFailure.prototype.type;
    /** @type {?} */
    DaffOrderListFailure.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci9zdGF0ZS8iLCJzb3VyY2VzIjpbImFjdGlvbnMvb3JkZXIuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFNRSxpQkFBa0IsMkJBQTJCO0lBQzdDLHdCQUF5QixtQ0FBbUM7SUFDNUQsd0JBQXlCLG1DQUFtQztJQUM1RCxpQkFBa0IsMkJBQTJCO0lBQzdDLHdCQUF5QixtQ0FBbUM7SUFDNUQsd0JBQXlCLG1DQUFtQzs7Ozs7Ozs7OztBQVM5RDs7Ozs7Ozs7SUFNRSx1QkFBbUIsT0FBZ0IsRUFBUyxNQUFnQjtRQUF6QyxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBVTtRQUZuRCxTQUFJLEdBQUcsb0JBQW9CLENBQUMsZUFBZSxDQUFDO0lBRVUsQ0FBQztJQUNsRSxvQkFBQztBQUFELENBQUMsQUFQRCxJQU9DOzs7Ozs7Ozs7OztJQUhDLDZCQUFxRDs7SUFFekMsZ0NBQXVCOztJQUFFLCtCQUF1Qjs7Ozs7QUFHOUQ7Ozs7SUFHRSw4QkFBbUIsT0FBVTtRQUFWLFlBQU8sR0FBUCxPQUFPLENBQUc7UUFGcEIsU0FBSSxHQUFHLG9CQUFvQixDQUFDLHNCQUFzQixDQUFDO0lBRTVCLENBQUM7SUFDbkMsMkJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7Ozs7OztJQUhDLG9DQUE0RDs7SUFFaEQsdUNBQWlCOztBQUcvQjtJQUdFLDhCQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUZ6QixTQUFJLEdBQUcsb0JBQW9CLENBQUMsc0JBQXNCLENBQUM7SUFFdkIsQ0FBQztJQUN4QywyQkFBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7O0lBSEMsb0NBQTREOztJQUVoRCx1Q0FBc0I7Ozs7Ozs7O0FBUXBDOzs7Ozs7O0lBR0UsdUJBQW1CLE9BQWlCO1FBQWpCLFlBQU8sR0FBUCxPQUFPLENBQVU7UUFGM0IsU0FBSSxHQUFHLG9CQUFvQixDQUFDLGVBQWUsQ0FBQztJQUVkLENBQUM7SUFDMUMsb0JBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7Ozs7Ozs7OztJQUhDLDZCQUFxRDs7SUFFekMsZ0NBQXdCOzs7OztBQUd0Qzs7OztJQUdFLDhCQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUZ0QixTQUFJLEdBQUcsb0JBQW9CLENBQUMsc0JBQXNCLENBQUM7SUFFMUIsQ0FBQztJQUNyQywyQkFBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7Ozs7O0lBSEMsb0NBQTREOztJQUVoRCx1Q0FBbUI7O0FBR2pDO0lBR0UsOEJBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRnpCLFNBQUksR0FBRyxvQkFBb0IsQ0FBQyxzQkFBc0IsQ0FBQztJQUV2QixDQUFDO0lBQ3hDLDJCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7SUFIQyxvQ0FBNEQ7O0lBRWhELHVDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgRGFmZkNhcnQgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQgeyBEYWZmT3JkZXIgfSBmcm9tICdAZGFmZm9kaWwvb3JkZXInO1xuXG5leHBvcnQgZW51bSBEYWZmT3JkZXJBY3Rpb25UeXBlcyB7XG4gIE9yZGVyTG9hZEFjdGlvbiA9ICdbT3JkZXJdIE9yZGVyIExvYWQgQWN0aW9uJyxcbiAgT3JkZXJMb2FkU3VjY2Vzc0FjdGlvbiA9ICdbT3JkZXJdIE9yZGVyIExvYWQgU3VjY2VzcyBBY3Rpb24nLFxuICBPcmRlckxvYWRGYWlsdXJlQWN0aW9uID0gJ1tPcmRlcl0gT3JkZXIgTG9hZCBGYWlsdXJlIEFjdGlvbicsXG4gIE9yZGVyTGlzdEFjdGlvbiA9ICdbT3JkZXJdIE9yZGVyIExpc3QgQWN0aW9uJyxcbiAgT3JkZXJMaXN0U3VjY2Vzc0FjdGlvbiA9ICdbT3JkZXJdIE9yZGVyIExpc3QgU3VjY2VzcyBBY3Rpb24nLFxuICBPcmRlckxpc3RGYWlsdXJlQWN0aW9uID0gJ1tPcmRlcl0gT3JkZXIgTGlzdCBGYWlsdXJlIEFjdGlvbidcbn1cblxuLyoqXG4gKiBUcmlnZ2VycyB0aGUgbG9hZGluZyBvZiB0aGUgc3BlY2lmaWVkIG9yZGVyLlxuICpcbiAqIEBwYXJhbSBvcmRlcklkIFRoZSBvcmRlciBJRC5cbiAqIEBwYXJhbSBjYXJ0SWQgVGhlIG9wdGlvbmFsIGd1ZXN0IGNhcnQgSUQuXG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmT3JkZXJMb2FkPFxuICBUIGV4dGVuZHMgRGFmZk9yZGVyID0gRGFmZk9yZGVyLFxuICBWIGV4dGVuZHMgRGFmZkNhcnQgPSBEYWZmQ2FydFxuPiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmT3JkZXJBY3Rpb25UeXBlcy5PcmRlckxvYWRBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIG9yZGVySWQ6IFRbJ2lkJ10sIHB1YmxpYyBjYXJ0SWQ/OiBWWydpZCddKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGFmZk9yZGVyTG9hZFN1Y2Nlc3M8VCBleHRlbmRzIERhZmZPcmRlciA9IERhZmZPcmRlcj4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZk9yZGVyQWN0aW9uVHlwZXMuT3JkZXJMb2FkU3VjY2Vzc0FjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVCkge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZPcmRlckxvYWRGYWlsdXJlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZPcmRlckFjdGlvblR5cGVzLk9yZGVyTG9hZEZhaWx1cmVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cbn1cblxuLyoqXG4gKiBUcmlnZ2VycyB0aGUgbG9hZGluZyBvZiB0aGUgb3JkZXJzIGZvciBlaXRoZXIgdGhlIGN1cnJlbnRseSBsb2dnZWQtaW4gdXNlciBvciB0aGUgc3BlY2lmaWVkIGd1ZXN0IGNhcnQuXG4gKlxuICogQHBhcmFtIHBheWxvYWQgVGhlIGd1ZXN0IGNhcnQgSUQuXG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmT3JkZXJMaXN0PFQgZXh0ZW5kcyBEYWZmQ2FydCA9IERhZmZDYXJ0PiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmT3JkZXJBY3Rpb25UeXBlcy5PcmRlckxpc3RBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ/OiBUWydpZCddKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGFmZk9yZGVyTGlzdFN1Y2Nlc3M8VCBleHRlbmRzIERhZmZPcmRlciA9IERhZmZPcmRlcj4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZk9yZGVyQWN0aW9uVHlwZXMuT3JkZXJMaXN0U3VjY2Vzc0FjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVFtdKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGFmZk9yZGVyTGlzdEZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZk9yZGVyQWN0aW9uVHlwZXMuT3JkZXJMaXN0RmFpbHVyZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxufVxuXG5leHBvcnQgdHlwZSBEYWZmT3JkZXJBY3Rpb25zPFxuICBUIGV4dGVuZHMgRGFmZk9yZGVyID0gRGFmZk9yZGVyLFxuICBWIGV4dGVuZHMgRGFmZkNhcnQgPSBEYWZmQ2FydFxuPiA9XG4gIHwgRGFmZk9yZGVyTG9hZDxULCBWPlxuICB8IERhZmZPcmRlckxvYWRTdWNjZXNzPFQ+XG4gIHwgRGFmZk9yZGVyTG9hZEZhaWx1cmVcbiAgfCBEYWZmT3JkZXJMaXN0XG4gIHwgRGFmZk9yZGVyTGlzdFN1Y2Nlc3M8VD5cbiAgfCBEYWZmT3JkZXJMaXN0RmFpbHVyZVxuIl19