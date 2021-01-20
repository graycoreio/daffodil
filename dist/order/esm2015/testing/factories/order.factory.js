/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
export class MockOrder {
    constructor() {
        this.id = faker.random.number({ min: 1, max: 1000 });
        this.customer_id = faker.random.number({ min: 1, max: 1000 });
        this.created_at = faker.date.past().toString();
        this.updated_at = faker.date.past().toString();
        this.status = faker.random.word();
        this.totals = [];
        this.applied_codes = [];
        this.items = [];
        this.billing_addresses = [];
        this.shipping_addresses = [];
        this.shipments = [];
        this.payment = null;
        this.invoices = [];
        this.credits = [];
    }
}
if (false) {
    /** @type {?} */
    MockOrder.prototype.id;
    /** @type {?} */
    MockOrder.prototype.customer_id;
    /** @type {?} */
    MockOrder.prototype.created_at;
    /** @type {?} */
    MockOrder.prototype.updated_at;
    /** @type {?} */
    MockOrder.prototype.status;
    /** @type {?} */
    MockOrder.prototype.totals;
    /** @type {?} */
    MockOrder.prototype.applied_codes;
    /** @type {?} */
    MockOrder.prototype.items;
    /** @type {?} */
    MockOrder.prototype.billing_addresses;
    /** @type {?} */
    MockOrder.prototype.shipping_addresses;
    /** @type {?} */
    MockOrder.prototype.shipments;
    /** @type {?} */
    MockOrder.prototype.payment;
    /** @type {?} */
    MockOrder.prototype.invoices;
    /** @type {?} */
    MockOrder.prototype.credits;
}
;
export class DaffOrderFactory extends DaffModelFactory {
    constructor() {
        super(MockOrder);
    }
}
DaffOrderFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffOrderFactory.ctorParameters = () => [];
/** @nocollapse */ DaffOrderFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffOrderFactory_Factory() { return new DaffOrderFactory(); }, token: DaffOrderFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL29yZGVyLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxvQkFBb0IsQ0FBQztBQUc1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFMUQsTUFBTSxPQUFPLFNBQVM7SUFBdEI7UUFDRSxPQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQzlDLGdCQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ3ZELGVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFDLGVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFDLFdBQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzdCLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLHVCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUN4QixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxZQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQztDQUFBOzs7SUFkQyx1QkFBOEM7O0lBQzlDLGdDQUF1RDs7SUFDdkQsK0JBQTBDOztJQUMxQywrQkFBMEM7O0lBQzFDLDJCQUE2Qjs7SUFDN0IsMkJBQVk7O0lBQ1osa0NBQW1COztJQUNuQiwwQkFBVzs7SUFDWCxzQ0FBdUI7O0lBQ3ZCLHVDQUF3Qjs7SUFDeEIsOEJBQWU7O0lBQ2YsNEJBQWU7O0lBQ2YsNkJBQWM7O0lBQ2QsNEJBQWE7O0FBQ2QsQ0FBQztBQU1GLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxnQkFBMkI7SUFDL0Q7UUFDRSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkIsQ0FBQzs7O1lBTkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZmFrZXIgZnJvbSAnZmFrZXIvbG9jYWxlL2VuX1VTJztcblxuaW1wb3J0IHsgRGFmZk9yZGVyIH0gZnJvbSAnQGRhZmZvZGlsL29yZGVyJztcbmltcG9ydCB7IERhZmZNb2RlbEZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvY29yZS90ZXN0aW5nJztcblxuZXhwb3J0IGNsYXNzIE1vY2tPcmRlciBpbXBsZW1lbnRzIERhZmZPcmRlciB7XG4gIGlkID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KTtcbiAgY3VzdG9tZXJfaWQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuICBjcmVhdGVkX2F0ID0gZmFrZXIuZGF0ZS5wYXN0KCkudG9TdHJpbmcoKTtcbiAgdXBkYXRlZF9hdCA9IGZha2VyLmRhdGUucGFzdCgpLnRvU3RyaW5nKCk7XG4gIHN0YXR1cyA9IGZha2VyLnJhbmRvbS53b3JkKCk7XG4gIHRvdGFscyA9IFtdO1xuICBhcHBsaWVkX2NvZGVzID0gW107XG4gIGl0ZW1zID0gW107XG4gIGJpbGxpbmdfYWRkcmVzc2VzID0gW107XG4gIHNoaXBwaW5nX2FkZHJlc3NlcyA9IFtdO1xuICBzaGlwbWVudHMgPSBbXTtcbiAgcGF5bWVudCA9IG51bGw7XG4gIGludm9pY2VzID0gW107XG4gIGNyZWRpdHMgPSBbXTtcbn07XG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk9yZGVyRmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8RGFmZk9yZGVyPntcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoTW9ja09yZGVyKTtcbiAgfVxufVxuIl19