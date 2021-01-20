/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffProductActionTypes = {
    ProductLoadAction: '[Product] Load Action',
    ProductLoadSuccessAction: '[Product] Load Success Action',
    ProductLoadFailureAction: '[Product] Load Failure Action',
    UpdateQtyAction: '[Product] Update Qty Action',
    ProductModifyAction: '[Product] Product Modify Action',
};
export { DaffProductActionTypes };
/**
 * Triggers a request for a Product.
 *
 * @param payload - Id of requested Product
 */
export class DaffProductLoad {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffProductActionTypes.ProductLoadAction;
    }
}
if (false) {
    /** @type {?} */
    DaffProductLoad.prototype.type;
    /** @type {?} */
    DaffProductLoad.prototype.payload;
}
/**
 * An action called when a request for a Product succeeded.
 *
 * @param payload - A Product
 * @template T
 */
export class DaffProductLoadSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffProductActionTypes.ProductLoadSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffProductLoadSuccess.prototype.type;
    /** @type {?} */
    DaffProductLoadSuccess.prototype.payload;
}
/**
 * An action called when a request for a Product failed.
 *
 * @param payload - An error message
 */
export class DaffProductLoadFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffProductActionTypes.ProductLoadFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffProductLoadFailure.prototype.type;
    /** @type {?} */
    DaffProductLoadFailure.prototype.payload;
}
/**
 * Update the qty of a product in an redux store.
 *
 * @param payload - The qty of the product.
 */
