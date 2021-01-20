/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var DaffInMemoryCartPaymentService = /** @class */ (function () {
    function DaffInMemoryCartPaymentService(http) {
        this.http = http;
        this.url = '/api/cart-payment';
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffInMemoryCartPaymentService.prototype.get = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return this.http.get(this.url + "/" + cartId);
    };
    /**
     * @param {?} cartId
     * @param {?} payment
     * @return {?}
     */
    DaffInMemoryCartPaymentService.prototype.update = /**
     * @param {?} cartId
     * @param {?} payment
     * @return {?}
     */
    function (cartId, payment) {
        return this.http.put(this.url + "/" + cartId, { payment: payment });
    };
    /**
     * @param {?} cartId
     * @param {?} payment
     * @param {?} address
     * @return {?}
     */
    DaffInMemoryCartPaymentService.prototype.updateWithBilling = /**
     * @param {?} cartId
     * @param {?} payment
     * @param {?} address
     * @return {?}
     */
    function (cartId, payment, address) {
        return this.http.put(this.url + "/" + cartId, { payment: payment, address: address });
    };
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffInMemoryCartPaymentService.prototype.remove = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return this.http.delete(this.url + "/" + cartId);
    };
    DaffInMemoryCartPaymentService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryCartPaymentService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryCartPaymentService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryCartPaymentService_Factory() { return new DaffInMemoryCartPaymentService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryCartPaymentService, providedIn: "root" });
    return DaffInMemoryCartPaymentService;
}());
export { DaffInMemoryCartPaymentService };
if (false) {
    /** @type {?} */
    DaffInMemoryCartPaymentService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryCartPaymentService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYXltZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvaW4tbWVtb3J5LyIsInNvdXJjZXMiOlsiZHJpdmVycy9jYXJ0LXBheW1lbnQvY2FydC1wYXltZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFRbEQ7SUFNRSx3Q0FBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUZwQyxRQUFHLEdBQUcsbUJBQW1CLENBQUM7SUFFYSxDQUFDOzs7OztJQUV4Qyw0Q0FBRzs7OztJQUFILFVBQUksTUFBc0I7UUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBMkIsSUFBSSxDQUFDLEdBQUcsU0FBSSxNQUFRLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7Ozs7SUFFRCwrQ0FBTTs7Ozs7SUFBTixVQUFPLE1BQXNCLEVBQUUsT0FBdUM7UUFDcEUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBYyxJQUFJLENBQUMsR0FBRyxTQUFJLE1BQVEsRUFBRSxFQUFDLE9BQU8sU0FBQSxFQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7Ozs7O0lBRUQsMERBQWlCOzs7Ozs7SUFBakIsVUFBa0IsTUFBc0IsRUFBRSxPQUF1QyxFQUFFLE9BQWlDO1FBQ2xILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWMsSUFBSSxDQUFDLEdBQUcsU0FBSSxNQUFRLEVBQUUsRUFBQyxPQUFPLFNBQUEsRUFBRSxPQUFPLFNBQUEsRUFBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQzs7Ozs7SUFFRCwrQ0FBTTs7OztJQUFOLFVBQU8sTUFBc0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBVSxJQUFJLENBQUMsR0FBRyxTQUFJLE1BQVEsQ0FBQyxDQUFDO0lBQ3pELENBQUM7O2dCQXRCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVZRLFVBQVU7Ozt5Q0FEbkI7Q0FnQ0MsQUF2QkQsSUF1QkM7U0FwQlksOEJBQThCOzs7SUFDekMsNkNBQTBCOzs7OztJQUVkLDhDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhZmZDYXJ0LCBEYWZmQ2FydFBheW1lbnRNZXRob2QsIERhZmZDYXJ0QWRkcmVzcyB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcbmltcG9ydCB7XG4gIERhZmZDYXJ0UGF5bWVudFNlcnZpY2VJbnRlcmZhY2UsXG59IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZJbk1lbW9yeUNhcnRQYXltZW50U2VydmljZSBpbXBsZW1lbnRzIERhZmZDYXJ0UGF5bWVudFNlcnZpY2VJbnRlcmZhY2Uge1xuICB1cmwgPSAnL2FwaS9jYXJ0LXBheW1lbnQnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cblxuICBnZXQoY2FydElkOiBEYWZmQ2FydFsnaWQnXSk6IE9ic2VydmFibGU8RGFmZkNhcnRQYXltZW50TWV0aG9kPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RGFmZkNhcnRQYXltZW50TWV0aG9kPihgJHt0aGlzLnVybH0vJHtjYXJ0SWR9YCk7XG4gIH1cblxuICB1cGRhdGUoY2FydElkOiBEYWZmQ2FydFsnaWQnXSwgcGF5bWVudDogUGFydGlhbDxEYWZmQ2FydFBheW1lbnRNZXRob2Q+KTogT2JzZXJ2YWJsZTxQYXJ0aWFsPERhZmZDYXJ0Pj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0PERhZmZDYXJ0PihgJHt0aGlzLnVybH0vJHtjYXJ0SWR9YCwge3BheW1lbnR9KTtcbiAgfVxuXG4gIHVwZGF0ZVdpdGhCaWxsaW5nKGNhcnRJZDogRGFmZkNhcnRbJ2lkJ10sIHBheW1lbnQ6IFBhcnRpYWw8RGFmZkNhcnRQYXltZW50TWV0aG9kPiwgYWRkcmVzczogUGFydGlhbDxEYWZmQ2FydEFkZHJlc3M+KTogT2JzZXJ2YWJsZTxQYXJ0aWFsPERhZmZDYXJ0Pj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0PERhZmZDYXJ0PihgJHt0aGlzLnVybH0vJHtjYXJ0SWR9YCwge3BheW1lbnQsIGFkZHJlc3N9KTtcbiAgfVxuXG4gIHJlbW92ZShjYXJ0SWQ6IERhZmZDYXJ0WydpZCddKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8dm9pZD4oYCR7dGhpcy51cmx9LyR7Y2FydElkfWApO1xuICB9XG59XG4iXX0=