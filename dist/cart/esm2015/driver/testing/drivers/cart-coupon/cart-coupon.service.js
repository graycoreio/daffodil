/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DaffCartFactory, DaffCartCouponFactory } from '@daffodil/cart/testing';
import * as i0 from "@angular/core";
import * as i1 from "@daffodil/cart/testing";
export class DaffTestingCartCouponService {
    /**
     * @param {?} couponFactory
     * @param {?} cartFactory
     */
    constructor(couponFactory, cartFactory) {
        this.couponFactory = couponFactory;
        this.cartFactory = cartFactory;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    list(cartId) {
        return of(this.couponFactory.createMany(3));
    }
    /**
     * @param {?} cartId
     * @param {?} coupon
     * @return {?}
     */
    apply(cartId, coupon) {
        return of(this.cartFactory.create());
    }
    /**
     * @param {?} cartId
     * @param {?} coupon
     * @return {?}
     */
    remove(cartId, coupon) {
        return of(this.cartFactory.create());
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    removeAll(cartId) {
        return of(this.cartFactory.create());
    }
}
DaffTestingCartCouponService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffTestingCartCouponService.ctorParameters = () => [
    { type: DaffCartCouponFactory },
    { type: DaffCartFactory }
];
/** @nocollapse */ DaffTestingCartCouponService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingCartCouponService_Factory() { return new DaffTestingCartCouponService(i0.ɵɵinject(i1.DaffCartCouponFactory), i0.ɵɵinject(i1.DaffCartFactory)); }, token: DaffTestingCartCouponService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingCartCouponService.prototype.couponFactory;
    /**
     * @type {?}
     * @private
     */
    DaffTestingCartCouponService.prototype.cartFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb3Vwb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZHJpdmVycy9jYXJ0LWNvdXBvbi9jYXJ0LWNvdXBvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFPdEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFLaEYsTUFBTSxPQUFPLDRCQUE0Qjs7Ozs7SUFDdkMsWUFDVSxhQUFvQyxFQUNwQyxXQUE0QjtRQUQ1QixrQkFBYSxHQUFiLGFBQWEsQ0FBdUI7UUFDcEMsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO0lBQ25DLENBQUM7Ozs7O0lBRUosSUFBSSxDQUFDLE1BQXNCO1FBQ3pCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDN0MsQ0FBQzs7Ozs7O0lBRUQsS0FBSyxDQUFDLE1BQXNCLEVBQUUsTUFBc0I7UUFDbEQsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxNQUFzQixFQUFFLE1BQXNCO1FBQ25ELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxNQUFzQjtRQUM5QixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7O1lBdkJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUp5QixxQkFBcUI7WUFBdEMsZUFBZTs7Ozs7Ozs7SUFPcEIscURBQTRDOzs7OztJQUM1QyxtREFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydCwgRGFmZkNhcnRDb3Vwb24gfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQge1xuICBEYWZmQ2FydENvdXBvblNlcnZpY2VJbnRlcmZhY2UsXG59IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlcic7XG5cbmltcG9ydCB7IERhZmZDYXJ0RmFjdG9yeSwgRGFmZkNhcnRDb3Vwb25GYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQvdGVzdGluZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZUZXN0aW5nQ2FydENvdXBvblNlcnZpY2UgaW1wbGVtZW50cyBEYWZmQ2FydENvdXBvblNlcnZpY2VJbnRlcmZhY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvdXBvbkZhY3Rvcnk6IERhZmZDYXJ0Q291cG9uRmFjdG9yeSxcbiAgICBwcml2YXRlIGNhcnRGYWN0b3J5OiBEYWZmQ2FydEZhY3RvcnlcbiAgKSB7fVxuXG4gIGxpc3QoY2FydElkOiBEYWZmQ2FydFsnaWQnXSk6IE9ic2VydmFibGU8RGFmZkNhcnRDb3Vwb25bXT4ge1xuICAgIHJldHVybiBvZih0aGlzLmNvdXBvbkZhY3RvcnkuY3JlYXRlTWFueSgzKSlcbiAgfVxuXG4gIGFwcGx5KGNhcnRJZDogRGFmZkNhcnRbJ2lkJ10sIGNvdXBvbjogRGFmZkNhcnRDb3Vwb24pOiBPYnNlcnZhYmxlPFBhcnRpYWw8RGFmZkNhcnQ+PiB7XG4gICAgcmV0dXJuIG9mKHRoaXMuY2FydEZhY3RvcnkuY3JlYXRlKCkpO1xuICB9XG5cbiAgcmVtb3ZlKGNhcnRJZDogRGFmZkNhcnRbJ2lkJ10sIGNvdXBvbjogRGFmZkNhcnRDb3Vwb24pOiBPYnNlcnZhYmxlPFBhcnRpYWw8RGFmZkNhcnQ+PiB7XG4gICAgcmV0dXJuIG9mKHRoaXMuY2FydEZhY3RvcnkuY3JlYXRlKCkpO1xuICB9XG5cbiAgcmVtb3ZlQWxsKGNhcnRJZDogRGFmZkNhcnRbJ2lkJ10pOiBPYnNlcnZhYmxlPFBhcnRpYWw8RGFmZkNhcnQ+PiB7XG4gICAgcmV0dXJuIG9mKHRoaXMuY2FydEZhY3RvcnkuY3JlYXRlKCkpO1xuICB9XG59XG4iXX0=