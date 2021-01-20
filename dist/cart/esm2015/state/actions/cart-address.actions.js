/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffCartAddressActionTypes = {
    CartAddressUpdateAction: '[DaffCart] Cart Address Update Action',
    CartAddressUpdateSuccessAction: '[DaffCart] Cart Address Update Success Action',
    CartAddressUpdateFailureAction: '[DaffCart] Cart Address Update Failure Action',
};
export { DaffCartAddressActionTypes };
/**
 * Triggers the update of both the shipping and billing address of the cart.
 * @template T
 */
export class DaffCartAddressUpdate {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartAddressActionTypes.CartAddressUpdateAction;
    }
}
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
export class DaffCartAddressUpdateSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartAddressActionTypes.CartAddressUpdateSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartAddressUpdateSuccess.prototype.type;
    /** @type {?} */
    DaffCartAddressUpdateSuccess.prototype.payload;
}
/**
 * Indicates the failed update of either the shipping or billing address of the cart.
 */
export class DaffCartAddressUpdateFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartAddressActionTypes.CartAddressUpdateFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartAddressUpdateFailure.prototype.type;
    /** @type {?} */
    DaffCartAddressUpdateFailure.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1hZGRyZXNzLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9zdGF0ZS8iLCJzb3VyY2VzIjpbImFjdGlvbnMvY2FydC1hZGRyZXNzLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBTUUseUJBQTBCLHVDQUF1QztJQUNqRSxnQ0FBaUMsK0NBQStDO0lBQ2hGLGdDQUFpQywrQ0FBK0M7Ozs7Ozs7QUFNbEYsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUdoQyxZQUFtQixPQUFVO1FBQVYsWUFBTyxHQUFQLE9BQU8sQ0FBRztRQUZwQixTQUFJLEdBQUcsMEJBQTBCLENBQUMsdUJBQXVCLENBQUM7SUFFbkMsQ0FBQztDQUNsQzs7O0lBSEMscUNBQW1FOztJQUV2RCx3Q0FBaUI7Ozs7OztBQU0vQixNQUFNLE9BQU8sNEJBQTRCOzs7O0lBR3ZDLFlBQW1CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFGN0IsU0FBSSxHQUFHLDBCQUEwQixDQUFDLDhCQUE4QixDQUFDO0lBRWpDLENBQUM7Q0FDM0M7OztJQUhDLDRDQUEwRTs7SUFFOUQsK0NBQTBCOzs7OztBQU14QyxNQUFNLE9BQU8sNEJBQTRCOzs7O0lBR3ZDLFlBQW1CLE9BQXVCO1FBQXZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBRmpDLFNBQUksR0FBRywwQkFBMEIsQ0FBQyw4QkFBOEIsQ0FBQztJQUU3QixDQUFDO0NBQy9DOzs7SUFIQyw0Q0FBMEU7O0lBRTlELCtDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgRGFmZlN0YXRlRXJyb3IgfSBmcm9tICdAZGFmZm9kaWwvY29yZS9zdGF0ZSc7XG5pbXBvcnQgeyBEYWZmQ2FydEFkZHJlc3MsIERhZmZDYXJ0IH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuXG5leHBvcnQgZW51bSBEYWZmQ2FydEFkZHJlc3NBY3Rpb25UeXBlcyB7XG4gIENhcnRBZGRyZXNzVXBkYXRlQWN0aW9uID0gJ1tEYWZmQ2FydF0gQ2FydCBBZGRyZXNzIFVwZGF0ZSBBY3Rpb24nLFxuICBDYXJ0QWRkcmVzc1VwZGF0ZVN1Y2Nlc3NBY3Rpb24gPSAnW0RhZmZDYXJ0XSBDYXJ0IEFkZHJlc3MgVXBkYXRlIFN1Y2Nlc3MgQWN0aW9uJyxcbiAgQ2FydEFkZHJlc3NVcGRhdGVGYWlsdXJlQWN0aW9uID0gJ1tEYWZmQ2FydF0gQ2FydCBBZGRyZXNzIFVwZGF0ZSBGYWlsdXJlIEFjdGlvbicsXG59XG5cbi8qKlxuICogVHJpZ2dlcnMgdGhlIHVwZGF0ZSBvZiBib3RoIHRoZSBzaGlwcGluZyBhbmQgYmlsbGluZyBhZGRyZXNzIG9mIHRoZSBjYXJ0LlxuICovXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRBZGRyZXNzVXBkYXRlPFQgZXh0ZW5kcyBEYWZmQ2FydEFkZHJlc3MgPSBEYWZmQ2FydEFkZHJlc3M+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0QWRkcmVzc0FjdGlvblR5cGVzLkNhcnRBZGRyZXNzVXBkYXRlQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBUKSB7fVxufVxuXG4vKipcbiAqIEluZGljYXRlcyB0aGUgc3VjY2Vzc2Z1bCB1cGRhdGUgb2YgYm90aCB0aGUgc2hpcHBpbmcgYW5kIGJpbGxpbmcgYWRkcmVzcyBvZiB0aGUgY2FydC5cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZDYXJ0QWRkcmVzc1VwZGF0ZVN1Y2Nlc3M8VCBleHRlbmRzIERhZmZDYXJ0ID0gRGFmZkNhcnQ+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0QWRkcmVzc0FjdGlvblR5cGVzLkNhcnRBZGRyZXNzVXBkYXRlU3VjY2Vzc0FjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFydGlhbDxUPikge31cbn1cblxuLyoqXG4gKiBJbmRpY2F0ZXMgdGhlIGZhaWxlZCB1cGRhdGUgb2YgZWl0aGVyIHRoZSBzaGlwcGluZyBvciBiaWxsaW5nIGFkZHJlc3Mgb2YgdGhlIGNhcnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydEFkZHJlc3NVcGRhdGVGYWlsdXJlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0QWRkcmVzc0FjdGlvblR5cGVzLkNhcnRBZGRyZXNzVXBkYXRlRmFpbHVyZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRGFmZlN0YXRlRXJyb3IpIHt9XG59XG5cbmV4cG9ydCB0eXBlIERhZmZDYXJ0QWRkcmVzc0FjdGlvbnM8XG4gIFQgZXh0ZW5kcyBEYWZmQ2FydEFkZHJlc3MgPSBEYWZmQ2FydEFkZHJlc3MsXG4gIFYgZXh0ZW5kcyBEYWZmQ2FydCA9IERhZmZDYXJ0XG4+ID1cbiAgfCBEYWZmQ2FydEFkZHJlc3NVcGRhdGU8VD5cbiAgfCBEYWZmQ2FydEFkZHJlc3NVcGRhdGVTdWNjZXNzPFY+XG4gIHwgRGFmZkNhcnRBZGRyZXNzVXBkYXRlRmFpbHVyZVxuIl19