/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffNavigationActionTypes = {
    NavigationLoadAction: '[Daff-Navigation] Navigation Load Action',
    NavigationLoadSuccessAction: '[Daff-Navigation] Navigation Load Success Action',
    NavigationLoadFailureAction: '[Daff-Navigation] Navigation Load Failure Action',
};
export { DaffNavigationActionTypes };
var DaffNavigationLoad = /** @class */ (function () {
    function DaffNavigationLoad(payload) {
        this.payload = payload;
        this.type = DaffNavigationActionTypes.NavigationLoadAction;
    }
    return DaffNavigationLoad;
}());
export { DaffNavigationLoad };
if (false) {
    /** @type {?} */
    DaffNavigationLoad.prototype.type;
    /** @type {?} */
    DaffNavigationLoad.prototype.payload;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffNavigationLoadSuccess = /** @class */ (function () {
    function DaffNavigationLoadSuccess(payload) {
        this.payload = payload;
        this.type = DaffNavigationActionTypes.NavigationLoadSuccessAction;
    }
    return DaffNavigationLoadSuccess;
}());
/**
 * @template T
 */
export { DaffNavigationLoadSuccess };
if (false) {
    /** @type {?} */
    DaffNavigationLoadSuccess.prototype.type;
    /** @type {?} */
    DaffNavigationLoadSuccess.prototype.payload;
}
var DaffNavigationLoadFailure = /** @class */ (function () {
    function DaffNavigationLoadFailure(payload) {
        this.payload = payload;
        this.type = DaffNavigationActionTypes.NavigationLoadFailureAction;
    }
    return DaffNavigationLoadFailure;
}());
export { DaffNavigationLoadFailure };
if (false) {
    /** @type {?} */
    DaffNavigationLoadFailure.prototype.type;
    /** @type {?} */
    DaffNavigationLoadFailure.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL25hdmlnYXRpb24vc3RhdGUvIiwic291cmNlcyI6WyJhY3Rpb25zL25hdmlnYXRpb24uYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFLRSxzQkFBdUIsMENBQTBDO0lBQ2pFLDZCQUE4QixrREFBa0Q7SUFDaEYsNkJBQThCLGtEQUFrRDs7O0FBR2xGO0lBR0UsNEJBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRnpCLFNBQUksR0FBRyx5QkFBeUIsQ0FBQyxvQkFBb0IsQ0FBQztJQUV6QixDQUFDO0lBQ3pDLHlCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7SUFIQyxrQ0FBK0Q7O0lBRW5ELHFDQUFzQjs7Ozs7QUFHcEM7Ozs7SUFHRSxtQ0FBbUIsT0FBVTtRQUFWLFlBQU8sR0FBUCxPQUFPLENBQUc7UUFGcEIsU0FBSSxHQUFHLHlCQUF5QixDQUFDLDJCQUEyQixDQUFDO0lBRXJDLENBQUM7SUFDcEMsZ0NBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7Ozs7OztJQUhDLHlDQUFzRTs7SUFFMUQsNENBQWlCOztBQUcvQjtJQUdFLG1DQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUZ6QixTQUFJLEdBQUcseUJBQXlCLENBQUMsMkJBQTJCLENBQUM7SUFFaEMsQ0FBQztJQUN6QyxnQ0FBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7O0lBSEMseUNBQXNFOztJQUUxRCw0Q0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IERhZmZHZW5lcmljTmF2aWdhdGlvblRyZWUgfSBmcm9tICdAZGFmZm9kaWwvbmF2aWdhdGlvbic7XG5cbmV4cG9ydCBlbnVtIERhZmZOYXZpZ2F0aW9uQWN0aW9uVHlwZXMge1xuICBOYXZpZ2F0aW9uTG9hZEFjdGlvbiA9ICdbRGFmZi1OYXZpZ2F0aW9uXSBOYXZpZ2F0aW9uIExvYWQgQWN0aW9uJyxcbiAgTmF2aWdhdGlvbkxvYWRTdWNjZXNzQWN0aW9uID0gJ1tEYWZmLU5hdmlnYXRpb25dIE5hdmlnYXRpb24gTG9hZCBTdWNjZXNzIEFjdGlvbicsXG4gIE5hdmlnYXRpb25Mb2FkRmFpbHVyZUFjdGlvbiA9ICdbRGFmZi1OYXZpZ2F0aW9uXSBOYXZpZ2F0aW9uIExvYWQgRmFpbHVyZSBBY3Rpb24nXG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmTmF2aWdhdGlvbkxvYWQgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZk5hdmlnYXRpb25BY3Rpb25UeXBlcy5OYXZpZ2F0aW9uTG9hZEFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7IH1cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZOYXZpZ2F0aW9uTG9hZFN1Y2Nlc3M8VCBleHRlbmRzIERhZmZHZW5lcmljTmF2aWdhdGlvblRyZWU8VD4+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZOYXZpZ2F0aW9uQWN0aW9uVHlwZXMuTmF2aWdhdGlvbkxvYWRTdWNjZXNzQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBUKSB7IH1cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZOYXZpZ2F0aW9uTG9hZEZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZk5hdmlnYXRpb25BY3Rpb25UeXBlcy5OYXZpZ2F0aW9uTG9hZEZhaWx1cmVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykgeyB9XG59XG5cbmV4cG9ydCB0eXBlIERhZmZOYXZpZ2F0aW9uQWN0aW9uczxUIGV4dGVuZHMgRGFmZkdlbmVyaWNOYXZpZ2F0aW9uVHJlZTxUPj4gPVxuICB8IERhZmZOYXZpZ2F0aW9uTG9hZFxuICB8IERhZmZOYXZpZ2F0aW9uTG9hZFN1Y2Nlc3M8VD5cbiAgfCBEYWZmTmF2aWdhdGlvbkxvYWRGYWlsdXJlO1xuIl19