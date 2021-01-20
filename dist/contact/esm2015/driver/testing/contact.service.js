/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class DaffTestingContactService {
    /**
     * @param {?} payload
     * @return {?}
     */
    send(payload) {
        return of('Success').pipe(delay(10));
    }
}
DaffTestingContactService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffTestingContactService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingContactService_Factory() { return new DaffTestingContactService(); }, token: DaffTestingContactService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NvbnRhY3QvZHJpdmVyL3Rlc3RpbmcvIiwic291cmNlcyI6WyJjb250YWN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEVBQUUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBUXZDLE1BQU0sT0FBTyx5QkFBeUI7Ozs7O0lBQ3BDLElBQUksQ0FBQyxPQUF5QjtRQUM1QixPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7O1lBTkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlbGF5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEYWZmQ29udGFjdFVuaW9uIH0gZnJvbSAnQGRhZmZvZGlsL2NvbnRhY3QnO1xuaW1wb3J0IHsgRGFmZkNvbnRhY3RTZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnQGRhZmZvZGlsL2NvbnRhY3QvZHJpdmVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZlRlc3RpbmdDb250YWN0U2VydmljZSBpbXBsZW1lbnRzIERhZmZDb250YWN0U2VydmljZUludGVyZmFjZTxEYWZmQ29udGFjdFVuaW9uLCBhbnk+e1xuICBzZW5kKHBheWxvYWQ6IERhZmZDb250YWN0VW5pb24pOiBPYnNlcnZhYmxlPGFueT57XG4gICAgcmV0dXJuIG9mKCdTdWNjZXNzJykucGlwZShkZWxheSgxMCkpO1xuICB9XG59Il19