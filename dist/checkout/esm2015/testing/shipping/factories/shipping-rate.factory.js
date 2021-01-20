/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
export class MockShippingRate {
    constructor() {
        this.rate_id = faker.random.number({ min: 1, max: 1000 });
        this.price = faker.random.number({ min: 1, max: 1000 });
        this.carrier = 'Birds Inc.';
        this.code = 'code';
        this.method = 'swallow';
        this.method_description = 'efficient';
        this.method_title = 'laden';
    }
}
if (false) {
    /** @type {?} */
    MockShippingRate.prototype.rate_id;
    /** @type {?} */
    MockShippingRate.prototype.price;
    /** @type {?} */
    MockShippingRate.prototype.carrier;
    /** @type {?} */
    MockShippingRate.prototype.code;
    /** @type {?} */
    MockShippingRate.prototype.method;
    /** @type {?} */
    MockShippingRate.prototype.method_description;
    /** @type {?} */
    MockShippingRate.prototype.method_title;
}
export class DaffShippingRateFactory extends DaffModelFactory {
    constructor() {
        super(MockShippingRate);
    }
}
DaffShippingRateFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffShippingRateFactory.ctorParameters = () => [];
/** @nocollapse */ DaffShippingRateFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffShippingRateFactory_Factory() { return new DaffShippingRateFactory(); }, token: DaffShippingRateFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctcmF0ZS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NoZWNrb3V0L3Rlc3RpbmcvIiwic291cmNlcyI6WyJzaGlwcGluZy9mYWN0b3JpZXMvc2hpcHBpbmctcmF0ZS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sb0JBQW9CLENBQUM7QUFFNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRTFELE1BQU0sT0FBTyxnQkFBZ0I7SUFBN0I7UUFDSSxZQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ25ELFVBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDakQsWUFBTyxHQUFHLFlBQVksQ0FBQztRQUN2QixTQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ2QsV0FBTSxHQUFHLFNBQVMsQ0FBQztRQUNuQix1QkFBa0IsR0FBRyxXQUFXLENBQUM7UUFDakMsaUJBQVksR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztDQUFBOzs7SUFQRyxtQ0FBbUQ7O0lBQ25ELGlDQUFpRDs7SUFDakQsbUNBQXVCOztJQUN2QixnQ0FBYzs7SUFDZCxrQ0FBbUI7O0lBQ25CLDhDQUFpQzs7SUFDakMsd0NBQXVCOztBQU0zQixNQUFNLE9BQU8sdUJBQXdCLFNBQVEsZ0JBQThCO0lBQ3ZFO1FBQ0ksS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDMUIsQ0FBQzs7O1lBTk4sVUFBVSxTQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTaGlwcGluZ1JhdGUgfSBmcm9tICdAZGFmZm9kaWwvY2hlY2tvdXQnO1xuaW1wb3J0ICogYXMgZmFrZXIgZnJvbSAnZmFrZXIvbG9jYWxlL2VuX1VTJztcblxuaW1wb3J0IHsgRGFmZk1vZGVsRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG5leHBvcnQgY2xhc3MgTW9ja1NoaXBwaW5nUmF0ZSBpbXBsZW1lbnRzIFNoaXBwaW5nUmF0ZSB7XG4gICAgcmF0ZV9pZCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSk7XG4gICAgcHJpY2UgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuICAgIGNhcnJpZXIgPSAnQmlyZHMgSW5jLic7XG4gICAgY29kZSA9ICdjb2RlJztcbiAgICBtZXRob2QgPSAnc3dhbGxvdyc7XG4gICAgbWV0aG9kX2Rlc2NyaXB0aW9uID0gJ2VmZmljaWVudCc7XG4gICAgbWV0aG9kX3RpdGxlID0gJ2xhZGVuJztcbn1cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmU2hpcHBpbmdSYXRlRmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8U2hpcHBpbmdSYXRlPntcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcihNb2NrU2hpcHBpbmdSYXRlKTtcbiAgICAgIH1cbn1cbiJdfQ==