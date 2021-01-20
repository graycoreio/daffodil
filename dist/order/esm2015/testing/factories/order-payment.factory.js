/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
export class MockOrderPayment {
    constructor() {
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
}
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
export class DaffOrderPaymentFactory extends DaffModelFactory {
    constructor() {
        super(MockOrderPayment);
    }
}
DaffOrderPaymentFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffOrderPaymentFactory.ctorParameters = () => [];
/** @nocollapse */ DaffOrderPaymentFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffOrderPaymentFactory_Factory() { return new DaffOrderPaymentFactory(); }, token: DaffOrderPaymentFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcGF5bWVudC5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL29yZGVyL3Rlc3RpbmcvIiwic291cmNlcyI6WyJmYWN0b3JpZXMvb3JkZXItcGF5bWVudC5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sb0JBQW9CLENBQUM7QUFHNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRTFELE1BQU0sT0FBTyxnQkFBZ0I7SUFBN0I7UUFDSSxlQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ3RELGFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDcEQsZUFBVSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUMsZUFBVSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUMsV0FBTSxHQUFHLE1BQU0sQ0FBQztRQUNoQixZQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEUsYUFBUSxHQUFHLE9BQU8sQ0FBQztRQUNuQixpQkFBWSxHQUFHLE9BQU8sQ0FBQztRQUN2QixnQkFBVyxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0NBQUE7OztJQVZHLHNDQUFzRDs7SUFDdEQsb0NBQW9EOztJQUNwRCxzQ0FBMEM7O0lBQzFDLHNDQUEwQzs7SUFDMUMsa0NBQWdCOztJQUNoQixtQ0FBaUI7O0lBQ2pCLG9DQUFrRTs7SUFDbEUsb0NBQW1COztJQUNuQix3Q0FBdUI7O0lBQ3ZCLHVDQUFxQjs7QUFNekIsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGdCQUFrQztJQUMzRTtRQUNJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzFCLENBQUM7OztZQU5OLFVBQVUsU0FBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGZha2VyIGZyb20gJ2Zha2VyL2xvY2FsZS9lbl9VUyc7XG5cbmltcG9ydCB7IERhZmZPcmRlclBheW1lbnQgfSBmcm9tICdAZGFmZm9kaWwvb3JkZXInO1xuaW1wb3J0IHsgRGFmZk1vZGVsRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG5leHBvcnQgY2xhc3MgTW9ja09yZGVyUGF5bWVudCBpbXBsZW1lbnRzIERhZmZPcmRlclBheW1lbnQge1xuICAgIHBheW1lbnRfaWQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuICAgIG9yZGVyX2lkID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KTtcbiAgICBjcmVhdGVkX2F0ID0gZmFrZXIuZGF0ZS5wYXN0KCkudG9TdHJpbmcoKTtcbiAgICB1cGRhdGVkX2F0ID0gZmFrZXIuZGF0ZS5wYXN0KCkudG9TdHJpbmcoKTtcbiAgICBtZXRob2QgPSAnY2FyZCc7XG4gICAgY2NfdHlwZSA9ICd2aXNhJztcbiAgICBjY19sYXN0NCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMTAwMCwgbWF4OiA5OTk5fSkudG9TdHJpbmcoKTtcbiAgICBjY19vd25lciA9ICdvd25lcic7XG4gICAgY2NfZXhwX21vbnRoID0gJ21vbnRoJztcbiAgICBjY19leHBfeWVhciA9ICd5ZWFyJztcbn1cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmT3JkZXJQYXltZW50RmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8RGFmZk9yZGVyUGF5bWVudD57XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoTW9ja09yZGVyUGF5bWVudCk7XG4gICAgICB9XG59XG4iXX0=