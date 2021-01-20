/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var DaffInMemoryNavigationService = /** @class */ (function () {
    function DaffInMemoryNavigationService(http) {
        this.http = http;
        this.url = '/api/navigation/';
    }
    /**
     * @param {?} navigationId
     * @return {?}
     */
    DaffInMemoryNavigationService.prototype.get = /**
     * @param {?} navigationId
     * @return {?}
     */
    function (navigationId) {
        return this.http.get(this.url + navigationId);
    };
    DaffInMemoryNavigationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryNavigationService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryNavigationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryNavigationService_Factory() { return new DaffInMemoryNavigationService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryNavigationService, providedIn: "root" });
    return DaffInMemoryNavigationService;
}());
export { DaffInMemoryNavigationService };
if (false) {
    /** @type {?} */
    DaffInMemoryNavigationService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryNavigationService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL25hdmlnYXRpb24vZHJpdmVyL2luLW1lbW9yeS8iLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQU1sRDtJQU1FLHVDQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFFBQUcsR0FBRyxrQkFBa0IsQ0FBQztJQUVjLENBQUM7Ozs7O0lBRXhDLDJDQUFHOzs7O0lBQUgsVUFBSSxZQUFvQjtRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFxQixJQUFJLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQyxDQUFDO0lBQ3BFLENBQUM7O2dCQVZGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUlEsVUFBVTs7O3dDQURuQjtDQWtCQyxBQVhELElBV0M7U0FSWSw2QkFBNkI7OztJQUN4Qyw0Q0FBeUI7Ozs7O0lBRWIsNkNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGFmZk5hdmlnYXRpb25UcmVlIH0gZnJvbSAnQGRhZmZvZGlsL25hdmlnYXRpb24nO1xuaW1wb3J0IHsgRGFmZk5hdmlnYXRpb25TZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnQGRhZmZvZGlsL25hdmlnYXRpb24vZHJpdmVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkluTWVtb3J5TmF2aWdhdGlvblNlcnZpY2UgaW1wbGVtZW50cyBEYWZmTmF2aWdhdGlvblNlcnZpY2VJbnRlcmZhY2U8RGFmZk5hdmlnYXRpb25UcmVlPiB7XG4gIHVybCA9ICcvYXBpL25hdmlnYXRpb24vJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgZ2V0KG5hdmlnYXRpb25JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxEYWZmTmF2aWdhdGlvblRyZWU+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxEYWZmTmF2aWdhdGlvblRyZWU+KHRoaXMudXJsICsgbmF2aWdhdGlvbklkKTtcbiAgfVxufVxuIl19