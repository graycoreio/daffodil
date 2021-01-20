/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { daffMagentoCouponTransform } from './cart-coupon';
import { transformMagentoCartItem } from './cart-item/cart-item-transformer';
import { transformCartTotals } from './cart-totals-transformer';
import * as i0 from "@angular/core";
/**
 * Transforms magento carts into an object usable by daffodil.
 */
export class DaffMagentoCartCouponResponseTransformer {
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    transformCartItems(cart) {
        return {
            items: cart.items.map(transformMagentoCartItem),
        };
    }
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    transformTotals(cart) {
        return {
            grand_total: cart.prices.grand_total.value,
            subtotal: cart.prices.subtotal_excluding_tax.value,
        };
    }
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    transformCoupons(cart) {
        return {
            coupons: cart.applied_coupons
                ? cart.applied_coupons.map(daffMagentoCouponTransform)
                : []
        };
    }
    /**
     * Transforms the MagentoCart from the cart coupon operations into a DaffCart partial.
     * @param {?} cart the cart from a magento cart query.
     * @return {?}
     */
    transform(cart) {
        return cart ? Object.assign({}, this.transformCartItems(cart), this.transformCoupons(cart), this.transformTotals(cart), transformCartTotals(cart), { id: cart.id }) : null;
    }
}
DaffMagentoCartCouponResponseTransformer.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffMagentoCartCouponResponseTransformer.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoCartCouponResponseTransformer_Factory() { return new DaffMagentoCartCouponResponseTransformer(); }, token: DaffMagentoCartCouponResponseTransformer, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb3Vwb24tcmVzcG9uc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9tYWdlbnRvLyIsInNvdXJjZXMiOlsidHJhbnNmb3Jtcy9vdXRwdXRzL2NhcnQtY291cG9uLXJlc3BvbnNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7OztBQVFoRSxNQUFNLE9BQU8sd0NBQXdDOzs7Ozs7SUFFM0Msa0JBQWtCLENBQUMsSUFBMEI7UUFDbkQsT0FBTztZQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQztTQUNoRCxDQUFBO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sZUFBZSxDQUFDLElBQTBCO1FBSWhELE9BQU87WUFDTCxXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSztZQUMxQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLO1NBQ25ELENBQUE7SUFDSCxDQUFDOzs7Ozs7SUFFTyxnQkFBZ0IsQ0FBQyxJQUEwQjtRQUNqRCxPQUFPO1lBQ0wsT0FBTyxFQUFFLElBQUksQ0FBQyxlQUFlO2dCQUMzQixDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUM7Z0JBQ3RELENBQUMsQ0FBQyxFQUFFO1NBQ1AsQ0FBQTtJQUNILENBQUM7Ozs7OztJQU1ELFNBQVMsQ0FBQyxJQUEwQjtRQUNsQyxPQUFPLElBQUksQ0FBQyxDQUFDLG1CQUNSLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFDN0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUMzQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUMxQixtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFFNUIsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLElBQ1gsQ0FBQyxDQUFDLElBQUksQ0FBQTtJQUNWLENBQUM7OztZQTFDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhZmZDYXJ0IH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuXG5pbXBvcnQgeyBNYWdlbnRvQ2FydCB9IGZyb20gJy4uLy4uL21vZGVscy9yZXNwb25zZXMvY2FydCc7XG5pbXBvcnQgeyBkYWZmTWFnZW50b0NvdXBvblRyYW5zZm9ybSB9IGZyb20gJy4vY2FydC1jb3Vwb24nO1xuaW1wb3J0IHsgdHJhbnNmb3JtTWFnZW50b0NhcnRJdGVtIH0gZnJvbSAnLi9jYXJ0LWl0ZW0vY2FydC1pdGVtLXRyYW5zZm9ybWVyJztcbmltcG9ydCB7IHRyYW5zZm9ybUNhcnRUb3RhbHMgfSBmcm9tICcuL2NhcnQtdG90YWxzLXRyYW5zZm9ybWVyJztcblxuLyoqXG4gKiBUcmFuc2Zvcm1zIG1hZ2VudG8gY2FydHMgaW50byBhbiBvYmplY3QgdXNhYmxlIGJ5IGRhZmZvZGlsLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmTWFnZW50b0NhcnRDb3Vwb25SZXNwb25zZVRyYW5zZm9ybWVyIHtcblxuICBwcml2YXRlIHRyYW5zZm9ybUNhcnRJdGVtcyhjYXJ0OiBQYXJ0aWFsPE1hZ2VudG9DYXJ0Pik6IHtpdGVtczogRGFmZkNhcnRbJ2l0ZW1zJ119IHtcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbXM6IGNhcnQuaXRlbXMubWFwKHRyYW5zZm9ybU1hZ2VudG9DYXJ0SXRlbSksXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2Zvcm1Ub3RhbHMoY2FydDogUGFydGlhbDxNYWdlbnRvQ2FydD4pOiB7XG4gICAgZ3JhbmRfdG90YWw6IERhZmZDYXJ0WydncmFuZF90b3RhbCddLFxuICAgIHN1YnRvdGFsOiBEYWZmQ2FydFsnc3VidG90YWwnXSxcbiAgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdyYW5kX3RvdGFsOiBjYXJ0LnByaWNlcy5ncmFuZF90b3RhbC52YWx1ZSxcbiAgICAgIHN1YnRvdGFsOiBjYXJ0LnByaWNlcy5zdWJ0b3RhbF9leGNsdWRpbmdfdGF4LnZhbHVlLFxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNmb3JtQ291cG9ucyhjYXJ0OiBQYXJ0aWFsPE1hZ2VudG9DYXJ0Pik6IHtjb3Vwb25zOiBEYWZmQ2FydFsnY291cG9ucyddfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvdXBvbnM6IGNhcnQuYXBwbGllZF9jb3Vwb25zXG4gICAgICAgID8gY2FydC5hcHBsaWVkX2NvdXBvbnMubWFwKGRhZmZNYWdlbnRvQ291cG9uVHJhbnNmb3JtKVxuICAgICAgICA6IFtdXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybXMgdGhlIE1hZ2VudG9DYXJ0IGZyb20gdGhlIGNhcnQgY291cG9uIG9wZXJhdGlvbnMgaW50byBhIERhZmZDYXJ0IHBhcnRpYWwuXG4gICAqIEBwYXJhbSBjYXJ0IHRoZSBjYXJ0IGZyb20gYSBtYWdlbnRvIGNhcnQgcXVlcnkuXG4gICAqL1xuICB0cmFuc2Zvcm0oY2FydDogUGFydGlhbDxNYWdlbnRvQ2FydD4pOiBQYXJ0aWFsPERhZmZDYXJ0PiB7XG4gICAgcmV0dXJuIGNhcnQgPyB7XG4gICAgICAuLi50aGlzLnRyYW5zZm9ybUNhcnRJdGVtcyhjYXJ0KSxcbiAgICAgIC4uLnRoaXMudHJhbnNmb3JtQ291cG9ucyhjYXJ0KSxcbiAgICAgIC4uLnRoaXMudHJhbnNmb3JtVG90YWxzKGNhcnQpLFxuICAgICAgLi4udHJhbnNmb3JtQ2FydFRvdGFscyhjYXJ0KSxcblxuICAgICAgaWQ6IGNhcnQuaWRcbiAgICB9IDogbnVsbFxuICB9XG59XG4iXX0=