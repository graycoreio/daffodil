var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
var MockOrderPayment = /** @class */ (function () {
    function MockOrderPayment() {
        this.payment_id = faker.random.number({ min: 1, max: 1000 });
        this.order_id = faker.random.number({ min: 1, max: 1000 });
        this.created_at = faker.date.past().toString();
        this.updated_at = faker.date.past().toString();
        this.method = 'card';
        this.cc_type = 'visa';
        this.cc_last4 = faker.random.number({ min: 1000, max: 9999 }).toString();
        this.cc_owner = 'owner';
        this.cc_exp_month = 'month';
        this.cc_exp_year = 'year';
    }
    return MockOrderPayment;
}());
export { MockOrderPayment };
if (false) {
    /** @type {?} */
    MockOrderPayment.prototype.payment_id;
    /** @type {?} */
    MockOrderPayment.prototype.order_id;
    /** @type {?} */
    MockOrderPayment.prototype.created_at;
    /** @type {?} */
    MockOrderPayment.prototype.updated_at;
    /** @type {?} */
    MockOrderPayment.prototype.method;
    /** @type {?} */
    MockOrderPayment.prototype.cc_type;
    /** @type {?} */
    MockOrderPayment.prototype.cc_last4;
    /** @type {?} */
    MockOrderPayment.prototype.cc_owner;
    /** @type {?} */
    MockOrderPayment.prototype.cc_exp_month;
    /** @type {?} */
    MockOrderPayment.prototype.cc_exp_year;
}
var DaffOrderPaymentFactory = /** @class */ (function (_super) {
    __extends(DaffOrderPaymentFactory, _super);
    function DaffOrderPaymentFactory() {
        return _super.call(this, MockOrderPayment) || this;
    }
    DaffOrderPaymentFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffOrderPaymentFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffOrderPaymentFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffOrderPaymentFactory_Factory() { return new DaffOrderPaymentFactory(); }, token: DaffOrderPaymentFactory, providedIn: "root" });
    return DaffOrderPaymentFactory;
}(DaffModelFactory));
export { DaffOrderPaymentFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcGF5bWVudC5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL29yZGVyL3Rlc3RpbmcvIiwic291cmNlcyI6WyJmYWN0b3JpZXMvb3JkZXItcGF5bWVudC5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBRzVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUUxRDtJQUFBO1FBQ0ksZUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUN0RCxhQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ3BELGVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFDLGVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFDLFdBQU0sR0FBRyxNQUFNLENBQUM7UUFDaEIsWUFBTyxHQUFHLE1BQU0sQ0FBQztRQUNqQixhQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xFLGFBQVEsR0FBRyxPQUFPLENBQUM7UUFDbkIsaUJBQVksR0FBRyxPQUFPLENBQUM7UUFDdkIsZ0JBQVcsR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7Ozs7SUFWRyxzQ0FBc0Q7O0lBQ3RELG9DQUFvRDs7SUFDcEQsc0NBQTBDOztJQUMxQyxzQ0FBMEM7O0lBQzFDLGtDQUFnQjs7SUFDaEIsbUNBQWlCOztJQUNqQixvQ0FBa0U7O0lBQ2xFLG9DQUFtQjs7SUFDbkIsd0NBQXVCOztJQUN2Qix1Q0FBcUI7O0FBR3pCO0lBRzZDLDJDQUFrQztJQUMzRTtlQUNJLGtCQUFNLGdCQUFnQixDQUFDO0lBQ3pCLENBQUM7O2dCQU5OLFVBQVUsU0FBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7Ozs7O2tDQXJCRDtDQTBCQyxBQVBELENBRzZDLGdCQUFnQixHQUk1RDtTQUpZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGZha2VyIGZyb20gJ2Zha2VyL2xvY2FsZS9lbl9VUyc7XG5cbmltcG9ydCB7IERhZmZPcmRlclBheW1lbnQgfSBmcm9tICdAZGFmZm9kaWwvb3JkZXInO1xuaW1wb3J0IHsgRGFmZk1vZGVsRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG5leHBvcnQgY2xhc3MgTW9ja09yZGVyUGF5bWVudCBpbXBsZW1lbnRzIERhZmZPcmRlclBheW1lbnQge1xuICAgIHBheW1lbnRfaWQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuICAgIG9yZGVyX2lkID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KTtcbiAgICBjcmVhdGVkX2F0ID0gZmFrZXIuZGF0ZS5wYXN0KCkudG9TdHJpbmcoKTtcbiAgICB1cGRhdGVkX2F0ID0gZmFrZXIuZGF0ZS5wYXN0KCkudG9TdHJpbmcoKTtcbiAgICBtZXRob2QgPSAnY2FyZCc7XG4gICAgY2NfdHlwZSA9ICd2aXNhJztcbiAgICBjY19sYXN0NCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMTAwMCwgbWF4OiA5OTk5fSkudG9TdHJpbmcoKTtcbiAgICBjY19vd25lciA9ICdvd25lcic7XG4gICAgY2NfZXhwX21vbnRoID0gJ21vbnRoJztcbiAgICBjY19leHBfeWVhciA9ICd5ZWFyJztcbn1cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmT3JkZXJQYXltZW50RmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8RGFmZk9yZGVyUGF5bWVudD57XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoTW9ja09yZGVyUGF5bWVudCk7XG4gICAgICB9XG59XG4iXX0=