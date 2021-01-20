/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DaffCartShippingRateFactory } from '@daffodil/cart/testing';
import * as i0 from "@angular/core";
import * as i1 from "@daffodil/cart/testing";
export class DaffTestingCartShippingMethodsService {
    /**
     * @param {?} shippingInfoFactory
     */
    constructor(shippingInfoFactory) {
        this.shippingInfoFactory = shippingInfoFactory;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    list(cartId) {
        return of(this.shippingInfoFactory.createMany(3));
    }
}
DaffTestingCartShippingMethodsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffTestingCartShippingMethodsService.ctorParameters = () => [
    { type: DaffCartShippingRateFactory }
];
/** @nocollapse */ DaffTestingCartShippingMethodsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingCartShippingMethodsService_Factory() { return new DaffTestingCartShippingMethodsService(i0.ɵɵinject(i1.DaffCartShippingRateFactory)); }, token: DaffTestingCartShippingMethodsService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingCartShippingMethodsService.prototype.shippingInfoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGlwcGluZy1tZXRob2RzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvdGVzdGluZy8iLCJzb3VyY2VzIjpbImRyaXZlcnMvY2FydC1zaGlwcGluZy1tZXRob2RzL2NhcnQtc2hpcHBpbmctbWV0aG9kcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFPdEMsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7OztBQUtyRSxNQUFNLE9BQU8scUNBQXFDOzs7O0lBQ2hELFlBQ1UsbUJBQWdEO1FBQWhELHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBNkI7SUFDdkQsQ0FBQzs7Ozs7SUFFSixJQUFJLENBQUMsTUFBc0I7UUFDekIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7OztZQVZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUpRLDJCQUEyQjs7Ozs7Ozs7SUFPaEMsb0VBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGFmZkNhcnQsIERhZmZDYXJ0U2hpcHBpbmdSYXRlIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuaW1wb3J0IHtcbiAgRGFmZkNhcnRTaGlwcGluZ01ldGhvZHNTZXJ2aWNlSW50ZXJmYWNlLFxufSBmcm9tICdAZGFmZm9kaWwvY2FydC9kcml2ZXInO1xuXG5pbXBvcnQgeyBEYWZmQ2FydFNoaXBwaW5nUmF0ZUZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvY2FydC90ZXN0aW5nJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZlRlc3RpbmdDYXJ0U2hpcHBpbmdNZXRob2RzU2VydmljZSBpbXBsZW1lbnRzIERhZmZDYXJ0U2hpcHBpbmdNZXRob2RzU2VydmljZUludGVyZmFjZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc2hpcHBpbmdJbmZvRmFjdG9yeTogRGFmZkNhcnRTaGlwcGluZ1JhdGVGYWN0b3J5LFxuICApIHt9XG5cbiAgbGlzdChjYXJ0SWQ6IERhZmZDYXJ0WydpZCddKTogT2JzZXJ2YWJsZTxEYWZmQ2FydFNoaXBwaW5nUmF0ZVtdPiB7XG4gICAgcmV0dXJuIG9mKHRoaXMuc2hpcHBpbmdJbmZvRmFjdG9yeS5jcmVhdGVNYW55KDMpKTtcbiAgfVxufVxuIl19