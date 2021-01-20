/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var DaffInMemoryLoginService = /** @class */ (function () {
    function DaffInMemoryLoginService(http) {
        this.http = http;
        this.url = '/api/auth/';
    }
    /**
     * @param {?} request
     * @return {?}
     */
    DaffInMemoryLoginService.prototype.login = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        return this.http.post(this.url + "login", request);
    };
    /**
     * @return {?}
     */
    DaffInMemoryLoginService.prototype.logout = /**
     * @return {?}
     */
    function () {
        return this.http.post(this.url + "logout", {}).pipe(switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var success = _a.success;
            return success ? of(undefined) : throwError(new Error('Logout failed'));
        })));
    };
    DaffInMemoryLoginService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryLoginService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryLoginService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryLoginService_Factory() { return new DaffInMemoryLoginService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryLoginService, providedIn: "root" });
    return DaffInMemoryLoginService;
}());
export { DaffInMemoryLoginService };
if (false) {
    /** @type {?} */
    DaffInMemoryLoginService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryLoginService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9hdXRoL3Rlc3RpbmcvIiwic291cmNlcyI6WyJkcml2ZXJzL2luLW1lbW9yeS9sb2dpbi9sb2dpbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQWMsRUFBRSxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU9sRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUUzQztJQU1FLGtDQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFFBQUcsR0FBRyxZQUFZLENBQUM7SUFFb0IsQ0FBQzs7Ozs7SUFFeEMsd0NBQUs7Ozs7SUFBTCxVQUFNLE9BQXNCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQW1CLElBQUksQ0FBQyxHQUFHLFVBQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7O0lBRUQseUNBQU07OztJQUFOO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBd0IsSUFBSSxDQUFDLEdBQUcsV0FBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDckUsU0FBUzs7OztRQUFDLFVBQUMsRUFBUztnQkFBUixvQkFBTztZQUFNLE9BQUEsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUFoRSxDQUFnRSxFQUFDLENBQzNGLENBQUM7SUFDSixDQUFDOztnQkFoQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFaUSxVQUFVOzs7bUNBRG5CO0NBNEJDLEFBakJELElBaUJDO1NBZFksd0JBQXdCOzs7SUFDbkMsdUNBQW1COzs7OztJQUVQLHdDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1xuICBEYWZmTG9naW5TZXJ2aWNlSW50ZXJmYWNlLFxuICBEYWZmTG9naW5JbmZvLFxuICBEYWZmQXV0aFRva2VuLFxufSBmcm9tICdAZGFmZm9kaWwvYXV0aCc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZJbk1lbW9yeUxvZ2luU2VydmljZSBpbXBsZW1lbnRzIERhZmZMb2dpblNlcnZpY2VJbnRlcmZhY2U8RGFmZkxvZ2luSW5mbywgRGFmZkF1dGhUb2tlbj4ge1xuICB1cmwgPSAnL2FwaS9hdXRoLyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIGxvZ2luKHJlcXVlc3Q6IERhZmZMb2dpbkluZm8pOiBPYnNlcnZhYmxlPERhZmZBdXRoVG9rZW4+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8RGFmZkF1dGhUb2tlbj4oYCR7dGhpcy51cmx9bG9naW5gLCByZXF1ZXN0KTtcbiAgfVxuXG4gIGxvZ291dCgpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8e3N1Y2Nlc3M6IGJvb2xlYW59PihgJHt0aGlzLnVybH1sb2dvdXRgLCB7fSkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoe3N1Y2Nlc3N9KSA9PiBzdWNjZXNzID8gb2YodW5kZWZpbmVkKSA6IHRocm93RXJyb3IobmV3IEVycm9yKCdMb2dvdXQgZmFpbGVkJykpKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==