/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffProductGridActionTypes = {
    ProductGridLoadAction: '[ProductGrid] Load Action',
    ProductGridLoadSuccessAction: '[ProductGrid] Load Success Action',
    ProductGridLoadFailureAction: '[ProductGrid] Load Failure Action',
    ProductGridResetAction: '[ProductGrid] Reset Action',
};
export { DaffProductGridActionTypes };
/**
 * Triggers a request for an array of products.
 */
export class DaffProductGridLoad {
    constructor() {
        this.type = DaffProductGridActionTypes.ProductGridLoadAction;
    }
}
if (false) {
    /** @type {?} */
    DaffProductGridLoad.prototype.type;
}
/**
 * An action called when a request for of an array of products succeeded.
 *
 * @param payload - An array of Products
 * @template T
 */
export class DaffProductGridLoadSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffProductGridActionTypes.ProductGridLoadSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffProductGridLoadSuccess.prototype.type;
    /** @type {?} */
    DaffProductGridLoadSuccess.prototype.payload;
}
/**
 * An action called when a request for an array of products failed.
 *
 * @param payload - An error message
 */
export class DaffProductGridLoadFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffProductGridActionTypes.ProductGridLoadFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffProductGridLoadFailure.prototype.type;
    /** @type {?} */
    DaffProductGridLoadFailure.prototype.payload;
}
/**
 * Resets the state of the product grid redux store to its initial state.
 */
