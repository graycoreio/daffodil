/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var DaffInMemoryCartOrderService = /** @class */ (function () {
    function DaffInMemoryCartOrderService(http) {
        this.http = http;
        this.url = '/api/cart-order';
    }
    /**
     * @param {?} cartId
     * @param {?=} payment
     * @return {?}
     */
    DaffInMemoryCartOrderService.prototype.placeOrder = /**
     * @param {?} cartId
     * @param {?=} payment
     * @return {?}
     */
    function (cartId, payment) {
        return this.http.post(this.url + "/" + cartId + "/", { payment: payment });
    };
    DaffInMemoryCartOrderService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryCartOrderService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryCartOrderService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryCartOrderService_Factory() { return new DaffInMemoryCartOrderService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryCartOrderService, providedIn: "root" });
    return DaffInMemoryCartOrderService;
}());
export { DaffInMemoryCartOrderService };
if (false) {
    /** @type {?} */
    DaffInMemoryCartOrderService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryCartOrderService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1vcmRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL2luLW1lbW9yeS8iLCJzb3VyY2VzIjpbImRyaXZlcnMvY2FydC1vcmRlci9jYXJ0LW9yZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFRbEQ7SUFNRSxzQ0FBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUZwQyxRQUFHLEdBQUcsaUJBQWlCLENBQUM7SUFFZSxDQUFDOzs7Ozs7SUFFeEMsaURBQVU7Ozs7O0lBQVYsVUFBVyxNQUFzQixFQUFFLE9BQStCO1FBQ2hFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQXlCLElBQUksQ0FBQyxHQUFHLFNBQUksTUFBTSxNQUFHLEVBQUUsRUFBQyxPQUFPLFNBQUEsRUFBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQzs7Z0JBVkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFWUSxVQUFVOzs7dUNBRG5CO0NBb0JDLEFBWEQsSUFXQztTQVJZLDRCQUE0Qjs7O0lBQ3ZDLDJDQUF3Qjs7Ozs7SUFFWiw0Q0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydCwgRGFmZkNhcnRQYXltZW50TWV0aG9kLCBEYWZmQ2FydE9yZGVyUmVzdWx0IH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuaW1wb3J0IHtcbiAgRGFmZkNhcnRPcmRlclNlcnZpY2VJbnRlcmZhY2UsXG59IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZJbk1lbW9yeUNhcnRPcmRlclNlcnZpY2UgaW1wbGVtZW50cyBEYWZmQ2FydE9yZGVyU2VydmljZUludGVyZmFjZSB7XG4gIHVybCA9ICcvYXBpL2NhcnQtb3JkZXInO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cblxuICBwbGFjZU9yZGVyKGNhcnRJZDogRGFmZkNhcnRbJ2lkJ10sIHBheW1lbnQ/OiBEYWZmQ2FydFBheW1lbnRNZXRob2QpOiBPYnNlcnZhYmxlPERhZmZDYXJ0T3JkZXJSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8RGFmZkNhcnRPcmRlclJlc3VsdD4oYCR7dGhpcy51cmx9LyR7Y2FydElkfS9gLCB7cGF5bWVudH0pO1xuICB9XG59XG4iXX0=