/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffOrderActionTypes = {
    PlaceOrderAction: '[Order] Place Order Action',
    PlaceOrderSuccessAction: '[Order] Place Order Success Action',
    PlaceOrderFailureAction: '[Order] Place Order Failure Action',
};
export { DaffOrderActionTypes };
/** @enum {string} */
var OrderActionTypes = {
    PlaceOrderAction: '[Order] Place Order Action',
    PlaceOrderSuccessAction: '[Order] Place Order Success Action',
    PlaceOrderFailureAction: '[Order] Place Order Failure Action',
};
export { OrderActionTypes };
/**
 * @deprecated
 */
var /**
 * @deprecated
 */
PlaceOrder = /** @class */ (function () {
    function PlaceOrder(payload) {
        this.payload = payload;
        this.type = DaffOrderActionTypes.PlaceOrderAction;
    }
    return PlaceOrder;
}());
/**
 * @deprecated
 */
export { PlaceOrder };
if (false) {
    /** @type {?} */
    PlaceOrder.prototype.type;
    /** @type {?} */
    PlaceOrder.prototype.payload;
}
/**
 * @deprecated
 */
var /**
 * @deprecated
 */
DaffPlaceOrder = /** @class */ (function () {
    function DaffPlaceOrder(payload) {
        this.payload = payload;
        this.type = DaffOrderActionTypes.PlaceOrderAction;
    }
    return DaffPlaceOrder;
}());
/**
 * @deprecated
 */
export { DaffPlaceOrder };
if (false) {
    /** @type {?} */
    DaffPlaceOrder.prototype.type;
    /** @type {?} */
    DaffPlaceOrder.prototype.payload;
}
/**
 * @deprecated
 */
var /**
 * @deprecated
 */
DaffPlaceOrderSuccess = /** @class */ (function () {
    function DaffPlaceOrderSuccess(payload) {
        this.payload = payload;
        this.type = DaffOrderActionTypes.PlaceOrderSuccessAction;
    }
    return DaffPlaceOrderSuccess;
}());
/**
 * @deprecated
 */
export { DaffPlaceOrderSuccess };
if (false) {
    /** @type {?} */
    DaffPlaceOrderSuccess.prototype.type;
    /** @type {?} */
    DaffPlaceOrderSuccess.prototype.payload;
}
/**
 * @deprecated
 */
var /**
 * @deprecated
 */
DaffPlaceOrderFailure = /** @class */ (function () {
    function DaffPlaceOrderFailure(payload) {
        this.payload = payload;
        this.type = DaffOrderActionTypes.PlaceOrderFailureAction;
    }
    return DaffPlaceOrderFailure;
}());
/**
 * @deprecated
 */
