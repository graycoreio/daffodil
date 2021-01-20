/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken, inject, PLATFORM_ID } from '@angular/core';
import { DaffLocalStorageService } from './localstorage/localstorage.service';
import { isPlatformBrowser } from '@angular/common';
import { DaffServerErrorStorageService } from './server-error/public_api';
/**
 * @record
 */
export function DaffPersistenceService() { }
if (false) {
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    DaffPersistenceService.prototype.setItem = function (key, value) { };
    /**
     * @param {?} key
     * @return {?}
     */
    DaffPersistenceService.prototype.getItem = function (key) { };
    /**
     * @return {?}
     */
    DaffPersistenceService.prototype.clear = function () { };
    /**
     * @param {?} key
     * @return {?}
     */
    DaffPersistenceService.prototype.removeItem = function (key) { };
}
/** @type {?} */
export var DaffPersistenceServiceToken = new InjectionToken('DaffPersistenceService', {
    providedIn: 'root',
    factory: (/**
     * @return {?}
     */
    function () { return isPlatformBrowser(inject(PLATFORM_ID))
        ? new DaffLocalStorageService(inject(PLATFORM_ID))
        : new DaffServerErrorStorageService(); }),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdGVuY2UuaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NvcmUvIiwic291cmNlcyI6WyJzdG9yYWdlL3BlcnNpc3RlbmNlLmludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7O0FBRTFFLDRDQUtDOzs7Ozs7O0lBSkMscUVBQXdDOzs7OztJQUN4Qyw4REFBMEI7Ozs7SUFDMUIseURBQWM7Ozs7O0lBQ2QsaUVBQThCOzs7QUFHaEMsTUFBTSxLQUFPLDJCQUEyQixHQUFHLElBQUksY0FBYyxDQUF5Qix3QkFBd0IsRUFBRTtJQUM5RyxVQUFVLEVBQUUsTUFBTTtJQUNsQixPQUFPOzs7SUFBRSxjQUFNLE9BQUEsaUJBQWlCLENBQUMsTUFBTSxDQUFTLFdBQVcsQ0FBQyxDQUFDO1FBQzNELENBQUMsQ0FBQyxJQUFJLHVCQUF1QixDQUFDLE1BQU0sQ0FBUyxXQUFXLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUMsSUFBSSw2QkFBNkIsRUFBRSxFQUZ4QixDQUV3QixDQUFBO0NBQ3hDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgaW5qZWN0LCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmTG9jYWxTdG9yYWdlU2VydmljZSB9IGZyb20gJy4vbG9jYWxzdG9yYWdlL2xvY2Fsc3RvcmFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERhZmZTZXJ2ZXJFcnJvclN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2ZXItZXJyb3IvcHVibGljX2FwaSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGFmZlBlcnNpc3RlbmNlU2VydmljZSB7XG4gIHNldEl0ZW0oa2V5IDogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZDtcbiAgZ2V0SXRlbShrZXk6IHN0cmluZyk6IGFueTtcbiAgY2xlYXIoKTogdm9pZDtcbiAgcmVtb3ZlSXRlbShrZXk6IHN0cmluZyk6IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBEYWZmUGVyc2lzdGVuY2VTZXJ2aWNlVG9rZW4gPSBuZXcgSW5qZWN0aW9uVG9rZW48RGFmZlBlcnNpc3RlbmNlU2VydmljZT4oJ0RhZmZQZXJzaXN0ZW5jZVNlcnZpY2UnLCB7XG4gIHByb3ZpZGVkSW46ICdyb290JyxcbiAgZmFjdG9yeTogKCkgPT4gaXNQbGF0Zm9ybUJyb3dzZXIoaW5qZWN0PHN0cmluZz4oUExBVEZPUk1fSUQpKSBcbiAgICA/IG5ldyBEYWZmTG9jYWxTdG9yYWdlU2VydmljZShpbmplY3Q8c3RyaW5nPihQTEFURk9STV9JRCkpIFxuICAgIDogbmV3IERhZmZTZXJ2ZXJFcnJvclN0b3JhZ2VTZXJ2aWNlKCksXG59KTtcbiJdfQ==