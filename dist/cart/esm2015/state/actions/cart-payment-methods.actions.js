/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffCartPaymentMethodsActionTypes = {
    CartPaymentMethodsLoadAction: '[DaffCart] Payment Methods Load Action',
    CartPaymentMethodsLoadSuccessAction: '[DaffCart] Payment Methods Load Success Action',
    CartPaymentMethodsLoadFailureAction: '[DaffCart] Payment Methods Load Failure Action',
};
export { DaffCartPaymentMethodsActionTypes };
export class DaffCartPaymentMethodsLoad {
    constructor() {
        this.type = DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartPaymentMethodsLoad.prototype.type;
}
/**
 * @template T
 */
export class DaffCartPaymentMethodsLoadSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartPaymentMethodsLoadSuccess.prototype.type;
    /** @type {?} */
    DaffCartPaymentMethodsLoadSuccess.prototype.payload;
}
export class DaffCartPaymentMethodsLoadFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartPaymentMethodsLoadFailure.prototype.type;
    /** @type {?} */
    DaffCartPaymentMethodsLoadFailure.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYXltZW50LW1ldGhvZHMuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L3N0YXRlLyIsInNvdXJjZXMiOlsiYWN0aW9ucy9jYXJ0LXBheW1lbnQtbWV0aG9kcy5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQU1FLDhCQUErQix3Q0FBd0M7SUFDdkUscUNBQXNDLGdEQUFnRDtJQUN0RixxQ0FBc0MsZ0RBQWdEOzs7QUFHeEYsTUFBTSxPQUFPLDBCQUEwQjtJQUdyQztRQUZTLFNBQUksR0FBRyxpQ0FBaUMsQ0FBQyw0QkFBNEIsQ0FBQztJQUVoRSxDQUFDO0NBQ2pCOzs7SUFIQywwQ0FBK0U7Ozs7O0FBS2pGLE1BQU0sT0FBTyxpQ0FBaUM7Ozs7SUFHNUMsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFGdEIsU0FBSSxHQUFHLGlDQUFpQyxDQUFDLG1DQUFtQyxDQUFDO0lBRXBELENBQUM7Q0FDcEM7OztJQUhDLGlEQUFzRjs7SUFFMUUsb0RBQW1COztBQUdqQyxNQUFNLE9BQU8saUNBQWlDOzs7O0lBRzVDLFlBQW1CLE9BQXVCO1FBQXZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBRmpDLFNBQUksR0FBRyxpQ0FBaUMsQ0FBQyxtQ0FBbUMsQ0FBQztJQUV6QyxDQUFDO0NBQy9DOzs7SUFIQyxpREFBc0Y7O0lBRTFFLG9EQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgRGFmZlN0YXRlRXJyb3IgfSBmcm9tICdAZGFmZm9kaWwvY29yZS9zdGF0ZSc7XG5pbXBvcnQgeyBEYWZmQ2FydFBheW1lbnRNZXRob2QgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5cbmV4cG9ydCBlbnVtIERhZmZDYXJ0UGF5bWVudE1ldGhvZHNBY3Rpb25UeXBlcyB7XG4gIENhcnRQYXltZW50TWV0aG9kc0xvYWRBY3Rpb24gPSAnW0RhZmZDYXJ0XSBQYXltZW50IE1ldGhvZHMgTG9hZCBBY3Rpb24nLFxuICBDYXJ0UGF5bWVudE1ldGhvZHNMb2FkU3VjY2Vzc0FjdGlvbiA9ICdbRGFmZkNhcnRdIFBheW1lbnQgTWV0aG9kcyBMb2FkIFN1Y2Nlc3MgQWN0aW9uJyxcbiAgQ2FydFBheW1lbnRNZXRob2RzTG9hZEZhaWx1cmVBY3Rpb24gPSAnW0RhZmZDYXJ0XSBQYXltZW50IE1ldGhvZHMgTG9hZCBGYWlsdXJlIEFjdGlvbicsXG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydFBheW1lbnRNZXRob2RzTG9hZCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydFBheW1lbnRNZXRob2RzQWN0aW9uVHlwZXMuQ2FydFBheW1lbnRNZXRob2RzTG9hZEFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydFBheW1lbnRNZXRob2RzTG9hZFN1Y2Nlc3M8VCBleHRlbmRzIERhZmZDYXJ0UGF5bWVudE1ldGhvZCA9IERhZmZDYXJ0UGF5bWVudE1ldGhvZD4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRQYXltZW50TWV0aG9kc0FjdGlvblR5cGVzLkNhcnRQYXltZW50TWV0aG9kc0xvYWRTdWNjZXNzQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBUW10pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydFBheW1lbnRNZXRob2RzTG9hZEZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRQYXltZW50TWV0aG9kc0FjdGlvblR5cGVzLkNhcnRQYXltZW50TWV0aG9kc0xvYWRGYWlsdXJlQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBEYWZmU3RhdGVFcnJvcikge31cbn1cblxuZXhwb3J0IHR5cGUgRGFmZkNhcnRQYXltZW50TWV0aG9kc0FjdGlvbnM8VCBleHRlbmRzIERhZmZDYXJ0UGF5bWVudE1ldGhvZCA9IERhZmZDYXJ0UGF5bWVudE1ldGhvZD4gPVxuICB8IERhZmZDYXJ0UGF5bWVudE1ldGhvZHNMb2FkXG4gIHwgRGFmZkNhcnRQYXltZW50TWV0aG9kc0xvYWRTdWNjZXNzPFQ+XG4gIHwgRGFmZkNhcnRQYXltZW50TWV0aG9kc0xvYWRGYWlsdXJlXG4iXX0=