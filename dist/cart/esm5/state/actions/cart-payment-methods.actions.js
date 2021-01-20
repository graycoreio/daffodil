/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffCartPaymentMethodsActionTypes = {
    CartPaymentMethodsLoadAction: '[DaffCart] Payment Methods Load Action',
    CartPaymentMethodsLoadSuccessAction: '[DaffCart] Payment Methods Load Success Action',
    CartPaymentMethodsLoadFailureAction: '[DaffCart] Payment Methods Load Failure Action',
};
export { DaffCartPaymentMethodsActionTypes };
var DaffCartPaymentMethodsLoad = /** @class */ (function () {
    function DaffCartPaymentMethodsLoad() {
        this.type = DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadAction;
    }
    return DaffCartPaymentMethodsLoad;
}());
export { DaffCartPaymentMethodsLoad };
if (false) {
    /** @type {?} */
    DaffCartPaymentMethodsLoad.prototype.type;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffCartPaymentMethodsLoadSuccess = /** @class */ (function () {
    function DaffCartPaymentMethodsLoadSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadSuccessAction;
    }
    return DaffCartPaymentMethodsLoadSuccess;
}());
/**
 * @template T
 */
export { DaffCartPaymentMethodsLoadSuccess };
if (false) {
    /** @type {?} */
    DaffCartPaymentMethodsLoadSuccess.prototype.type;
    /** @type {?} */
    DaffCartPaymentMethodsLoadSuccess.prototype.payload;
}
var DaffCartPaymentMethodsLoadFailure = /** @class */ (function () {
    function DaffCartPaymentMethodsLoadFailure(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadFailureAction;
    }
    return DaffCartPaymentMethodsLoadFailure;
}());
export { DaffCartPaymentMethodsLoadFailure };
if (false) {
    /** @type {?} */
    DaffCartPaymentMethodsLoadFailure.prototype.type;
    /** @type {?} */
    DaffCartPaymentMethodsLoadFailure.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYXltZW50LW1ldGhvZHMuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L3N0YXRlLyIsInNvdXJjZXMiOlsiYWN0aW9ucy9jYXJ0LXBheW1lbnQtbWV0aG9kcy5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQU1FLDhCQUErQix3Q0FBd0M7SUFDdkUscUNBQXNDLGdEQUFnRDtJQUN0RixxQ0FBc0MsZ0RBQWdEOzs7QUFHeEY7SUFHRTtRQUZTLFNBQUksR0FBRyxpQ0FBaUMsQ0FBQyw0QkFBNEIsQ0FBQztJQUVoRSxDQUFDO0lBQ2xCLGlDQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7SUFIQywwQ0FBK0U7Ozs7O0FBS2pGOzs7O0lBR0UsMkNBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRnRCLFNBQUksR0FBRyxpQ0FBaUMsQ0FBQyxtQ0FBbUMsQ0FBQztJQUVwRCxDQUFDO0lBQ3JDLHdDQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7Ozs7SUFIQyxpREFBc0Y7O0lBRTFFLG9EQUFtQjs7QUFHakM7SUFHRSwyQ0FBbUIsT0FBdUI7UUFBdkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFGakMsU0FBSSxHQUFHLGlDQUFpQyxDQUFDLG1DQUFtQyxDQUFDO0lBRXpDLENBQUM7SUFDaEQsd0NBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7OztJQUhDLGlEQUFzRjs7SUFFMUUsb0RBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBEYWZmU3RhdGVFcnJvciB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3N0YXRlJztcbmltcG9ydCB7IERhZmZDYXJ0UGF5bWVudE1ldGhvZCB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcblxuZXhwb3J0IGVudW0gRGFmZkNhcnRQYXltZW50TWV0aG9kc0FjdGlvblR5cGVzIHtcbiAgQ2FydFBheW1lbnRNZXRob2RzTG9hZEFjdGlvbiA9ICdbRGFmZkNhcnRdIFBheW1lbnQgTWV0aG9kcyBMb2FkIEFjdGlvbicsXG4gIENhcnRQYXltZW50TWV0aG9kc0xvYWRTdWNjZXNzQWN0aW9uID0gJ1tEYWZmQ2FydF0gUGF5bWVudCBNZXRob2RzIExvYWQgU3VjY2VzcyBBY3Rpb24nLFxuICBDYXJ0UGF5bWVudE1ldGhvZHNMb2FkRmFpbHVyZUFjdGlvbiA9ICdbRGFmZkNhcnRdIFBheW1lbnQgTWV0aG9kcyBMb2FkIEZhaWx1cmUgQWN0aW9uJyxcbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0UGF5bWVudE1ldGhvZHNMb2FkIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0UGF5bWVudE1ldGhvZHNBY3Rpb25UeXBlcy5DYXJ0UGF5bWVudE1ldGhvZHNMb2FkQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0UGF5bWVudE1ldGhvZHNMb2FkU3VjY2VzczxUIGV4dGVuZHMgRGFmZkNhcnRQYXltZW50TWV0aG9kID0gRGFmZkNhcnRQYXltZW50TWV0aG9kPiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydFBheW1lbnRNZXRob2RzQWN0aW9uVHlwZXMuQ2FydFBheW1lbnRNZXRob2RzTG9hZFN1Y2Nlc3NBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFRbXSkge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0UGF5bWVudE1ldGhvZHNMb2FkRmFpbHVyZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydFBheW1lbnRNZXRob2RzQWN0aW9uVHlwZXMuQ2FydFBheW1lbnRNZXRob2RzTG9hZEZhaWx1cmVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IERhZmZTdGF0ZUVycm9yKSB7fVxufVxuXG5leHBvcnQgdHlwZSBEYWZmQ2FydFBheW1lbnRNZXRob2RzQWN0aW9uczxUIGV4dGVuZHMgRGFmZkNhcnRQYXltZW50TWV0aG9kID0gRGFmZkNhcnRQYXltZW50TWV0aG9kPiA9XG4gIHwgRGFmZkNhcnRQYXltZW50TWV0aG9kc0xvYWRcbiAgfCBEYWZmQ2FydFBheW1lbnRNZXRob2RzTG9hZFN1Y2Nlc3M8VD5cbiAgfCBEYWZmQ2FydFBheW1lbnRNZXRob2RzTG9hZEZhaWx1cmVcbiJdfQ==