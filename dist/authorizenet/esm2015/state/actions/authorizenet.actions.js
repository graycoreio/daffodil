/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffAuthorizeNetActionTypes = {
    UpdatePaymentAction: '[Daff-Authorize-Net] Update Payment',
    UpdatePaymentSuccessAction: '[Daff-Authorize-Net] Update Payment Success',
    UpdatePaymentFailureAction: '[Daff-Authorize-Net] Update Payment Failure',
    LoadAcceptJsAction: '[Daff-Authorize-Net] Load Accept Js',
    LoadAcceptJsSuccessAction: '[Daff-Authorize-Net] Load Accept Js Success',
    LoadAcceptJsFailureAction: '[Daff-Authorize-Net] Load Accept Js Failure',
};
export { DaffAuthorizeNetActionTypes };
/**
 * An action triggered to initialize a generate token request.
 *
 * @param payload - An DaffAuthorizeNetRequestData object.
 * @template T, V
 */
export class DaffAuthorizeNetUpdatePayment {
    /**
     * @param {?} tokenRequest
     * @param {?} address
     */
    constructor(tokenRequest, address) {
        this.tokenRequest = tokenRequest;
        this.address = address;
        this.type = DaffAuthorizeNetActionTypes.UpdatePaymentAction;
    }
}
if (false) {
    /** @type {?} */
    DaffAuthorizeNetUpdatePayment.prototype.type;
    /** @type {?} */
    DaffAuthorizeNetUpdatePayment.prototype.tokenRequest;
    /** @type {?} */
    DaffAuthorizeNetUpdatePayment.prototype.address;
}
/**
 * An action triggered upon successfully updating the payment method.
 *
 * @param payload - A string that is the payment nonce for a credit card.
 */
export class DaffAuthorizeNetUpdatePaymentSuccess {
    constructor() {
        this.type = DaffAuthorizeNetActionTypes.UpdatePaymentSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffAuthorizeNetUpdatePaymentSuccess.prototype.type;
}
/**
 * An action triggered upon failing to update the payment method.
 *
 * @param payload - A string that is an error message.
 */
export class DaffAuthorizeNetUpdatePaymentFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffAuthorizeNetActionTypes.UpdatePaymentFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffAuthorizeNetUpdatePaymentFailure.prototype.type;
    /** @type {?} */
    DaffAuthorizeNetUpdatePaymentFailure.prototype.payload;
}
export class DaffLoadAcceptJs {
    constructor() {
        this.type = DaffAuthorizeNetActionTypes.LoadAcceptJsAction;
    }
}
if (false) {
    /** @type {?} */
    DaffLoadAcceptJs.prototype.type;
}
/**
 * Indicates that the AcceptJs library has loaded successfully.
 */
