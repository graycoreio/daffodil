/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DaffHubspotFormsService } from '@daffodil/driver/hubspot';
export class DaffNewsletterHubspotService {
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
DaffNewsletterHubspotService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffNewsletterHubspotService.ctorParameters = () => [
    { type: DaffHubspotFormsService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffNewsletterHubspotService.prototype.hubspotService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3c2xldHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL25ld3NsZXR0ZXIvIiwic291cmNlcyI6WyJkcml2ZXIvaHVic3BvdC9uZXdzbGV0dGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFNbkUsTUFBTSxPQUFPLDRCQUE0Qjs7OztJQUV2QyxZQUFvQixjQUF1QztRQUF2QyxtQkFBYyxHQUFkLGNBQWMsQ0FBeUI7SUFBRyxDQUFDOzs7OztJQUUvRCxJQUFJLENBQUMsT0FBNEI7UUFDL0IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUM1QyxDQUFDOzs7WUFQRixVQUFVOzs7O1lBTEYsdUJBQXVCOzs7Ozs7O0lBUWxCLHNEQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGFmZkh1YnNwb3RGb3Jtc1NlcnZpY2UgfSBmcm9tICdAZGFmZm9kaWwvZHJpdmVyL2h1YnNwb3QnO1xuXG5pbXBvcnQgeyBEYWZmTmV3c2xldHRlclVuaW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL25ld3NsZXR0ZXItdW5pb24nO1xuaW1wb3J0IHsgRGFmZk5ld3NsZXR0ZXJTZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9uZXdzbGV0dGVyLXNlcnZpY2UuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhZmZOZXdzbGV0dGVySHVic3BvdFNlcnZpY2UgaW1wbGVtZW50cyBEYWZmTmV3c2xldHRlclNlcnZpY2VJbnRlcmZhY2U8RGFmZk5ld3NsZXR0ZXJVbmlvbiwgYW55PiB7XG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh1YnNwb3RTZXJ2aWNlOiBEYWZmSHVic3BvdEZvcm1zU2VydmljZSkge31cbiAgXG4gIHNlbmQocGF5bG9hZDogRGFmZk5ld3NsZXR0ZXJVbmlvbik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHVic3BvdFNlcnZpY2Uuc3VibWl0KHBheWxvYWQpXG4gIH0gIFxufVxuIl19