/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class DaffInMemoryCartShippingAddressService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/cart-shipping-address';
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    get(cartId) {
        return this.http.get(`${this.url}/${cartId}`);
    }
    /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    update(cartId, address) {
        return this.http.put(`${this.url}/${cartId}`, address);
    }
}
DaffInMemoryCartShippingAddressService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryCartShippingAddressService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryCartShippingAddressService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryCartShippingAddressService_Factory() { return new DaffInMemoryCartShippingAddressService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryCartShippingAddressService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffInMemoryCartShippingAddressService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryCartShippingAddressService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGlwcGluZy1hZGRyZXNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvaW4tbWVtb3J5LyIsInNvdXJjZXMiOlsiZHJpdmVycy9jYXJ0LXNoaXBwaW5nLWFkZHJlc3MvY2FydC1zaGlwcGluZy1hZGRyZXNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFXbEQsTUFBTSxPQUFPLHNDQUFzQzs7OztJQUdqRCxZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFFBQUcsR0FBRyw0QkFBNEIsQ0FBQztJQUVJLENBQUM7Ozs7O0lBRXhDLEdBQUcsQ0FBQyxNQUFzQjtRQUN4QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFrQixHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsTUFBc0IsRUFBRSxPQUFpQztRQUM5RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFvQixHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksTUFBTSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7O1lBZEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBVlEsVUFBVTs7Ozs7SUFZakIscURBQW1DOzs7OztJQUV2QixzREFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydEFkZHJlc3MsIERhZmZDYXJ0IH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuaW1wb3J0IHtcbiAgRGFmZkNhcnRTaGlwcGluZ0FkZHJlc3NTZXJ2aWNlSW50ZXJmYWNlLFxufSBmcm9tICdAZGFmZm9kaWwvY2FydC9kcml2ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmSW5NZW1vcnlDYXJ0U2hpcHBpbmdBZGRyZXNzU2VydmljZSBpbXBsZW1lbnRzIERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzU2VydmljZUludGVyZmFjZTxEYWZmQ2FydEFkZHJlc3MsIERhZmZDYXJ0PiB7XG4gIHVybCA9ICcvYXBpL2NhcnQtc2hpcHBpbmctYWRkcmVzcyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIGdldChjYXJ0SWQ6IERhZmZDYXJ0WydpZCddKTogT2JzZXJ2YWJsZTxEYWZmQ2FydEFkZHJlc3M+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxEYWZmQ2FydEFkZHJlc3M+KGAke3RoaXMudXJsfS8ke2NhcnRJZH1gKTtcbiAgfVxuXG4gIHVwZGF0ZShjYXJ0SWQ6IERhZmZDYXJ0WydpZCddLCBhZGRyZXNzOiBQYXJ0aWFsPERhZmZDYXJ0QWRkcmVzcz4pOiBPYnNlcnZhYmxlPFBhcnRpYWw8RGFmZkNhcnQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8UGFydGlhbDxEYWZmQ2FydD4+KGAke3RoaXMudXJsfS8ke2NhcnRJZH1gLCBhZGRyZXNzKTtcbiAgfVxufVxuIl19