export class DaffProductGridReset {
    constructor() {
        this.type = DaffProductGridActionTypes.ProductGridResetAction;
    }
}
if (false) {
    /** @type {?} */
    DaffProductGridReset.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1ncmlkLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcHJvZHVjdC8iLCJzb3VyY2VzIjpbImFjdGlvbnMvcHJvZHVjdC1ncmlkLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBUUksdUJBQXdCLDJCQUEyQjtJQUNuRCw4QkFBK0IsbUNBQW1DO0lBQ2xFLDhCQUErQixtQ0FBbUM7SUFDbEUsd0JBQXlCLDRCQUE0Qjs7Ozs7O0FBTXpELE1BQU0sT0FBTyxtQkFBbUI7SUFHOUI7UUFGUyxTQUFJLEdBQUcsMEJBQTBCLENBQUMscUJBQXFCLENBQUM7SUFFbEQsQ0FBQztDQUNqQjs7O0lBSEMsbUNBQWlFOzs7Ozs7OztBQVVuRSxNQUFNLE9BQU8sMEJBQTBCOzs7O0lBR25DLFlBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRnRCLFNBQUksR0FBRywwQkFBMEIsQ0FBQyw0QkFBNEIsQ0FBQztJQUV0QyxDQUFDO0NBQ3RDOzs7SUFIRywwQ0FBd0U7O0lBRTVELDZDQUFtQjs7Ozs7OztBQVFuQyxNQUFNLE9BQU8sMEJBQTBCOzs7O0lBR3JDLFlBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRnpCLFNBQUksR0FBRywwQkFBMEIsQ0FBQyw0QkFBNEIsQ0FBQztJQUVuQyxDQUFDO0NBQ3ZDOzs7SUFIQywwQ0FBd0U7O0lBRTVELDZDQUFzQjs7Ozs7QUFNcEMsTUFBTSxPQUFPLG9CQUFvQjtJQUc3QjtRQUZTLFNBQUksR0FBRywwQkFBMEIsQ0FBQyxzQkFBc0IsQ0FBQztJQUVuRCxDQUFDO0NBQ25COzs7SUFIRyxvQ0FBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IERhZmZQcm9kdWN0IH0gZnJvbSAnLi4vbW9kZWxzL3Byb2R1Y3QnO1xuXG4vKiogXG4gKiBBY3Rpb24gdHlwZXMgZm9yIFByb2R1Y3QgR3JpZCBBY3Rpb25zLlxuKi9cbmV4cG9ydCBlbnVtIERhZmZQcm9kdWN0R3JpZEFjdGlvblR5cGVzIHtcbiAgICBQcm9kdWN0R3JpZExvYWRBY3Rpb24gPSAnW1Byb2R1Y3RHcmlkXSBMb2FkIEFjdGlvbicsXG4gICAgUHJvZHVjdEdyaWRMb2FkU3VjY2Vzc0FjdGlvbiA9ICdbUHJvZHVjdEdyaWRdIExvYWQgU3VjY2VzcyBBY3Rpb24nLFxuICAgIFByb2R1Y3RHcmlkTG9hZEZhaWx1cmVBY3Rpb24gPSAnW1Byb2R1Y3RHcmlkXSBMb2FkIEZhaWx1cmUgQWN0aW9uJyxcbiAgICBQcm9kdWN0R3JpZFJlc2V0QWN0aW9uID0gJ1tQcm9kdWN0R3JpZF0gUmVzZXQgQWN0aW9uJ1xufVxuXG4vKipcbiAqIFRyaWdnZXJzIGEgcmVxdWVzdCBmb3IgYW4gYXJyYXkgb2YgcHJvZHVjdHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmUHJvZHVjdEdyaWRMb2FkIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZQcm9kdWN0R3JpZEFjdGlvblR5cGVzLlByb2R1Y3RHcmlkTG9hZEFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG59XG5cbi8qKlxuICogQW4gYWN0aW9uIGNhbGxlZCB3aGVuIGEgcmVxdWVzdCBmb3Igb2YgYW4gYXJyYXkgb2YgcHJvZHVjdHMgc3VjY2VlZGVkLlxuICogXG4gKiBAcGFyYW0gcGF5bG9hZCAtIEFuIGFycmF5IG9mIFByb2R1Y3RzXG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmUHJvZHVjdEdyaWRMb2FkU3VjY2VzczxUIGV4dGVuZHMgRGFmZlByb2R1Y3QgPSBEYWZmUHJvZHVjdD4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICAgIHJlYWRvbmx5IHR5cGUgPSBEYWZmUHJvZHVjdEdyaWRBY3Rpb25UeXBlcy5Qcm9kdWN0R3JpZExvYWRTdWNjZXNzQWN0aW9uO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFRbXSkge31cbn1cblxuLyoqXG4gKiBBbiBhY3Rpb24gY2FsbGVkIHdoZW4gYSByZXF1ZXN0IGZvciBhbiBhcnJheSBvZiBwcm9kdWN0cyBmYWlsZWQuXG4gKiBcbiAqIEBwYXJhbSBwYXlsb2FkIC0gQW4gZXJyb3IgbWVzc2FnZVxuICovXG5leHBvcnQgY2xhc3MgRGFmZlByb2R1Y3RHcmlkTG9hZEZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZlByb2R1Y3RHcmlkQWN0aW9uVHlwZXMuUHJvZHVjdEdyaWRMb2FkRmFpbHVyZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxufVxuXG4vKipcbiAqIFJlc2V0cyB0aGUgc3RhdGUgb2YgdGhlIHByb2R1Y3QgZ3JpZCByZWR1eCBzdG9yZSB0byBpdHMgaW5pdGlhbCBzdGF0ZS5cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZQcm9kdWN0R3JpZFJlc2V0IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgICByZWFkb25seSB0eXBlID0gRGFmZlByb2R1Y3RHcmlkQWN0aW9uVHlwZXMuUHJvZHVjdEdyaWRSZXNldEFjdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge31cbn1cblxuZXhwb3J0IHR5cGUgRGFmZlByb2R1Y3RHcmlkQWN0aW9uczxUIGV4dGVuZHMgRGFmZlByb2R1Y3QgPSBEYWZmUHJvZHVjdD4gPSBcbiAgICB8IERhZmZQcm9kdWN0R3JpZExvYWQgXG4gICAgfCBEYWZmUHJvZHVjdEdyaWRMb2FkU3VjY2VzczxUPlxuICAgIHwgRGFmZlByb2R1Y3RHcmlkTG9hZEZhaWx1cmVcbiAgICB8IERhZmZQcm9kdWN0R3JpZFJlc2V0OyJdfQ==