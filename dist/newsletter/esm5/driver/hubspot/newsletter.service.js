/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DaffHubspotFormsService } from '@daffodil/driver/hubspot';
var DaffNewsletterHubspotService = /** @class */ (function () {
    function DaffNewsletterHubspotService(hubspotService) {
        this.hubspotService = hubspotService;
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    DaffNewsletterHubspotService.prototype.send = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        return this.hubspotService.submit(payload);
    };
    DaffNewsletterHubspotService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffNewsletterHubspotService.ctorParameters = function () { return [
        { type: DaffHubspotFormsService }
    ]; };
    return DaffNewsletterHubspotService;
}());
export { DaffNewsletterHubspotService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffNewsletterHubspotService.prototype.hubspotService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3c2xldHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL25ld3NsZXR0ZXIvIiwic291cmNlcyI6WyJkcml2ZXIvaHVic3BvdC9uZXdzbGV0dGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFLbkU7SUFHRSxzQ0FBb0IsY0FBdUM7UUFBdkMsbUJBQWMsR0FBZCxjQUFjLENBQXlCO0lBQUcsQ0FBQzs7Ozs7SUFFL0QsMkNBQUk7Ozs7SUFBSixVQUFLLE9BQTRCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDNUMsQ0FBQzs7Z0JBUEYsVUFBVTs7OztnQkFMRix1QkFBdUI7O0lBYWhDLG1DQUFDO0NBQUEsQUFSRCxJQVFDO1NBUFksNEJBQTRCOzs7Ozs7SUFFM0Isc0RBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEYWZmSHVic3BvdEZvcm1zU2VydmljZSB9IGZyb20gJ0BkYWZmb2RpbC9kcml2ZXIvaHVic3BvdCc7XG5cbmltcG9ydCB7IERhZmZOZXdzbGV0dGVyVW5pb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvbmV3c2xldHRlci11bmlvbic7XG5pbXBvcnQgeyBEYWZmTmV3c2xldHRlclNlcnZpY2VJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL25ld3NsZXR0ZXItc2VydmljZS5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGFmZk5ld3NsZXR0ZXJIdWJzcG90U2VydmljZSBpbXBsZW1lbnRzIERhZmZOZXdzbGV0dGVyU2VydmljZUludGVyZmFjZTxEYWZmTmV3c2xldHRlclVuaW9uLCBhbnk+IHtcbiAgXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHVic3BvdFNlcnZpY2U6IERhZmZIdWJzcG90Rm9ybXNTZXJ2aWNlKSB7fVxuICBcbiAgc2VuZChwYXlsb2FkOiBEYWZmTmV3c2xldHRlclVuaW9uKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odWJzcG90U2VydmljZS5zdWJtaXQocGF5bG9hZClcbiAgfSAgXG59XG4iXX0=