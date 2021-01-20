/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Transforms magento cart shipping methods into an object usable by daffodil.
 */
var DaffMagentoCartShippingRateTransformer = /** @class */ (function () {
    function DaffMagentoCartShippingRateTransformer() {
    }
    /**
     * Transforms the magento shipping method from the magento cart query into a DaffCartShippingRate.
     * @param shippingMethod the shippingMethod from a magento cart query.
     */
    /**
     * Transforms the magento shipping method from the magento cart query into a DaffCartShippingRate.
     * @param {?} shippingMethod the shippingMethod from a magento cart query.
     * @return {?}
     */
    DaffMagentoCartShippingRateTransformer.prototype.transform = /**
     * Transforms the magento shipping method from the magento cart query into a DaffCartShippingRate.
     * @param {?} shippingMethod the shippingMethod from a magento cart query.
     * @return {?}
     */
    function (shippingMethod) {
        return shippingMethod ? tslib_1.__assign({ magento_shipping_method: shippingMethod }, { carrier: shippingMethod.carrier_code, carrier_title: shippingMethod.carrier_title, price: shippingMethod.amount.value, method_code: shippingMethod.method_code, method_title: shippingMethod.method_title, id: null, method_description: null }) : null;
    };
    DaffMagentoCartShippingRateTransformer.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffMagentoCartShippingRateTransformer.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoCartShippingRateTransformer_Factory() { return new DaffMagentoCartShippingRateTransformer(); }, token: DaffMagentoCartShippingRateTransformer, providedIn: "root" });
    return DaffMagentoCartShippingRateTransformer;
}());
export { DaffMagentoCartShippingRateTransformer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGlwcGluZy1yYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50by8iLCJzb3VyY2VzIjpbInRyYW5zZm9ybXMvb3V0cHV0cy9jYXJ0LXNoaXBwaW5nLXJhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBUzNDO0lBQUE7S0F1QkM7SUFuQkM7OztPQUdHOzs7Ozs7SUFDSCwwREFBUzs7Ozs7SUFBVCxVQUFVLGNBQXlDO1FBQ2pELE9BQU8sY0FBYyxDQUFDLENBQUMsa0JBQ2xCLEVBQUMsdUJBQXVCLEVBQUUsY0FBYyxFQUFDLElBRTVDLE9BQU8sRUFBRSxjQUFjLENBQUMsWUFBWSxFQUNwQyxhQUFhLEVBQUUsY0FBYyxDQUFDLGFBQWEsRUFDM0MsS0FBSyxFQUFFLGNBQWMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUNsQyxXQUFXLEVBQUUsY0FBYyxDQUFDLFdBQVcsRUFDdkMsWUFBWSxFQUFFLGNBQWMsQ0FBQyxZQUFZLEVBR3pDLEVBQUUsRUFBRSxJQUFJLEVBQ1Isa0JBQWtCLEVBQUUsSUFBSSxJQUN4QixDQUFDLENBQUMsSUFBSSxDQUFBO0lBQ1YsQ0FBQzs7Z0JBdEJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OztpREFYRDtDQWdDQyxBQXZCRCxJQXVCQztTQXBCWSxzQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhZmZDYXJ0U2hpcHBpbmdSYXRlIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuXG5pbXBvcnQgeyBNYWdlbnRvQ2FydFNoaXBwaW5nTWV0aG9kIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Jlc3BvbnNlcy9jYXJ0LXNoaXBwaW5nLW1ldGhvZCc7XG5cbi8qKlxuICogVHJhbnNmb3JtcyBtYWdlbnRvIGNhcnQgc2hpcHBpbmcgbWV0aG9kcyBpbnRvIGFuIG9iamVjdCB1c2FibGUgYnkgZGFmZm9kaWwuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZNYWdlbnRvQ2FydFNoaXBwaW5nUmF0ZVRyYW5zZm9ybWVyIHtcbiAgLyoqXG4gICAqIFRyYW5zZm9ybXMgdGhlIG1hZ2VudG8gc2hpcHBpbmcgbWV0aG9kIGZyb20gdGhlIG1hZ2VudG8gY2FydCBxdWVyeSBpbnRvIGEgRGFmZkNhcnRTaGlwcGluZ1JhdGUuXG4gICAqIEBwYXJhbSBzaGlwcGluZ01ldGhvZCB0aGUgc2hpcHBpbmdNZXRob2QgZnJvbSBhIG1hZ2VudG8gY2FydCBxdWVyeS5cbiAgICovXG4gIHRyYW5zZm9ybShzaGlwcGluZ01ldGhvZDogTWFnZW50b0NhcnRTaGlwcGluZ01ldGhvZCk6IERhZmZDYXJ0U2hpcHBpbmdSYXRlIHtcbiAgICByZXR1cm4gc2hpcHBpbmdNZXRob2QgPyB7XG4gICAgICAuLi57bWFnZW50b19zaGlwcGluZ19tZXRob2Q6IHNoaXBwaW5nTWV0aG9kfSxcblxuICAgICAgY2Fycmllcjogc2hpcHBpbmdNZXRob2QuY2Fycmllcl9jb2RlLFxuICAgICAgY2Fycmllcl90aXRsZTogc2hpcHBpbmdNZXRob2QuY2Fycmllcl90aXRsZSxcbiAgICAgIHByaWNlOiBzaGlwcGluZ01ldGhvZC5hbW91bnQudmFsdWUsXG4gICAgICBtZXRob2RfY29kZTogc2hpcHBpbmdNZXRob2QubWV0aG9kX2NvZGUsXG4gICAgICBtZXRob2RfdGl0bGU6IHNoaXBwaW5nTWV0aG9kLm1ldGhvZF90aXRsZSxcblxuICAgICAgLy8gVE9ETzogaW1wbGVtZW50XG4gICAgICBpZDogbnVsbCxcbiAgICAgIG1ldGhvZF9kZXNjcmlwdGlvbjogbnVsbFxuICAgIH0gOiBudWxsXG4gIH1cbn1cbiJdfQ==