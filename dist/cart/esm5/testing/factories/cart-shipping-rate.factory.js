/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
var MockCartShippingRate = /** @class */ (function () {
    function MockCartShippingRate() {
        this.id = faker.random.number({ min: 1, max: 1000 });
        this.carrier = 'Birds Inc.';
        this.carrier_title = 'laden';
        this.method_code = faker.random.word();
        this.method_title = 'swallow';
        this.method_description = 'efficient';
        this.price = faker.random.number({ min: 1, max: 1500 });
    }
    return MockCartShippingRate;
}());
export { MockCartShippingRate };
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
var DaffCartShippingRateFactory = /** @class */ (function (_super) {
    tslib_1.__extends(DaffCartShippingRateFactory, _super);
    function DaffCartShippingRateFactory() {
        return _super.call(this, MockCartShippingRate) || this;
    }
    DaffCartShippingRateFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffCartShippingRateFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffCartShippingRateFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffCartShippingRateFactory_Factory() { return new DaffCartShippingRateFactory(); }, token: DaffCartShippingRateFactory, providedIn: "root" });
    return DaffCartShippingRateFactory;
}(DaffModelFactory));
export { DaffCartShippingRateFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGlwcGluZy1yYXRlLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL2NhcnQtc2hpcHBpbmctcmF0ZS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBRzVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUUxRDtJQUFBO1FBQ0ksT0FBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUM5QyxZQUFPLEdBQUcsWUFBWSxDQUFDO1FBQ3ZCLGtCQUFhLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLGdCQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsQyxpQkFBWSxHQUFHLFNBQVMsQ0FBQztRQUN6Qix1QkFBa0IsR0FBRyxXQUFXLENBQUM7UUFDakMsVUFBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQUQsMkJBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQzs7OztJQVBHLGtDQUE4Qzs7SUFDOUMsdUNBQXVCOztJQUN2Qiw2Q0FBd0I7O0lBQ3hCLDJDQUFrQzs7SUFDbEMsNENBQXlCOztJQUN6QixrREFBaUM7O0lBQ2pDLHFDQUFpRDs7QUFHckQ7SUFHaUQsdURBQXNDO0lBQ25GO2VBQ0ksa0JBQU0sb0JBQW9CLENBQUM7SUFDN0IsQ0FBQzs7Z0JBTk4sVUFBVSxTQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7Ozs7c0NBbEJEO0NBdUJDLEFBUEQsQ0FHaUQsZ0JBQWdCLEdBSWhFO1NBSlksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZmFrZXIgZnJvbSAnZmFrZXIvbG9jYWxlL2VuX1VTJztcblxuaW1wb3J0IHsgRGFmZkNhcnRTaGlwcGluZ1JhdGUgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5cbmV4cG9ydCBjbGFzcyBNb2NrQ2FydFNoaXBwaW5nUmF0ZSBpbXBsZW1lbnRzIERhZmZDYXJ0U2hpcHBpbmdSYXRlIHtcbiAgICBpZCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSk7XG4gICAgY2FycmllciA9ICdCaXJkcyBJbmMuJztcbiAgICBjYXJyaWVyX3RpdGxlID0gJ2xhZGVuJztcbiAgICBtZXRob2RfY29kZSA9IGZha2VyLnJhbmRvbS53b3JkKCk7XG4gICAgbWV0aG9kX3RpdGxlID0gJ3N3YWxsb3cnO1xuICAgIG1ldGhvZF9kZXNjcmlwdGlvbiA9ICdlZmZpY2llbnQnO1xuICAgIHByaWNlID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDE1MDB9KTtcbn1cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmQ2FydFNoaXBwaW5nUmF0ZUZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PERhZmZDYXJ0U2hpcHBpbmdSYXRlPntcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcihNb2NrQ2FydFNoaXBwaW5nUmF0ZSk7XG4gICAgICB9XG59XG4iXX0=