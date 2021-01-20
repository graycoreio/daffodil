/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffBestSellersActionTypes = {
    BestSellersLoadAction: '[BestSellers] Load Action',
    BestSellersLoadSuccessAction: '[BestSellers] Load Success Action',
    BestSellersLoadFailureAction: '[BestSellers] Load Failure Action',
    BestSellersResetAction: '[BestSellers] Reset Action',
};
export { DaffBestSellersActionTypes };
/**
 * Triggers a request for best selling products.
 */
export class DaffBestSellersLoad {
    constructor() {
        this.type = DaffBestSellersActionTypes.BestSellersLoadAction;
    }
}
if (false) {
    /** @type {?} */
    DaffBestSellersLoad.prototype.type;
}
/**
 * An action called when a request for best selling products succeeded.
 *
 * @param payload - An array of Products
 * @template T
 */
export class DaffBestSellersLoadSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffBestSellersActionTypes.BestSellersLoadSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffBestSellersLoadSuccess.prototype.type;
    /** @type {?} */
    DaffBestSellersLoadSuccess.prototype.payload;
}
/**
 * An action called when a request for best selling products failed.
 *
 * @param payload - An error message
 */
export class DaffBestSellersLoadFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffBestSellersActionTypes.BestSellersLoadFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffBestSellersLoadFailure.prototype.type;
    /** @type {?} */
    DaffBestSellersLoadFailure.prototype.payload;
}
/**
 * Resets the state of the best sellers redux store to its initial state.
 */
