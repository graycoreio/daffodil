/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var DaffInMemoryCartAddressService = /** @class */ (function () {
    function DaffInMemoryCartAddressService(http) {
        this.http = http;
        this.url = '/api/cart-address';
    }
    /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    DaffInMemoryCartAddressService.prototype.update = /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    function (cartId, address) {
        return this.http.put(this.url + "/" + cartId, address);
    };
    DaffInMemoryCartAddressService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryCartAddressService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryCartAddressService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryCartAddressService_Factory() { return new DaffInMemoryCartAddressService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryCartAddressService, providedIn: "root" });
    return DaffInMemoryCartAddressService;
}());
export { DaffInMemoryCartAddressService };
if (false) {
    /** @type {?} */
    DaffInMemoryCartAddressService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryCartAddressService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1hZGRyZXNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvaW4tbWVtb3J5LyIsInNvdXJjZXMiOlsiZHJpdmVycy9jYXJ0LWFkZHJlc3MvY2FydC1hZGRyZXNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFRbEQ7SUFNRSx3Q0FBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUZwQyxRQUFHLEdBQUcsbUJBQW1CLENBQUM7SUFFYSxDQUFDOzs7Ozs7SUFFeEMsK0NBQU07Ozs7O0lBQU4sVUFBTyxNQUFzQixFQUFFLE9BQXdCO1FBQ3JELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQXVCLElBQUksQ0FBQyxHQUFHLFNBQUksTUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVFLENBQUM7O2dCQVZGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBVlEsVUFBVTs7O3lDQURuQjtDQW9CQyxBQVhELElBV0M7U0FSWSw4QkFBOEI7OztJQUN6Qyw2Q0FBMEI7Ozs7O0lBRWQsOENBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGFmZkNhcnQsIERhZmZDYXJ0QWRkcmVzcyB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcbmltcG9ydCB7XG4gIERhZmZDYXJ0QWRkcmVzc1NlcnZpY2VJbnRlcmZhY2UsXG59IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZJbk1lbW9yeUNhcnRBZGRyZXNzU2VydmljZSBpbXBsZW1lbnRzIERhZmZDYXJ0QWRkcmVzc1NlcnZpY2VJbnRlcmZhY2U8RGFmZkNhcnRBZGRyZXNzLCBEYWZmQ2FydD4ge1xuICB1cmwgPSAnL2FwaS9jYXJ0LWFkZHJlc3MnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cblxuICB1cGRhdGUoY2FydElkOiBEYWZmQ2FydFsnaWQnXSwgYWRkcmVzczogRGFmZkNhcnRBZGRyZXNzKTogT2JzZXJ2YWJsZTxQYXJ0aWFsPERhZmZDYXJ0Pj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0PFBhcnRpYWw8RGFmZkNhcnQ+PihgJHt0aGlzLnVybH0vJHtjYXJ0SWR9YCwgYWRkcmVzcyk7XG4gIH1cbn1cbiJdfQ==