export class DaffLoadAcceptJsSuccess {
    constructor() {
        this.type = DaffAuthorizeNetActionTypes.LoadAcceptJsSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffLoadAcceptJsSuccess.prototype.type;
}
/**
 * Indicates that the AcceptJs library has failed to load
 */
export class DaffLoadAcceptJsFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffAuthorizeNetActionTypes.LoadAcceptJsFailureAction;
    }
    ;
}
if (false) {
    /** @type {?} */
    DaffLoadAcceptJsFailure.prototype.type;
    /** @type {?} */
    DaffLoadAcceptJsFailure.prototype.payload;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXplbmV0LmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvYXV0aG9yaXplbmV0L3N0YXRlLyIsInNvdXJjZXMiOlsiYWN0aW9ucy9hdXRob3JpemVuZXQuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFPRSxxQkFBc0IscUNBQXFDO0lBQzNELDRCQUE2Qiw2Q0FBNkM7SUFDM0UsNEJBQTZCLDZDQUE2QztJQUMxRSxvQkFBcUIscUNBQXFDO0lBQzFELDJCQUE0Qiw2Q0FBNkM7SUFDekUsMkJBQTRCLDZDQUE2Qzs7Ozs7Ozs7O0FBUTFFLE1BQU0sT0FBTyw2QkFBNkI7Ozs7O0lBTXpDLFlBQW1CLFlBQWUsRUFBUyxPQUFVO1FBQWxDLGlCQUFZLEdBQVosWUFBWSxDQUFHO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBRztRQUY1QyxTQUFJLEdBQUcsMkJBQTJCLENBQUMsbUJBQW1CLENBQUM7SUFFUCxDQUFDO0NBQzFEOzs7SUFIQSw2Q0FBZ0U7O0lBRXBELHFEQUFzQjs7SUFBRSxnREFBaUI7Ozs7Ozs7QUFRdEQsTUFBTSxPQUFPLG9DQUFvQztJQUFqRDtRQUNXLFNBQUksR0FBRywyQkFBMkIsQ0FBQywwQkFBMEIsQ0FBQztJQUN6RSxDQUFDO0NBQUE7OztJQURDLG9EQUF1RTs7Ozs7OztBQVF6RSxNQUFNLE9BQU8sb0NBQW9DOzs7O0lBR2hELFlBQW1CLE9BQXVCO1FBQXZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBRmpDLFNBQUksR0FBRywyQkFBMkIsQ0FBQywwQkFBMEIsQ0FBQztJQUV6QixDQUFDO0NBQy9DOzs7SUFIQSxvREFBdUU7O0lBRTNELHVEQUE4Qjs7QUFHM0MsTUFBTSxPQUFPLGdCQUFnQjtJQUE3QjtRQUNVLFNBQUksR0FBRywyQkFBMkIsQ0FBQyxrQkFBa0IsQ0FBQztJQUNoRSxDQUFDO0NBQUE7OztJQURBLGdDQUErRDs7Ozs7QUFNaEUsTUFBTSxPQUFPLHVCQUF1QjtJQUFwQztRQUNVLFNBQUksR0FBRywyQkFBMkIsQ0FBQyx5QkFBeUIsQ0FBQztJQUN2RSxDQUFDO0NBQUE7OztJQURBLHVDQUFzRTs7Ozs7QUFNdkUsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQUduQyxZQUFtQixPQUF1QjtRQUF2QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUZqQyxTQUFJLEdBQUcsMkJBQTJCLENBQUMseUJBQXlCLENBQUM7SUFFekIsQ0FBQztJQUFBLENBQUM7Q0FDL0M7OztJQUhBLHVDQUFzRTs7SUFFMUQsMENBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydEFkZHJlc3MgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQgeyBEYWZmQXV0aG9yaXplTmV0VG9rZW5SZXF1ZXN0IH0gZnJvbSAnQGRhZmZvZGlsL2F1dGhvcml6ZW5ldCc7XG5pbXBvcnQgeyBEYWZmU3RhdGVFcnJvciB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3N0YXRlJztcblxuZXhwb3J0IGVudW0gRGFmZkF1dGhvcml6ZU5ldEFjdGlvblR5cGVzIHtcbiAgVXBkYXRlUGF5bWVudEFjdGlvbiA9ICdbRGFmZi1BdXRob3JpemUtTmV0XSBVcGRhdGUgUGF5bWVudCcsXG4gIFVwZGF0ZVBheW1lbnRTdWNjZXNzQWN0aW9uID0gJ1tEYWZmLUF1dGhvcml6ZS1OZXRdIFVwZGF0ZSBQYXltZW50IFN1Y2Nlc3MnLFxuXHRVcGRhdGVQYXltZW50RmFpbHVyZUFjdGlvbiA9ICdbRGFmZi1BdXRob3JpemUtTmV0XSBVcGRhdGUgUGF5bWVudCBGYWlsdXJlJyxcblx0TG9hZEFjY2VwdEpzQWN0aW9uID0gJ1tEYWZmLUF1dGhvcml6ZS1OZXRdIExvYWQgQWNjZXB0IEpzJyxcblx0TG9hZEFjY2VwdEpzU3VjY2Vzc0FjdGlvbiA9ICdbRGFmZi1BdXRob3JpemUtTmV0XSBMb2FkIEFjY2VwdCBKcyBTdWNjZXNzJyxcblx0TG9hZEFjY2VwdEpzRmFpbHVyZUFjdGlvbiA9ICdbRGFmZi1BdXRob3JpemUtTmV0XSBMb2FkIEFjY2VwdCBKcyBGYWlsdXJlJ1xufVxuXG4vKipcbiAqIEFuIGFjdGlvbiB0cmlnZ2VyZWQgdG8gaW5pdGlhbGl6ZSBhIGdlbmVyYXRlIHRva2VuIHJlcXVlc3QuXG4gKlxuICogQHBhcmFtIHBheWxvYWQgLSBBbiBEYWZmQXV0aG9yaXplTmV0UmVxdWVzdERhdGEgb2JqZWN0LlxuICovXG5leHBvcnQgY2xhc3MgRGFmZkF1dGhvcml6ZU5ldFVwZGF0ZVBheW1lbnQ8XG5cdFQgZXh0ZW5kcyBEYWZmQXV0aG9yaXplTmV0VG9rZW5SZXF1ZXN0ID0gRGFmZkF1dGhvcml6ZU5ldFRva2VuUmVxdWVzdCxcblx0ViBleHRlbmRzIERhZmZDYXJ0QWRkcmVzcyA9IERhZmZDYXJ0QWRkcmVzc1xuPiBpbXBsZW1lbnRzIEFjdGlvbiB7XG5cdHJlYWRvbmx5IHR5cGUgPSBEYWZmQXV0aG9yaXplTmV0QWN0aW9uVHlwZXMuVXBkYXRlUGF5bWVudEFjdGlvbjtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgdG9rZW5SZXF1ZXN0OiBULCBwdWJsaWMgYWRkcmVzczogVikgeyB9XG59XG5cbi8qKlxuICogQW4gYWN0aW9uIHRyaWdnZXJlZCB1cG9uIHN1Y2Nlc3NmdWxseSB1cGRhdGluZyB0aGUgcGF5bWVudCBtZXRob2QuXG4gKlxuICogQHBhcmFtIHBheWxvYWQgLSBBIHN0cmluZyB0aGF0IGlzIHRoZSBwYXltZW50IG5vbmNlIGZvciBhIGNyZWRpdCBjYXJkLlxuICovXG5leHBvcnQgY2xhc3MgRGFmZkF1dGhvcml6ZU5ldFVwZGF0ZVBheW1lbnRTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZBdXRob3JpemVOZXRBY3Rpb25UeXBlcy5VcGRhdGVQYXltZW50U3VjY2Vzc0FjdGlvbjtcbn1cblxuLyoqXG4gKiBBbiBhY3Rpb24gdHJpZ2dlcmVkIHVwb24gZmFpbGluZyB0byB1cGRhdGUgdGhlIHBheW1lbnQgbWV0aG9kLlxuICpcbiAqIEBwYXJhbSBwYXlsb2FkIC0gQSBzdHJpbmcgdGhhdCBpcyBhbiBlcnJvciBtZXNzYWdlLlxuICovXG5leHBvcnQgY2xhc3MgRGFmZkF1dGhvcml6ZU5ldFVwZGF0ZVBheW1lbnRGYWlsdXJlIGltcGxlbWVudHMgQWN0aW9uIHtcblx0cmVhZG9ubHkgdHlwZSA9IERhZmZBdXRob3JpemVOZXRBY3Rpb25UeXBlcy5VcGRhdGVQYXltZW50RmFpbHVyZUFjdGlvbjtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRGFmZlN0YXRlRXJyb3IpIHsgfVxufVxuXG5leHBvcnQgY2xhc3MgRGFmZkxvYWRBY2NlcHRKcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG5cdHJlYWRvbmx5IHR5cGUgPSBEYWZmQXV0aG9yaXplTmV0QWN0aW9uVHlwZXMuTG9hZEFjY2VwdEpzQWN0aW9uO1xufVxuXG4vKipcbiAqIEluZGljYXRlcyB0aGF0IHRoZSBBY2NlcHRKcyBsaWJyYXJ5IGhhcyBsb2FkZWQgc3VjY2Vzc2Z1bGx5LlxuICovXG5leHBvcnQgY2xhc3MgRGFmZkxvYWRBY2NlcHRKc1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuXHRyZWFkb25seSB0eXBlID0gRGFmZkF1dGhvcml6ZU5ldEFjdGlvblR5cGVzLkxvYWRBY2NlcHRKc1N1Y2Nlc3NBY3Rpb247XG59XG5cbi8qKlxuICogSW5kaWNhdGVzIHRoYXQgdGhlIEFjY2VwdEpzIGxpYnJhcnkgaGFzIGZhaWxlZCB0byBsb2FkXG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmTG9hZEFjY2VwdEpzRmFpbHVyZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG5cdHJlYWRvbmx5IHR5cGUgPSBEYWZmQXV0aG9yaXplTmV0QWN0aW9uVHlwZXMuTG9hZEFjY2VwdEpzRmFpbHVyZUFjdGlvbjtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRGFmZlN0YXRlRXJyb3IpIHt9O1xufVxuXG5leHBvcnQgdHlwZSBEYWZmQXV0aG9yaXplTmV0QWN0aW9uczxcblx0VCBleHRlbmRzIERhZmZBdXRob3JpemVOZXRUb2tlblJlcXVlc3QgPSBEYWZmQXV0aG9yaXplTmV0VG9rZW5SZXF1ZXN0XG4+ID1cblx0fCBEYWZmQXV0aG9yaXplTmV0VXBkYXRlUGF5bWVudDxUPlxuXHR8IERhZmZBdXRob3JpemVOZXRVcGRhdGVQYXltZW50U3VjY2Vzc1xuXHR8IERhZmZBdXRob3JpemVOZXRVcGRhdGVQYXltZW50RmFpbHVyZVxuXHR8IERhZmZMb2FkQWNjZXB0SnNTdWNjZXNzXG5cdHwgRGFmZkxvYWRBY2NlcHRKc0ZhaWx1cmVcblx0fCBEYWZmTG9hZEFjY2VwdEpzO1xuIl19