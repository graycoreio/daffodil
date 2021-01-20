/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
export class MockOrderInvoice {
    constructor() {
        this.items = [];
        this.totals = [];
        this.billing_address = null;
        this.shipping_address = null;
        this.payment = null;
        this.shipping_method = null;
    }
}
if (false) {
    /** @type {?} */
    MockOrderInvoice.prototype.items;
    /** @type {?} */
    MockOrderInvoice.prototype.totals;
    /** @type {?} */
    MockOrderInvoice.prototype.billing_address;
    /** @type {?} */
    MockOrderInvoice.prototype.shipping_address;
    /** @type {?} */
    MockOrderInvoice.prototype.payment;
    /** @type {?} */
    MockOrderInvoice.prototype.shipping_method;
}
;
export class DaffOrderInvoiceFactory extends DaffModelFactory {
    constructor() {
        super(MockOrderInvoice);
    }
}
DaffOrderInvoiceFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffOrderInvoiceFactory.ctorParameters = () => [];
/** @nocollapse */ DaffOrderInvoiceFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffOrderInvoiceFactory_Factory() { return new DaffOrderInvoiceFactory(); }, token: DaffOrderInvoiceFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItaW52b2ljZS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL29yZGVyL3Rlc3RpbmcvIiwic291cmNlcyI6WyJmYWN0b3JpZXMvb3JkZXItaW52b2ljZS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUUxRCxNQUFNLE9BQU8sZ0JBQWdCO0lBQTdCO1FBQ0UsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixvQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QixxQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDeEIsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLG9CQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7Q0FBQTs7O0lBTkMsaUNBQVc7O0lBQ1gsa0NBQVk7O0lBQ1osMkNBQXVCOztJQUN2Qiw0Q0FBd0I7O0lBQ3hCLG1DQUFlOztJQUNmLDJDQUF1Qjs7QUFDeEIsQ0FBQztBQU1GLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxnQkFBa0M7SUFDN0U7UUFDRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7WUFORixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhZmZPcmRlckludm9pY2UgfSBmcm9tICdAZGFmZm9kaWwvb3JkZXInO1xuaW1wb3J0IHsgRGFmZk1vZGVsRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG5leHBvcnQgY2xhc3MgTW9ja09yZGVySW52b2ljZSBpbXBsZW1lbnRzIERhZmZPcmRlckludm9pY2Uge1xuICBpdGVtcyA9IFtdO1xuICB0b3RhbHMgPSBbXTtcbiAgYmlsbGluZ19hZGRyZXNzID0gbnVsbDtcbiAgc2hpcHBpbmdfYWRkcmVzcyA9IG51bGw7XG4gIHBheW1lbnQgPSBudWxsO1xuICBzaGlwcGluZ19tZXRob2QgPSBudWxsO1xufTtcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmT3JkZXJJbnZvaWNlRmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8RGFmZk9yZGVySW52b2ljZT4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihNb2NrT3JkZXJJbnZvaWNlKTtcbiAgfVxufVxuIl19