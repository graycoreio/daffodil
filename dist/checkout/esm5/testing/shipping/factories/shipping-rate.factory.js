/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
var MockShippingRate = /** @class */ (function () {
    function MockShippingRate() {
        this.rate_id = faker.random.number({ min: 1, max: 1000 });
        this.price = faker.random.number({ min: 1, max: 1000 });
        this.carrier = 'Birds Inc.';
        this.code = 'code';
        this.method = 'swallow';
        this.method_description = 'efficient';
        this.method_title = 'laden';
    }
    return MockShippingRate;
}());
export { MockShippingRate };
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
var DaffShippingRateFactory = /** @class */ (function (_super) {
    tslib_1.__extends(DaffShippingRateFactory, _super);
    function DaffShippingRateFactory() {
        return _super.call(this, MockShippingRate) || this;
    }
    DaffShippingRateFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffShippingRateFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffShippingRateFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffShippingRateFactory_Factory() { return new DaffShippingRateFactory(); }, token: DaffShippingRateFactory, providedIn: "root" });
    return DaffShippingRateFactory;
}(DaffModelFactory));
export { DaffShippingRateFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctcmF0ZS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NoZWNrb3V0L3Rlc3RpbmcvIiwic291cmNlcyI6WyJzaGlwcGluZy9mYWN0b3JpZXMvc2hpcHBpbmctcmF0ZS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBRTVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUUxRDtJQUFBO1FBQ0ksWUFBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUNuRCxVQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ2pELFlBQU8sR0FBRyxZQUFZLENBQUM7UUFDdkIsU0FBSSxHQUFHLE1BQU0sQ0FBQztRQUNkLFdBQU0sR0FBRyxTQUFTLENBQUM7UUFDbkIsdUJBQWtCLEdBQUcsV0FBVyxDQUFDO1FBQ2pDLGlCQUFZLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFSRCxJQVFDOzs7O0lBUEcsbUNBQW1EOztJQUNuRCxpQ0FBaUQ7O0lBQ2pELG1DQUF1Qjs7SUFDdkIsZ0NBQWM7O0lBQ2Qsa0NBQW1COztJQUNuQiw4Q0FBaUM7O0lBQ2pDLHdDQUF1Qjs7QUFHM0I7SUFHNkMsbURBQThCO0lBQ3ZFO2VBQ0ksa0JBQU0sZ0JBQWdCLENBQUM7SUFDekIsQ0FBQzs7Z0JBTk4sVUFBVSxTQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7Ozs7a0NBbkJEO0NBd0JDLEFBUEQsQ0FHNkMsZ0JBQWdCLEdBSTVEO1NBSlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTaGlwcGluZ1JhdGUgfSBmcm9tICdAZGFmZm9kaWwvY2hlY2tvdXQnO1xuaW1wb3J0ICogYXMgZmFrZXIgZnJvbSAnZmFrZXIvbG9jYWxlL2VuX1VTJztcblxuaW1wb3J0IHsgRGFmZk1vZGVsRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG5leHBvcnQgY2xhc3MgTW9ja1NoaXBwaW5nUmF0ZSBpbXBsZW1lbnRzIFNoaXBwaW5nUmF0ZSB7XG4gICAgcmF0ZV9pZCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSk7XG4gICAgcHJpY2UgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuICAgIGNhcnJpZXIgPSAnQmlyZHMgSW5jLic7XG4gICAgY29kZSA9ICdjb2RlJztcbiAgICBtZXRob2QgPSAnc3dhbGxvdyc7XG4gICAgbWV0aG9kX2Rlc2NyaXB0aW9uID0gJ2VmZmljaWVudCc7XG4gICAgbWV0aG9kX3RpdGxlID0gJ2xhZGVuJztcbn1cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmU2hpcHBpbmdSYXRlRmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8U2hpcHBpbmdSYXRlPntcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcihNb2NrU2hpcHBpbmdSYXRlKTtcbiAgICAgIH1cbn1cbiJdfQ==