/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffOrderActionTypes = {
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
export class DaffOrderLoad {
    /**
     * @param {?} orderId
     * @param {?=} cartId
     */
    constructor(orderId, cartId) {
        this.orderId = orderId;
        this.cartId = cartId;
        this.type = DaffOrderActionTypes.OrderLoadAction;
    }
}
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
export class DaffOrderLoadSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffOrderActionTypes.OrderLoadSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffOrderLoadSuccess.prototype.type;
    /** @type {?} */
    DaffOrderLoadSuccess.prototype.payload;
}
export class DaffOrderLoadFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffOrderActionTypes.OrderLoadFailureAction;
    }
}
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
export class DaffOrderList {
    /**
     * @param {?=} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffOrderActionTypes.OrderListAction;
    }
}
if (false) {
    /** @type {?} */
    DaffOrderList.prototype.type;
    /** @type {?} */
    DaffOrderList.prototype.payload;
}
/**
 * @template T
 */
export class DaffOrderListSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffOrderActionTypes.OrderListSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffOrderListSuccess.prototype.type;
    /** @type {?} */
    DaffOrderListSuccess.prototype.payload;
}
export class DaffOrderListFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffOrderActionTypes.OrderListFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffOrderListFailure.prototype.type;
    /** @type {?} */
    DaffOrderListFailure.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci9zdGF0ZS8iLCJzb3VyY2VzIjpbImFjdGlvbnMvb3JkZXIuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFNRSxpQkFBa0IsMkJBQTJCO0lBQzdDLHdCQUF5QixtQ0FBbUM7SUFDNUQsd0JBQXlCLG1DQUFtQztJQUM1RCxpQkFBa0IsMkJBQTJCO0lBQzdDLHdCQUF5QixtQ0FBbUM7SUFDNUQsd0JBQXlCLG1DQUFtQzs7Ozs7Ozs7OztBQVM5RCxNQUFNLE9BQU8sYUFBYTs7Ozs7SUFNeEIsWUFBbUIsT0FBZ0IsRUFBUyxNQUFnQjtRQUF6QyxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBVTtRQUZuRCxTQUFJLEdBQUcsb0JBQW9CLENBQUMsZUFBZSxDQUFDO0lBRVUsQ0FBQztDQUNqRTs7O0lBSEMsNkJBQXFEOztJQUV6QyxnQ0FBdUI7O0lBQUUsK0JBQXVCOzs7OztBQUc5RCxNQUFNLE9BQU8sb0JBQW9COzs7O0lBRy9CLFlBQW1CLE9BQVU7UUFBVixZQUFPLEdBQVAsT0FBTyxDQUFHO1FBRnBCLFNBQUksR0FBRyxvQkFBb0IsQ0FBQyxzQkFBc0IsQ0FBQztJQUU1QixDQUFDO0NBQ2xDOzs7SUFIQyxvQ0FBNEQ7O0lBRWhELHVDQUFpQjs7QUFHL0IsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUcvQixZQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUZ6QixTQUFJLEdBQUcsb0JBQW9CLENBQUMsc0JBQXNCLENBQUM7SUFFdkIsQ0FBQztDQUN2Qzs7O0lBSEMsb0NBQTREOztJQUVoRCx1Q0FBc0I7Ozs7Ozs7O0FBUXBDLE1BQU0sT0FBTyxhQUFhOzs7O0lBR3hCLFlBQW1CLE9BQWlCO1FBQWpCLFlBQU8sR0FBUCxPQUFPLENBQVU7UUFGM0IsU0FBSSxHQUFHLG9CQUFvQixDQUFDLGVBQWUsQ0FBQztJQUVkLENBQUM7Q0FDekM7OztJQUhDLDZCQUFxRDs7SUFFekMsZ0NBQXdCOzs7OztBQUd0QyxNQUFNLE9BQU8sb0JBQW9COzs7O0lBRy9CLFlBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRnRCLFNBQUksR0FBRyxvQkFBb0IsQ0FBQyxzQkFBc0IsQ0FBQztJQUUxQixDQUFDO0NBQ3BDOzs7SUFIQyxvQ0FBNEQ7O0lBRWhELHVDQUFtQjs7QUFHakMsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUcvQixZQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUZ6QixTQUFJLEdBQUcsb0JBQW9CLENBQUMsc0JBQXNCLENBQUM7SUFFdkIsQ0FBQztDQUN2Qzs7O0lBSEMsb0NBQTREOztJQUVoRCx1Q0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IERhZmZDYXJ0IH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuaW1wb3J0IHsgRGFmZk9yZGVyIH0gZnJvbSAnQGRhZmZvZGlsL29yZGVyJztcblxuZXhwb3J0IGVudW0gRGFmZk9yZGVyQWN0aW9uVHlwZXMge1xuICBPcmRlckxvYWRBY3Rpb24gPSAnW09yZGVyXSBPcmRlciBMb2FkIEFjdGlvbicsXG4gIE9yZGVyTG9hZFN1Y2Nlc3NBY3Rpb24gPSAnW09yZGVyXSBPcmRlciBMb2FkIFN1Y2Nlc3MgQWN0aW9uJyxcbiAgT3JkZXJMb2FkRmFpbHVyZUFjdGlvbiA9ICdbT3JkZXJdIE9yZGVyIExvYWQgRmFpbHVyZSBBY3Rpb24nLFxuICBPcmRlckxpc3RBY3Rpb24gPSAnW09yZGVyXSBPcmRlciBMaXN0IEFjdGlvbicsXG4gIE9yZGVyTGlzdFN1Y2Nlc3NBY3Rpb24gPSAnW09yZGVyXSBPcmRlciBMaXN0IFN1Y2Nlc3MgQWN0aW9uJyxcbiAgT3JkZXJMaXN0RmFpbHVyZUFjdGlvbiA9ICdbT3JkZXJdIE9yZGVyIExpc3QgRmFpbHVyZSBBY3Rpb24nXG59XG5cbi8qKlxuICogVHJpZ2dlcnMgdGhlIGxvYWRpbmcgb2YgdGhlIHNwZWNpZmllZCBvcmRlci5cbiAqXG4gKiBAcGFyYW0gb3JkZXJJZCBUaGUgb3JkZXIgSUQuXG4gKiBAcGFyYW0gY2FydElkIFRoZSBvcHRpb25hbCBndWVzdCBjYXJ0IElELlxuICovXG5leHBvcnQgY2xhc3MgRGFmZk9yZGVyTG9hZDxcbiAgVCBleHRlbmRzIERhZmZPcmRlciA9IERhZmZPcmRlcixcbiAgViBleHRlbmRzIERhZmZDYXJ0ID0gRGFmZkNhcnRcbj4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZk9yZGVyQWN0aW9uVHlwZXMuT3JkZXJMb2FkQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBvcmRlcklkOiBUWydpZCddLCBwdWJsaWMgY2FydElkPzogVlsnaWQnXSkge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZPcmRlckxvYWRTdWNjZXNzPFQgZXh0ZW5kcyBEYWZmT3JkZXIgPSBEYWZmT3JkZXI+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZPcmRlckFjdGlvblR5cGVzLk9yZGVyTG9hZFN1Y2Nlc3NBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFQpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmT3JkZXJMb2FkRmFpbHVyZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmT3JkZXJBY3Rpb25UeXBlcy5PcmRlckxvYWRGYWlsdXJlQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XG59XG5cbi8qKlxuICogVHJpZ2dlcnMgdGhlIGxvYWRpbmcgb2YgdGhlIG9yZGVycyBmb3IgZWl0aGVyIHRoZSBjdXJyZW50bHkgbG9nZ2VkLWluIHVzZXIgb3IgdGhlIHNwZWNpZmllZCBndWVzdCBjYXJ0LlxuICpcbiAqIEBwYXJhbSBwYXlsb2FkIFRoZSBndWVzdCBjYXJ0IElELlxuICovXG5leHBvcnQgY2xhc3MgRGFmZk9yZGVyTGlzdDxUIGV4dGVuZHMgRGFmZkNhcnQgPSBEYWZmQ2FydD4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZk9yZGVyQWN0aW9uVHlwZXMuT3JkZXJMaXN0QWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkPzogVFsnaWQnXSkge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZPcmRlckxpc3RTdWNjZXNzPFQgZXh0ZW5kcyBEYWZmT3JkZXIgPSBEYWZmT3JkZXI+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZPcmRlckFjdGlvblR5cGVzLk9yZGVyTGlzdFN1Y2Nlc3NBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFRbXSkge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZPcmRlckxpc3RGYWlsdXJlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZPcmRlckFjdGlvblR5cGVzLk9yZGVyTGlzdEZhaWx1cmVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cbn1cblxuZXhwb3J0IHR5cGUgRGFmZk9yZGVyQWN0aW9uczxcbiAgVCBleHRlbmRzIERhZmZPcmRlciA9IERhZmZPcmRlcixcbiAgViBleHRlbmRzIERhZmZDYXJ0ID0gRGFmZkNhcnRcbj4gPVxuICB8IERhZmZPcmRlckxvYWQ8VCwgVj5cbiAgfCBEYWZmT3JkZXJMb2FkU3VjY2VzczxUPlxuICB8IERhZmZPcmRlckxvYWRGYWlsdXJlXG4gIHwgRGFmZk9yZGVyTGlzdFxuICB8IERhZmZPcmRlckxpc3RTdWNjZXNzPFQ+XG4gIHwgRGFmZk9yZGVyTGlzdEZhaWx1cmVcbiJdfQ==