/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Transforms magento carts into an object usable by daffodil.
 */
var DaffMagentoCartPaymentTransformer = /** @class */ (function () {
    function DaffMagentoCartPaymentTransformer() {
    }
    /**
     * Transforms the magento CartPayment from the magento cart query into a DaffCartPaymentMethod.
     * @param response the response from a magento cart query.
     */
    /**
     * Transforms the magento CartPayment from the magento cart query into a DaffCartPaymentMethod.
     * @param {?} responsePayment
     * @return {?}
     */
    DaffMagentoCartPaymentTransformer.prototype.transform = /**
     * Transforms the magento CartPayment from the magento cart query into a DaffCartPaymentMethod.
     * @param {?} responsePayment
     * @return {?}
     */
    function (responsePayment) {
        return responsePayment ? tslib_1.__assign({ magento_payment_method: responsePayment }, { method: responsePayment.code }) : null;
    };
    DaffMagentoCartPaymentTransformer.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffMagentoCartPaymentTransformer.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoCartPaymentTransformer_Factory() { return new DaffMagentoCartPaymentTransformer(); }, token: DaffMagentoCartPaymentTransformer, providedIn: "root" });
    return DaffMagentoCartPaymentTransformer;
}());
export { DaffMagentoCartPaymentTransformer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYXltZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50by8iLCJzb3VyY2VzIjpbInRyYW5zZm9ybXMvb3V0cHV0cy9jYXJ0LXBheW1lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBUzNDO0lBQUE7S0FnQkM7SUFYQzs7O09BR0c7Ozs7OztJQUNILHFEQUFTOzs7OztJQUFULFVBQVUsZUFBeUM7UUFDakQsT0FBTyxlQUFlLENBQUMsQ0FBQyxrQkFDbkIsRUFBQyxzQkFBc0IsRUFBRSxlQUFlLEVBQUMsSUFFNUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxJQUFJLElBQzVCLENBQUMsQ0FBQyxJQUFJLENBQUE7SUFDVixDQUFDOztnQkFmRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7NENBWEQ7Q0F5QkMsQUFoQkQsSUFnQkM7U0FiWSxpQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhZmZDYXJ0UGF5bWVudE1ldGhvZCB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcblxuaW1wb3J0IHsgTWFnZW50b0NhcnRQYXltZW50TWV0aG9kIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Jlc3BvbnNlcy9jYXJ0LXBheW1lbnQtbWV0aG9kJztcblxuLyoqXG4gKiBUcmFuc2Zvcm1zIG1hZ2VudG8gY2FydHMgaW50byBhbiBvYmplY3QgdXNhYmxlIGJ5IGRhZmZvZGlsLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmTWFnZW50b0NhcnRQYXltZW50VHJhbnNmb3JtZXIge1xuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1zIHRoZSBtYWdlbnRvIENhcnRQYXltZW50IGZyb20gdGhlIG1hZ2VudG8gY2FydCBxdWVyeSBpbnRvIGEgRGFmZkNhcnRQYXltZW50TWV0aG9kLlxuICAgKiBAcGFyYW0gcmVzcG9uc2UgdGhlIHJlc3BvbnNlIGZyb20gYSBtYWdlbnRvIGNhcnQgcXVlcnkuXG4gICAqL1xuICB0cmFuc2Zvcm0ocmVzcG9uc2VQYXltZW50OiBNYWdlbnRvQ2FydFBheW1lbnRNZXRob2QpOiBEYWZmQ2FydFBheW1lbnRNZXRob2Qge1xuICAgIHJldHVybiByZXNwb25zZVBheW1lbnQgPyB7XG4gICAgICAuLi57bWFnZW50b19wYXltZW50X21ldGhvZDogcmVzcG9uc2VQYXltZW50fSxcblxuICAgICAgbWV0aG9kOiByZXNwb25zZVBheW1lbnQuY29kZVxuICAgIH0gOiBudWxsXG4gIH1cbn1cbiJdfQ==