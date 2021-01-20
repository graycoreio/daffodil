/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DaffCartShippingRateFactory } from '@daffodil/cart/testing';
import * as i0 from "@angular/core";
import * as i1 from "@daffodil/cart/testing";
var DaffTestingCartShippingMethodsService = /** @class */ (function () {
    function DaffTestingCartShippingMethodsService(shippingInfoFactory) {
        this.shippingInfoFactory = shippingInfoFactory;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffTestingCartShippingMethodsService.prototype.list = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return of(this.shippingInfoFactory.createMany(3));
    };
    DaffTestingCartShippingMethodsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffTestingCartShippingMethodsService.ctorParameters = function () { return [
        { type: DaffCartShippingRateFactory }
    ]; };
    /** @nocollapse */ DaffTestingCartShippingMethodsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingCartShippingMethodsService_Factory() { return new DaffTestingCartShippingMethodsService(i0.ɵɵinject(i1.DaffCartShippingRateFactory)); }, token: DaffTestingCartShippingMethodsService, providedIn: "root" });
    return DaffTestingCartShippingMethodsService;
}());
export { DaffTestingCartShippingMethodsService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingCartShippingMethodsService.prototype.shippingInfoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGlwcGluZy1tZXRob2RzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvdGVzdGluZy8iLCJzb3VyY2VzIjpbImRyaXZlcnMvY2FydC1zaGlwcGluZy1tZXRob2RzL2NhcnQtc2hpcHBpbmctbWV0aG9kcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFPdEMsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7OztBQUVyRTtJQUlFLCtDQUNVLG1CQUFnRDtRQUFoRCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQTZCO0lBQ3ZELENBQUM7Ozs7O0lBRUosb0RBQUk7Ozs7SUFBSixVQUFLLE1BQXNCO1FBQ3pCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDOztnQkFWRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUpRLDJCQUEyQjs7O2dEQVJwQztDQXFCQyxBQVhELElBV0M7U0FSWSxxQ0FBcUM7Ozs7OztJQUU5QyxvRUFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydCwgRGFmZkNhcnRTaGlwcGluZ1JhdGUgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQge1xuICBEYWZmQ2FydFNoaXBwaW5nTWV0aG9kc1NlcnZpY2VJbnRlcmZhY2UsXG59IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlcic7XG5cbmltcG9ydCB7IERhZmZDYXJ0U2hpcHBpbmdSYXRlRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L3Rlc3RpbmcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmVGVzdGluZ0NhcnRTaGlwcGluZ01ldGhvZHNTZXJ2aWNlIGltcGxlbWVudHMgRGFmZkNhcnRTaGlwcGluZ01ldGhvZHNTZXJ2aWNlSW50ZXJmYWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzaGlwcGluZ0luZm9GYWN0b3J5OiBEYWZmQ2FydFNoaXBwaW5nUmF0ZUZhY3RvcnksXG4gICkge31cblxuICBsaXN0KGNhcnRJZDogRGFmZkNhcnRbJ2lkJ10pOiBPYnNlcnZhYmxlPERhZmZDYXJ0U2hpcHBpbmdSYXRlW10+IHtcbiAgICByZXR1cm4gb2YodGhpcy5zaGlwcGluZ0luZm9GYWN0b3J5LmNyZWF0ZU1hbnkoMykpO1xuICB9XG59XG4iXX0=