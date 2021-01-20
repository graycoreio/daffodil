/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DaffMagentoCartPaymentTransformer } from './cart-payment.service';
import { DaffMagentoCartShippingInformationTransformer } from './cart-shipping-information.service';
import { DaffMagentoShippingAddressTransformer } from './shipping-address.service';
import { DaffMagentoBillingAddressTransformer } from './billing-address.service';
import { DaffMagentoCartShippingRateTransformer } from './cart-shipping-rate.service';
import { daffMagentoCouponTransform } from './cart-coupon';
import { transformMagentoCartItem } from './cart-item/cart-item-transformer';
import { transformCartTotals } from './cart-totals-transformer';
import * as i0 from "@angular/core";
import * as i1 from "./shipping-address.service";
import * as i2 from "./billing-address.service";
import * as i3 from "./cart-payment.service";
import * as i4 from "./cart-shipping-information.service";
import * as i5 from "./cart-shipping-rate.service";
/**
 * Transforms magento carts into an object usable by daffodil.
 */
var DaffMagentoCartTransformer = /** @class */ (function () {
    function DaffMagentoCartTransformer(shippingAddressTransformer, billingAddressTransformer, paymentTransformer, shippingInformationTransformer, shippingRateTransformer) {
        this.shippingAddressTransformer = shippingAddressTransformer;
        this.billingAddressTransformer = billingAddressTransformer;
        this.paymentTransformer = paymentTransformer;
        this.shippingInformationTransformer = shippingInformationTransformer;
        this.shippingRateTransformer = shippingRateTransformer;
    }
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    DaffMagentoCartTransformer.prototype.transformShippingAddress = /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    function (cart) {
        return {
            shipping_address: cart.shipping_addresses[0]
                ? this.shippingAddressTransformer.transform(tslib_1.__assign({}, cart.shipping_addresses[0], { email: cart.email }))
                : null
        };
    };
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    DaffMagentoCartTransformer.prototype.transformBillingAddress = /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    function (cart) {
        return {
            billing_address: cart.billing_address
                ? this.billingAddressTransformer.transform(tslib_1.__assign({}, cart.billing_address, { email: cart.email }))
                : null
        };
    };
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    DaffMagentoCartTransformer.prototype.transformCartItems = /**
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
    DaffMagentoCartTransformer.prototype.transformTotals = /**
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
    DaffMagentoCartTransformer.prototype.transformCoupons = /**
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
     * @private
     * @param {?} cart
     * @return {?}
     */
    DaffMagentoCartTransformer.prototype.transformPayment = /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    function (cart) {
        return {
            payment: this.paymentTransformer.transform(cart.selected_payment_method),
        };
    };
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    DaffMagentoCartTransformer.prototype.transformShippingInformation = /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    function (cart) {
        return {
            shipping_information: cart.shipping_addresses[0]
                ? this.shippingInformationTransformer.transform(cart.shipping_addresses[0].selected_shipping_method)
                : null
        };
    };
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    DaffMagentoCartTransformer.prototype.transformShippingMethods = /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    function (cart) {
        var _this = this;
        return {
            available_shipping_methods: cart.shipping_addresses[0] && cart.shipping_addresses[0].available_shipping_methods
                ? cart.shipping_addresses[0].available_shipping_methods.map((/**
                 * @param {?} method
                 * @return {?}
                 */
                function (method) {
                    return _this.shippingRateTransformer.transform(method);
                }))
                : []
        };
    };
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    DaffMagentoCartTransformer.prototype.transformPaymentMethods = /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    function (cart) {
        var _this = this;
        return {
            available_payment_methods: cart.available_payment_methods.map((/**
             * @param {?} method
             * @return {?}
             */
            function (method) {
                return _this.paymentTransformer.transform(method);
            }))
        };
    };
    /**
     * Transforms the magento MagentoCart from the magento cart query into a DaffCart.
     * @param cart the cart from a magento cart query.
     */
    /**
     * Transforms the magento MagentoCart from the magento cart query into a DaffCart.
     * @param {?} cart the cart from a magento cart query.
     * @return {?}
     */
    DaffMagentoCartTransformer.prototype.transform = /**
     * Transforms the magento MagentoCart from the magento cart query into a DaffCart.
     * @param {?} cart the cart from a magento cart query.
     * @return {?}
     */
    function (cart) {
        return cart ? tslib_1.__assign({ extra_attributes: cart }, this.transformCartItems(cart), this.transformBillingAddress(cart), this.transformShippingAddress(cart), this.transformCoupons(cart), this.transformPayment(cart), this.transformTotals(cart), transformCartTotals(cart), this.transformShippingInformation(cart), this.transformShippingMethods(cart), this.transformPaymentMethods(cart), { id: cart.id }) : null;
    };
    DaffMagentoCartTransformer.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoCartTransformer.ctorParameters = function () { return [
        { type: DaffMagentoShippingAddressTransformer },
        { type: DaffMagentoBillingAddressTransformer },
        { type: DaffMagentoCartPaymentTransformer },
        { type: DaffMagentoCartShippingInformationTransformer },
        { type: DaffMagentoCartShippingRateTransformer }
    ]; };
    /** @nocollapse */ DaffMagentoCartTransformer.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoCartTransformer_Factory() { return new DaffMagentoCartTransformer(i0.ɵɵinject(i1.DaffMagentoShippingAddressTransformer), i0.ɵɵinject(i2.DaffMagentoBillingAddressTransformer), i0.ɵɵinject(i3.DaffMagentoCartPaymentTransformer), i0.ɵɵinject(i4.DaffMagentoCartShippingInformationTransformer), i0.ɵɵinject(i5.DaffMagentoCartShippingRateTransformer)); }, token: DaffMagentoCartTransformer, providedIn: "root" });
    return DaffMagentoCartTransformer;
}());
export { DaffMagentoCartTransformer };
if (false) {
    /** @type {?} */
    DaffMagentoCartTransformer.prototype.shippingAddressTransformer;
    /** @type {?} */
    DaffMagentoCartTransformer.prototype.billingAddressTransformer;
    /** @type {?} */
    DaffMagentoCartTransformer.prototype.paymentTransformer;
    /** @type {?} */
    DaffMagentoCartTransformer.prototype.shippingInformationTransformer;
    /** @type {?} */
    DaffMagentoCartTransformer.prototype.shippingRateTransformer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8vIiwic291cmNlcyI6WyJ0cmFuc2Zvcm1zL291dHB1dHMvY2FydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsNkNBQTZDLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRyxPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRixPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVqRixPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN0RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDN0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7Ozs7QUFLaEU7SUFJRSxvQ0FDUywwQkFBaUUsRUFDakUseUJBQStELEVBQy9ELGtCQUFxRCxFQUNyRCw4QkFBNkUsRUFDN0UsdUJBQStEO1FBSi9ELCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBdUM7UUFDakUsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUFzQztRQUMvRCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1DO1FBQ3JELG1DQUE4QixHQUE5Qiw4QkFBOEIsQ0FBK0M7UUFDN0UsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF3QztJQUNyRSxDQUFDOzs7Ozs7SUFFSSw2REFBd0I7Ozs7O0lBQWhDLFVBQWlDLElBQWlCO1FBQ2hELE9BQU87WUFDTCxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxDQUFDLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFNBQVMsc0JBQ3RDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsSUFDN0IsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLElBQ2pCO2dCQUNGLENBQUMsQ0FBQyxJQUFJO1NBQ1QsQ0FBQTtJQUNILENBQUM7Ozs7OztJQUVPLDREQUF1Qjs7Ozs7SUFBL0IsVUFBZ0MsSUFBaUI7UUFDL0MsT0FBTztZQUNMLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtnQkFDbkMsQ0FBQyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxTQUFTLHNCQUNyQyxJQUFJLENBQUMsZUFBZSxJQUN2QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssSUFDakI7Z0JBQ0YsQ0FBQyxDQUFDLElBQUk7U0FDVCxDQUFBO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sdURBQWtCOzs7OztJQUExQixVQUEyQixJQUFpQjtRQUMxQyxPQUFPO1lBQ0wsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDO1NBQ2hELENBQUE7SUFDSCxDQUFDOzs7Ozs7SUFFTyxvREFBZTs7Ozs7SUFBdkIsVUFBd0IsSUFBaUI7UUFJdkMsT0FBTztZQUNMLFdBQVcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLO1lBQzFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLEtBQUs7U0FDbkQsQ0FBQTtJQUNILENBQUM7Ozs7OztJQUVPLHFEQUFnQjs7Ozs7SUFBeEIsVUFBeUIsSUFBaUI7UUFDeEMsT0FBTztZQUNMLE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZTtnQkFDM0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDO2dCQUN0RCxDQUFDLENBQUMsRUFBRTtTQUNQLENBQUE7SUFDSCxDQUFDOzs7Ozs7SUFFTyxxREFBZ0I7Ozs7O0lBQXhCLFVBQXlCLElBQWlCO1FBQ3hDLE9BQU87WUFDTCxPQUFPLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUM7U0FDekUsQ0FBQTtJQUNILENBQUM7Ozs7OztJQUVPLGlFQUE0Qjs7Ozs7SUFBcEMsVUFBcUMsSUFBaUI7UUFDcEQsT0FBTztZQUNMLG9CQUFvQixFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLENBQUMsQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDcEcsQ0FBQyxDQUFDLElBQUk7U0FDVCxDQUFBO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sNkRBQXdCOzs7OztJQUFoQyxVQUFpQyxJQUFpQjtRQUFsRCxpQkFRQztRQVBELE9BQU87WUFDSCwwQkFBMEIsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLDBCQUEwQjtnQkFDN0csQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxHQUFHOzs7O2dCQUFDLFVBQUEsTUFBTTtvQkFDaEUsT0FBQSxLQUFJLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztnQkFBOUMsQ0FBOEMsRUFDL0M7Z0JBQ0QsQ0FBQyxDQUFDLEVBQUU7U0FDUCxDQUFBO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sNERBQXVCOzs7OztJQUEvQixVQUFnQyxJQUFpQjtRQUFqRCxpQkFNQztRQUxDLE9BQU87WUFDTCx5QkFBeUIsRUFBRSxJQUFJLENBQUMseUJBQXlCLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsTUFBTTtnQkFDbEUsT0FBQSxLQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUF6QyxDQUF5QyxFQUMxQztTQUNGLENBQUE7SUFDSCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCw4Q0FBUzs7Ozs7SUFBVCxVQUFVLElBQWlCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLENBQUMsb0JBRVgsZ0JBQWdCLEVBQUUsSUFBSSxJQUVuQixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQzdCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsRUFDbEMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxFQUNuQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQzNCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFDM0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFDMUIsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQ3pCLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsRUFDdkMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxFQUNuQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBRXJDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxJQUNYLENBQUMsQ0FBQyxJQUFJLENBQUE7SUFDVixDQUFDOztnQkFoSEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFiUSxxQ0FBcUM7Z0JBQ3JDLG9DQUFvQztnQkFIcEMsaUNBQWlDO2dCQUNqQyw2Q0FBNkM7Z0JBSTdDLHNDQUFzQzs7O3FDQVQvQztDQWtJQyxBQWpIRCxJQWlIQztTQTlHWSwwQkFBMEI7OztJQUVuQyxnRUFBd0U7O0lBQ3hFLCtEQUFzRTs7SUFDdEUsd0RBQTREOztJQUM1RCxvRUFBb0Y7O0lBQ3BGLDZEQUFzRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGFmZkNhcnQgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5cbmltcG9ydCB7IERhZmZNYWdlbnRvQ2FydFBheW1lbnRUcmFuc2Zvcm1lciB9IGZyb20gJy4vY2FydC1wYXltZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZk1hZ2VudG9DYXJ0U2hpcHBpbmdJbmZvcm1hdGlvblRyYW5zZm9ybWVyIH0gZnJvbSAnLi9jYXJ0LXNoaXBwaW5nLWluZm9ybWF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZk1hZ2VudG9TaGlwcGluZ0FkZHJlc3NUcmFuc2Zvcm1lciB9IGZyb20gJy4vc2hpcHBpbmctYWRkcmVzcy5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZNYWdlbnRvQmlsbGluZ0FkZHJlc3NUcmFuc2Zvcm1lciB9IGZyb20gJy4vYmlsbGluZy1hZGRyZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFnZW50b0NhcnQgfSBmcm9tICcuLi8uLi9tb2RlbHMvcmVzcG9uc2VzL2NhcnQnO1xuaW1wb3J0IHsgRGFmZk1hZ2VudG9DYXJ0U2hpcHBpbmdSYXRlVHJhbnNmb3JtZXIgfSBmcm9tICcuL2NhcnQtc2hpcHBpbmctcmF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IGRhZmZNYWdlbnRvQ291cG9uVHJhbnNmb3JtIH0gZnJvbSAnLi9jYXJ0LWNvdXBvbic7XG5pbXBvcnQgeyB0cmFuc2Zvcm1NYWdlbnRvQ2FydEl0ZW0gfSBmcm9tICcuL2NhcnQtaXRlbS9jYXJ0LWl0ZW0tdHJhbnNmb3JtZXInO1xuaW1wb3J0IHsgdHJhbnNmb3JtQ2FydFRvdGFscyB9IGZyb20gJy4vY2FydC10b3RhbHMtdHJhbnNmb3JtZXInO1xuXG4vKipcbiAqIFRyYW5zZm9ybXMgbWFnZW50byBjYXJ0cyBpbnRvIGFuIG9iamVjdCB1c2FibGUgYnkgZGFmZm9kaWwuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZNYWdlbnRvQ2FydFRyYW5zZm9ybWVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNoaXBwaW5nQWRkcmVzc1RyYW5zZm9ybWVyOiBEYWZmTWFnZW50b1NoaXBwaW5nQWRkcmVzc1RyYW5zZm9ybWVyLFxuICAgIHB1YmxpYyBiaWxsaW5nQWRkcmVzc1RyYW5zZm9ybWVyOiBEYWZmTWFnZW50b0JpbGxpbmdBZGRyZXNzVHJhbnNmb3JtZXIsXG4gICAgcHVibGljIHBheW1lbnRUcmFuc2Zvcm1lcjogRGFmZk1hZ2VudG9DYXJ0UGF5bWVudFRyYW5zZm9ybWVyLFxuICAgIHB1YmxpYyBzaGlwcGluZ0luZm9ybWF0aW9uVHJhbnNmb3JtZXI6IERhZmZNYWdlbnRvQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25UcmFuc2Zvcm1lcixcbiAgICBwdWJsaWMgc2hpcHBpbmdSYXRlVHJhbnNmb3JtZXI6IERhZmZNYWdlbnRvQ2FydFNoaXBwaW5nUmF0ZVRyYW5zZm9ybWVyXG4gICkge31cblxuICBwcml2YXRlIHRyYW5zZm9ybVNoaXBwaW5nQWRkcmVzcyhjYXJ0OiBNYWdlbnRvQ2FydCk6IHtzaGlwcGluZ19hZGRyZXNzOiBEYWZmQ2FydFsnc2hpcHBpbmdfYWRkcmVzcyddfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNoaXBwaW5nX2FkZHJlc3M6IGNhcnQuc2hpcHBpbmdfYWRkcmVzc2VzWzBdXG4gICAgICAgID8gdGhpcy5zaGlwcGluZ0FkZHJlc3NUcmFuc2Zvcm1lci50cmFuc2Zvcm0oe1xuICAgICAgICAgIC4uLmNhcnQuc2hpcHBpbmdfYWRkcmVzc2VzWzBdLFxuICAgICAgICAgIGVtYWlsOiBjYXJ0LmVtYWlsXG4gICAgICAgIH0pXG4gICAgICAgIDogbnVsbFxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNmb3JtQmlsbGluZ0FkZHJlc3MoY2FydDogTWFnZW50b0NhcnQpOiB7YmlsbGluZ19hZGRyZXNzOiBEYWZmQ2FydFsnYmlsbGluZ19hZGRyZXNzJ119IHtcbiAgICByZXR1cm4ge1xuICAgICAgYmlsbGluZ19hZGRyZXNzOiBjYXJ0LmJpbGxpbmdfYWRkcmVzc1xuICAgICAgICA/IHRoaXMuYmlsbGluZ0FkZHJlc3NUcmFuc2Zvcm1lci50cmFuc2Zvcm0oe1xuICAgICAgICAgIC4uLmNhcnQuYmlsbGluZ19hZGRyZXNzLFxuICAgICAgICAgIGVtYWlsOiBjYXJ0LmVtYWlsXG4gICAgICAgIH0pXG4gICAgICAgIDogbnVsbFxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNmb3JtQ2FydEl0ZW1zKGNhcnQ6IE1hZ2VudG9DYXJ0KToge2l0ZW1zOiBEYWZmQ2FydFsnaXRlbXMnXX0ge1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtczogY2FydC5pdGVtcy5tYXAodHJhbnNmb3JtTWFnZW50b0NhcnRJdGVtKSxcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRyYW5zZm9ybVRvdGFscyhjYXJ0OiBNYWdlbnRvQ2FydCk6IHtcbiAgICBncmFuZF90b3RhbDogRGFmZkNhcnRbJ2dyYW5kX3RvdGFsJ10sXG4gICAgc3VidG90YWw6IERhZmZDYXJ0WydzdWJ0b3RhbCddLFxuICB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgZ3JhbmRfdG90YWw6IGNhcnQucHJpY2VzLmdyYW5kX3RvdGFsLnZhbHVlLFxuICAgICAgc3VidG90YWw6IGNhcnQucHJpY2VzLnN1YnRvdGFsX2V4Y2x1ZGluZ190YXgudmFsdWUsXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2Zvcm1Db3Vwb25zKGNhcnQ6IE1hZ2VudG9DYXJ0KToge2NvdXBvbnM6IERhZmZDYXJ0Wydjb3Vwb25zJ119IHtcbiAgICByZXR1cm4ge1xuICAgICAgY291cG9uczogY2FydC5hcHBsaWVkX2NvdXBvbnNcbiAgICAgICAgPyBjYXJ0LmFwcGxpZWRfY291cG9ucy5tYXAoZGFmZk1hZ2VudG9Db3Vwb25UcmFuc2Zvcm0pXG4gICAgICAgIDogW11cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRyYW5zZm9ybVBheW1lbnQoY2FydDogTWFnZW50b0NhcnQpOiB7cGF5bWVudDogRGFmZkNhcnRbJ3BheW1lbnQnXX0ge1xuICAgIHJldHVybiB7XG4gICAgICBwYXltZW50OiB0aGlzLnBheW1lbnRUcmFuc2Zvcm1lci50cmFuc2Zvcm0oY2FydC5zZWxlY3RlZF9wYXltZW50X21ldGhvZCksXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2Zvcm1TaGlwcGluZ0luZm9ybWF0aW9uKGNhcnQ6IE1hZ2VudG9DYXJ0KToge3NoaXBwaW5nX2luZm9ybWF0aW9uOiBEYWZmQ2FydFsnc2hpcHBpbmdfaW5mb3JtYXRpb24nXX0ge1xuICAgIHJldHVybiB7XG4gICAgICBzaGlwcGluZ19pbmZvcm1hdGlvbjogY2FydC5zaGlwcGluZ19hZGRyZXNzZXNbMF1cbiAgICAgICAgPyB0aGlzLnNoaXBwaW5nSW5mb3JtYXRpb25UcmFuc2Zvcm1lci50cmFuc2Zvcm0oY2FydC5zaGlwcGluZ19hZGRyZXNzZXNbMF0uc2VsZWN0ZWRfc2hpcHBpbmdfbWV0aG9kKVxuICAgICAgICA6IG51bGxcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRyYW5zZm9ybVNoaXBwaW5nTWV0aG9kcyhjYXJ0OiBNYWdlbnRvQ2FydCk6IHthdmFpbGFibGVfc2hpcHBpbmdfbWV0aG9kczogRGFmZkNhcnRbJ2F2YWlsYWJsZV9zaGlwcGluZ19tZXRob2RzJ119IHtcblx0XHRyZXR1cm4ge1xuICAgICAgYXZhaWxhYmxlX3NoaXBwaW5nX21ldGhvZHM6IGNhcnQuc2hpcHBpbmdfYWRkcmVzc2VzWzBdICYmIGNhcnQuc2hpcHBpbmdfYWRkcmVzc2VzWzBdLmF2YWlsYWJsZV9zaGlwcGluZ19tZXRob2RzXG4gICAgICAgID8gY2FydC5zaGlwcGluZ19hZGRyZXNzZXNbMF0uYXZhaWxhYmxlX3NoaXBwaW5nX21ldGhvZHMubWFwKG1ldGhvZCA9PlxuICAgICAgICAgIHRoaXMuc2hpcHBpbmdSYXRlVHJhbnNmb3JtZXIudHJhbnNmb3JtKG1ldGhvZClcbiAgICAgICAgKVxuICAgICAgICA6IFtdXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2Zvcm1QYXltZW50TWV0aG9kcyhjYXJ0OiBNYWdlbnRvQ2FydCk6IHthdmFpbGFibGVfcGF5bWVudF9tZXRob2RzOiBEYWZmQ2FydFsnYXZhaWxhYmxlX3BheW1lbnRfbWV0aG9kcyddfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGF2YWlsYWJsZV9wYXltZW50X21ldGhvZHM6IGNhcnQuYXZhaWxhYmxlX3BheW1lbnRfbWV0aG9kcy5tYXAobWV0aG9kID0+XG4gICAgICAgIHRoaXMucGF5bWVudFRyYW5zZm9ybWVyLnRyYW5zZm9ybShtZXRob2QpXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybXMgdGhlIG1hZ2VudG8gTWFnZW50b0NhcnQgZnJvbSB0aGUgbWFnZW50byBjYXJ0IHF1ZXJ5IGludG8gYSBEYWZmQ2FydC5cbiAgICogQHBhcmFtIGNhcnQgdGhlIGNhcnQgZnJvbSBhIG1hZ2VudG8gY2FydCBxdWVyeS5cbiAgICovXG4gIHRyYW5zZm9ybShjYXJ0OiBNYWdlbnRvQ2FydCk6IERhZmZDYXJ0IHtcbiAgICByZXR1cm4gY2FydCA/IHtcbiAgICAgIC8vIGFkZCB0aGUgbWFnZW50byBjYXJ0IGluIHRoaXMgd2F5IHRvIGF2b2lkICdvYmplY3QgbGl0ZXJhbCBtYXkgb25seSBzcGVjaWZ5IGtub3duIHByb2VydGllcydcbiAgICAgIGV4dHJhX2F0dHJpYnV0ZXM6IGNhcnQsXG5cbiAgICAgIC4uLnRoaXMudHJhbnNmb3JtQ2FydEl0ZW1zKGNhcnQpLFxuICAgICAgLi4udGhpcy50cmFuc2Zvcm1CaWxsaW5nQWRkcmVzcyhjYXJ0KSxcbiAgICAgIC4uLnRoaXMudHJhbnNmb3JtU2hpcHBpbmdBZGRyZXNzKGNhcnQpLFxuICAgICAgLi4udGhpcy50cmFuc2Zvcm1Db3Vwb25zKGNhcnQpLFxuICAgICAgLi4udGhpcy50cmFuc2Zvcm1QYXltZW50KGNhcnQpLFxuICAgICAgLi4udGhpcy50cmFuc2Zvcm1Ub3RhbHMoY2FydCksXG4gICAgICAuLi50cmFuc2Zvcm1DYXJ0VG90YWxzKGNhcnQpLFxuICAgICAgLi4udGhpcy50cmFuc2Zvcm1TaGlwcGluZ0luZm9ybWF0aW9uKGNhcnQpLFxuICAgICAgLi4udGhpcy50cmFuc2Zvcm1TaGlwcGluZ01ldGhvZHMoY2FydCksXG4gICAgICAuLi50aGlzLnRyYW5zZm9ybVBheW1lbnRNZXRob2RzKGNhcnQpLFxuXG4gICAgICBpZDogY2FydC5pZFxuICAgIH0gOiBudWxsXG4gIH1cbn1cbiJdfQ==