/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
export class MockOrderCoupon {
    constructor() {
        this.code = faker.random.alphaNumeric(10);
    }
}
if (false) {
    /** @type {?} */
    MockOrderCoupon.prototype.code;
}
;
export class DaffOrderCouponFactory extends DaffModelFactory {
    constructor() {
        super(MockOrderCoupon);
    }
}
DaffOrderCouponFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffOrderCouponFactory.ctorParameters = () => [];
/** @nocollapse */ DaffOrderCouponFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffOrderCouponFactory_Factory() { return new DaffOrderCouponFactory(); }, token: DaffOrderCouponFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY291cG9uLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvb3JkZXIvdGVzdGluZy8iLCJzb3VyY2VzIjpbImZhY3Rvcmllcy9vcmRlci1jb3Vwb24uZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBRzVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUUxRCxNQUFNLE9BQU8sZUFBZTtJQUE1QjtRQUNFLFNBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDO0NBQUE7OztJQURDLCtCQUFxQzs7QUFDdEMsQ0FBQztBQU1GLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxnQkFBaUM7SUFDM0U7UUFDRSxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7O1lBTkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZmFrZXIgZnJvbSAnZmFrZXIvbG9jYWxlL2VuX1VTJztcblxuaW1wb3J0IHsgRGFmZk9yZGVyQ291cG9uIH0gZnJvbSAnQGRhZmZvZGlsL29yZGVyJztcbmltcG9ydCB7IERhZmZNb2RlbEZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvY29yZS90ZXN0aW5nJztcblxuZXhwb3J0IGNsYXNzIE1vY2tPcmRlckNvdXBvbiBpbXBsZW1lbnRzIERhZmZPcmRlckNvdXBvbiB7XG4gIGNvZGUgPSBmYWtlci5yYW5kb20uYWxwaGFOdW1lcmljKDEwKTtcbn07XG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk9yZGVyQ291cG9uRmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8RGFmZk9yZGVyQ291cG9uPntcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoTW9ja09yZGVyQ291cG9uKTtcbiAgfVxufVxuIl19