/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var DaffInMemoryCartShippingAddressService = /** @class */ (function () {
    function DaffInMemoryCartShippingAddressService(http) {
        this.http = http;
        this.url = '/api/cart-shipping-address';
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffInMemoryCartShippingAddressService.prototype.get = /**
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
    DaffInMemoryCartShippingAddressService.prototype.update = /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    function (cartId, address) {
        return this.http.put(this.url + "/" + cartId, address);
    };
    DaffInMemoryCartShippingAddressService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryCartShippingAddressService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryCartShippingAddressService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryCartShippingAddressService_Factory() { return new DaffInMemoryCartShippingAddressService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryCartShippingAddressService, providedIn: "root" });
    return DaffInMemoryCartShippingAddressService;
}());
export { DaffInMemoryCartShippingAddressService };
if (false) {
    /** @type {?} */
    DaffInMemoryCartShippingAddressService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryCartShippingAddressService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGlwcGluZy1hZGRyZXNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvaW4tbWVtb3J5LyIsInNvdXJjZXMiOlsiZHJpdmVycy9jYXJ0LXNoaXBwaW5nLWFkZHJlc3MvY2FydC1zaGlwcGluZy1hZGRyZXNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFRbEQ7SUFNRSxnREFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUZwQyxRQUFHLEdBQUcsNEJBQTRCLENBQUM7SUFFSSxDQUFDOzs7OztJQUV4QyxvREFBRzs7OztJQUFILFVBQUksTUFBc0I7UUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBcUIsSUFBSSxDQUFDLEdBQUcsU0FBSSxNQUFRLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7Ozs7SUFFRCx1REFBTTs7Ozs7SUFBTixVQUFPLE1BQXNCLEVBQUUsT0FBaUM7UUFDOUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBdUIsSUFBSSxDQUFDLEdBQUcsU0FBSSxNQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7Z0JBZEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFWUSxVQUFVOzs7aURBRG5CO0NBd0JDLEFBZkQsSUFlQztTQVpZLHNDQUFzQzs7O0lBQ2pELHFEQUFtQzs7Ozs7SUFFdkIsc0RBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGFmZkNhcnRBZGRyZXNzLCBEYWZmQ2FydCB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcbmltcG9ydCB7XG4gIERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzU2VydmljZUludGVyZmFjZSxcbn0gZnJvbSAnQGRhZmZvZGlsL2NhcnQvZHJpdmVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkluTWVtb3J5Q2FydFNoaXBwaW5nQWRkcmVzc1NlcnZpY2UgaW1wbGVtZW50cyBEYWZmQ2FydFNoaXBwaW5nQWRkcmVzc1NlcnZpY2VJbnRlcmZhY2U8RGFmZkNhcnRBZGRyZXNzLCBEYWZmQ2FydD4ge1xuICB1cmwgPSAnL2FwaS9jYXJ0LXNoaXBwaW5nLWFkZHJlc3MnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cblxuICBnZXQoY2FydElkOiBEYWZmQ2FydFsnaWQnXSk6IE9ic2VydmFibGU8RGFmZkNhcnRBZGRyZXNzPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RGFmZkNhcnRBZGRyZXNzPihgJHt0aGlzLnVybH0vJHtjYXJ0SWR9YCk7XG4gIH1cblxuICB1cGRhdGUoY2FydElkOiBEYWZmQ2FydFsnaWQnXSwgYWRkcmVzczogUGFydGlhbDxEYWZmQ2FydEFkZHJlc3M+KTogT2JzZXJ2YWJsZTxQYXJ0aWFsPERhZmZDYXJ0Pj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0PFBhcnRpYWw8RGFmZkNhcnQ+PihgJHt0aGlzLnVybH0vJHtjYXJ0SWR9YCwgYWRkcmVzcyk7XG4gIH1cbn1cbiJdfQ==