/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mapTo } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var DaffInMemoryAuthService = /** @class */ (function () {
    function DaffInMemoryAuthService(http) {
        this.http = http;
        this.url = '/api/auth/';
    }
    /**
     * @return {?}
     */
    DaffInMemoryAuthService.prototype.check = /**
     * @return {?}
     */
    function () {
        return this.http.post(this.url + "check", {}).pipe(mapTo(undefined));
    };
    DaffInMemoryAuthService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryAuthService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryAuthService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryAuthService_Factory() { return new DaffInMemoryAuthService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryAuthService, providedIn: "root" });
    return DaffInMemoryAuthService;
}());
export { DaffInMemoryAuthService };
if (false) {
    /** @type {?} */
    DaffInMemoryAuthService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryAuthService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2F1dGgvdGVzdGluZy8iLCJzb3VyY2VzIjpbImRyaXZlcnMvaW4tbWVtb3J5L2F1dGgvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQU12QztJQU1FLGlDQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFFBQUcsR0FBRyxZQUFZLENBQUM7SUFFb0IsQ0FBQzs7OztJQUV4Qyx1Q0FBSzs7O0lBQUw7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxHQUFHLFVBQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ2hELEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FDakIsQ0FBQztJQUNKLENBQUM7O2dCQVpGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBVlEsVUFBVTs7O2tDQURuQjtDQXNCQyxBQWJELElBYUM7U0FWWSx1QkFBdUI7OztJQUNsQyxzQ0FBbUI7Ozs7O0lBRVAsdUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcFRvIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBEYWZmQXV0aFNlcnZpY2VJbnRlcmZhY2UsXG59IGZyb20gJ0BkYWZmb2RpbC9hdXRoJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkluTWVtb3J5QXV0aFNlcnZpY2UgaW1wbGVtZW50cyBEYWZmQXV0aFNlcnZpY2VJbnRlcmZhY2Uge1xuICB1cmwgPSAnL2FwaS9hdXRoLyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIGNoZWNrKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVybH1jaGVja2AsIHt9KS5waXBlKFxuICAgICAgbWFwVG8odW5kZWZpbmVkKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==