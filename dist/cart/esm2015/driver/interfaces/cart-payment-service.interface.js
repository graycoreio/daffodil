/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/**
 * The interface responsible for managing the selected payment method of a cart.
 * @record
 * @template T, V, R
 */
export function DaffCartPaymentServiceInterface() { }
if (false) {
    /**
     * Get the currently applied payment method of a cart.
     * @param {?} cartId
     * @return {?}
     */
    DaffCartPaymentServiceInterface.prototype.get = function (cartId) { };
    /**
     * Update the payment method applied to a cart.
     * @param {?} cartId
     * @param {?} payment
     * @return {?}
     */
    DaffCartPaymentServiceInterface.prototype.update = function (cartId, payment) { };
    /**
     * Update the billing address and payment method applied to a cart.
     * @param {?} cartId
     * @param {?} payment
     * @param {?} address
     * @return {?}
     */
    DaffCartPaymentServiceInterface.prototype.updateWithBilling = function (cartId, payment, address) { };
    /**
     * Remove the payment method applied to a cart.
     * @param {?} cartId
     * @return {?}
     */
    DaffCartPaymentServiceInterface.prototype.remove = function (cartId) { };
}
/** @type {?} */
export const DaffCartPaymentDriver = new InjectionToken('DaffCartPaymentDriver');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYXltZW50LXNlcnZpY2UuaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyLyIsInNvdXJjZXMiOlsiaW50ZXJmYWNlcy9jYXJ0LXBheW1lbnQtc2VydmljZS5pbnRlcmZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztBQVEvQyxxREF3QkM7Ozs7Ozs7SUFoQkEsc0VBQW9DOzs7Ozs7O0lBS25DLGtGQUFxRTs7Ozs7Ozs7SUFLdEUsc0dBQXFHOzs7Ozs7SUFLckcseUVBQTBDOzs7QUFHM0MsTUFBTSxPQUFPLHFCQUFxQixHQUFHLElBQUksY0FBYyxDQUVyRCx1QkFBdUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhZmZDYXJ0UGF5bWVudE1ldGhvZCwgRGFmZkNhcnQsIERhZmZDYXJ0QWRkcmVzcyB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcblxuLyoqXG4gKiBUaGUgaW50ZXJmYWNlIHJlc3BvbnNpYmxlIGZvciBtYW5hZ2luZyB0aGUgc2VsZWN0ZWQgcGF5bWVudCBtZXRob2Qgb2YgYSBjYXJ0LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERhZmZDYXJ0UGF5bWVudFNlcnZpY2VJbnRlcmZhY2U8XG4gIFQgZXh0ZW5kcyBEYWZmQ2FydFBheW1lbnRNZXRob2QgPSBEYWZmQ2FydFBheW1lbnRNZXRob2QsXG4gIFYgZXh0ZW5kcyBEYWZmQ2FydCA9IERhZmZDYXJ0LFxuICBSIGV4dGVuZHMgRGFmZkNhcnRBZGRyZXNzID0gRGFmZkNhcnRBZGRyZXNzXG4+IHtcblx0LyoqXG5cdCAqIEdldCB0aGUgY3VycmVudGx5IGFwcGxpZWQgcGF5bWVudCBtZXRob2Qgb2YgYSBjYXJ0LlxuXHQgKi9cblx0Z2V0KGNhcnRJZDogVlsnaWQnXSk6IE9ic2VydmFibGU8VD47XG5cblx0LyoqXG5cdCAqIFVwZGF0ZSB0aGUgcGF5bWVudCBtZXRob2QgYXBwbGllZCB0byBhIGNhcnQuXG5cdCAqL1xuICB1cGRhdGUoY2FydElkOiBWWydpZCddLCBwYXltZW50OiBQYXJ0aWFsPFQ+KTogT2JzZXJ2YWJsZTxQYXJ0aWFsPFY+PjtcblxuICAvKipcblx0ICogVXBkYXRlIHRoZSBiaWxsaW5nIGFkZHJlc3MgYW5kIHBheW1lbnQgbWV0aG9kIGFwcGxpZWQgdG8gYSBjYXJ0LlxuXHQgKi9cblx0dXBkYXRlV2l0aEJpbGxpbmcoY2FydElkOiBWWydpZCddLCBwYXltZW50OiBQYXJ0aWFsPFQ+LCBhZGRyZXNzOiBQYXJ0aWFsPFI+KTogT2JzZXJ2YWJsZTxQYXJ0aWFsPFY+PjtcblxuXHQvKipcblx0ICogUmVtb3ZlIHRoZSBwYXltZW50IG1ldGhvZCBhcHBsaWVkIHRvIGEgY2FydC5cblx0ICovXG5cdHJlbW92ZShjYXJ0SWQ6IFZbJ2lkJ10pOiBPYnNlcnZhYmxlPHZvaWQ+O1xufVxuXG5leHBvcnQgY29uc3QgRGFmZkNhcnRQYXltZW50RHJpdmVyID0gbmV3IEluamVjdGlvblRva2VuPFxuXHREYWZmQ2FydFBheW1lbnRTZXJ2aWNlSW50ZXJmYWNlPGFueSwgYW55PlxuPignRGFmZkNhcnRQYXltZW50RHJpdmVyJyk7XG4iXX0=