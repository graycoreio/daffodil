/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DaffCartFactory, DaffCartPaymentFactory } from '@daffodil/cart/testing';
import * as i0 from "@angular/core";
import * as i1 from "@daffodil/cart/testing";
export class DaffTestingCartPaymentService {
    /**
     * @param {?} paymentFactory
     * @param {?} cartFactory
     */
    constructor(paymentFactory, cartFactory) {
        this.paymentFactory = paymentFactory;
        this.cartFactory = cartFactory;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    get(cartId) {
        return of(this.paymentFactory.create());
    }
    /**
     * @param {?} cartId
     * @param {?} payment
     * @return {?}
     */
    update(cartId, payment) {
        return of(this.cartFactory.create());
    }
    /**
     * @param {?} cartId
     * @param {?} payment
     * @param {?} address
     * @return {?}
     */
    updateWithBilling(cartId, payment, address) {
        return of(this.cartFactory.create());
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    remove(cartId) {
        return of(undefined);
    }
}
DaffTestingCartPaymentService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffTestingCartPaymentService.ctorParameters = () => [
    { type: DaffCartPaymentFactory },
    { type: DaffCartFactory }
];
/** @nocollapse */ DaffTestingCartPaymentService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingCartPaymentService_Factory() { return new DaffTestingCartPaymentService(i0.ɵɵinject(i1.DaffCartPaymentFactory), i0.ɵɵinject(i1.DaffCartFactory)); }, token: DaffTestingCartPaymentService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingCartPaymentService.prototype.paymentFactory;
    /**
     * @type {?}
     * @private
     */
    DaffTestingCartPaymentService.prototype.cartFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYXltZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvdGVzdGluZy8iLCJzb3VyY2VzIjpbImRyaXZlcnMvY2FydC1wYXltZW50L2NhcnQtcGF5bWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFPdEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFLakYsTUFBTSxPQUFPLDZCQUE2Qjs7Ozs7SUFDeEMsWUFDVSxjQUFzQyxFQUN0QyxXQUE0QjtRQUQ1QixtQkFBYyxHQUFkLGNBQWMsQ0FBd0I7UUFDdEMsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO0lBQ25DLENBQUM7Ozs7O0lBRUosR0FBRyxDQUFDLE1BQXNCO1FBQ3hCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsTUFBc0IsRUFBRSxPQUF1QztRQUNwRSxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7OztJQUVELGlCQUFpQixDQUFDLE1BQXNCLEVBQUUsT0FBdUMsRUFBRSxPQUFpQztRQUNsSCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsTUFBc0I7UUFDM0IsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7O1lBdkJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUp5QixzQkFBc0I7WUFBdkMsZUFBZTs7Ozs7Ozs7SUFPcEIsdURBQThDOzs7OztJQUM5QyxvREFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydCwgRGFmZkNhcnRQYXltZW50TWV0aG9kLCBEYWZmQ2FydEFkZHJlc3MgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQge1xuICBEYWZmQ2FydFBheW1lbnRTZXJ2aWNlSW50ZXJmYWNlLFxufSBmcm9tICdAZGFmZm9kaWwvY2FydC9kcml2ZXInO1xuXG5pbXBvcnQgeyBEYWZmQ2FydEZhY3RvcnksIERhZmZDYXJ0UGF5bWVudEZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvY2FydC90ZXN0aW5nJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZlRlc3RpbmdDYXJ0UGF5bWVudFNlcnZpY2UgaW1wbGVtZW50cyBEYWZmQ2FydFBheW1lbnRTZXJ2aWNlSW50ZXJmYWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwYXltZW50RmFjdG9yeTogRGFmZkNhcnRQYXltZW50RmFjdG9yeSxcbiAgICBwcml2YXRlIGNhcnRGYWN0b3J5OiBEYWZmQ2FydEZhY3RvcnlcbiAgKSB7fVxuXG4gIGdldChjYXJ0SWQ6IERhZmZDYXJ0WydpZCddKTogT2JzZXJ2YWJsZTxEYWZmQ2FydFBheW1lbnRNZXRob2Q+IHtcbiAgICByZXR1cm4gb2YodGhpcy5wYXltZW50RmFjdG9yeS5jcmVhdGUoKSk7XG4gIH1cblxuICB1cGRhdGUoY2FydElkOiBEYWZmQ2FydFsnaWQnXSwgcGF5bWVudDogUGFydGlhbDxEYWZmQ2FydFBheW1lbnRNZXRob2Q+KTogT2JzZXJ2YWJsZTxQYXJ0aWFsPERhZmZDYXJ0Pj4ge1xuICAgIHJldHVybiBvZih0aGlzLmNhcnRGYWN0b3J5LmNyZWF0ZSgpKTtcbiAgfVxuXG4gIHVwZGF0ZVdpdGhCaWxsaW5nKGNhcnRJZDogRGFmZkNhcnRbJ2lkJ10sIHBheW1lbnQ6IFBhcnRpYWw8RGFmZkNhcnRQYXltZW50TWV0aG9kPiwgYWRkcmVzczogUGFydGlhbDxEYWZmQ2FydEFkZHJlc3M+KTogT2JzZXJ2YWJsZTxQYXJ0aWFsPERhZmZDYXJ0Pj4ge1xuICAgIHJldHVybiBvZih0aGlzLmNhcnRGYWN0b3J5LmNyZWF0ZSgpKTtcbiAgfVxuXG4gIHJlbW92ZShjYXJ0SWQ6IERhZmZDYXJ0WydpZCddKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIG9mKHVuZGVmaW5lZCk7XG4gIH1cbn1cbiJdfQ==