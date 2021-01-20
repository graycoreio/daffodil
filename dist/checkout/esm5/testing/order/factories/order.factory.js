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
MockOrder = /** @class */ (function () {
    function MockOrder() {
        this.id = faker.random.number({ min: 1, max: 1000 });
        this.created_at = new Date();
        this.updated_at = new Date();
        this.store_to_base_rate = faker.random.number({ min: 1, max: 1000 });
        this.grand_total = faker.random.number({ min: 1, max: 1000 });
        this.checkout_method = 'card';
        this.customer_id = faker.random.number({ min: 1, max: 1000 });
        this.coupon_code = faker.random.number({ min: 1, max: 100000 }).toString();
        this.subtotal = faker.random.number({ min: 1, max: 1000 });
        this.subtotal_with_discount = faker.random.number({ min: 1, max: 1000 });
        this.items = [];
        this.addresses = [];
        this.payment = null;
    }
    return MockOrder;
}());
/**
 * @deprecated
 */
export { MockOrder };
if (false) {
    /** @type {?} */
    MockOrder.prototype.id;
    /** @type {?} */
    MockOrder.prototype.created_at;
    /** @type {?} */
    MockOrder.prototype.updated_at;
    /** @type {?} */
    MockOrder.prototype.store_to_base_rate;
    /** @type {?} */
    MockOrder.prototype.grand_total;
    /** @type {?} */
    MockOrder.prototype.checkout_method;
    /** @type {?} */
    MockOrder.prototype.customer_id;
    /** @type {?} */
    MockOrder.prototype.coupon_code;
    /** @type {?} */
    MockOrder.prototype.subtotal;
    /** @type {?} */
    MockOrder.prototype.subtotal_with_discount;
    /** @type {?} */
    MockOrder.prototype.items;
    /** @type {?} */
    MockOrder.prototype.addresses;
    /** @type {?} */
    MockOrder.prototype.payment;
}
;
/**
 * @deprecated
 */
var DaffOrderFactory = /** @class */ (function (_super) {
    tslib_1.__extends(DaffOrderFactory, _super);
    function DaffOrderFactory() {
        return _super.call(this, MockOrder) || this;
    }
    DaffOrderFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffOrderFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffOrderFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffOrderFactory_Factory() { return new DaffOrderFactory(); }, token: DaffOrderFactory, providedIn: "root" });
    return DaffOrderFactory;
}(DaffModelFactory));
export { DaffOrderFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jaGVja291dC90ZXN0aW5nLyIsInNvdXJjZXMiOlsib3JkZXIvZmFjdG9yaWVzL29yZGVyLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sb0JBQW9CLENBQUM7QUFHNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBSzFEOzs7O0lBQUE7UUFDRSxPQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQzlDLGVBQVUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3hCLGVBQVUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3hCLHVCQUFrQixHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUM5RCxnQkFBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUN2RCxvQkFBZSxHQUFHLE1BQU0sQ0FBQztRQUN6QixnQkFBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUN2RCxnQkFBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwRSxhQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ3BELDJCQUFzQixHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUNsRSxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLFlBQU8sR0FBRyxJQUFJLENBQUM7SUFDakIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7Ozs7Ozs7SUFiQyx1QkFBOEM7O0lBQzlDLCtCQUF3Qjs7SUFDeEIsK0JBQXdCOztJQUN4Qix1Q0FBOEQ7O0lBQzlELGdDQUF1RDs7SUFDdkQsb0NBQXlCOztJQUN6QixnQ0FBdUQ7O0lBQ3ZELGdDQUFvRTs7SUFDcEUsNkJBQW9EOztJQUNwRCwyQ0FBa0U7O0lBQ2xFLDBCQUFXOztJQUNYLDhCQUFlOztJQUNmLDRCQUFlOztBQUNoQixDQUFDOzs7O0FBTUY7SUFHc0MsNENBQTJCO0lBQy9EO2VBQ0Usa0JBQU0sU0FBUyxDQUFDO0lBQ2xCLENBQUM7O2dCQU5GLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7OzJCQS9CRDtDQW9DQyxBQVBELENBR3NDLGdCQUFnQixHQUlyRDtTQUpZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGZha2VyIGZyb20gJ2Zha2VyL2xvY2FsZS9lbl9VUyc7XG5cbmltcG9ydCB7IERhZmZPcmRlciB9IGZyb20gJ0BkYWZmb2RpbC9jaGVja291dCc7XG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNsYXNzIE1vY2tPcmRlciBpbXBsZW1lbnRzIERhZmZPcmRlciB7XG4gIGlkID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KTtcbiAgY3JlYXRlZF9hdCA9IG5ldyBEYXRlKCk7XG4gIHVwZGF0ZWRfYXQgPSBuZXcgRGF0ZSgpO1xuICBzdG9yZV90b19iYXNlX3JhdGUgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuICBncmFuZF90b3RhbCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSk7XG4gIGNoZWNrb3V0X21ldGhvZCA9ICdjYXJkJztcbiAgY3VzdG9tZXJfaWQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuICBjb3Vwb25fY29kZSA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwMDB9KS50b1N0cmluZygpO1xuICBzdWJ0b3RhbCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSk7XG4gIHN1YnRvdGFsX3dpdGhfZGlzY291bnQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuICBpdGVtcyA9IFtdO1xuICBhZGRyZXNzZXMgPSBbXTtcbiAgcGF5bWVudCA9IG51bGw7XG59O1xuXG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk9yZGVyRmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8RGFmZk9yZGVyPntcbiAgY29uc3RydWN0b3IoKXtcbiAgICBzdXBlcihNb2NrT3JkZXIpO1xuICB9XG59XG4iXX0=