export class DaffProductUpdateQty {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffProductActionTypes.UpdateQtyAction;
    }
}
if (false) {
    /** @type {?} */
    DaffProductUpdateQty.prototype.type;
    /** @type {?} */
    DaffProductUpdateQty.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvIiwic291cmNlcyI6WyJhY3Rpb25zL3Byb2R1Y3QuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFPSSxtQkFBb0IsdUJBQXVCO0lBQzNDLDBCQUEyQiwrQkFBK0I7SUFDMUQsMEJBQTJCLCtCQUErQjtJQUMxRCxpQkFBa0IsNkJBQTZCO0lBQy9DLHFCQUFzQixpQ0FBaUM7Ozs7Ozs7O0FBUTNELE1BQU0sT0FBTyxlQUFlOzs7O0lBRzFCLFlBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRnpCLFNBQUksR0FBRyxzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQztJQUVwQixDQUFDO0NBQ3ZDOzs7SUFIQywrQkFBeUQ7O0lBRTdDLGtDQUFzQjs7Ozs7Ozs7QUFRcEMsTUFBTSxPQUFPLHNCQUFzQjs7OztJQUcvQixZQUFtQixPQUFVO1FBQVYsWUFBTyxHQUFQLE9BQU8sQ0FBRztRQUZwQixTQUFJLEdBQUcsc0JBQXNCLENBQUMsd0JBQXdCLENBQUM7SUFFaEMsQ0FBQztDQUNwQzs7O0lBSEcsc0NBQWdFOztJQUVwRCx5Q0FBaUI7Ozs7Ozs7QUFRakMsTUFBTSxPQUFPLHNCQUFzQjs7OztJQUdqQyxZQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUZ6QixTQUFJLEdBQUcsc0JBQXNCLENBQUMsd0JBQXdCLENBQUM7SUFFM0IsQ0FBQztDQUN2Qzs7O0lBSEMsc0NBQWdFOztJQUVwRCx5Q0FBc0I7Ozs7Ozs7QUFRcEMsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUc3QixZQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUZ6QixTQUFJLEdBQUcsc0JBQXNCLENBQUMsZUFBZSxDQUFDO0lBRWxCLENBQUM7Q0FDekM7OztJQUhHLG9DQUF1RDs7SUFFM0MsdUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRGFmZlByb2R1Y3QgfSBmcm9tICcuLi9tb2RlbHMvcHJvZHVjdCc7XG5cbi8qKlxuICogQWN0aW9uIHR5cGVzIGZvciBQcm9kdWN0IEFjdGlvbnMuXG4gKi9cbmV4cG9ydCBlbnVtIERhZmZQcm9kdWN0QWN0aW9uVHlwZXMge1xuICAgIFByb2R1Y3RMb2FkQWN0aW9uID0gJ1tQcm9kdWN0XSBMb2FkIEFjdGlvbicsXG4gICAgUHJvZHVjdExvYWRTdWNjZXNzQWN0aW9uID0gJ1tQcm9kdWN0XSBMb2FkIFN1Y2Nlc3MgQWN0aW9uJyxcbiAgICBQcm9kdWN0TG9hZEZhaWx1cmVBY3Rpb24gPSAnW1Byb2R1Y3RdIExvYWQgRmFpbHVyZSBBY3Rpb24nLFxuICAgIFVwZGF0ZVF0eUFjdGlvbiA9ICdbUHJvZHVjdF0gVXBkYXRlIFF0eSBBY3Rpb24nLFxuICAgIFByb2R1Y3RNb2RpZnlBY3Rpb24gPSAnW1Byb2R1Y3RdIFByb2R1Y3QgTW9kaWZ5IEFjdGlvbidcbn1cblxuLyoqXG4gKiBUcmlnZ2VycyBhIHJlcXVlc3QgZm9yIGEgUHJvZHVjdC5cbiAqIFxuICogQHBhcmFtIHBheWxvYWQgLSBJZCBvZiByZXF1ZXN0ZWQgUHJvZHVjdFxuICovXG5leHBvcnQgY2xhc3MgRGFmZlByb2R1Y3RMb2FkIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZQcm9kdWN0QWN0aW9uVHlwZXMuUHJvZHVjdExvYWRBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cbn1cblxuLyoqXG4gKiBBbiBhY3Rpb24gY2FsbGVkIHdoZW4gYSByZXF1ZXN0IGZvciBhIFByb2R1Y3Qgc3VjY2VlZGVkLlxuICogXG4gKiBAcGFyYW0gcGF5bG9hZCAtIEEgUHJvZHVjdFxuICovXG5leHBvcnQgY2xhc3MgRGFmZlByb2R1Y3RMb2FkU3VjY2VzczxUIGV4dGVuZHMgRGFmZlByb2R1Y3QgPSBEYWZmUHJvZHVjdD4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICAgIHJlYWRvbmx5IHR5cGUgPSBEYWZmUHJvZHVjdEFjdGlvblR5cGVzLlByb2R1Y3RMb2FkU3VjY2Vzc0FjdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBUKSB7fVxufVxuXG4vKipcbiAqIEFuIGFjdGlvbiBjYWxsZWQgd2hlbiBhIHJlcXVlc3QgZm9yIGEgUHJvZHVjdCBmYWlsZWQuXG4gKiBcbiAqIEBwYXJhbSBwYXlsb2FkIC0gQW4gZXJyb3IgbWVzc2FnZVxuICovXG5leHBvcnQgY2xhc3MgRGFmZlByb2R1Y3RMb2FkRmFpbHVyZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmUHJvZHVjdEFjdGlvblR5cGVzLlByb2R1Y3RMb2FkRmFpbHVyZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxufVxuXG4vKipcbiAqIFVwZGF0ZSB0aGUgcXR5IG9mIGEgcHJvZHVjdCBpbiBhbiByZWR1eCBzdG9yZS5cbiAqIFxuICogQHBhcmFtIHBheWxvYWQgLSBUaGUgcXR5IG9mIHRoZSBwcm9kdWN0LlxuICovXG5leHBvcnQgY2xhc3MgRGFmZlByb2R1Y3RVcGRhdGVRdHkgaW1wbGVtZW50cyBBY3Rpb24ge1xuICAgIHJlYWRvbmx5IHR5cGUgPSBEYWZmUHJvZHVjdEFjdGlvblR5cGVzLlVwZGF0ZVF0eUFjdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBudW1iZXIpIHt9XG59XG5cbmV4cG9ydCB0eXBlIERhZmZQcm9kdWN0QWN0aW9uczxUIGV4dGVuZHMgRGFmZlByb2R1Y3QgPSBEYWZmUHJvZHVjdD4gPSBcbiAgICB8IERhZmZQcm9kdWN0TG9hZCBcbiAgICB8IERhZmZQcm9kdWN0TG9hZFN1Y2Nlc3M8VD5cbiAgICB8IERhZmZQcm9kdWN0TG9hZEZhaWx1cmVcbiAgICB8IERhZmZQcm9kdWN0VXBkYXRlUXR5OyJdfQ==