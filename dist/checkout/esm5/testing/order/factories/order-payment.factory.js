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
MockOrderPayment = /** @class */ (function () {
    function MockOrderPayment() {
        this.payment_id = faker.random.number({ min: 1, max: 1000 });
        this.quote_id = faker.random.number({ min: 1, max: 1000 });
        this.created_at = new Date();
        this.updated_at = new Date();
        this.method = 'card';
        this.cc_type = 'visa';
        this.cc_number_enc = faker.random.number({ min: 1000, max: 9999 }).toString();
        this.cc_last4 = faker.random.number({ min: 1000, max: 9999 }).toString();
        this.cc_cid_enc = faker.random.number({ min: 1, max: 1000 }).toString();
        this.cc_owner = 'owner';
        this.cc_exp_month = 'month';
        this.cc_exp_year = 'year';
        this.cc_ss_owner = 'owner';
        this.cc_ss_start_month = 'start month';
        this.cc_ss_start_year = 'start year';
        this.po_number = 'po';
        this.cc_ss_issue = 'issue';
    }
    return MockOrderPayment;
}());
/**
 * @deprecated
 */
export { MockOrderPayment };
if (false) {
    /** @type {?} */
    MockOrderPayment.prototype.payment_id;
    /** @type {?} */
    MockOrderPayment.prototype.quote_id;
    /** @type {?} */
    MockOrderPayment.prototype.created_at;
    /** @type {?} */
    MockOrderPayment.prototype.updated_at;
    /** @type {?} */
    MockOrderPayment.prototype.method;
    /** @type {?} */
    MockOrderPayment.prototype.cc_type;
    /** @type {?} */
    MockOrderPayment.prototype.cc_number_enc;
    /** @type {?} */
    MockOrderPayment.prototype.cc_last4;
    /** @type {?} */
    MockOrderPayment.prototype.cc_cid_enc;
    /** @type {?} */
    MockOrderPayment.prototype.cc_owner;
    /** @type {?} */
    MockOrderPayment.prototype.cc_exp_month;
    /** @type {?} */
    MockOrderPayment.prototype.cc_exp_year;
    /** @type {?} */
    MockOrderPayment.prototype.cc_ss_owner;
    /** @type {?} */
    MockOrderPayment.prototype.cc_ss_start_month;
    /** @type {?} */
    MockOrderPayment.prototype.cc_ss_start_year;
    /** @type {?} */
    MockOrderPayment.prototype.po_number;
    /** @type {?} */
    MockOrderPayment.prototype.cc_ss_issue;
}
/**
 * @deprecated
 */
var DaffOrderPaymentFactory = /** @class */ (function (_super) {
    tslib_1.__extends(DaffOrderPaymentFactory, _super);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcGF5bWVudC5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NoZWNrb3V0L3Rlc3RpbmcvIiwic291cmNlcyI6WyJvcmRlci9mYWN0b3JpZXMvb3JkZXItcGF5bWVudC5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBRTVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7OztBQUsxRDs7OztJQUFBO1FBQ0ksZUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUN0RCxhQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ3BELGVBQVUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3hCLGVBQVUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3hCLFdBQU0sR0FBRyxNQUFNLENBQUM7UUFDaEIsWUFBTyxHQUFHLE1BQU0sQ0FBQztRQUNqQixrQkFBYSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN2RSxhQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xFLGVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakUsYUFBUSxHQUFHLE9BQU8sQ0FBQztRQUNuQixpQkFBWSxHQUFHLE9BQU8sQ0FBQztRQUN2QixnQkFBVyxHQUFHLE1BQU0sQ0FBQztRQUNyQixnQkFBVyxHQUFHLE9BQU8sQ0FBQztRQUN0QixzQkFBaUIsR0FBRyxhQUFhLENBQUM7UUFDbEMscUJBQWdCLEdBQUcsWUFBWSxDQUFDO1FBQ2hDLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxPQUFPLENBQUM7SUFDMUIsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQzs7Ozs7OztJQWpCRyxzQ0FBc0Q7O0lBQ3RELG9DQUFvRDs7SUFDcEQsc0NBQXdCOztJQUN4QixzQ0FBd0I7O0lBQ3hCLGtDQUFnQjs7SUFDaEIsbUNBQWlCOztJQUNqQix5Q0FBdUU7O0lBQ3ZFLG9DQUFrRTs7SUFDbEUsc0NBQWlFOztJQUNqRSxvQ0FBbUI7O0lBQ25CLHdDQUF1Qjs7SUFDdkIsdUNBQXFCOztJQUNyQix1Q0FBc0I7O0lBQ3RCLDZDQUFrQzs7SUFDbEMsNENBQWdDOztJQUNoQyxxQ0FBaUI7O0lBQ2pCLHVDQUFzQjs7Ozs7QUFNMUI7SUFHNkMsbURBQWtDO0lBQzNFO2VBQ0ksa0JBQU0sZ0JBQWdCLENBQUM7SUFDekIsQ0FBQzs7Z0JBTk4sVUFBVSxTQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7Ozs7a0NBbkNEO0NBd0NDLEFBUEQsQ0FHNkMsZ0JBQWdCLEdBSTVEO1NBSlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmT3JkZXJQYXltZW50IH0gZnJvbSAnQGRhZmZvZGlsL2NoZWNrb3V0JztcbmltcG9ydCAqIGFzIGZha2VyIGZyb20gJ2Zha2VyL2xvY2FsZS9lbl9VUyc7XG5cbmltcG9ydCB7IERhZmZNb2RlbEZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvY29yZS90ZXN0aW5nJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY2xhc3MgTW9ja09yZGVyUGF5bWVudCBpbXBsZW1lbnRzIERhZmZPcmRlclBheW1lbnQge1xuICAgIHBheW1lbnRfaWQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuICAgIHF1b3RlX2lkID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KTtcbiAgICBjcmVhdGVkX2F0ID0gbmV3IERhdGUoKTtcbiAgICB1cGRhdGVkX2F0ID0gbmV3IERhdGUoKTtcbiAgICBtZXRob2QgPSAnY2FyZCc7XG4gICAgY2NfdHlwZSA9ICd2aXNhJztcbiAgICBjY19udW1iZXJfZW5jID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxMDAwLCBtYXg6IDk5OTl9KS50b1N0cmluZygpO1xuICAgIGNjX2xhc3Q0ID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxMDAwLCBtYXg6IDk5OTl9KS50b1N0cmluZygpO1xuICAgIGNjX2NpZF9lbmMgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pLnRvU3RyaW5nKCk7XG4gICAgY2Nfb3duZXIgPSAnb3duZXInO1xuICAgIGNjX2V4cF9tb250aCA9ICdtb250aCc7XG4gICAgY2NfZXhwX3llYXIgPSAneWVhcic7XG4gICAgY2Nfc3Nfb3duZXIgPSAnb3duZXInO1xuICAgIGNjX3NzX3N0YXJ0X21vbnRoID0gJ3N0YXJ0IG1vbnRoJztcbiAgICBjY19zc19zdGFydF95ZWFyID0gJ3N0YXJ0IHllYXInO1xuICAgIHBvX251bWJlciA9ICdwbyc7XG4gICAgY2Nfc3NfaXNzdWUgPSAnaXNzdWUnO1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk9yZGVyUGF5bWVudEZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PERhZmZPcmRlclBheW1lbnQ+e1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKE1vY2tPcmRlclBheW1lbnQpO1xuICAgICAgfVxufVxuIl19