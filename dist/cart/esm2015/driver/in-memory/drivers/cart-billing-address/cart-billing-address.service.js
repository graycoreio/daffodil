/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class DaffInMemoryCartBillingAddressService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/cart-billing-address';
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
DaffInMemoryCartBillingAddressService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryCartBillingAddressService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryCartBillingAddressService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryCartBillingAddressService_Factory() { return new DaffInMemoryCartBillingAddressService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryCartBillingAddressService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffInMemoryCartBillingAddressService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryCartBillingAddressService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1iaWxsaW5nLWFkZHJlc3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9pbi1tZW1vcnkvIiwic291cmNlcyI6WyJkcml2ZXJzL2NhcnQtYmlsbGluZy1hZGRyZXNzL2NhcnQtYmlsbGluZy1hZGRyZXNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFXbEQsTUFBTSxPQUFPLHFDQUFxQzs7OztJQUdoRCxZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFFBQUcsR0FBRywyQkFBMkIsQ0FBQztJQUVLLENBQUM7Ozs7O0lBRXhDLEdBQUcsQ0FBQyxNQUFzQjtRQUN4QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFrQixHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsTUFBc0IsRUFBRSxPQUF3QjtRQUNyRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFvQixHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksTUFBTSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7O1lBZEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBVlEsVUFBVTs7Ozs7SUFZakIsb0RBQWtDOzs7OztJQUV0QixxREFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydEFkZHJlc3MsIERhZmZDYXJ0IH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuaW1wb3J0IHtcbiAgRGFmZkNhcnRCaWxsaW5nQWRkcmVzc1NlcnZpY2VJbnRlcmZhY2UsXG59IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZJbk1lbW9yeUNhcnRCaWxsaW5nQWRkcmVzc1NlcnZpY2UgaW1wbGVtZW50cyBEYWZmQ2FydEJpbGxpbmdBZGRyZXNzU2VydmljZUludGVyZmFjZTxEYWZmQ2FydEFkZHJlc3MsIERhZmZDYXJ0PiB7XG4gIHVybCA9ICcvYXBpL2NhcnQtYmlsbGluZy1hZGRyZXNzJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgZ2V0KGNhcnRJZDogRGFmZkNhcnRbJ2lkJ10pOiBPYnNlcnZhYmxlPERhZmZDYXJ0QWRkcmVzcz4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PERhZmZDYXJ0QWRkcmVzcz4oYCR7dGhpcy51cmx9LyR7Y2FydElkfWApO1xuICB9XG5cbiAgdXBkYXRlKGNhcnRJZDogRGFmZkNhcnRbJ2lkJ10sIGFkZHJlc3M6IERhZmZDYXJ0QWRkcmVzcyk6IE9ic2VydmFibGU8UGFydGlhbDxEYWZmQ2FydD4+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxQYXJ0aWFsPERhZmZDYXJ0Pj4oYCR7dGhpcy51cmx9LyR7Y2FydElkfWAsIGFkZHJlc3MpO1xuICB9XG59XG4iXX0=