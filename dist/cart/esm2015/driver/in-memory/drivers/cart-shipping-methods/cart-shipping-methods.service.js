/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class DaffInMemoryCartShippingMethodsService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/cart-shipping-methods';
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    list(cartId) {
        return this.http.get(`${this.url}/${cartId}`);
    }
}
DaffInMemoryCartShippingMethodsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryCartShippingMethodsService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryCartShippingMethodsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryCartShippingMethodsService_Factory() { return new DaffInMemoryCartShippingMethodsService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryCartShippingMethodsService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffInMemoryCartShippingMethodsService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryCartShippingMethodsService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGlwcGluZy1tZXRob2RzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvaW4tbWVtb3J5LyIsInNvdXJjZXMiOlsiZHJpdmVycy9jYXJ0LXNoaXBwaW5nLW1ldGhvZHMvY2FydC1zaGlwcGluZy1tZXRob2RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFXbEQsTUFBTSxPQUFPLHNDQUFzQzs7OztJQUdqRCxZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFFBQUcsR0FBRyw0QkFBNEIsQ0FBQztJQUVJLENBQUM7Ozs7O0lBRXhDLElBQUksQ0FBQyxNQUFzQjtRQUN6QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUF5QixHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUMsQ0FBQTtJQUN2RSxDQUFDOzs7WUFWRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFWUSxVQUFVOzs7OztJQVlqQixxREFBbUM7Ozs7O0lBRXZCLHNEQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhZmZDYXJ0U2hpcHBpbmdSYXRlLCBEYWZmQ2FydCB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcbmltcG9ydCB7XG4gIERhZmZDYXJ0U2hpcHBpbmdNZXRob2RzU2VydmljZUludGVyZmFjZSxcbn0gZnJvbSAnQGRhZmZvZGlsL2NhcnQvZHJpdmVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkluTWVtb3J5Q2FydFNoaXBwaW5nTWV0aG9kc1NlcnZpY2UgaW1wbGVtZW50cyBEYWZmQ2FydFNoaXBwaW5nTWV0aG9kc1NlcnZpY2VJbnRlcmZhY2U8RGFmZkNhcnRTaGlwcGluZ1JhdGU+IHtcbiAgdXJsID0gJy9hcGkvY2FydC1zaGlwcGluZy1tZXRob2RzJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgbGlzdChjYXJ0SWQ6IERhZmZDYXJ0WydpZCddKTogT2JzZXJ2YWJsZTxEYWZmQ2FydFNoaXBwaW5nUmF0ZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RGFmZkNhcnRTaGlwcGluZ1JhdGVbXT4oYCR7dGhpcy51cmx9LyR7Y2FydElkfWApXG4gIH1cbn1cbiJdfQ==