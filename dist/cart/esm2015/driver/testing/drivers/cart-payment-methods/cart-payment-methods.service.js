/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DaffCartPaymentFactory } from '@daffodil/cart/testing';
import * as i0 from "@angular/core";
import * as i1 from "@daffodil/cart/testing";
export class DaffTestingCartPaymentMethodsService {
    /**
     * @param {?} paymentFactory
     */
    constructor(paymentFactory) {
        this.paymentFactory = paymentFactory;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    list(cartId) {
        return of(this.paymentFactory.createMany(3));
    }
}
DaffTestingCartPaymentMethodsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffTestingCartPaymentMethodsService.ctorParameters = () => [
    { type: DaffCartPaymentFactory }
];
/** @nocollapse */ DaffTestingCartPaymentMethodsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingCartPaymentMethodsService_Factory() { return new DaffTestingCartPaymentMethodsService(i0.ɵɵinject(i1.DaffCartPaymentFactory)); }, token: DaffTestingCartPaymentMethodsService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingCartPaymentMethodsService.prototype.paymentFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYXltZW50LW1ldGhvZHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZHJpdmVycy9jYXJ0LXBheW1lbnQtbWV0aG9kcy9jYXJ0LXBheW1lbnQtbWV0aG9kcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFPdEMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7OztBQUtoRSxNQUFNLE9BQU8sb0NBQW9DOzs7O0lBQy9DLFlBQ1UsY0FBc0M7UUFBdEMsbUJBQWMsR0FBZCxjQUFjLENBQXdCO0lBQzdDLENBQUM7Ozs7O0lBRUosSUFBSSxDQUFDLE1BQXNCO1FBQ3pCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7O1lBVkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBSlEsc0JBQXNCOzs7Ozs7OztJQU8zQiw4REFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydCwgRGFmZkNhcnRQYXltZW50TWV0aG9kIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuaW1wb3J0IHtcbiAgRGFmZkNhcnRQYXltZW50TWV0aG9kc1NlcnZpY2VJbnRlcmZhY2UsXG59IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlcic7XG5cbmltcG9ydCB7IERhZmZDYXJ0UGF5bWVudEZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvY2FydC90ZXN0aW5nJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZlRlc3RpbmdDYXJ0UGF5bWVudE1ldGhvZHNTZXJ2aWNlIGltcGxlbWVudHMgRGFmZkNhcnRQYXltZW50TWV0aG9kc1NlcnZpY2VJbnRlcmZhY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHBheW1lbnRGYWN0b3J5OiBEYWZmQ2FydFBheW1lbnRGYWN0b3J5LFxuICApIHt9XG5cbiAgbGlzdChjYXJ0SWQ6IERhZmZDYXJ0WydpZCddKTogT2JzZXJ2YWJsZTxEYWZmQ2FydFBheW1lbnRNZXRob2RbXT4ge1xuICAgIHJldHVybiBvZih0aGlzLnBheW1lbnRGYWN0b3J5LmNyZWF0ZU1hbnkoMykpO1xuICB9XG59XG4iXX0=