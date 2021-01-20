/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffNewsletterActionTypes = {
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
export class DaffNewsletterSubscribe {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffNewsletterActionTypes.NewsletterSubscribeAction;
    }
}
if (false) {
    /** @type {?} */
    DaffNewsletterSubscribe.prototype.type;
    /** @type {?} */
    DaffNewsletterSubscribe.prototype.payload;
}
/**
 * @template T
 */
export class DaffNewsletterRetry {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffNewsletterActionTypes.NewsletterRetry;
    }
}
if (false) {
    /** @type {?} */
    DaffNewsletterRetry.prototype.type;
    /** @type {?} */
    DaffNewsletterRetry.prototype.payload;
}
export class DaffNewsletterCancel {
    constructor() {
        this.type = DaffNewsletterActionTypes.NewsletterCancelAction;
    }
}
if (false) {
    /** @type {?} */
    DaffNewsletterCancel.prototype.type;
}
export class DaffNewsletterFailedSubscribe {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffNewsletterActionTypes.NewsletterFailedSubscribeAction;
    }
}
if (false) {
    /** @type {?} */
    DaffNewsletterFailedSubscribe.prototype.type;
    /** @type {?} */
    DaffNewsletterFailedSubscribe.prototype.payload;
}
export class DaffNewsletterSuccessSubscribe {
    constructor() {
        this.type = DaffNewsletterActionTypes.NewsletterSuccessSubscribeAction;
    }
}
if (false) {
    /** @type {?} */
    DaffNewsletterSuccessSubscribe.prototype.type;
}
export class DaffNewsletterReset {
    constructor() {
        this.type = DaffNewsletterActionTypes.NewsletterReset;
    }
}
if (false) {
    /** @type {?} */
    DaffNewsletterReset.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3c2xldHRlci5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL25ld3NsZXR0ZXIvIiwic291cmNlcyI6WyJhY3Rpb25zL25ld3NsZXR0ZXIuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFLRSwyQkFBNEIsK0NBQStDO0lBQzNFLHdCQUF5Qiw0Q0FBNEM7SUFDckUsa0NBQW1DLDREQUE0RDtJQUMvRixpQ0FBa0MseURBQXlEO0lBQzNGLGlCQUFrQix1Q0FBdUM7SUFDekQsaUJBQWtCLG9DQUFvQzs7Ozs7O0FBR3hELE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFHbEMsWUFBbUIsT0FBVTtRQUFWLFlBQU8sR0FBUCxPQUFPLENBQUc7UUFGcEIsU0FBSSxHQUFHLHlCQUF5QixDQUFDLHlCQUF5QixDQUFDO0lBRW5DLENBQUM7Q0FDbkM7OztJQUhDLHVDQUFvRTs7SUFFeEQsMENBQWlCOzs7OztBQUUvQixNQUFNLE9BQU8sbUJBQW1COzs7O0lBRzlCLFlBQW1CLE9BQVU7UUFBVixZQUFPLEdBQVAsT0FBTyxDQUFHO1FBRnBCLFNBQUksR0FBRyx5QkFBeUIsQ0FBQyxlQUFlLENBQUM7SUFFekIsQ0FBQztDQUNuQzs7O0lBSEMsbUNBQTBEOztJQUU5QyxzQ0FBaUI7O0FBRy9CLE1BQU0sT0FBTyxvQkFBb0I7SUFBakM7UUFDVyxTQUFJLEdBQUcseUJBQXlCLENBQUMsc0JBQXNCLENBQUM7SUFFbkUsQ0FBQztDQUFBOzs7SUFGQyxvQ0FBaUU7O0FBR25FLE1BQU0sT0FBTyw2QkFBNkI7Ozs7SUFHeEMsWUFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFGekIsU0FBSSxHQUFHLHlCQUF5QixDQUFDLCtCQUErQixDQUFDO0lBRXBDLENBQUM7Q0FDeEM7OztJQUhDLDZDQUEwRTs7SUFFOUQsZ0RBQXNCOztBQUVwQyxNQUFNLE9BQU8sOEJBQThCO0lBQTNDO1FBQ1csU0FBSSxHQUFHLHlCQUF5QixDQUFDLGdDQUFnQyxDQUFDO0lBQzdFLENBQUM7Q0FBQTs7O0lBREMsOENBQTJFOztBQUU3RSxNQUFNLE9BQU8sbUJBQW1CO0lBQWhDO1FBQ1csU0FBSSxHQUFHLHlCQUF5QixDQUFDLGVBQWUsQ0FBQztJQUM1RCxDQUFDO0NBQUE7OztJQURDLG1DQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgRGFmZk5ld3NsZXR0ZXJTdWJtaXNzaW9uIH0gZnJvbSAnLi4vbW9kZWxzL25ld3NsZXR0ZXIubW9kZWwnO1xuXG5leHBvcnQgZW51bSBEYWZmTmV3c2xldHRlckFjdGlvblR5cGVzIHtcbiAgTmV3c2xldHRlclN1YnNjcmliZUFjdGlvbiA9ICdbRGFmZi1OZXdzbGV0dGVyXSBOZXdzbGV0dGVyIFN1YnNjcmliZSBBY3Rpb24nLFxuICBOZXdzbGV0dGVyQ2FuY2VsQWN0aW9uID0gJ1tEYWZmLU5ld3NsZXR0ZXJdIE5ld3NsZXR0ZXIgQ2FuY2VsIEFjdGlvbicsXG4gIE5ld3NsZXR0ZXJTdWNjZXNzU3Vic2NyaWJlQWN0aW9uID0gJ1tEYWZmLU5ld3NsZXR0ZXJdIFN1Y2NlZWRlZCBvbiBOZXdzbGV0dGVyIFN1YnNjcmliZSBBY3Rpb24nLFxuICBOZXdzbGV0dGVyRmFpbGVkU3Vic2NyaWJlQWN0aW9uID0gJ1tEYWZmLU5ld3NsZXR0ZXJdIEZhaWxlZCBvbiBOZXdzbGV0dGVyIFN1YnNjcmliZSBBY3Rpb24nLFxuICBOZXdzbGV0dGVyUmV0cnkgPSAnW0RhZmYtTmV3c2xldHRlcl0gUmV0cnlpbmcgc3VibWlzc2lvbicsXG4gIE5ld3NsZXR0ZXJSZXNldCA9ICdbRGFmZi1OZXdzbGV0dGVyXSBSZXNldCBOZXdzbGV0dGVyJ1xufVxuXG5leHBvcnQgY2xhc3MgRGFmZk5ld3NsZXR0ZXJTdWJzY3JpYmU8VCBleHRlbmRzIERhZmZOZXdzbGV0dGVyU3VibWlzc2lvbj4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZk5ld3NsZXR0ZXJBY3Rpb25UeXBlcy5OZXdzbGV0dGVyU3Vic2NyaWJlQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBUKSB7IH1cbn1cbmV4cG9ydCBjbGFzcyBEYWZmTmV3c2xldHRlclJldHJ5PFQgZXh0ZW5kcyBEYWZmTmV3c2xldHRlclN1Ym1pc3Npb24+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZOZXdzbGV0dGVyQWN0aW9uVHlwZXMuTmV3c2xldHRlclJldHJ5O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBUKSB7IH1cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZOZXdzbGV0dGVyQ2FuY2VsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZOZXdzbGV0dGVyQWN0aW9uVHlwZXMuTmV3c2xldHRlckNhbmNlbEFjdGlvbjtcblxufVxuZXhwb3J0IGNsYXNzIERhZmZOZXdzbGV0dGVyRmFpbGVkU3Vic2NyaWJlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZOZXdzbGV0dGVyQWN0aW9uVHlwZXMuTmV3c2xldHRlckZhaWxlZFN1YnNjcmliZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7IH1cbn1cbmV4cG9ydCBjbGFzcyBEYWZmTmV3c2xldHRlclN1Y2Nlc3NTdWJzY3JpYmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZk5ld3NsZXR0ZXJBY3Rpb25UeXBlcy5OZXdzbGV0dGVyU3VjY2Vzc1N1YnNjcmliZUFjdGlvbjtcbn1cbmV4cG9ydCBjbGFzcyBEYWZmTmV3c2xldHRlclJlc2V0IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZOZXdzbGV0dGVyQWN0aW9uVHlwZXMuTmV3c2xldHRlclJlc2V0O1xufVxuXG5leHBvcnQgdHlwZSBEYWZmTmV3c2xldHRlckFjdGlvbnM8VCBleHRlbmRzIERhZmZOZXdzbGV0dGVyU3VibWlzc2lvbj4gPSBcbiAgRGFmZk5ld3NsZXR0ZXJTdWJzY3JpYmU8VD4gfFxuICBEYWZmTmV3c2xldHRlclN1Y2Nlc3NTdWJzY3JpYmUgfFxuICBEYWZmTmV3c2xldHRlckZhaWxlZFN1YnNjcmliZSB8XG4gIERhZmZOZXdzbGV0dGVyUmVzZXQgfFxuICBEYWZmTmV3c2xldHRlclJldHJ5PFQ+IHxcbiAgRGFmZk5ld3NsZXR0ZXJDYW5jZWw7Il19