export class DaffBestSellersReset {
    constructor() {
        this.type = DaffBestSellersActionTypes.BestSellersResetAction;
    }
}
if (false) {
    /** @type {?} */
    DaffBestSellersReset.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVzdC1zZWxsZXJzLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcHJvZHVjdC8iLCJzb3VyY2VzIjpbImFjdGlvbnMvYmVzdC1zZWxsZXJzLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBUUUsdUJBQXdCLDJCQUEyQjtJQUNuRCw4QkFBK0IsbUNBQW1DO0lBQ2xFLDhCQUErQixtQ0FBbUM7SUFDbEUsd0JBQXlCLDRCQUE0Qjs7Ozs7O0FBTXZELE1BQU0sT0FBTyxtQkFBbUI7SUFHOUI7UUFGUyxTQUFJLEdBQUcsMEJBQTBCLENBQUMscUJBQXFCLENBQUM7SUFFbEQsQ0FBQztDQUNqQjs7O0lBSEMsbUNBQWlFOzs7Ozs7OztBQVVuRSxNQUFNLE9BQU8sMEJBQTBCOzs7O0lBR3JDLFlBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRnRCLFNBQUksR0FBRywwQkFBMEIsQ0FBQyw0QkFBNEIsQ0FBQztJQUV0QyxDQUFDO0NBQ3BDOzs7SUFIQywwQ0FBd0U7O0lBRTVELDZDQUFtQjs7Ozs7OztBQVFqQyxNQUFNLE9BQU8sMEJBQTBCOzs7O0lBR3JDLFlBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRnpCLFNBQUksR0FBRywwQkFBMEIsQ0FBQyw0QkFBNEIsQ0FBQztJQUVuQyxDQUFDO0NBQ3ZDOzs7SUFIQywwQ0FBd0U7O0lBRTVELDZDQUFzQjs7Ozs7QUFNcEMsTUFBTSxPQUFPLG9CQUFvQjtJQUcvQjtRQUZTLFNBQUksR0FBRywwQkFBMEIsQ0FBQyxzQkFBc0IsQ0FBQztJQUVuRCxDQUFDO0NBQ2pCOzs7SUFIQyxvQ0FBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IERhZmZQcm9kdWN0IH0gZnJvbSAnLi4vbW9kZWxzL3Byb2R1Y3QnO1xuXG4vKipcbiAqIEFjdGlvbiB0eXBlcyBmb3IgQmVzdCBTZWxsZXIgQWN0aW9ucy5cbiAqL1xuZXhwb3J0IGVudW0gRGFmZkJlc3RTZWxsZXJzQWN0aW9uVHlwZXMge1xuICBCZXN0U2VsbGVyc0xvYWRBY3Rpb24gPSAnW0Jlc3RTZWxsZXJzXSBMb2FkIEFjdGlvbicsXG4gIEJlc3RTZWxsZXJzTG9hZFN1Y2Nlc3NBY3Rpb24gPSAnW0Jlc3RTZWxsZXJzXSBMb2FkIFN1Y2Nlc3MgQWN0aW9uJyxcbiAgQmVzdFNlbGxlcnNMb2FkRmFpbHVyZUFjdGlvbiA9ICdbQmVzdFNlbGxlcnNdIExvYWQgRmFpbHVyZSBBY3Rpb24nLFxuICBCZXN0U2VsbGVyc1Jlc2V0QWN0aW9uID0gJ1tCZXN0U2VsbGVyc10gUmVzZXQgQWN0aW9uJ1xufVxuXG4vKipcbiAqIFRyaWdnZXJzIGEgcmVxdWVzdCBmb3IgYmVzdCBzZWxsaW5nIHByb2R1Y3RzLlxuICovXG5leHBvcnQgY2xhc3MgRGFmZkJlc3RTZWxsZXJzTG9hZCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQmVzdFNlbGxlcnNBY3Rpb25UeXBlcy5CZXN0U2VsbGVyc0xvYWRBY3Rpb247XG5cbiAgY29uc3RydWN0b3IoKSB7fVxufVxuXG4vKipcbiAqIEFuIGFjdGlvbiBjYWxsZWQgd2hlbiBhIHJlcXVlc3QgZm9yIGJlc3Qgc2VsbGluZyBwcm9kdWN0cyBzdWNjZWVkZWQuXG4gKiBcbiAqIEBwYXJhbSBwYXlsb2FkIC0gQW4gYXJyYXkgb2YgUHJvZHVjdHNcbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZCZXN0U2VsbGVyc0xvYWRTdWNjZXNzPFQgZXh0ZW5kcyBEYWZmUHJvZHVjdCA9IERhZmZQcm9kdWN0PiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQmVzdFNlbGxlcnNBY3Rpb25UeXBlcy5CZXN0U2VsbGVyc0xvYWRTdWNjZXNzQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBUW10pIHt9XG59XG5cbi8qKlxuICogQW4gYWN0aW9uIGNhbGxlZCB3aGVuIGEgcmVxdWVzdCBmb3IgYmVzdCBzZWxsaW5nIHByb2R1Y3RzIGZhaWxlZC5cbiAqIFxuICogQHBhcmFtIHBheWxvYWQgLSBBbiBlcnJvciBtZXNzYWdlXG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmQmVzdFNlbGxlcnNMb2FkRmFpbHVyZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQmVzdFNlbGxlcnNBY3Rpb25UeXBlcy5CZXN0U2VsbGVyc0xvYWRGYWlsdXJlQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XG59XG5cbi8qKlxuICogUmVzZXRzIHRoZSBzdGF0ZSBvZiB0aGUgYmVzdCBzZWxsZXJzIHJlZHV4IHN0b3JlIHRvIGl0cyBpbml0aWFsIHN0YXRlLlxuICovXG5leHBvcnQgY2xhc3MgRGFmZkJlc3RTZWxsZXJzUmVzZXQgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkJlc3RTZWxsZXJzQWN0aW9uVHlwZXMuQmVzdFNlbGxlcnNSZXNldEFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG59XG5cbmV4cG9ydCB0eXBlIERhZmZCZXN0U2VsbGVyc0FjdGlvbnM8VCBleHRlbmRzIERhZmZQcm9kdWN0ID0gRGFmZlByb2R1Y3Q+ID0gXG4gICAgfCBEYWZmQmVzdFNlbGxlcnNMb2FkIFxuICAgIHwgRGFmZkJlc3RTZWxsZXJzTG9hZFN1Y2Nlc3M8VD5cbiAgICB8IERhZmZCZXN0U2VsbGVyc0xvYWRGYWlsdXJlXG4gICAgfCBEYWZmQmVzdFNlbGxlcnNSZXNldDtcbiAgICAiXX0=