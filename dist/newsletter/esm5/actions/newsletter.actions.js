/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffNewsletterActionTypes = {
    NewsletterSubscribeAction: '[Daff-Newsletter] Newsletter Subscribe Action',
    NewsletterCancelAction: '[Daff-Newsletter] Newsletter Cancel Action',
    NewsletterSuccessSubscribeAction: '[Daff-Newsletter] Succeeded on Newsletter Subscribe Action',
    NewsletterFailedSubscribeAction: '[Daff-Newsletter] Failed on Newsletter Subscribe Action',
    NewsletterRetry: '[Daff-Newsletter] Retrying submission',
    NewsletterReset: '[Daff-Newsletter] Reset Newsletter',
};
export { DaffNewsletterActionTypes };
/**
 * @template T
 */
var /**
 * @template T
 */
DaffNewsletterSubscribe = /** @class */ (function () {
    function DaffNewsletterSubscribe(payload) {
        this.payload = payload;
        this.type = DaffNewsletterActionTypes.NewsletterSubscribeAction;
    }
    return DaffNewsletterSubscribe;
}());
/**
 * @template T
 */
export { DaffNewsletterSubscribe };
if (false) {
    /** @type {?} */
    DaffNewsletterSubscribe.prototype.type;
    /** @type {?} */
    DaffNewsletterSubscribe.prototype.payload;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffNewsletterRetry = /** @class */ (function () {
    function DaffNewsletterRetry(payload) {
        this.payload = payload;
        this.type = DaffNewsletterActionTypes.NewsletterRetry;
    }
    return DaffNewsletterRetry;
}());
/**
 * @template T
 */
export { DaffNewsletterRetry };
if (false) {
    /** @type {?} */
    DaffNewsletterRetry.prototype.type;
    /** @type {?} */
    DaffNewsletterRetry.prototype.payload;
}
var DaffNewsletterCancel = /** @class */ (function () {
    function DaffNewsletterCancel() {
        this.type = DaffNewsletterActionTypes.NewsletterCancelAction;
    }
    return DaffNewsletterCancel;
}());
export { DaffNewsletterCancel };
if (false) {
    /** @type {?} */
    DaffNewsletterCancel.prototype.type;
}
var DaffNewsletterFailedSubscribe = /** @class */ (function () {
    function DaffNewsletterFailedSubscribe(payload) {
        this.payload = payload;
        this.type = DaffNewsletterActionTypes.NewsletterFailedSubscribeAction;
    }
    return DaffNewsletterFailedSubscribe;
}());
export { DaffNewsletterFailedSubscribe };
if (false) {
    /** @type {?} */
    DaffNewsletterFailedSubscribe.prototype.type;
    /** @type {?} */
    DaffNewsletterFailedSubscribe.prototype.payload;
}
var DaffNewsletterSuccessSubscribe = /** @class */ (function () {
    function DaffNewsletterSuccessSubscribe() {
        this.type = DaffNewsletterActionTypes.NewsletterSuccessSubscribeAction;
    }
    return DaffNewsletterSuccessSubscribe;
}());
export { DaffNewsletterSuccessSubscribe };
if (false) {
    /** @type {?} */
    DaffNewsletterSuccessSubscribe.prototype.type;
}
var DaffNewsletterReset = /** @class */ (function () {
    function DaffNewsletterReset() {
        this.type = DaffNewsletterActionTypes.NewsletterReset;
    }
    return DaffNewsletterReset;
}());
export { DaffNewsletterReset };
if (false) {
    /** @type {?} */
    DaffNewsletterReset.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3c2xldHRlci5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL25ld3NsZXR0ZXIvIiwic291cmNlcyI6WyJhY3Rpb25zL25ld3NsZXR0ZXIuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFLRSwyQkFBNEIsK0NBQStDO0lBQzNFLHdCQUF5Qiw0Q0FBNEM7SUFDckUsa0NBQW1DLDREQUE0RDtJQUMvRixpQ0FBa0MseURBQXlEO0lBQzNGLGlCQUFrQix1Q0FBdUM7SUFDekQsaUJBQWtCLG9DQUFvQzs7Ozs7O0FBR3hEOzs7O0lBR0UsaUNBQW1CLE9BQVU7UUFBVixZQUFPLEdBQVAsT0FBTyxDQUFHO1FBRnBCLFNBQUksR0FBRyx5QkFBeUIsQ0FBQyx5QkFBeUIsQ0FBQztJQUVuQyxDQUFDO0lBQ3BDLDhCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7Ozs7SUFIQyx1Q0FBb0U7O0lBRXhELDBDQUFpQjs7Ozs7QUFFL0I7Ozs7SUFHRSw2QkFBbUIsT0FBVTtRQUFWLFlBQU8sR0FBUCxPQUFPLENBQUc7UUFGcEIsU0FBSSxHQUFHLHlCQUF5QixDQUFDLGVBQWUsQ0FBQztJQUV6QixDQUFDO0lBQ3BDLDBCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7Ozs7SUFIQyxtQ0FBMEQ7O0lBRTlDLHNDQUFpQjs7QUFHL0I7SUFBQTtRQUNXLFNBQUksR0FBRyx5QkFBeUIsQ0FBQyxzQkFBc0IsQ0FBQztJQUVuRSxDQUFDO0lBQUQsMkJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLG9DQUFpRTs7QUFHbkU7SUFHRSx1Q0FBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFGekIsU0FBSSxHQUFHLHlCQUF5QixDQUFDLCtCQUErQixDQUFDO0lBRXBDLENBQUM7SUFDekMsb0NBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7OztJQUhDLDZDQUEwRTs7SUFFOUQsZ0RBQXNCOztBQUVwQztJQUFBO1FBQ1csU0FBSSxHQUFHLHlCQUF5QixDQUFDLGdDQUFnQyxDQUFDO0lBQzdFLENBQUM7SUFBRCxxQ0FBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0lBREMsOENBQTJFOztBQUU3RTtJQUFBO1FBQ1csU0FBSSxHQUFHLHlCQUF5QixDQUFDLGVBQWUsQ0FBQztJQUM1RCxDQUFDO0lBQUQsMEJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7OztJQURDLG1DQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgRGFmZk5ld3NsZXR0ZXJTdWJtaXNzaW9uIH0gZnJvbSAnLi4vbW9kZWxzL25ld3NsZXR0ZXIubW9kZWwnO1xuXG5leHBvcnQgZW51bSBEYWZmTmV3c2xldHRlckFjdGlvblR5cGVzIHtcbiAgTmV3c2xldHRlclN1YnNjcmliZUFjdGlvbiA9ICdbRGFmZi1OZXdzbGV0dGVyXSBOZXdzbGV0dGVyIFN1YnNjcmliZSBBY3Rpb24nLFxuICBOZXdzbGV0dGVyQ2FuY2VsQWN0aW9uID0gJ1tEYWZmLU5ld3NsZXR0ZXJdIE5ld3NsZXR0ZXIgQ2FuY2VsIEFjdGlvbicsXG4gIE5ld3NsZXR0ZXJTdWNjZXNzU3Vic2NyaWJlQWN0aW9uID0gJ1tEYWZmLU5ld3NsZXR0ZXJdIFN1Y2NlZWRlZCBvbiBOZXdzbGV0dGVyIFN1YnNjcmliZSBBY3Rpb24nLFxuICBOZXdzbGV0dGVyRmFpbGVkU3Vic2NyaWJlQWN0aW9uID0gJ1tEYWZmLU5ld3NsZXR0ZXJdIEZhaWxlZCBvbiBOZXdzbGV0dGVyIFN1YnNjcmliZSBBY3Rpb24nLFxuICBOZXdzbGV0dGVyUmV0cnkgPSAnW0RhZmYtTmV3c2xldHRlcl0gUmV0cnlpbmcgc3VibWlzc2lvbicsXG4gIE5ld3NsZXR0ZXJSZXNldCA9ICdbRGFmZi1OZXdzbGV0dGVyXSBSZXNldCBOZXdzbGV0dGVyJ1xufVxuXG5leHBvcnQgY2xhc3MgRGFmZk5ld3NsZXR0ZXJTdWJzY3JpYmU8VCBleHRlbmRzIERhZmZOZXdzbGV0dGVyU3VibWlzc2lvbj4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZk5ld3NsZXR0ZXJBY3Rpb25UeXBlcy5OZXdzbGV0dGVyU3Vic2NyaWJlQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBUKSB7IH1cbn1cbmV4cG9ydCBjbGFzcyBEYWZmTmV3c2xldHRlclJldHJ5PFQgZXh0ZW5kcyBEYWZmTmV3c2xldHRlclN1Ym1pc3Npb24+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZOZXdzbGV0dGVyQWN0aW9uVHlwZXMuTmV3c2xldHRlclJldHJ5O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBUKSB7IH1cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZOZXdzbGV0dGVyQ2FuY2VsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZOZXdzbGV0dGVyQWN0aW9uVHlwZXMuTmV3c2xldHRlckNhbmNlbEFjdGlvbjtcblxufVxuZXhwb3J0IGNsYXNzIERhZmZOZXdzbGV0dGVyRmFpbGVkU3Vic2NyaWJlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZOZXdzbGV0dGVyQWN0aW9uVHlwZXMuTmV3c2xldHRlckZhaWxlZFN1YnNjcmliZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7IH1cbn1cbmV4cG9ydCBjbGFzcyBEYWZmTmV3c2xldHRlclN1Y2Nlc3NTdWJzY3JpYmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZk5ld3NsZXR0ZXJBY3Rpb25UeXBlcy5OZXdzbGV0dGVyU3VjY2Vzc1N1YnNjcmliZUFjdGlvbjtcbn1cbmV4cG9ydCBjbGFzcyBEYWZmTmV3c2xldHRlclJlc2V0IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZOZXdzbGV0dGVyQWN0aW9uVHlwZXMuTmV3c2xldHRlclJlc2V0O1xufVxuXG5leHBvcnQgdHlwZSBEYWZmTmV3c2xldHRlckFjdGlvbnM8VCBleHRlbmRzIERhZmZOZXdzbGV0dGVyU3VibWlzc2lvbj4gPSBcbiAgRGFmZk5ld3NsZXR0ZXJTdWJzY3JpYmU8VD4gfFxuICBEYWZmTmV3c2xldHRlclN1Y2Nlc3NTdWJzY3JpYmUgfFxuICBEYWZmTmV3c2xldHRlckZhaWxlZFN1YnNjcmliZSB8XG4gIERhZmZOZXdzbGV0dGVyUmVzZXQgfFxuICBEYWZmTmV3c2xldHRlclJldHJ5PFQ+IHxcbiAgRGFmZk5ld3NsZXR0ZXJDYW5jZWw7Il19