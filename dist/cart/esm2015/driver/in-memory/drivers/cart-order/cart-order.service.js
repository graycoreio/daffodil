/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class DaffInMemoryCartOrderService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/cart-order';
    }
    /**
     * @param {?} cartId
     * @param {?=} payment
     * @return {?}
     */
    placeOrder(cartId, payment) {
        return this.http.post(`${this.url}/${cartId}/`, { payment });
    }
}
DaffInMemoryCartOrderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryCartOrderService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryCartOrderService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryCartOrderService_Factory() { return new DaffInMemoryCartOrderService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryCartOrderService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffInMemoryCartOrderService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryCartOrderService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1vcmRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL2luLW1lbW9yeS8iLCJzb3VyY2VzIjpbImRyaXZlcnMvY2FydC1vcmRlci9jYXJ0LW9yZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFXbEQsTUFBTSxPQUFPLDRCQUE0Qjs7OztJQUd2QyxZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFFBQUcsR0FBRyxpQkFBaUIsQ0FBQztJQUVlLENBQUM7Ozs7OztJQUV4QyxVQUFVLENBQUMsTUFBc0IsRUFBRSxPQUErQjtRQUNoRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFzQixHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksTUFBTSxHQUFHLEVBQUUsRUFBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7OztZQVZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVZRLFVBQVU7Ozs7O0lBWWpCLDJDQUF3Qjs7Ozs7SUFFWiw0Q0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydCwgRGFmZkNhcnRQYXltZW50TWV0aG9kLCBEYWZmQ2FydE9yZGVyUmVzdWx0IH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuaW1wb3J0IHtcbiAgRGFmZkNhcnRPcmRlclNlcnZpY2VJbnRlcmZhY2UsXG59IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZJbk1lbW9yeUNhcnRPcmRlclNlcnZpY2UgaW1wbGVtZW50cyBEYWZmQ2FydE9yZGVyU2VydmljZUludGVyZmFjZSB7XG4gIHVybCA9ICcvYXBpL2NhcnQtb3JkZXInO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cblxuICBwbGFjZU9yZGVyKGNhcnRJZDogRGFmZkNhcnRbJ2lkJ10sIHBheW1lbnQ/OiBEYWZmQ2FydFBheW1lbnRNZXRob2QpOiBPYnNlcnZhYmxlPERhZmZDYXJ0T3JkZXJSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8RGFmZkNhcnRPcmRlclJlc3VsdD4oYCR7dGhpcy51cmx9LyR7Y2FydElkfS9gLCB7cGF5bWVudH0pO1xuICB9XG59XG4iXX0=