/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class DaffInMemoryCartPaymentService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/cart-payment';
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
     * @param {?} payment
     * @return {?}
     */
    update(cartId, payment) {
        return this.http.put(`${this.url}/${cartId}`, { payment });
    }
    /**
     * @param {?} cartId
     * @param {?} payment
     * @param {?} address
     * @return {?}
     */
    updateWithBilling(cartId, payment, address) {
        return this.http.put(`${this.url}/${cartId}`, { payment, address });
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    remove(cartId) {
        return this.http.delete(`${this.url}/${cartId}`);
    }
}
DaffInMemoryCartPaymentService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryCartPaymentService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryCartPaymentService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryCartPaymentService_Factory() { return new DaffInMemoryCartPaymentService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryCartPaymentService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffInMemoryCartPaymentService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryCartPaymentService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYXltZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvaW4tbWVtb3J5LyIsInNvdXJjZXMiOlsiZHJpdmVycy9jYXJ0LXBheW1lbnQvY2FydC1wYXltZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFXbEQsTUFBTSxPQUFPLDhCQUE4Qjs7OztJQUd6QyxZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFFBQUcsR0FBRyxtQkFBbUIsQ0FBQztJQUVhLENBQUM7Ozs7O0lBRXhDLEdBQUcsQ0FBQyxNQUFzQjtRQUN4QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUF3QixHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsTUFBc0IsRUFBRSxPQUF1QztRQUNwRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxNQUFNLEVBQUUsRUFBRSxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7SUFDckUsQ0FBQzs7Ozs7OztJQUVELGlCQUFpQixDQUFDLE1BQXNCLEVBQUUsT0FBdUMsRUFBRSxPQUFpQztRQUNsSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxNQUFNLEVBQUUsRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE1BQXNCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7O1lBdEJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVZRLFVBQVU7Ozs7O0lBWWpCLDZDQUEwQjs7Ozs7SUFFZCw4Q0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydCwgRGFmZkNhcnRQYXltZW50TWV0aG9kLCBEYWZmQ2FydEFkZHJlc3MgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQge1xuICBEYWZmQ2FydFBheW1lbnRTZXJ2aWNlSW50ZXJmYWNlLFxufSBmcm9tICdAZGFmZm9kaWwvY2FydC9kcml2ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmSW5NZW1vcnlDYXJ0UGF5bWVudFNlcnZpY2UgaW1wbGVtZW50cyBEYWZmQ2FydFBheW1lbnRTZXJ2aWNlSW50ZXJmYWNlIHtcbiAgdXJsID0gJy9hcGkvY2FydC1wYXltZW50JztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgZ2V0KGNhcnRJZDogRGFmZkNhcnRbJ2lkJ10pOiBPYnNlcnZhYmxlPERhZmZDYXJ0UGF5bWVudE1ldGhvZD4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PERhZmZDYXJ0UGF5bWVudE1ldGhvZD4oYCR7dGhpcy51cmx9LyR7Y2FydElkfWApO1xuICB9XG5cbiAgdXBkYXRlKGNhcnRJZDogRGFmZkNhcnRbJ2lkJ10sIHBheW1lbnQ6IFBhcnRpYWw8RGFmZkNhcnRQYXltZW50TWV0aG9kPik6IE9ic2VydmFibGU8UGFydGlhbDxEYWZmQ2FydD4+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxEYWZmQ2FydD4oYCR7dGhpcy51cmx9LyR7Y2FydElkfWAsIHtwYXltZW50fSk7XG4gIH1cblxuICB1cGRhdGVXaXRoQmlsbGluZyhjYXJ0SWQ6IERhZmZDYXJ0WydpZCddLCBwYXltZW50OiBQYXJ0aWFsPERhZmZDYXJ0UGF5bWVudE1ldGhvZD4sIGFkZHJlc3M6IFBhcnRpYWw8RGFmZkNhcnRBZGRyZXNzPik6IE9ic2VydmFibGU8UGFydGlhbDxEYWZmQ2FydD4+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxEYWZmQ2FydD4oYCR7dGhpcy51cmx9LyR7Y2FydElkfWAsIHtwYXltZW50LCBhZGRyZXNzfSk7XG4gIH1cblxuICByZW1vdmUoY2FydElkOiBEYWZmQ2FydFsnaWQnXSk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPHZvaWQ+KGAke3RoaXMudXJsfS8ke2NhcnRJZH1gKTtcbiAgfVxufVxuIl19