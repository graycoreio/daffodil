/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffCartAddressActionTypes = {
    CartAddressUpdateAction: '[DaffCart] Cart Address Update Action',
    CartAddressUpdateSuccessAction: '[DaffCart] Cart Address Update Success Action',
    CartAddressUpdateFailureAction: '[DaffCart] Cart Address Update Failure Action',
};
export { DaffCartAddressActionTypes };
/**
 * Triggers the update of both the shipping and billing address of the cart.
 * @template T
 */
var /**
 * Triggers the update of both the shipping and billing address of the cart.
 * @template T
 */
DaffCartAddressUpdate = /** @class */ (function () {
    function DaffCartAddressUpdate(payload) {
        this.payload = payload;
        this.type = DaffCartAddressActionTypes.CartAddressUpdateAction;
    }
    return DaffCartAddressUpdate;
}());
/**
 * Triggers the update of both the shipping and billing address of the cart.
 * @template T
 */
export { DaffCartAddressUpdate };
if (false) {
    /** @type {?} */
    DaffCartAddressUpdate.prototype.type;
    /** @type {?} */
    DaffCartAddressUpdate.prototype.payload;
}
/**
 * Indicates the successful update of both the shipping and billing address of the cart.
 * @template T
 */
var /**
 * Indicates the successful update of both the shipping and billing address of the cart.
 * @template T
 */
DaffCartAddressUpdateSuccess = /** @class */ (function () {
    function DaffCartAddressUpdateSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartAddressActionTypes.CartAddressUpdateSuccessAction;
    }
    return DaffCartAddressUpdateSuccess;
}());
/**
 * Indicates the successful update of both the shipping and billing address of the cart.
 * @template T
 */
export { DaffCartAddressUpdateSuccess };
if (false) {
    /** @type {?} */
    DaffCartAddressUpdateSuccess.prototype.type;
    /** @type {?} */
    DaffCartAddressUpdateSuccess.prototype.payload;
}
/**
 * Indicates the failed update of either the shipping or billing address of the cart.
 */
var /**
 * Indicates the failed update of either the shipping or billing address of the cart.
 */
DaffCartAddressUpdateFailure = /** @class */ (function () {
    function DaffCartAddressUpdateFailure(payload) {
        this.payload = payload;
        this.type = DaffCartAddressActionTypes.CartAddressUpdateFailureAction;
    }
    return DaffCartAddressUpdateFailure;
}());
/**
 * Indicates the failed update of either the shipping or billing address of the cart.
 */
