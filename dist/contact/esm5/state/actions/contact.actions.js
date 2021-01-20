/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffContactActionTypes = {
    ContactSubmitAction: '[Daff-Contact] Contact Submit Action',
    ContactCancelAction: '[Daff-Contact] Contact Cancel Action',
    ContactSuccessSubmitAction: '[Daff-Contact] Contact Success Submit Action',
    ContactFailedSubmitAction: '[Daff-Contact] Contact Failed Submit Action',
    ContactRetryAction: '[Daff-Contact] Contact Retry Action',
    ContactResetAction: '[Daff-Contact] Contact Reset Action',
};
export { DaffContactActionTypes };
/**
 * @template T
 */
var /**
 * @template T
 */
DaffContactSubmit = /** @class */ (function () {
    function DaffContactSubmit(payload) {
        this.payload = payload;
        this.type = DaffContactActionTypes.ContactSubmitAction;
    }
    return DaffContactSubmit;
}());
/**
 * @template T
 */
export { DaffContactSubmit };
if (false) {
    /** @type {?} */
    DaffContactSubmit.prototype.type;
    /** @type {?} */
    DaffContactSubmit.prototype.payload;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffContactRetry = /** @class */ (function () {
    function DaffContactRetry(payload) {
        this.payload = payload;
        this.type = DaffContactActionTypes.ContactRetryAction;
    }
    return DaffContactRetry;
}());
/**
 * @template T
 */
export { DaffContactRetry };
if (false) {
    /** @type {?} */
    DaffContactRetry.prototype.type;
    /** @type {?} */
    DaffContactRetry.prototype.payload;
}
var DaffContactFailedSubmit = /** @class */ (function () {
    function DaffContactFailedSubmit(payload) {
        this.payload = payload;
        this.type = DaffContactActionTypes.ContactFailedSubmitAction;
    }
    return DaffContactFailedSubmit;
}());
export { DaffContactFailedSubmit };
if (false) {
    /** @type {?} */
    DaffContactFailedSubmit.prototype.type;
    /** @type {?} */
    DaffContactFailedSubmit.prototype.payload;
}
var DaffContactCancel = /** @class */ (function () {
    function DaffContactCancel() {
        this.type = DaffContactActionTypes.ContactCancelAction;
    }
    return DaffContactCancel;
}());
export { DaffContactCancel };
if (false) {
    /** @type {?} */
    DaffContactCancel.prototype.type;
}
var DaffContactSuccessSubmit = /** @class */ (function () {
    function DaffContactSuccessSubmit() {
        this.type = DaffContactActionTypes.ContactSuccessSubmitAction;
    }
    return DaffContactSuccessSubmit;
}());
export { DaffContactSuccessSubmit };
if (false) {
    /** @type {?} */
    DaffContactSuccessSubmit.prototype.type;
}
var DaffContactReset = /** @class */ (function () {
    function DaffContactReset() {
        this.type = DaffContactActionTypes.ContactResetAction;
    }
    return DaffContactReset;
}());
export { DaffContactReset };
if (false) {
    /** @type {?} */
    DaffContactReset.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NvbnRhY3Qvc3RhdGUvIiwic291cmNlcyI6WyJhY3Rpb25zL2NvbnRhY3QuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFHQyxxQkFBc0Isc0NBQXNDO0lBQzVELHFCQUFzQixzQ0FBc0M7SUFDNUQsNEJBQTZCLDhDQUE4QztJQUMzRSwyQkFBNEIsNkNBQTZDO0lBQ3pFLG9CQUFxQixxQ0FBcUM7SUFDMUQsb0JBQXFCLHFDQUFxQzs7Ozs7O0FBRzNEOzs7O0lBR0MsMkJBQW1CLE9BQVU7UUFBVixZQUFPLEdBQVAsT0FBTyxDQUFHO1FBRnBCLFNBQUksR0FBRyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQztJQUUzQixDQUFDO0lBQ2xDLHdCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7Ozs7SUFIQSxpQ0FBMkQ7O0lBRS9DLG9DQUFpQjs7Ozs7QUFHOUI7Ozs7SUFHQywwQkFBbUIsT0FBVTtRQUFWLFlBQU8sR0FBUCxPQUFPLENBQUc7UUFGcEIsU0FBSSxHQUFHLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDO0lBRTFCLENBQUM7SUFDbEMsdUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7Ozs7OztJQUhBLGdDQUEwRDs7SUFFOUMsbUNBQWlCOztBQUU5QjtJQUdDLGlDQUFtQixPQUFpQjtRQUFqQixZQUFPLEdBQVAsT0FBTyxDQUFVO1FBRjNCLFNBQUksR0FBRyxzQkFBc0IsQ0FBQyx5QkFBeUIsQ0FBQztJQUUxQixDQUFDO0lBQ3pDLDhCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7SUFIQSx1Q0FBaUU7O0lBRXJELDBDQUF3Qjs7QUFFckM7SUFBQTtRQUNVLFNBQUksR0FBRyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQztJQUM1RCxDQUFDO0lBQUQsd0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7OztJQURBLGlDQUEyRDs7QUFFNUQ7SUFBQTtRQUNVLFNBQUksR0FBRyxzQkFBc0IsQ0FBQywwQkFBMEIsQ0FBQztJQUNuRSxDQUFDO0lBQUQsK0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7OztJQURBLHdDQUFrRTs7QUFFbkU7SUFBQTtRQUNVLFNBQUksR0FBRyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQztJQUMzRCxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7OztJQURBLGdDQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuZXhwb3J0IGVudW0gRGFmZkNvbnRhY3RBY3Rpb25UeXBlcyB7XG5cdENvbnRhY3RTdWJtaXRBY3Rpb24gPSAnW0RhZmYtQ29udGFjdF0gQ29udGFjdCBTdWJtaXQgQWN0aW9uJyxcblx0Q29udGFjdENhbmNlbEFjdGlvbiA9ICdbRGFmZi1Db250YWN0XSBDb250YWN0IENhbmNlbCBBY3Rpb24nLFxuXHRDb250YWN0U3VjY2Vzc1N1Ym1pdEFjdGlvbiA9ICdbRGFmZi1Db250YWN0XSBDb250YWN0IFN1Y2Nlc3MgU3VibWl0IEFjdGlvbicsXG5cdENvbnRhY3RGYWlsZWRTdWJtaXRBY3Rpb24gPSAnW0RhZmYtQ29udGFjdF0gQ29udGFjdCBGYWlsZWQgU3VibWl0IEFjdGlvbicsXG5cdENvbnRhY3RSZXRyeUFjdGlvbiA9ICdbRGFmZi1Db250YWN0XSBDb250YWN0IFJldHJ5IEFjdGlvbicsXG5cdENvbnRhY3RSZXNldEFjdGlvbiA9ICdbRGFmZi1Db250YWN0XSBDb250YWN0IFJlc2V0IEFjdGlvbicsXG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ29udGFjdFN1Ym1pdDxUPiBpbXBsZW1lbnRzIEFjdGlvbiB7XG5cdHJlYWRvbmx5IHR5cGUgPSBEYWZmQ29udGFjdEFjdGlvblR5cGVzLkNvbnRhY3RTdWJtaXRBY3Rpb247XG5cblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFQpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ29udGFjdFJldHJ5PFQ+IGltcGxlbWVudHMgQWN0aW9uIHtcblx0cmVhZG9ubHkgdHlwZSA9IERhZmZDb250YWN0QWN0aW9uVHlwZXMuQ29udGFjdFJldHJ5QWN0aW9uO1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBUKSB7fVxufVxuZXhwb3J0IGNsYXNzIERhZmZDb250YWN0RmFpbGVkU3VibWl0IGltcGxlbWVudHMgQWN0aW9uIHtcblx0cmVhZG9ubHkgdHlwZSA9IERhZmZDb250YWN0QWN0aW9uVHlwZXMuQ29udGFjdEZhaWxlZFN1Ym1pdEFjdGlvbjtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nW10pIHt9XG59XG5leHBvcnQgY2xhc3MgRGFmZkNvbnRhY3RDYW5jZWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuXHRyZWFkb25seSB0eXBlID0gRGFmZkNvbnRhY3RBY3Rpb25UeXBlcy5Db250YWN0Q2FuY2VsQWN0aW9uO1xufVxuZXhwb3J0IGNsYXNzIERhZmZDb250YWN0U3VjY2Vzc1N1Ym1pdCBpbXBsZW1lbnRzIEFjdGlvbiB7XG5cdHJlYWRvbmx5IHR5cGUgPSBEYWZmQ29udGFjdEFjdGlvblR5cGVzLkNvbnRhY3RTdWNjZXNzU3VibWl0QWN0aW9uO1xufVxuZXhwb3J0IGNsYXNzIERhZmZDb250YWN0UmVzZXQgaW1wbGVtZW50cyBBY3Rpb24ge1xuXHRyZWFkb25seSB0eXBlID0gRGFmZkNvbnRhY3RBY3Rpb25UeXBlcy5Db250YWN0UmVzZXRBY3Rpb247XG59XG5cbmV4cG9ydCB0eXBlIERhZmZDb250YWN0QWN0aW9uczxUPiA9XG5cdHwgRGFmZkNvbnRhY3RTdWJtaXQ8VD5cblx0fCBEYWZmQ29udGFjdFJldHJ5PFQ+XG5cdHwgRGFmZkNvbnRhY3RGYWlsZWRTdWJtaXRcblx0fCBEYWZmQ29udGFjdENhbmNlbFxuXHR8IERhZmZDb250YWN0U3VjY2Vzc1N1Ym1pdFxuXHR8IERhZmZDb250YWN0UmVzZXQ7XG4iXX0=