/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DaffHubspotFormsService } from '@daffodil/driver/hubspot';
export class DaffContactHubspotService {
    /**
     * @param {?} hubspotService
     */
    constructor(hubspotService) {
        this.hubspotService = hubspotService;
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    send(payload) {
        return this.hubspotService.submit(payload);
    }
}
DaffContactHubspotService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffContactHubspotService.ctorParameters = () => [
    { type: DaffHubspotFormsService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffContactHubspotService.prototype.hubspotService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NvbnRhY3QvZHJpdmVyL2h1YnNwb3QvIiwic291cmNlcyI6WyJjb250YWN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFNbkUsTUFBTSxPQUFPLHlCQUF5Qjs7OztJQUVyQyxZQUFvQixjQUF1QztRQUF2QyxtQkFBYyxHQUFkLGNBQWMsQ0FBeUI7SUFBRyxDQUFDOzs7OztJQUUvRCxJQUFJLENBQUMsT0FBeUI7UUFDN0IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7WUFQRCxVQUFVOzs7O1lBTEYsdUJBQXVCOzs7Ozs7O0lBUW5CLG1EQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEYWZmSHVic3BvdEZvcm1zU2VydmljZSB9IGZyb20gJ0BkYWZmb2RpbC9kcml2ZXIvaHVic3BvdCc7XG5cbmltcG9ydCB7IERhZmZDb250YWN0VW5pb24gfSBmcm9tICdAZGFmZm9kaWwvY29udGFjdCc7XG5pbXBvcnQgeyBEYWZmQ29udGFjdFNlcnZpY2VJbnRlcmZhY2UgfSBmcm9tICdAZGFmZm9kaWwvY29udGFjdC9kcml2ZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGFmZkNvbnRhY3RIdWJzcG90U2VydmljZVxuXHRpbXBsZW1lbnRzIERhZmZDb250YWN0U2VydmljZUludGVyZmFjZTxEYWZmQ29udGFjdFVuaW9uLCBhbnk+IHtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBodWJzcG90U2VydmljZTogRGFmZkh1YnNwb3RGb3Jtc1NlcnZpY2UpIHt9XG5cblx0c2VuZChwYXlsb2FkOiBEYWZmQ29udGFjdFVuaW9uKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5odWJzcG90U2VydmljZS5zdWJtaXQocGF5bG9hZCk7XG5cdH1cbn1cbiJdfQ==