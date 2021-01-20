/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
/**
 * @deprecated
 */
export class MockOrderShippingRate {
    constructor() {
        this.rate_id = faker.random.number({ min: 1, max: 1000 });
        this.address_id = faker.random.number({ min: 1, max: 1000 });
        this.created_at = new Date();
        this.updated_at = new Date();
        this.carrier = 'Birds Inc.';
        this.carrier_title = 'laden';
        this.code = 'code';
        this.method = 'swallow';
        this.method_description = 'efficient';
        this.price = faker.random.number({ min: 1, max: 1000 });
        this.error_message = 'error message';
        this.method_title = 'laden';
    }
}
if (false) {
    /** @type {?} */
    MockOrderShippingRate.prototype.rate_id;
    /** @type {?} */
    MockOrderShippingRate.prototype.address_id;
    /** @type {?} */
    MockOrderShippingRate.prototype.created_at;
    /** @type {?} */
    MockOrderShippingRate.prototype.updated_at;
    /** @type {?} */
    MockOrderShippingRate.prototype.carrier;
    /** @type {?} */
    MockOrderShippingRate.prototype.carrier_title;
    /** @type {?} */
    MockOrderShippingRate.prototype.code;
    /** @type {?} */
    MockOrderShippingRate.prototype.method;
    /** @type {?} */
    MockOrderShippingRate.prototype.method_description;
    /** @type {?} */
    MockOrderShippingRate.prototype.price;
    /** @type {?} */
    MockOrderShippingRate.prototype.error_message;
    /** @type {?} */
    MockOrderShippingRate.prototype.method_title;
}
/**
 * @deprecated
 */
export class DaffOrderShippingRateFactory extends DaffModelFactory {
    constructor() {
        super(MockOrderShippingRate);
    }
}
DaffOrderShippingRateFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffOrderShippingRateFactory.ctorParameters = () => [];
/** @nocollapse */ DaffOrderShippingRateFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffOrderShippingRateFactory_Factory() { return new DaffOrderShippingRateFactory(); }, token: DaffOrderShippingRateFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc2hpcHBpbmctcmF0ZS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NoZWNrb3V0L3Rlc3RpbmcvIiwic291cmNlcyI6WyJvcmRlci9mYWN0b3JpZXMvb3JkZXItc2hpcHBpbmctcmF0ZS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sb0JBQW9CLENBQUM7QUFDNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBSzFELE1BQU0sT0FBTyxxQkFBcUI7SUFBbEM7UUFDRSxZQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ25ELGVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDdEQsZUFBVSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDeEIsZUFBVSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDeEIsWUFBTyxHQUFHLFlBQVksQ0FBQztRQUN2QixrQkFBYSxHQUFHLE9BQU8sQ0FBQztRQUN4QixTQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ2QsV0FBTSxHQUFHLFNBQVMsQ0FBQztRQUNuQix1QkFBa0IsR0FBRyxXQUFXLENBQUM7UUFDakMsVUFBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUNqRCxrQkFBYSxHQUFHLGVBQWUsQ0FBQztRQUNoQyxpQkFBWSxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0NBQUE7OztJQVpDLHdDQUFtRDs7SUFDbkQsMkNBQXNEOztJQUN0RCwyQ0FBd0I7O0lBQ3hCLDJDQUF3Qjs7SUFDeEIsd0NBQXVCOztJQUN2Qiw4Q0FBd0I7O0lBQ3hCLHFDQUFjOztJQUNkLHVDQUFtQjs7SUFDbkIsbURBQWlDOztJQUNqQyxzQ0FBaUQ7O0lBQ2pELDhDQUFnQzs7SUFDaEMsNkNBQXVCOzs7OztBQVN6QixNQUFNLE9BQU8sNEJBQTZCLFNBQVEsZ0JBQXVDO0lBQ3ZGO1FBQ0UsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDL0IsQ0FBQzs7O1lBTkYsVUFBVSxTQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmT3JkZXJTaGlwcGluZ1JhdGUgfSBmcm9tICdAZGFmZm9kaWwvY2hlY2tvdXQnO1xuaW1wb3J0ICogYXMgZmFrZXIgZnJvbSAnZmFrZXIvbG9jYWxlL2VuX1VTJztcbmltcG9ydCB7IERhZmZNb2RlbEZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvY29yZS90ZXN0aW5nJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY2xhc3MgTW9ja09yZGVyU2hpcHBpbmdSYXRlIGltcGxlbWVudHMgRGFmZk9yZGVyU2hpcHBpbmdSYXRlIHtcbiAgcmF0ZV9pZCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSk7XG4gIGFkZHJlc3NfaWQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuICBjcmVhdGVkX2F0ID0gbmV3IERhdGUoKTtcbiAgdXBkYXRlZF9hdCA9IG5ldyBEYXRlKCk7XG4gIGNhcnJpZXIgPSAnQmlyZHMgSW5jLic7XG4gIGNhcnJpZXJfdGl0bGUgPSAnbGFkZW4nO1xuICBjb2RlID0gJ2NvZGUnO1xuICBtZXRob2QgPSAnc3dhbGxvdyc7XG4gIG1ldGhvZF9kZXNjcmlwdGlvbiA9ICdlZmZpY2llbnQnO1xuICBwcmljZSA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSk7XG4gIGVycm9yX21lc3NhZ2UgPSAnZXJyb3IgbWVzc2FnZSc7XG4gIG1ldGhvZF90aXRsZSA9ICdsYWRlbic7XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmT3JkZXJTaGlwcGluZ1JhdGVGYWN0b3J5IGV4dGVuZHMgRGFmZk1vZGVsRmFjdG9yeTxEYWZmT3JkZXJTaGlwcGluZ1JhdGU+e1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKE1vY2tPcmRlclNoaXBwaW5nUmF0ZSk7XG4gIH1cbn1cbiJdfQ==