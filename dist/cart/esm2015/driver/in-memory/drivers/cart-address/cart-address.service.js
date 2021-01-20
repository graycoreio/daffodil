/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class DaffInMemoryCartAddressService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/cart-address';
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
DaffInMemoryCartAddressService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryCartAddressService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryCartAddressService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryCartAddressService_Factory() { return new DaffInMemoryCartAddressService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryCartAddressService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffInMemoryCartAddressService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryCartAddressService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1hZGRyZXNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvaW4tbWVtb3J5LyIsInNvdXJjZXMiOlsiZHJpdmVycy9jYXJ0LWFkZHJlc3MvY2FydC1hZGRyZXNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFXbEQsTUFBTSxPQUFPLDhCQUE4Qjs7OztJQUd6QyxZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFFBQUcsR0FBRyxtQkFBbUIsQ0FBQztJQUVhLENBQUM7Ozs7OztJQUV4QyxNQUFNLENBQUMsTUFBc0IsRUFBRSxPQUF3QjtRQUNyRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFvQixHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksTUFBTSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7O1lBVkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBVlEsVUFBVTs7Ozs7SUFZakIsNkNBQTBCOzs7OztJQUVkLDhDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhZmZDYXJ0LCBEYWZmQ2FydEFkZHJlc3MgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQge1xuICBEYWZmQ2FydEFkZHJlc3NTZXJ2aWNlSW50ZXJmYWNlLFxufSBmcm9tICdAZGFmZm9kaWwvY2FydC9kcml2ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmSW5NZW1vcnlDYXJ0QWRkcmVzc1NlcnZpY2UgaW1wbGVtZW50cyBEYWZmQ2FydEFkZHJlc3NTZXJ2aWNlSW50ZXJmYWNlPERhZmZDYXJ0QWRkcmVzcywgRGFmZkNhcnQ+IHtcbiAgdXJsID0gJy9hcGkvY2FydC1hZGRyZXNzJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgdXBkYXRlKGNhcnRJZDogRGFmZkNhcnRbJ2lkJ10sIGFkZHJlc3M6IERhZmZDYXJ0QWRkcmVzcyk6IE9ic2VydmFibGU8UGFydGlhbDxEYWZmQ2FydD4+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxQYXJ0aWFsPERhZmZDYXJ0Pj4oYCR7dGhpcy51cmx9LyR7Y2FydElkfWAsIGFkZHJlc3MpO1xuICB9XG59XG4iXX0=