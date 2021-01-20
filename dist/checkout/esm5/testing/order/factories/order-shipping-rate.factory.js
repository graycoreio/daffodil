/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
/**
 * @deprecated
 */
var /**
 * @deprecated
 */
MockOrderShippingRate = /** @class */ (function () {
    function MockOrderShippingRate() {
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
    return MockOrderShippingRate;
}());
/**
 * @deprecated
 */
export { MockOrderShippingRate };
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
var DaffOrderShippingRateFactory = /** @class */ (function (_super) {
    tslib_1.__extends(DaffOrderShippingRateFactory, _super);
    function DaffOrderShippingRateFactory() {
        return _super.call(this, MockOrderShippingRate) || this;
    }
    DaffOrderShippingRateFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffOrderShippingRateFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffOrderShippingRateFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffOrderShippingRateFactory_Factory() { return new DaffOrderShippingRateFactory(); }, token: DaffOrderShippingRateFactory, providedIn: "root" });
    return DaffOrderShippingRateFactory;
}(DaffModelFactory));
export { DaffOrderShippingRateFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc2hpcHBpbmctcmF0ZS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NoZWNrb3V0L3Rlc3RpbmcvIiwic291cmNlcyI6WyJvcmRlci9mYWN0b3JpZXMvb3JkZXItc2hpcHBpbmctcmF0ZS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7OztBQUsxRDs7OztJQUFBO1FBQ0UsWUFBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUNuRCxlQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ3RELGVBQVUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3hCLGVBQVUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3hCLFlBQU8sR0FBRyxZQUFZLENBQUM7UUFDdkIsa0JBQWEsR0FBRyxPQUFPLENBQUM7UUFDeEIsU0FBSSxHQUFHLE1BQU0sQ0FBQztRQUNkLFdBQU0sR0FBRyxTQUFTLENBQUM7UUFDbkIsdUJBQWtCLEdBQUcsV0FBVyxDQUFDO1FBQ2pDLFVBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDakQsa0JBQWEsR0FBRyxlQUFlLENBQUM7UUFDaEMsaUJBQVksR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUFELDRCQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7Ozs7Ozs7SUFaQyx3Q0FBbUQ7O0lBQ25ELDJDQUFzRDs7SUFDdEQsMkNBQXdCOztJQUN4QiwyQ0FBd0I7O0lBQ3hCLHdDQUF1Qjs7SUFDdkIsOENBQXdCOztJQUN4QixxQ0FBYzs7SUFDZCx1Q0FBbUI7O0lBQ25CLG1EQUFpQzs7SUFDakMsc0NBQWlEOztJQUNqRCw4Q0FBZ0M7O0lBQ2hDLDZDQUF1Qjs7Ozs7QUFNekI7SUFHa0Qsd0RBQXVDO0lBQ3ZGO2VBQ0Usa0JBQU0scUJBQXFCLENBQUM7SUFDOUIsQ0FBQzs7Z0JBTkYsVUFBVSxTQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7Ozs7dUNBN0JEO0NBa0NDLEFBUEQsQ0FHa0QsZ0JBQWdCLEdBSWpFO1NBSlksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmT3JkZXJTaGlwcGluZ1JhdGUgfSBmcm9tICdAZGFmZm9kaWwvY2hlY2tvdXQnO1xuaW1wb3J0ICogYXMgZmFrZXIgZnJvbSAnZmFrZXIvbG9jYWxlL2VuX1VTJztcbmltcG9ydCB7IERhZmZNb2RlbEZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvY29yZS90ZXN0aW5nJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY2xhc3MgTW9ja09yZGVyU2hpcHBpbmdSYXRlIGltcGxlbWVudHMgRGFmZk9yZGVyU2hpcHBpbmdSYXRlIHtcbiAgcmF0ZV9pZCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSk7XG4gIGFkZHJlc3NfaWQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuICBjcmVhdGVkX2F0ID0gbmV3IERhdGUoKTtcbiAgdXBkYXRlZF9hdCA9IG5ldyBEYXRlKCk7XG4gIGNhcnJpZXIgPSAnQmlyZHMgSW5jLic7XG4gIGNhcnJpZXJfdGl0bGUgPSAnbGFkZW4nO1xuICBjb2RlID0gJ2NvZGUnO1xuICBtZXRob2QgPSAnc3dhbGxvdyc7XG4gIG1ldGhvZF9kZXNjcmlwdGlvbiA9ICdlZmZpY2llbnQnO1xuICBwcmljZSA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSk7XG4gIGVycm9yX21lc3NhZ2UgPSAnZXJyb3IgbWVzc2FnZSc7XG4gIG1ldGhvZF90aXRsZSA9ICdsYWRlbic7XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmT3JkZXJTaGlwcGluZ1JhdGVGYWN0b3J5IGV4dGVuZHMgRGFmZk1vZGVsRmFjdG9yeTxEYWZmT3JkZXJTaGlwcGluZ1JhdGU+e1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKE1vY2tPcmRlclNoaXBwaW5nUmF0ZSk7XG4gIH1cbn1cbiJdfQ==