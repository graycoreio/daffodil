/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var DaffInMemoryCartBillingAddressService = /** @class */ (function () {
    function DaffInMemoryCartBillingAddressService(http) {
        this.http = http;
        this.url = '/api/cart-billing-address';
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffInMemoryCartBillingAddressService.prototype.get = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return this.http.get(this.url + "/" + cartId);
    };
    /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    DaffInMemoryCartBillingAddressService.prototype.update = /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    function (cartId, address) {
        return this.http.put(this.url + "/" + cartId, address);
    };
    DaffInMemoryCartBillingAddressService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryCartBillingAddressService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryCartBillingAddressService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryCartBillingAddressService_Factory() { return new DaffInMemoryCartBillingAddressService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryCartBillingAddressService, providedIn: "root" });
    return DaffInMemoryCartBillingAddressService;
}());
export { DaffInMemoryCartBillingAddressService };
if (false) {
    /** @type {?} */
    DaffInMemoryCartBillingAddressService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryCartBillingAddressService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1iaWxsaW5nLWFkZHJlc3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9pbi1tZW1vcnkvIiwic291cmNlcyI6WyJkcml2ZXJzL2NhcnQtYmlsbGluZy1hZGRyZXNzL2NhcnQtYmlsbGluZy1hZGRyZXNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFRbEQ7SUFNRSwrQ0FBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUZwQyxRQUFHLEdBQUcsMkJBQTJCLENBQUM7SUFFSyxDQUFDOzs7OztJQUV4QyxtREFBRzs7OztJQUFILFVBQUksTUFBc0I7UUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBcUIsSUFBSSxDQUFDLEdBQUcsU0FBSSxNQUFRLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7Ozs7SUFFRCxzREFBTTs7Ozs7SUFBTixVQUFPLE1BQXNCLEVBQUUsT0FBd0I7UUFDckQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBdUIsSUFBSSxDQUFDLEdBQUcsU0FBSSxNQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7Z0JBZEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFWUSxVQUFVOzs7Z0RBRG5CO0NBd0JDLEFBZkQsSUFlQztTQVpZLHFDQUFxQzs7O0lBQ2hELG9EQUFrQzs7Ozs7SUFFdEIscURBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGFmZkNhcnRBZGRyZXNzLCBEYWZmQ2FydCB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcbmltcG9ydCB7XG4gIERhZmZDYXJ0QmlsbGluZ0FkZHJlc3NTZXJ2aWNlSW50ZXJmYWNlLFxufSBmcm9tICdAZGFmZm9kaWwvY2FydC9kcml2ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmSW5NZW1vcnlDYXJ0QmlsbGluZ0FkZHJlc3NTZXJ2aWNlIGltcGxlbWVudHMgRGFmZkNhcnRCaWxsaW5nQWRkcmVzc1NlcnZpY2VJbnRlcmZhY2U8RGFmZkNhcnRBZGRyZXNzLCBEYWZmQ2FydD4ge1xuICB1cmwgPSAnL2FwaS9jYXJ0LWJpbGxpbmctYWRkcmVzcyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIGdldChjYXJ0SWQ6IERhZmZDYXJ0WydpZCddKTogT2JzZXJ2YWJsZTxEYWZmQ2FydEFkZHJlc3M+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxEYWZmQ2FydEFkZHJlc3M+KGAke3RoaXMudXJsfS8ke2NhcnRJZH1gKTtcbiAgfVxuXG4gIHVwZGF0ZShjYXJ0SWQ6IERhZmZDYXJ0WydpZCddLCBhZGRyZXNzOiBEYWZmQ2FydEFkZHJlc3MpOiBPYnNlcnZhYmxlPFBhcnRpYWw8RGFmZkNhcnQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8UGFydGlhbDxEYWZmQ2FydD4+KGAke3RoaXMudXJsfS8ke2NhcnRJZH1gLCBhZGRyZXNzKTtcbiAgfVxufVxuIl19