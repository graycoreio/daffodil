/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffAuthorizeNetActionTypes = {
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
var /**
 * An action triggered to initialize a generate token request.
 *
 * @param payload - An DaffAuthorizeNetRequestData object.
 * @template T, V
 */
DaffAuthorizeNetUpdatePayment = /** @class */ (function () {
    function DaffAuthorizeNetUpdatePayment(tokenRequest, address) {
        this.tokenRequest = tokenRequest;
        this.address = address;
        this.type = DaffAuthorizeNetActionTypes.UpdatePaymentAction;
    }
    return DaffAuthorizeNetUpdatePayment;
}());
/**
 * An action triggered to initialize a generate token request.
 *
 * @param payload - An DaffAuthorizeNetRequestData object.
 * @template T, V
 */
export { DaffAuthorizeNetUpdatePayment };
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
var /**
 * An action triggered upon successfully updating the payment method.
 *
 * @param payload - A string that is the payment nonce for a credit card.
 */
DaffAuthorizeNetUpdatePaymentSuccess = /** @class */ (function () {
    function DaffAuthorizeNetUpdatePaymentSuccess() {
        this.type = DaffAuthorizeNetActionTypes.UpdatePaymentSuccessAction;
    }
    return DaffAuthorizeNetUpdatePaymentSuccess;
}());
/**
 * An action triggered upon successfully updating the payment method.
 *
 * @param payload - A string that is the payment nonce for a credit card.
 */
export { DaffAuthorizeNetUpdatePaymentSuccess };
if (false) {
    /** @type {?} */
    DaffAuthorizeNetUpdatePaymentSuccess.prototype.type;
}
/**
 * An action triggered upon failing to update the payment method.
 *
 * @param payload - A string that is an error message.
 */
var /**
 * An action triggered upon failing to update the payment method.
 *
 * @param payload - A string that is an error message.
 */
DaffAuthorizeNetUpdatePaymentFailure = /** @class */ (function () {
    function DaffAuthorizeNetUpdatePaymentFailure(payload) {
        this.payload = payload;
        this.type = DaffAuthorizeNetActionTypes.UpdatePaymentFailureAction;
    }
    return DaffAuthorizeNetUpdatePaymentFailure;
}());
/**
 * An action triggered upon failing to update the payment method.
 *
 * @param payload - A string that is an error message.
 */
export { DaffAuthorizeNetUpdatePaymentFailure };
if (false) {
    /** @type {?} */
    DaffAuthorizeNetUpdatePaymentFailure.prototype.type;
    /** @type {?} */
    DaffAuthorizeNetUpdatePaymentFailure.prototype.payload;
}
var DaffLoadAcceptJs = /** @class */ (function () {
    function DaffLoadAcceptJs() {
        this.type = DaffAuthorizeNetActionTypes.LoadAcceptJsAction;
    }
    return DaffLoadAcceptJs;
}());
export { DaffLoadAcceptJs };
if (false) {
    /** @type {?} */
    DaffLoadAcceptJs.prototype.type;
}
/**
 * Indicates that the AcceptJs library has loaded successfully.
 */
var /**
 * Indicates that the AcceptJs library has loaded successfully.
 */
DaffLoadAcceptJsSuccess = /** @class */ (function () {
    function DaffLoadAcceptJsSuccess() {
        this.type = DaffAuthorizeNetActionTypes.LoadAcceptJsSuccessAction;
    }
    return DaffLoadAcceptJsSuccess;
}());
/**
 * Indicates that the AcceptJs library has loaded successfully.
 */
export { DaffLoadAcceptJsSuccess };
if (false) {
    /** @type {?} */
    DaffLoadAcceptJsSuccess.prototype.type;
}
/**
 * Indicates that the AcceptJs library has failed to load
 */
var /**
 * Indicates that the AcceptJs library has failed to load
 */
DaffLoadAcceptJsFailure = /** @class */ (function () {
    function DaffLoadAcceptJsFailure(payload) {
        this.payload = payload;
        this.type = DaffAuthorizeNetActionTypes.LoadAcceptJsFailureAction;
    }
    ;
    return DaffLoadAcceptJsFailure;
}());
/**
 * Indicates that the AcceptJs library has failed to load
 */
export { DaffLoadAcceptJsFailure };
if (false) {
    /** @type {?} */
    DaffLoadAcceptJsFailure.prototype.type;
    /** @type {?} */
    DaffLoadAcceptJsFailure.prototype.payload;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXplbmV0LmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvYXV0aG9yaXplbmV0L3N0YXRlLyIsInNvdXJjZXMiOlsiYWN0aW9ucy9hdXRob3JpemVuZXQuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFPRSxxQkFBc0IscUNBQXFDO0lBQzNELDRCQUE2Qiw2Q0FBNkM7SUFDM0UsNEJBQTZCLDZDQUE2QztJQUMxRSxvQkFBcUIscUNBQXFDO0lBQzFELDJCQUE0Qiw2Q0FBNkM7SUFDekUsMkJBQTRCLDZDQUE2Qzs7Ozs7Ozs7O0FBUTFFOzs7Ozs7O0lBTUMsdUNBQW1CLFlBQWUsRUFBUyxPQUFVO1FBQWxDLGlCQUFZLEdBQVosWUFBWSxDQUFHO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBRztRQUY1QyxTQUFJLEdBQUcsMkJBQTJCLENBQUMsbUJBQW1CLENBQUM7SUFFUCxDQUFDO0lBQzNELG9DQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7Ozs7Ozs7Ozs7SUFIQSw2Q0FBZ0U7O0lBRXBELHFEQUFzQjs7SUFBRSxnREFBaUI7Ozs7Ozs7QUFRdEQ7Ozs7OztJQUFBO1FBQ1csU0FBSSxHQUFHLDJCQUEyQixDQUFDLDBCQUEwQixDQUFDO0lBQ3pFLENBQUM7SUFBRCwyQ0FBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7Ozs7Ozs7SUFEQyxvREFBdUU7Ozs7Ozs7QUFRekU7Ozs7OztJQUdDLDhDQUFtQixPQUF1QjtRQUF2QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUZqQyxTQUFJLEdBQUcsMkJBQTJCLENBQUMsMEJBQTBCLENBQUM7SUFFekIsQ0FBQztJQUNoRCwyQ0FBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7Ozs7Ozs7SUFIQSxvREFBdUU7O0lBRTNELHVEQUE4Qjs7QUFHM0M7SUFBQTtRQUNVLFNBQUksR0FBRywyQkFBMkIsQ0FBQyxrQkFBa0IsQ0FBQztJQUNoRSxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7OztJQURBLGdDQUErRDs7Ozs7QUFNaEU7Ozs7SUFBQTtRQUNVLFNBQUksR0FBRywyQkFBMkIsQ0FBQyx5QkFBeUIsQ0FBQztJQUN2RSxDQUFDO0lBQUQsOEJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7Ozs7OztJQURBLHVDQUFzRTs7Ozs7QUFNdkU7Ozs7SUFHQyxpQ0FBbUIsT0FBdUI7UUFBdkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFGakMsU0FBSSxHQUFHLDJCQUEyQixDQUFDLHlCQUF5QixDQUFDO0lBRXpCLENBQUM7SUFBQSxDQUFDO0lBQ2hELDhCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7Ozs7SUFIQSx1Q0FBc0U7O0lBRTFELDBDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgRGFmZkNhcnRBZGRyZXNzIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuaW1wb3J0IHsgRGFmZkF1dGhvcml6ZU5ldFRva2VuUmVxdWVzdCB9IGZyb20gJ0BkYWZmb2RpbC9hdXRob3JpemVuZXQnO1xuaW1wb3J0IHsgRGFmZlN0YXRlRXJyb3IgfSBmcm9tICdAZGFmZm9kaWwvY29yZS9zdGF0ZSc7XG5cbmV4cG9ydCBlbnVtIERhZmZBdXRob3JpemVOZXRBY3Rpb25UeXBlcyB7XG4gIFVwZGF0ZVBheW1lbnRBY3Rpb24gPSAnW0RhZmYtQXV0aG9yaXplLU5ldF0gVXBkYXRlIFBheW1lbnQnLFxuICBVcGRhdGVQYXltZW50U3VjY2Vzc0FjdGlvbiA9ICdbRGFmZi1BdXRob3JpemUtTmV0XSBVcGRhdGUgUGF5bWVudCBTdWNjZXNzJyxcblx0VXBkYXRlUGF5bWVudEZhaWx1cmVBY3Rpb24gPSAnW0RhZmYtQXV0aG9yaXplLU5ldF0gVXBkYXRlIFBheW1lbnQgRmFpbHVyZScsXG5cdExvYWRBY2NlcHRKc0FjdGlvbiA9ICdbRGFmZi1BdXRob3JpemUtTmV0XSBMb2FkIEFjY2VwdCBKcycsXG5cdExvYWRBY2NlcHRKc1N1Y2Nlc3NBY3Rpb24gPSAnW0RhZmYtQXV0aG9yaXplLU5ldF0gTG9hZCBBY2NlcHQgSnMgU3VjY2VzcycsXG5cdExvYWRBY2NlcHRKc0ZhaWx1cmVBY3Rpb24gPSAnW0RhZmYtQXV0aG9yaXplLU5ldF0gTG9hZCBBY2NlcHQgSnMgRmFpbHVyZSdcbn1cblxuLyoqXG4gKiBBbiBhY3Rpb24gdHJpZ2dlcmVkIHRvIGluaXRpYWxpemUgYSBnZW5lcmF0ZSB0b2tlbiByZXF1ZXN0LlxuICpcbiAqIEBwYXJhbSBwYXlsb2FkIC0gQW4gRGFmZkF1dGhvcml6ZU5ldFJlcXVlc3REYXRhIG9iamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZBdXRob3JpemVOZXRVcGRhdGVQYXltZW50PFxuXHRUIGV4dGVuZHMgRGFmZkF1dGhvcml6ZU5ldFRva2VuUmVxdWVzdCA9IERhZmZBdXRob3JpemVOZXRUb2tlblJlcXVlc3QsXG5cdFYgZXh0ZW5kcyBEYWZmQ2FydEFkZHJlc3MgPSBEYWZmQ2FydEFkZHJlc3Ncbj4gaW1wbGVtZW50cyBBY3Rpb24ge1xuXHRyZWFkb25seSB0eXBlID0gRGFmZkF1dGhvcml6ZU5ldEFjdGlvblR5cGVzLlVwZGF0ZVBheW1lbnRBY3Rpb247XG5cblx0Y29uc3RydWN0b3IocHVibGljIHRva2VuUmVxdWVzdDogVCwgcHVibGljIGFkZHJlc3M6IFYpIHsgfVxufVxuXG4vKipcbiAqIEFuIGFjdGlvbiB0cmlnZ2VyZWQgdXBvbiBzdWNjZXNzZnVsbHkgdXBkYXRpbmcgdGhlIHBheW1lbnQgbWV0aG9kLlxuICpcbiAqIEBwYXJhbSBwYXlsb2FkIC0gQSBzdHJpbmcgdGhhdCBpcyB0aGUgcGF5bWVudCBub25jZSBmb3IgYSBjcmVkaXQgY2FyZC5cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZBdXRob3JpemVOZXRVcGRhdGVQYXltZW50U3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQXV0aG9yaXplTmV0QWN0aW9uVHlwZXMuVXBkYXRlUGF5bWVudFN1Y2Nlc3NBY3Rpb247XG59XG5cbi8qKlxuICogQW4gYWN0aW9uIHRyaWdnZXJlZCB1cG9uIGZhaWxpbmcgdG8gdXBkYXRlIHRoZSBwYXltZW50IG1ldGhvZC5cbiAqXG4gKiBAcGFyYW0gcGF5bG9hZCAtIEEgc3RyaW5nIHRoYXQgaXMgYW4gZXJyb3IgbWVzc2FnZS5cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZBdXRob3JpemVOZXRVcGRhdGVQYXltZW50RmFpbHVyZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG5cdHJlYWRvbmx5IHR5cGUgPSBEYWZmQXV0aG9yaXplTmV0QWN0aW9uVHlwZXMuVXBkYXRlUGF5bWVudEZhaWx1cmVBY3Rpb247XG5cblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IERhZmZTdGF0ZUVycm9yKSB7IH1cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZMb2FkQWNjZXB0SnMgaW1wbGVtZW50cyBBY3Rpb24ge1xuXHRyZWFkb25seSB0eXBlID0gRGFmZkF1dGhvcml6ZU5ldEFjdGlvblR5cGVzLkxvYWRBY2NlcHRKc0FjdGlvbjtcbn1cblxuLyoqXG4gKiBJbmRpY2F0ZXMgdGhhdCB0aGUgQWNjZXB0SnMgbGlicmFyeSBoYXMgbG9hZGVkIHN1Y2Nlc3NmdWxseS5cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZMb2FkQWNjZXB0SnNTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcblx0cmVhZG9ubHkgdHlwZSA9IERhZmZBdXRob3JpemVOZXRBY3Rpb25UeXBlcy5Mb2FkQWNjZXB0SnNTdWNjZXNzQWN0aW9uO1xufVxuXG4vKipcbiAqIEluZGljYXRlcyB0aGF0IHRoZSBBY2NlcHRKcyBsaWJyYXJ5IGhhcyBmYWlsZWQgdG8gbG9hZFxuICovXG5leHBvcnQgY2xhc3MgRGFmZkxvYWRBY2NlcHRKc0ZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuXHRyZWFkb25seSB0eXBlID0gRGFmZkF1dGhvcml6ZU5ldEFjdGlvblR5cGVzLkxvYWRBY2NlcHRKc0ZhaWx1cmVBY3Rpb247XG5cblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IERhZmZTdGF0ZUVycm9yKSB7fTtcbn1cblxuZXhwb3J0IHR5cGUgRGFmZkF1dGhvcml6ZU5ldEFjdGlvbnM8XG5cdFQgZXh0ZW5kcyBEYWZmQXV0aG9yaXplTmV0VG9rZW5SZXF1ZXN0ID0gRGFmZkF1dGhvcml6ZU5ldFRva2VuUmVxdWVzdFxuPiA9XG5cdHwgRGFmZkF1dGhvcml6ZU5ldFVwZGF0ZVBheW1lbnQ8VD5cblx0fCBEYWZmQXV0aG9yaXplTmV0VXBkYXRlUGF5bWVudFN1Y2Nlc3Ncblx0fCBEYWZmQXV0aG9yaXplTmV0VXBkYXRlUGF5bWVudEZhaWx1cmVcblx0fCBEYWZmTG9hZEFjY2VwdEpzU3VjY2Vzc1xuXHR8IERhZmZMb2FkQWNjZXB0SnNGYWlsdXJlXG5cdHwgRGFmZkxvYWRBY2NlcHRKcztcbiJdfQ==