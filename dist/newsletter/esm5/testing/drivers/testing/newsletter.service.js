/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import * as i0 from "@angular/core";
var DaffTestingNewsletterService = /** @class */ (function () {
    function DaffTestingNewsletterService() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    DaffTestingNewsletterService.prototype.send = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        return of('Success').pipe(delay(10));
    };
    DaffTestingNewsletterService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffTestingNewsletterService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingNewsletterService_Factory() { return new DaffTestingNewsletterService(); }, token: DaffTestingNewsletterService, providedIn: "root" });
    return DaffTestingNewsletterService;
}());
export { DaffTestingNewsletterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3c2xldHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL25ld3NsZXR0ZXIvdGVzdGluZy8iLCJzb3VyY2VzIjpbImRyaXZlcnMvdGVzdGluZy9uZXdzbGV0dGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBYyxFQUFFLEVBQTBCLE1BQU0sTUFBTSxDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUV2QztJQUFBO0tBUUM7Ozs7O0lBSEMsMkNBQUk7Ozs7SUFBSixVQUFLLE9BQTRCO1FBQy9CLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDOztnQkFQRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7dUNBUkQ7Q0FjQyxBQVJELElBUUM7U0FKWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYWZmTmV3c2xldHRlclN1Ym1pc3Npb24sIERhZmZOZXdzbGV0dGVyVW5pb24gfSBmcm9tICdAZGFmZm9kaWwvbmV3c2xldHRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgQmVoYXZpb3JTdWJqZWN0LCB0aW1lciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGFmZk5ld3NsZXR0ZXJTZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnQGRhZmZvZGlsL25ld3NsZXR0ZXInO1xuaW1wb3J0IHsgZGVsYXkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgRGFmZlRlc3RpbmdOZXdzbGV0dGVyU2VydmljZSBpbXBsZW1lbnRzIERhZmZOZXdzbGV0dGVyU2VydmljZUludGVyZmFjZTxEYWZmTmV3c2xldHRlclVuaW9uLCBhbnk+e1xuICBzZW5kKHBheWxvYWQ6IERhZmZOZXdzbGV0dGVyVW5pb24pOiBPYnNlcnZhYmxlPGFueT57XG4gICAgcmV0dXJuIG9mKCdTdWNjZXNzJykucGlwZShkZWxheSgxMCkpO1xuICB9XG59Il19