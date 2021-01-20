/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffContactActionTypes = {
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
export class DaffContactSubmit {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffContactActionTypes.ContactSubmitAction;
    }
}
if (false) {
    /** @type {?} */
    DaffContactSubmit.prototype.type;
    /** @type {?} */
    DaffContactSubmit.prototype.payload;
}
/**
 * @template T
 */
export class DaffContactRetry {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffContactActionTypes.ContactRetryAction;
    }
}
if (false) {
    /** @type {?} */
    DaffContactRetry.prototype.type;
    /** @type {?} */
    DaffContactRetry.prototype.payload;
}
export class DaffContactFailedSubmit {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffContactActionTypes.ContactFailedSubmitAction;
    }
}
if (false) {
    /** @type {?} */
    DaffContactFailedSubmit.prototype.type;
    /** @type {?} */
    DaffContactFailedSubmit.prototype.payload;
}
export class DaffContactCancel {
    constructor() {
        this.type = DaffContactActionTypes.ContactCancelAction;
    }
}
if (false) {
    /** @type {?} */
    DaffContactCancel.prototype.type;
}
export class DaffContactSuccessSubmit {
    constructor() {
        this.type = DaffContactActionTypes.ContactSuccessSubmitAction;
    }
}
if (false) {
    /** @type {?} */
    DaffContactSuccessSubmit.prototype.type;
}
export class DaffContactReset {
    constructor() {
        this.type = DaffContactActionTypes.ContactResetAction;
    }
}
if (false) {
    /** @type {?} */
    DaffContactReset.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NvbnRhY3Qvc3RhdGUvIiwic291cmNlcyI6WyJhY3Rpb25zL2NvbnRhY3QuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFHQyxxQkFBc0Isc0NBQXNDO0lBQzVELHFCQUFzQixzQ0FBc0M7SUFDNUQsNEJBQTZCLDhDQUE4QztJQUMzRSwyQkFBNEIsNkNBQTZDO0lBQ3pFLG9CQUFxQixxQ0FBcUM7SUFDMUQsb0JBQXFCLHFDQUFxQzs7Ozs7O0FBRzNELE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFHN0IsWUFBbUIsT0FBVTtRQUFWLFlBQU8sR0FBUCxPQUFPLENBQUc7UUFGcEIsU0FBSSxHQUFHLHNCQUFzQixDQUFDLG1CQUFtQixDQUFDO0lBRTNCLENBQUM7Q0FDakM7OztJQUhBLGlDQUEyRDs7SUFFL0Msb0NBQWlCOzs7OztBQUc5QixNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBRzVCLFlBQW1CLE9BQVU7UUFBVixZQUFPLEdBQVAsT0FBTyxDQUFHO1FBRnBCLFNBQUksR0FBRyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQztJQUUxQixDQUFDO0NBQ2pDOzs7SUFIQSxnQ0FBMEQ7O0lBRTlDLG1DQUFpQjs7QUFFOUIsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQUduQyxZQUFtQixPQUFpQjtRQUFqQixZQUFPLEdBQVAsT0FBTyxDQUFVO1FBRjNCLFNBQUksR0FBRyxzQkFBc0IsQ0FBQyx5QkFBeUIsQ0FBQztJQUUxQixDQUFDO0NBQ3hDOzs7SUFIQSx1Q0FBaUU7O0lBRXJELDBDQUF3Qjs7QUFFckMsTUFBTSxPQUFPLGlCQUFpQjtJQUE5QjtRQUNVLFNBQUksR0FBRyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQztJQUM1RCxDQUFDO0NBQUE7OztJQURBLGlDQUEyRDs7QUFFNUQsTUFBTSxPQUFPLHdCQUF3QjtJQUFyQztRQUNVLFNBQUksR0FBRyxzQkFBc0IsQ0FBQywwQkFBMEIsQ0FBQztJQUNuRSxDQUFDO0NBQUE7OztJQURBLHdDQUFrRTs7QUFFbkUsTUFBTSxPQUFPLGdCQUFnQjtJQUE3QjtRQUNVLFNBQUksR0FBRyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQztJQUMzRCxDQUFDO0NBQUE7OztJQURBLGdDQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuZXhwb3J0IGVudW0gRGFmZkNvbnRhY3RBY3Rpb25UeXBlcyB7XG5cdENvbnRhY3RTdWJtaXRBY3Rpb24gPSAnW0RhZmYtQ29udGFjdF0gQ29udGFjdCBTdWJtaXQgQWN0aW9uJyxcblx0Q29udGFjdENhbmNlbEFjdGlvbiA9ICdbRGFmZi1Db250YWN0XSBDb250YWN0IENhbmNlbCBBY3Rpb24nLFxuXHRDb250YWN0U3VjY2Vzc1N1Ym1pdEFjdGlvbiA9ICdbRGFmZi1Db250YWN0XSBDb250YWN0IFN1Y2Nlc3MgU3VibWl0IEFjdGlvbicsXG5cdENvbnRhY3RGYWlsZWRTdWJtaXRBY3Rpb24gPSAnW0RhZmYtQ29udGFjdF0gQ29udGFjdCBGYWlsZWQgU3VibWl0IEFjdGlvbicsXG5cdENvbnRhY3RSZXRyeUFjdGlvbiA9ICdbRGFmZi1Db250YWN0XSBDb250YWN0IFJldHJ5IEFjdGlvbicsXG5cdENvbnRhY3RSZXNldEFjdGlvbiA9ICdbRGFmZi1Db250YWN0XSBDb250YWN0IFJlc2V0IEFjdGlvbicsXG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ29udGFjdFN1Ym1pdDxUPiBpbXBsZW1lbnRzIEFjdGlvbiB7XG5cdHJlYWRvbmx5IHR5cGUgPSBEYWZmQ29udGFjdEFjdGlvblR5cGVzLkNvbnRhY3RTdWJtaXRBY3Rpb247XG5cblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFQpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ29udGFjdFJldHJ5PFQ+IGltcGxlbWVudHMgQWN0aW9uIHtcblx0cmVhZG9ubHkgdHlwZSA9IERhZmZDb250YWN0QWN0aW9uVHlwZXMuQ29udGFjdFJldHJ5QWN0aW9uO1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBUKSB7fVxufVxuZXhwb3J0IGNsYXNzIERhZmZDb250YWN0RmFpbGVkU3VibWl0IGltcGxlbWVudHMgQWN0aW9uIHtcblx0cmVhZG9ubHkgdHlwZSA9IERhZmZDb250YWN0QWN0aW9uVHlwZXMuQ29udGFjdEZhaWxlZFN1Ym1pdEFjdGlvbjtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nW10pIHt9XG59XG5leHBvcnQgY2xhc3MgRGFmZkNvbnRhY3RDYW5jZWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuXHRyZWFkb25seSB0eXBlID0gRGFmZkNvbnRhY3RBY3Rpb25UeXBlcy5Db250YWN0Q2FuY2VsQWN0aW9uO1xufVxuZXhwb3J0IGNsYXNzIERhZmZDb250YWN0U3VjY2Vzc1N1Ym1pdCBpbXBsZW1lbnRzIEFjdGlvbiB7XG5cdHJlYWRvbmx5IHR5cGUgPSBEYWZmQ29udGFjdEFjdGlvblR5cGVzLkNvbnRhY3RTdWNjZXNzU3VibWl0QWN0aW9uO1xufVxuZXhwb3J0IGNsYXNzIERhZmZDb250YWN0UmVzZXQgaW1wbGVtZW50cyBBY3Rpb24ge1xuXHRyZWFkb25seSB0eXBlID0gRGFmZkNvbnRhY3RBY3Rpb25UeXBlcy5Db250YWN0UmVzZXRBY3Rpb247XG59XG5cbmV4cG9ydCB0eXBlIERhZmZDb250YWN0QWN0aW9uczxUPiA9XG5cdHwgRGFmZkNvbnRhY3RTdWJtaXQ8VD5cblx0fCBEYWZmQ29udGFjdFJldHJ5PFQ+XG5cdHwgRGFmZkNvbnRhY3RGYWlsZWRTdWJtaXRcblx0fCBEYWZmQ29udGFjdENhbmNlbFxuXHR8IERhZmZDb250YWN0U3VjY2Vzc1N1Ym1pdFxuXHR8IERhZmZDb250YWN0UmVzZXQ7XG4iXX0=