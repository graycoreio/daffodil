/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
export class MockCartShippingRate {
    constructor() {
        this.id = faker.random.number({ min: 1, max: 1000 });
        this.carrier = 'Birds Inc.';
        this.carrier_title = 'laden';
        this.method_code = faker.random.word();
        this.method_title = 'swallow';
        this.method_description = 'efficient';
        this.price = faker.random.number({ min: 1, max: 1500 });
    }
}
if (false) {
    /** @type {?} */
    MockCartShippingRate.prototype.id;
    /** @type {?} */
    MockCartShippingRate.prototype.carrier;
    /** @type {?} */
    MockCartShippingRate.prototype.carrier_title;
    /** @type {?} */
    MockCartShippingRate.prototype.method_code;
    /** @type {?} */
    MockCartShippingRate.prototype.method_title;
    /** @type {?} */
    MockCartShippingRate.prototype.method_description;
    /** @type {?} */
    MockCartShippingRate.prototype.price;
}
export class DaffCartShippingRateFactory extends DaffModelFactory {
    constructor() {
        super(MockCartShippingRate);
    }
}
DaffCartShippingRateFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffCartShippingRateFactory.ctorParameters = () => [];
/** @nocollapse */ DaffCartShippingRateFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffCartShippingRateFactory_Factory() { return new DaffCartShippingRateFactory(); }, token: DaffCartShippingRateFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGlwcGluZy1yYXRlLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL2NhcnQtc2hpcHBpbmctcmF0ZS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sb0JBQW9CLENBQUM7QUFHNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRTFELE1BQU0sT0FBTyxvQkFBb0I7SUFBakM7UUFDSSxPQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQzlDLFlBQU8sR0FBRyxZQUFZLENBQUM7UUFDdkIsa0JBQWEsR0FBRyxPQUFPLENBQUM7UUFDeEIsZ0JBQVcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xDLGlCQUFZLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLHVCQUFrQixHQUFHLFdBQVcsQ0FBQztRQUNqQyxVQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Q0FBQTs7O0lBUEcsa0NBQThDOztJQUM5Qyx1Q0FBdUI7O0lBQ3ZCLDZDQUF3Qjs7SUFDeEIsMkNBQWtDOztJQUNsQyw0Q0FBeUI7O0lBQ3pCLGtEQUFpQzs7SUFDakMscUNBQWlEOztBQU1yRCxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsZ0JBQXNDO0lBQ25GO1FBQ0ksS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBTk4sVUFBVSxTQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZmFrZXIgZnJvbSAnZmFrZXIvbG9jYWxlL2VuX1VTJztcblxuaW1wb3J0IHsgRGFmZkNhcnRTaGlwcGluZ1JhdGUgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5cbmV4cG9ydCBjbGFzcyBNb2NrQ2FydFNoaXBwaW5nUmF0ZSBpbXBsZW1lbnRzIERhZmZDYXJ0U2hpcHBpbmdSYXRlIHtcbiAgICBpZCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSk7XG4gICAgY2FycmllciA9ICdCaXJkcyBJbmMuJztcbiAgICBjYXJyaWVyX3RpdGxlID0gJ2xhZGVuJztcbiAgICBtZXRob2RfY29kZSA9IGZha2VyLnJhbmRvbS53b3JkKCk7XG4gICAgbWV0aG9kX3RpdGxlID0gJ3N3YWxsb3cnO1xuICAgIG1ldGhvZF9kZXNjcmlwdGlvbiA9ICdlZmZpY2llbnQnO1xuICAgIHByaWNlID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDE1MDB9KTtcbn1cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmQ2FydFNoaXBwaW5nUmF0ZUZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PERhZmZDYXJ0U2hpcHBpbmdSYXRlPntcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcihNb2NrQ2FydFNoaXBwaW5nUmF0ZSk7XG4gICAgICB9XG59XG4iXX0=