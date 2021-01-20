/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
export class MockDaffCartCoupon {
    constructor() {
        this.coupon_id = faker.random.number({ min: 1, max: 1000 });
        this.code = faker.random.alphaNumeric(20);
        this.description = faker.random.words(5);
    }
}
if (false) {
    /** @type {?} */
    MockDaffCartCoupon.prototype.coupon_id;
    /** @type {?} */
    MockDaffCartCoupon.prototype.code;
    /** @type {?} */
    MockDaffCartCoupon.prototype.description;
}
;
export class DaffCartCouponFactory extends DaffModelFactory {
    constructor() {
        super(MockDaffCartCoupon);
    }
}
DaffCartCouponFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffCartCouponFactory.ctorParameters = () => [];
/** @nocollapse */ DaffCartCouponFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffCartCouponFactory_Factory() { return new DaffCartCouponFactory(); }, token: DaffCartCouponFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb3Vwb24uZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L3Rlc3RpbmcvIiwic291cmNlcyI6WyJmYWN0b3JpZXMvY2FydC1jb3Vwb24uZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBRzVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUUxRCxNQUFNLE9BQU8sa0JBQWtCO0lBQS9CO1FBQ0UsY0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUNyRCxTQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckMsZ0JBQVcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQUE7OztJQUhDLHVDQUFxRDs7SUFDckQsa0NBQXFDOztJQUNyQyx5Q0FBb0M7O0FBQ3JDLENBQUM7QUFLRixNQUFNLE9BQU8scUJBQXNCLFNBQVEsZ0JBQWdDO0lBQ3pFO1FBQ0UsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDNUIsQ0FBQzs7O1lBTkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZmFrZXIgZnJvbSAnZmFrZXIvbG9jYWxlL2VuX1VTJztcblxuaW1wb3J0IHsgRGFmZkNhcnRDb3Vwb24gfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5cbmV4cG9ydCBjbGFzcyBNb2NrRGFmZkNhcnRDb3Vwb24gaW1wbGVtZW50cyBEYWZmQ2FydENvdXBvbiB7XG4gIGNvdXBvbl9pZCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSk7XG4gIGNvZGUgPSBmYWtlci5yYW5kb20uYWxwaGFOdW1lcmljKDIwKTtcbiAgZGVzY3JpcHRpb24gPSBmYWtlci5yYW5kb20ud29yZHMoNSk7XG59O1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmQ2FydENvdXBvbkZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PERhZmZDYXJ0Q291cG9uPiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKE1vY2tEYWZmQ2FydENvdXBvbik7XG4gIH1cbn1cbiJdfQ==