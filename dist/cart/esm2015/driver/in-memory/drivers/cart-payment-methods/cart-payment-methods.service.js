/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class DaffInMemoryCartPaymentMethodsService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/cart-payment-methods';
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    list(cartId) {
        return this.http.get(`${this.url}/${cartId}`);
    }
}
DaffInMemoryCartPaymentMethodsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryCartPaymentMethodsService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryCartPaymentMethodsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryCartPaymentMethodsService_Factory() { return new DaffInMemoryCartPaymentMethodsService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryCartPaymentMethodsService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffInMemoryCartPaymentMethodsService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryCartPaymentMethodsService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYXltZW50LW1ldGhvZHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9pbi1tZW1vcnkvIiwic291cmNlcyI6WyJkcml2ZXJzL2NhcnQtcGF5bWVudC1tZXRob2RzL2NhcnQtcGF5bWVudC1tZXRob2RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFXbEQsTUFBTSxPQUFPLHFDQUFxQzs7OztJQUdoRCxZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFFBQUcsR0FBRywyQkFBMkIsQ0FBQztJQUVLLENBQUM7Ozs7O0lBRXhDLElBQUksQ0FBQyxNQUFzQjtRQUN6QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUEwQixHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUMsQ0FBQTtJQUN4RSxDQUFDOzs7WUFWRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFWUSxVQUFVOzs7OztJQVlqQixvREFBa0M7Ozs7O0lBRXRCLHFEQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhZmZDYXJ0UGF5bWVudE1ldGhvZCwgRGFmZkNhcnQgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQge1xuICBEYWZmQ2FydFBheW1lbnRNZXRob2RzU2VydmljZUludGVyZmFjZSxcbn0gZnJvbSAnQGRhZmZvZGlsL2NhcnQvZHJpdmVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkluTWVtb3J5Q2FydFBheW1lbnRNZXRob2RzU2VydmljZSBpbXBsZW1lbnRzIERhZmZDYXJ0UGF5bWVudE1ldGhvZHNTZXJ2aWNlSW50ZXJmYWNlPERhZmZDYXJ0UGF5bWVudE1ldGhvZD4ge1xuICB1cmwgPSAnL2FwaS9jYXJ0LXBheW1lbnQtbWV0aG9kcyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIGxpc3QoY2FydElkOiBEYWZmQ2FydFsnaWQnXSk6IE9ic2VydmFibGU8RGFmZkNhcnRQYXltZW50TWV0aG9kW10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxEYWZmQ2FydFBheW1lbnRNZXRob2RbXT4oYCR7dGhpcy51cmx9LyR7Y2FydElkfWApXG4gIH1cbn1cbiJdfQ==