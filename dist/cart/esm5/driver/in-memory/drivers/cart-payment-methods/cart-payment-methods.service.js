/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var DaffInMemoryCartPaymentMethodsService = /** @class */ (function () {
    function DaffInMemoryCartPaymentMethodsService(http) {
        this.http = http;
        this.url = '/api/cart-payment-methods';
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffInMemoryCartPaymentMethodsService.prototype.list = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return this.http.get(this.url + "/" + cartId);
    };
    DaffInMemoryCartPaymentMethodsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryCartPaymentMethodsService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryCartPaymentMethodsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryCartPaymentMethodsService_Factory() { return new DaffInMemoryCartPaymentMethodsService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryCartPaymentMethodsService, providedIn: "root" });
    return DaffInMemoryCartPaymentMethodsService;
}());
export { DaffInMemoryCartPaymentMethodsService };
if (false) {
    /** @type {?} */
    DaffInMemoryCartPaymentMethodsService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryCartPaymentMethodsService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYXltZW50LW1ldGhvZHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9pbi1tZW1vcnkvIiwic291cmNlcyI6WyJkcml2ZXJzL2NhcnQtcGF5bWVudC1tZXRob2RzL2NhcnQtcGF5bWVudC1tZXRob2RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFRbEQ7SUFNRSwrQ0FBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUZwQyxRQUFHLEdBQUcsMkJBQTJCLENBQUM7SUFFSyxDQUFDOzs7OztJQUV4QyxvREFBSTs7OztJQUFKLFVBQUssTUFBc0I7UUFDekIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBNkIsSUFBSSxDQUFDLEdBQUcsU0FBSSxNQUFRLENBQUMsQ0FBQTtJQUN4RSxDQUFDOztnQkFWRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVZRLFVBQVU7OztnREFEbkI7Q0FvQkMsQUFYRCxJQVdDO1NBUlkscUNBQXFDOzs7SUFDaEQsb0RBQWtDOzs7OztJQUV0QixxREFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydFBheW1lbnRNZXRob2QsIERhZmZDYXJ0IH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuaW1wb3J0IHtcbiAgRGFmZkNhcnRQYXltZW50TWV0aG9kc1NlcnZpY2VJbnRlcmZhY2UsXG59IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZJbk1lbW9yeUNhcnRQYXltZW50TWV0aG9kc1NlcnZpY2UgaW1wbGVtZW50cyBEYWZmQ2FydFBheW1lbnRNZXRob2RzU2VydmljZUludGVyZmFjZTxEYWZmQ2FydFBheW1lbnRNZXRob2Q+IHtcbiAgdXJsID0gJy9hcGkvY2FydC1wYXltZW50LW1ldGhvZHMnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cblxuICBsaXN0KGNhcnRJZDogRGFmZkNhcnRbJ2lkJ10pOiBPYnNlcnZhYmxlPERhZmZDYXJ0UGF5bWVudE1ldGhvZFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RGFmZkNhcnRQYXltZW50TWV0aG9kW10+KGAke3RoaXMudXJsfS8ke2NhcnRJZH1gKVxuICB9XG59XG4iXX0=