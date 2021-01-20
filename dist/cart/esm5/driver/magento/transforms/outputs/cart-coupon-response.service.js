/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { daffMagentoCouponTransform } from './cart-coupon';
import { transformMagentoCartItem } from './cart-item/cart-item-transformer';
import { transformCartTotals } from './cart-totals-transformer';
import * as i0 from "@angular/core";
/**
 * Transforms magento carts into an object usable by daffodil.
 */
var DaffMagentoCartCouponResponseTransformer = /** @class */ (function () {
    function DaffMagentoCartCouponResponseTransformer() {
    }
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    DaffMagentoCartCouponResponseTransformer.prototype.transformCartItems = /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    function (cart) {
        return {
            items: cart.items.map(transformMagentoCartItem),
        };
    };
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    DaffMagentoCartCouponResponseTransformer.prototype.transformTotals = /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    function (cart) {
        return {
            grand_total: cart.prices.grand_total.value,
            subtotal: cart.prices.subtotal_excluding_tax.value,
        };
    };
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    DaffMagentoCartCouponResponseTransformer.prototype.transformCoupons = /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    function (cart) {
        return {
            coupons: cart.applied_coupons
                ? cart.applied_coupons.map(daffMagentoCouponTransform)
                : []
        };
    };
    /**
     * Transforms the MagentoCart from the cart coupon operations into a DaffCart partial.
     * @param cart the cart from a magento cart query.
     */
    /**
     * Transforms the MagentoCart from the cart coupon operations into a DaffCart partial.
     * @param {?} cart the cart from a magento cart query.
     * @return {?}
     */
    DaffMagentoCartCouponResponseTransformer.prototype.transform = /**
     * Transforms the MagentoCart from the cart coupon operations into a DaffCart partial.
     * @param {?} cart the cart from a magento cart query.
     * @return {?}
     */
    function (cart) {
        return cart ? tslib_1.__assign({}, this.transformCartItems(cart), this.transformCoupons(cart), this.transformTotals(cart), transformCartTotals(cart), { id: cart.id }) : null;
    };
    DaffMagentoCartCouponResponseTransformer.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffMagentoCartCouponResponseTransformer.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoCartCouponResponseTransformer_Factory() { return new DaffMagentoCartCouponResponseTransformer(); }, token: DaffMagentoCartCouponResponseTransformer, providedIn: "root" });
    return DaffMagentoCartCouponResponseTransformer;
}());
export { DaffMagentoCartCouponResponseTransformer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb3Vwb24tcmVzcG9uc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9tYWdlbnRvLyIsInNvdXJjZXMiOlsidHJhbnNmb3Jtcy9vdXRwdXRzL2NhcnQtY291cG9uLXJlc3BvbnNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7QUFLaEU7SUFBQTtLQTJDQzs7Ozs7O0lBdENTLHFFQUFrQjs7Ozs7SUFBMUIsVUFBMkIsSUFBMEI7UUFDbkQsT0FBTztZQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQztTQUNoRCxDQUFBO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sa0VBQWU7Ozs7O0lBQXZCLFVBQXdCLElBQTBCO1FBSWhELE9BQU87WUFDTCxXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSztZQUMxQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLO1NBQ25ELENBQUE7SUFDSCxDQUFDOzs7Ozs7SUFFTyxtRUFBZ0I7Ozs7O0lBQXhCLFVBQXlCLElBQTBCO1FBQ2pELE9BQU87WUFDTCxPQUFPLEVBQUUsSUFBSSxDQUFDLGVBQWU7Z0JBQzNCLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQztnQkFDdEQsQ0FBQyxDQUFDLEVBQUU7U0FDUCxDQUFBO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsNERBQVM7Ozs7O0lBQVQsVUFBVSxJQUEwQjtRQUNsQyxPQUFPLElBQUksQ0FBQyxDQUFDLHNCQUNSLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFDN0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUMzQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUMxQixtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFFNUIsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLElBQ1gsQ0FBQyxDQUFDLElBQUksQ0FBQTtJQUNWLENBQUM7O2dCQTFDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7bURBZEQ7Q0F1REMsQUEzQ0QsSUEyQ0M7U0F4Q1ksd0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydCB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcblxuaW1wb3J0IHsgTWFnZW50b0NhcnQgfSBmcm9tICcuLi8uLi9tb2RlbHMvcmVzcG9uc2VzL2NhcnQnO1xuaW1wb3J0IHsgZGFmZk1hZ2VudG9Db3Vwb25UcmFuc2Zvcm0gfSBmcm9tICcuL2NhcnQtY291cG9uJztcbmltcG9ydCB7IHRyYW5zZm9ybU1hZ2VudG9DYXJ0SXRlbSB9IGZyb20gJy4vY2FydC1pdGVtL2NhcnQtaXRlbS10cmFuc2Zvcm1lcic7XG5pbXBvcnQgeyB0cmFuc2Zvcm1DYXJ0VG90YWxzIH0gZnJvbSAnLi9jYXJ0LXRvdGFscy10cmFuc2Zvcm1lcic7XG5cbi8qKlxuICogVHJhbnNmb3JtcyBtYWdlbnRvIGNhcnRzIGludG8gYW4gb2JqZWN0IHVzYWJsZSBieSBkYWZmb2RpbC5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk1hZ2VudG9DYXJ0Q291cG9uUmVzcG9uc2VUcmFuc2Zvcm1lciB7XG5cbiAgcHJpdmF0ZSB0cmFuc2Zvcm1DYXJ0SXRlbXMoY2FydDogUGFydGlhbDxNYWdlbnRvQ2FydD4pOiB7aXRlbXM6IERhZmZDYXJ0WydpdGVtcyddfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW1zOiBjYXJ0Lml0ZW1zLm1hcCh0cmFuc2Zvcm1NYWdlbnRvQ2FydEl0ZW0pLFxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNmb3JtVG90YWxzKGNhcnQ6IFBhcnRpYWw8TWFnZW50b0NhcnQ+KToge1xuICAgIGdyYW5kX3RvdGFsOiBEYWZmQ2FydFsnZ3JhbmRfdG90YWwnXSxcbiAgICBzdWJ0b3RhbDogRGFmZkNhcnRbJ3N1YnRvdGFsJ10sXG4gIH0ge1xuICAgIHJldHVybiB7XG4gICAgICBncmFuZF90b3RhbDogY2FydC5wcmljZXMuZ3JhbmRfdG90YWwudmFsdWUsXG4gICAgICBzdWJ0b3RhbDogY2FydC5wcmljZXMuc3VidG90YWxfZXhjbHVkaW5nX3RheC52YWx1ZSxcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRyYW5zZm9ybUNvdXBvbnMoY2FydDogUGFydGlhbDxNYWdlbnRvQ2FydD4pOiB7Y291cG9uczogRGFmZkNhcnRbJ2NvdXBvbnMnXX0ge1xuICAgIHJldHVybiB7XG4gICAgICBjb3Vwb25zOiBjYXJ0LmFwcGxpZWRfY291cG9uc1xuICAgICAgICA/IGNhcnQuYXBwbGllZF9jb3Vwb25zLm1hcChkYWZmTWFnZW50b0NvdXBvblRyYW5zZm9ybSlcbiAgICAgICAgOiBbXVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1zIHRoZSBNYWdlbnRvQ2FydCBmcm9tIHRoZSBjYXJ0IGNvdXBvbiBvcGVyYXRpb25zIGludG8gYSBEYWZmQ2FydCBwYXJ0aWFsLlxuICAgKiBAcGFyYW0gY2FydCB0aGUgY2FydCBmcm9tIGEgbWFnZW50byBjYXJ0IHF1ZXJ5LlxuICAgKi9cbiAgdHJhbnNmb3JtKGNhcnQ6IFBhcnRpYWw8TWFnZW50b0NhcnQ+KTogUGFydGlhbDxEYWZmQ2FydD4ge1xuICAgIHJldHVybiBjYXJ0ID8ge1xuICAgICAgLi4udGhpcy50cmFuc2Zvcm1DYXJ0SXRlbXMoY2FydCksXG4gICAgICAuLi50aGlzLnRyYW5zZm9ybUNvdXBvbnMoY2FydCksXG4gICAgICAuLi50aGlzLnRyYW5zZm9ybVRvdGFscyhjYXJ0KSxcbiAgICAgIC4uLnRyYW5zZm9ybUNhcnRUb3RhbHMoY2FydCksXG5cbiAgICAgIGlkOiBjYXJ0LmlkXG4gICAgfSA6IG51bGxcbiAgfVxufVxuIl19