export { DaffPlaceOrderFailure };
if (false) {
    /** @type {?} */
    DaffPlaceOrderFailure.prototype.type;
    /** @type {?} */
    DaffPlaceOrderFailure.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jaGVja291dC8iLCJzb3VyY2VzIjpbIm9yZGVyL2FjdGlvbnMvb3JkZXIuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFTRSxrQkFBbUIsNEJBQTRCO0lBQy9DLHlCQUEwQixvQ0FBb0M7SUFDOUQseUJBQTBCLG9DQUFvQzs7Ozs7SUFPOUQsa0JBQW1CLDRCQUE0QjtJQUMvQyx5QkFBMEIsb0NBQW9DO0lBQzlELHlCQUEwQixvQ0FBb0M7Ozs7OztBQU1oRTs7OztJQUdFLG9CQUFtQixPQUFpQjtRQUFqQixZQUFPLEdBQVAsT0FBTyxDQUFVO1FBRjNCLFNBQUksR0FBRyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQztJQUVmLENBQUM7SUFDMUMsaUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7Ozs7OztJQUhDLDBCQUFzRDs7SUFFMUMsNkJBQXdCOzs7OztBQU10Qzs7OztJQUdFLHdCQUFtQixPQUFpQjtRQUFqQixZQUFPLEdBQVAsT0FBTyxDQUFVO1FBRjNCLFNBQUksR0FBRyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQztJQUVmLENBQUM7SUFDMUMscUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7Ozs7OztJQUhDLDhCQUFzRDs7SUFFMUMsaUNBQXdCOzs7OztBQU10Qzs7OztJQUdFLCtCQUFtQixPQUFrQjtRQUFsQixZQUFPLEdBQVAsT0FBTyxDQUFXO1FBRjVCLFNBQUksR0FBRyxvQkFBb0IsQ0FBQyx1QkFBdUIsQ0FBQztJQUVyQixDQUFDO0lBQzNDLDRCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7Ozs7SUFIQyxxQ0FBNkQ7O0lBRWpELHdDQUF5Qjs7Ozs7QUFNdkM7Ozs7SUFHRSwrQkFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFGekIsU0FBSSxHQUFHLG9CQUFvQixDQUFDLHVCQUF1QixDQUFDO0lBRXhCLENBQUM7SUFDeEMsNEJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7Ozs7OztJQUhDLHFDQUE2RDs7SUFFakQsd0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRGFmZkNhcnQgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5cbmltcG9ydCB7IERhZmZPcmRlciB9IGZyb20gJy4uLy4uL21vZGVscy9vcmRlci9vcmRlcic7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGVudW0gRGFmZk9yZGVyQWN0aW9uVHlwZXMge1xuICBQbGFjZU9yZGVyQWN0aW9uID0gJ1tPcmRlcl0gUGxhY2UgT3JkZXIgQWN0aW9uJyxcbiAgUGxhY2VPcmRlclN1Y2Nlc3NBY3Rpb24gPSAnW09yZGVyXSBQbGFjZSBPcmRlciBTdWNjZXNzIEFjdGlvbicsXG4gIFBsYWNlT3JkZXJGYWlsdXJlQWN0aW9uID0gJ1tPcmRlcl0gUGxhY2UgT3JkZXIgRmFpbHVyZSBBY3Rpb24nXG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGVudW0gT3JkZXJBY3Rpb25UeXBlcyB7XG4gIFBsYWNlT3JkZXJBY3Rpb24gPSAnW09yZGVyXSBQbGFjZSBPcmRlciBBY3Rpb24nLFxuICBQbGFjZU9yZGVyU3VjY2Vzc0FjdGlvbiA9ICdbT3JkZXJdIFBsYWNlIE9yZGVyIFN1Y2Nlc3MgQWN0aW9uJyxcbiAgUGxhY2VPcmRlckZhaWx1cmVBY3Rpb24gPSAnW09yZGVyXSBQbGFjZSBPcmRlciBGYWlsdXJlIEFjdGlvbidcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY2xhc3MgUGxhY2VPcmRlciBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmT3JkZXJBY3Rpb25UeXBlcy5QbGFjZU9yZGVyQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBEYWZmQ2FydCkge31cbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY2xhc3MgRGFmZlBsYWNlT3JkZXIgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZk9yZGVyQWN0aW9uVHlwZXMuUGxhY2VPcmRlckFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRGFmZkNhcnQpIHt9XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZQbGFjZU9yZGVyU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmT3JkZXJBY3Rpb25UeXBlcy5QbGFjZU9yZGVyU3VjY2Vzc0FjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRGFmZk9yZGVyKSB7fVxufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmUGxhY2VPcmRlckZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZk9yZGVyQWN0aW9uVHlwZXMuUGxhY2VPcmRlckZhaWx1cmVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgdHlwZSBEYWZmT3JkZXJBY3Rpb25zID1cbiAgICB8IERhZmZQbGFjZU9yZGVyXG4gICAgfCBQbGFjZU9yZGVyXG4gICAgfCBEYWZmUGxhY2VPcmRlclN1Y2Nlc3NcbiAgICB8IERhZmZQbGFjZU9yZGVyRmFpbHVyZTtcbiJdfQ==