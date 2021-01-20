/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DaffCartFactory, DaffCartCouponFactory } from '@daffodil/cart/testing';
import * as i0 from "@angular/core";
import * as i1 from "@daffodil/cart/testing";
var DaffTestingCartCouponService = /** @class */ (function () {
    function DaffTestingCartCouponService(couponFactory, cartFactory) {
        this.couponFactory = couponFactory;
        this.cartFactory = cartFactory;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffTestingCartCouponService.prototype.list = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return of(this.couponFactory.createMany(3));
    };
    /**
     * @param {?} cartId
     * @param {?} coupon
     * @return {?}
     */
    DaffTestingCartCouponService.prototype.apply = /**
     * @param {?} cartId
     * @param {?} coupon
     * @return {?}
     */
    function (cartId, coupon) {
        return of(this.cartFactory.create());
    };
    /**
     * @param {?} cartId
     * @param {?} coupon
     * @return {?}
     */
    DaffTestingCartCouponService.prototype.remove = /**
     * @param {?} cartId
     * @param {?} coupon
     * @return {?}
     */
    function (cartId, coupon) {
        return of(this.cartFactory.create());
    };
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffTestingCartCouponService.prototype.removeAll = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return of(this.cartFactory.create());
    };
    DaffTestingCartCouponService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffTestingCartCouponService.ctorParameters = function () { return [
        { type: DaffCartCouponFactory },
        { type: DaffCartFactory }
    ]; };
    /** @nocollapse */ DaffTestingCartCouponService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingCartCouponService_Factory() { return new DaffTestingCartCouponService(i0.ɵɵinject(i1.DaffCartCouponFactory), i0.ɵɵinject(i1.DaffCartFactory)); }, token: DaffTestingCartCouponService, providedIn: "root" });
    return DaffTestingCartCouponService;
}());
export { DaffTestingCartCouponService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb3Vwb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZHJpdmVycy9jYXJ0LWNvdXBvbi9jYXJ0LWNvdXBvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFPdEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFFaEY7SUFJRSxzQ0FDVSxhQUFvQyxFQUNwQyxXQUE0QjtRQUQ1QixrQkFBYSxHQUFiLGFBQWEsQ0FBdUI7UUFDcEMsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO0lBQ25DLENBQUM7Ozs7O0lBRUosMkNBQUk7Ozs7SUFBSixVQUFLLE1BQXNCO1FBQ3pCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDN0MsQ0FBQzs7Ozs7O0lBRUQsNENBQUs7Ozs7O0lBQUwsVUFBTSxNQUFzQixFQUFFLE1BQXNCO1FBQ2xELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7Ozs7SUFFRCw2Q0FBTTs7Ozs7SUFBTixVQUFPLE1BQXNCLEVBQUUsTUFBc0I7UUFDbkQsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRUQsZ0RBQVM7Ozs7SUFBVCxVQUFVLE1BQXNCO1FBQzlCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDOztnQkF2QkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKeUIscUJBQXFCO2dCQUF0QyxlQUFlOzs7dUNBUnhCO0NBa0NDLEFBeEJELElBd0JDO1NBckJZLDRCQUE0Qjs7Ozs7O0lBRXJDLHFEQUE0Qzs7Ozs7SUFDNUMsbURBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGFmZkNhcnQsIERhZmZDYXJ0Q291cG9uIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuaW1wb3J0IHtcbiAgRGFmZkNhcnRDb3Vwb25TZXJ2aWNlSW50ZXJmYWNlLFxufSBmcm9tICdAZGFmZm9kaWwvY2FydC9kcml2ZXInO1xuXG5pbXBvcnQgeyBEYWZmQ2FydEZhY3RvcnksIERhZmZDYXJ0Q291cG9uRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L3Rlc3RpbmcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmVGVzdGluZ0NhcnRDb3Vwb25TZXJ2aWNlIGltcGxlbWVudHMgRGFmZkNhcnRDb3Vwb25TZXJ2aWNlSW50ZXJmYWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb3Vwb25GYWN0b3J5OiBEYWZmQ2FydENvdXBvbkZhY3RvcnksXG4gICAgcHJpdmF0ZSBjYXJ0RmFjdG9yeTogRGFmZkNhcnRGYWN0b3J5XG4gICkge31cblxuICBsaXN0KGNhcnRJZDogRGFmZkNhcnRbJ2lkJ10pOiBPYnNlcnZhYmxlPERhZmZDYXJ0Q291cG9uW10+IHtcbiAgICByZXR1cm4gb2YodGhpcy5jb3Vwb25GYWN0b3J5LmNyZWF0ZU1hbnkoMykpXG4gIH1cblxuICBhcHBseShjYXJ0SWQ6IERhZmZDYXJ0WydpZCddLCBjb3Vwb246IERhZmZDYXJ0Q291cG9uKTogT2JzZXJ2YWJsZTxQYXJ0aWFsPERhZmZDYXJ0Pj4ge1xuICAgIHJldHVybiBvZih0aGlzLmNhcnRGYWN0b3J5LmNyZWF0ZSgpKTtcbiAgfVxuXG4gIHJlbW92ZShjYXJ0SWQ6IERhZmZDYXJ0WydpZCddLCBjb3Vwb246IERhZmZDYXJ0Q291cG9uKTogT2JzZXJ2YWJsZTxQYXJ0aWFsPERhZmZDYXJ0Pj4ge1xuICAgIHJldHVybiBvZih0aGlzLmNhcnRGYWN0b3J5LmNyZWF0ZSgpKTtcbiAgfVxuXG4gIHJlbW92ZUFsbChjYXJ0SWQ6IERhZmZDYXJ0WydpZCddKTogT2JzZXJ2YWJsZTxQYXJ0aWFsPERhZmZDYXJ0Pj4ge1xuICAgIHJldHVybiBvZih0aGlzLmNhcnRGYWN0b3J5LmNyZWF0ZSgpKTtcbiAgfVxufVxuIl19