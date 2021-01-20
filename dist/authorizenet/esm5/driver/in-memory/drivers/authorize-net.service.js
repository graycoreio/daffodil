/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var DaffInMemoryAuthorizeNetService = /** @class */ (function () {
    function DaffInMemoryAuthorizeNetService(http) {
        this.http = http;
        this.url = '/api/authorizenet';
    }
    /**
     * @param {?} paymentTokenRequest
     * @return {?}
     */
    DaffInMemoryAuthorizeNetService.prototype.generateToken = /**
     * @param {?} paymentTokenRequest
     * @return {?}
     */
    function (paymentTokenRequest) {
        return this.http.post(this.url + '/generateToken', paymentTokenRequest);
    };
    DaffInMemoryAuthorizeNetService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryAuthorizeNetService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryAuthorizeNetService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryAuthorizeNetService_Factory() { return new DaffInMemoryAuthorizeNetService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryAuthorizeNetService, providedIn: "root" });
    return DaffInMemoryAuthorizeNetService;
}());
export { DaffInMemoryAuthorizeNetService };
if (false) {
    /** @type {?} */
    DaffInMemoryAuthorizeNetService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryAuthorizeNetService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXplLW5ldC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2F1dGhvcml6ZW5ldC9kcml2ZXIvaW4tbWVtb3J5LyIsInNvdXJjZXMiOlsiZHJpdmVycy9hdXRob3JpemUtbmV0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFNbEQ7SUFNRSx5Q0FBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUZwQyxRQUFHLEdBQUcsbUJBQW1CLENBQUM7SUFFYSxDQUFDOzs7OztJQUV4Qyx1REFBYTs7OztJQUFiLFVBQWMsbUJBQWlEO1FBQzdELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQStCLElBQUksQ0FBQyxHQUFHLEdBQUcsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUN4RyxDQUFDOztnQkFWRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVJRLFVBQVU7OzswQ0FEbkI7Q0FrQkMsQUFYRCxJQVdDO1NBUlksK0JBQStCOzs7SUFDMUMsOENBQTBCOzs7OztJQUVkLCtDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhZmZBdXRob3JpemVOZXRUb2tlblJlcXVlc3QgfSBmcm9tICdAZGFmZm9kaWwvYXV0aG9yaXplbmV0JztcbmltcG9ydCB7IERhZmZBdXRob3JpemVOZXRTZXJ2aWNlIH0gZnJvbSAnQGRhZmZvZGlsL2F1dGhvcml6ZW5ldC9kcml2ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmSW5NZW1vcnlBdXRob3JpemVOZXRTZXJ2aWNlIGltcGxlbWVudHMgRGFmZkF1dGhvcml6ZU5ldFNlcnZpY2U8RGFmZkF1dGhvcml6ZU5ldFRva2VuUmVxdWVzdD4ge1xuICB1cmwgPSAnL2FwaS9hdXRob3JpemVuZXQnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cblxuICBnZW5lcmF0ZVRva2VuKHBheW1lbnRUb2tlblJlcXVlc3Q6IERhZmZBdXRob3JpemVOZXRUb2tlblJlcXVlc3QpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxEYWZmQXV0aG9yaXplTmV0VG9rZW5SZXF1ZXN0Pih0aGlzLnVybCArICcvZ2VuZXJhdGVUb2tlbicsIHBheW1lbnRUb2tlblJlcXVlc3QpO1xuICB9XG59XG4iXX0=