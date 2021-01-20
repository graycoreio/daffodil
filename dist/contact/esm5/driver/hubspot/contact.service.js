/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DaffHubspotFormsService } from '@daffodil/driver/hubspot';
var DaffContactHubspotService = /** @class */ (function () {
    function DaffContactHubspotService(hubspotService) {
        this.hubspotService = hubspotService;
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    DaffContactHubspotService.prototype.send = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        return this.hubspotService.submit(payload);
    };
    DaffContactHubspotService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffContactHubspotService.ctorParameters = function () { return [
        { type: DaffHubspotFormsService }
    ]; };
    return DaffContactHubspotService;
}());
export { DaffContactHubspotService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffContactHubspotService.prototype.hubspotService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NvbnRhY3QvZHJpdmVyL2h1YnNwb3QvIiwic291cmNlcyI6WyJjb250YWN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFLbkU7SUFHQyxtQ0FBb0IsY0FBdUM7UUFBdkMsbUJBQWMsR0FBZCxjQUFjLENBQXlCO0lBQUcsQ0FBQzs7Ozs7SUFFL0Qsd0NBQUk7Ozs7SUFBSixVQUFLLE9BQXlCO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Z0JBUEQsVUFBVTs7OztnQkFMRix1QkFBdUI7O0lBYWhDLGdDQUFDO0NBQUEsQUFSRCxJQVFDO1NBUFkseUJBQXlCOzs7Ozs7SUFFekIsbURBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhZmZIdWJzcG90Rm9ybXNTZXJ2aWNlIH0gZnJvbSAnQGRhZmZvZGlsL2RyaXZlci9odWJzcG90JztcblxuaW1wb3J0IHsgRGFmZkNvbnRhY3RVbmlvbiB9IGZyb20gJ0BkYWZmb2RpbC9jb250YWN0JztcbmltcG9ydCB7IERhZmZDb250YWN0U2VydmljZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9jb250YWN0L2RyaXZlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYWZmQ29udGFjdEh1YnNwb3RTZXJ2aWNlXG5cdGltcGxlbWVudHMgRGFmZkNvbnRhY3RTZXJ2aWNlSW50ZXJmYWNlPERhZmZDb250YWN0VW5pb24sIGFueT4ge1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh1YnNwb3RTZXJ2aWNlOiBEYWZmSHVic3BvdEZvcm1zU2VydmljZSkge31cblxuXHRzZW5kKHBheWxvYWQ6IERhZmZDb250YWN0VW5pb24pOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHJldHVybiB0aGlzLmh1YnNwb3RTZXJ2aWNlLnN1Ym1pdChwYXlsb2FkKTtcblx0fVxufVxuIl19