export { DaffCartAddressUpdateFailure };
if (false) {
    /** @type {?} */
    DaffCartAddressUpdateFailure.prototype.type;
    /** @type {?} */
    DaffCartAddressUpdateFailure.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1hZGRyZXNzLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9zdGF0ZS8iLCJzb3VyY2VzIjpbImFjdGlvbnMvY2FydC1hZGRyZXNzLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBTUUseUJBQTBCLHVDQUF1QztJQUNqRSxnQ0FBaUMsK0NBQStDO0lBQ2hGLGdDQUFpQywrQ0FBK0M7Ozs7Ozs7QUFNbEY7Ozs7O0lBR0UsK0JBQW1CLE9BQVU7UUFBVixZQUFPLEdBQVAsT0FBTyxDQUFHO1FBRnBCLFNBQUksR0FBRywwQkFBMEIsQ0FBQyx1QkFBdUIsQ0FBQztJQUVuQyxDQUFDO0lBQ25DLDRCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7Ozs7O0lBSEMscUNBQW1FOztJQUV2RCx3Q0FBaUI7Ozs7OztBQU0vQjs7Ozs7SUFHRSxzQ0FBbUIsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUY3QixTQUFJLEdBQUcsMEJBQTBCLENBQUMsOEJBQThCLENBQUM7SUFFakMsQ0FBQztJQUM1QyxtQ0FBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7Ozs7OztJQUhDLDRDQUEwRTs7SUFFOUQsK0NBQTBCOzs7OztBQU14Qzs7OztJQUdFLHNDQUFtQixPQUF1QjtRQUF2QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUZqQyxTQUFJLEdBQUcsMEJBQTBCLENBQUMsOEJBQThCLENBQUM7SUFFN0IsQ0FBQztJQUNoRCxtQ0FBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7Ozs7O0lBSEMsNENBQTBFOztJQUU5RCwrQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IERhZmZTdGF0ZUVycm9yIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvc3RhdGUnO1xuaW1wb3J0IHsgRGFmZkNhcnRBZGRyZXNzLCBEYWZmQ2FydCB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcblxuZXhwb3J0IGVudW0gRGFmZkNhcnRBZGRyZXNzQWN0aW9uVHlwZXMge1xuICBDYXJ0QWRkcmVzc1VwZGF0ZUFjdGlvbiA9ICdbRGFmZkNhcnRdIENhcnQgQWRkcmVzcyBVcGRhdGUgQWN0aW9uJyxcbiAgQ2FydEFkZHJlc3NVcGRhdGVTdWNjZXNzQWN0aW9uID0gJ1tEYWZmQ2FydF0gQ2FydCBBZGRyZXNzIFVwZGF0ZSBTdWNjZXNzIEFjdGlvbicsXG4gIENhcnRBZGRyZXNzVXBkYXRlRmFpbHVyZUFjdGlvbiA9ICdbRGFmZkNhcnRdIENhcnQgQWRkcmVzcyBVcGRhdGUgRmFpbHVyZSBBY3Rpb24nLFxufVxuXG4vKipcbiAqIFRyaWdnZXJzIHRoZSB1cGRhdGUgb2YgYm90aCB0aGUgc2hpcHBpbmcgYW5kIGJpbGxpbmcgYWRkcmVzcyBvZiB0aGUgY2FydC5cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZDYXJ0QWRkcmVzc1VwZGF0ZTxUIGV4dGVuZHMgRGFmZkNhcnRBZGRyZXNzID0gRGFmZkNhcnRBZGRyZXNzPiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydEFkZHJlc3NBY3Rpb25UeXBlcy5DYXJ0QWRkcmVzc1VwZGF0ZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVCkge31cbn1cblxuLyoqXG4gKiBJbmRpY2F0ZXMgdGhlIHN1Y2Nlc3NmdWwgdXBkYXRlIG9mIGJvdGggdGhlIHNoaXBwaW5nIGFuZCBiaWxsaW5nIGFkZHJlc3Mgb2YgdGhlIGNhcnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydEFkZHJlc3NVcGRhdGVTdWNjZXNzPFQgZXh0ZW5kcyBEYWZmQ2FydCA9IERhZmZDYXJ0PiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydEFkZHJlc3NBY3Rpb25UeXBlcy5DYXJ0QWRkcmVzc1VwZGF0ZVN1Y2Nlc3NBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBhcnRpYWw8VD4pIHt9XG59XG5cbi8qKlxuICogSW5kaWNhdGVzIHRoZSBmYWlsZWQgdXBkYXRlIG9mIGVpdGhlciB0aGUgc2hpcHBpbmcgb3IgYmlsbGluZyBhZGRyZXNzIG9mIHRoZSBjYXJ0LlxuICovXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRBZGRyZXNzVXBkYXRlRmFpbHVyZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydEFkZHJlc3NBY3Rpb25UeXBlcy5DYXJ0QWRkcmVzc1VwZGF0ZUZhaWx1cmVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IERhZmZTdGF0ZUVycm9yKSB7fVxufVxuXG5leHBvcnQgdHlwZSBEYWZmQ2FydEFkZHJlc3NBY3Rpb25zPFxuICBUIGV4dGVuZHMgRGFmZkNhcnRBZGRyZXNzID0gRGFmZkNhcnRBZGRyZXNzLFxuICBWIGV4dGVuZHMgRGFmZkNhcnQgPSBEYWZmQ2FydFxuPiA9XG4gIHwgRGFmZkNhcnRBZGRyZXNzVXBkYXRlPFQ+XG4gIHwgRGFmZkNhcnRBZGRyZXNzVXBkYXRlU3VjY2VzczxWPlxuICB8IERhZmZDYXJ0QWRkcmVzc1VwZGF0ZUZhaWx1cmVcbiJdfQ==