/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/**
 * The interface responsible for applying a coupon to a cart.
 * @record
 * @template T, V
 */
export function DaffCartCouponServiceInterface() { }
if (false) {
    /**
     * Apply a coupon to the cart and return a partial of the cart.
     * @param {?} cartId
     * @param {?} coupon
     * @return {?}
     */
    DaffCartCouponServiceInterface.prototype.apply = function (cartId, coupon) { };
    /**
     * List coupon codes applied to a cart.
     * @param {?} cartId
     * @return {?}
     */
    DaffCartCouponServiceInterface.prototype.list = function (cartId) { };
    /**
     * Remove a coupon from the cart and return a partial of the cart.
     * @param {?} cartId
     * @param {?} coupon
     * @return {?}
     */
    DaffCartCouponServiceInterface.prototype.remove = function (cartId, coupon) { };
    /**
     * Remove all coupons from the cart and return a partial of the cart.
     * @param {?} cartId
     * @return {?}
     */
    DaffCartCouponServiceInterface.prototype.removeAll = function (cartId) { };
}
/** @type {?} */
export const DaffCartCouponDriver = new InjectionToken('DaffCartCouponDriver');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb3Vwb24tc2VydmljZS5pbnRlcmZhY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvIiwic291cmNlcyI6WyJpbnRlcmZhY2VzL2NhcnQtY291cG9uLXNlcnZpY2UuaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFRL0Msb0RBb0JDOzs7Ozs7OztJQWhCQSwrRUFBMEQ7Ozs7OztJQUsxRCxzRUFBdUM7Ozs7Ozs7SUFLdkMsZ0ZBQTJEOzs7Ozs7SUFLM0QsMkVBQW1EOzs7QUFHcEQsTUFBTSxPQUFPLG9CQUFvQixHQUFHLElBQUksY0FBYyxDQUNyRCxzQkFBc0IsQ0FDdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydCwgRGFmZkNhcnRDb3Vwb24gfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5cbi8qKlxuICogVGhlIGludGVyZmFjZSByZXNwb25zaWJsZSBmb3IgYXBwbHlpbmcgYSBjb3Vwb24gdG8gYSBjYXJ0LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERhZmZDYXJ0Q291cG9uU2VydmljZUludGVyZmFjZTxUIGV4dGVuZHMgRGFmZkNhcnQgPSBEYWZmQ2FydCwgViBleHRlbmRzIERhZmZDYXJ0Q291cG9uID0gRGFmZkNhcnRDb3Vwb24+IHtcblx0LyoqXG5cdCAqIEFwcGx5IGEgY291cG9uIHRvIHRoZSBjYXJ0IGFuZCByZXR1cm4gYSBwYXJ0aWFsIG9mIHRoZSBjYXJ0LlxuXHQgKi9cblx0YXBwbHkoY2FydElkOiBUWydpZCddLCBjb3Vwb246IFYpOiBPYnNlcnZhYmxlPFBhcnRpYWw8VD4+O1xuXG5cdC8qKlxuXHQgKiBMaXN0IGNvdXBvbiBjb2RlcyBhcHBsaWVkIHRvIGEgY2FydC5cblx0ICovXG5cdGxpc3QoY2FydElkOiBUWydpZCddKTogT2JzZXJ2YWJsZTxWW10+O1xuXG5cdC8qKlxuXHQgKiBSZW1vdmUgYSBjb3Vwb24gZnJvbSB0aGUgY2FydCBhbmQgcmV0dXJuIGEgcGFydGlhbCBvZiB0aGUgY2FydC5cblx0ICovXG5cdHJlbW92ZShjYXJ0SWQ6IFRbJ2lkJ10sIGNvdXBvbjogVik6IE9ic2VydmFibGU8UGFydGlhbDxUPj47XG5cblx0LyoqXG5cdCAqIFJlbW92ZSBhbGwgY291cG9ucyBmcm9tIHRoZSBjYXJ0IGFuZCByZXR1cm4gYSBwYXJ0aWFsIG9mIHRoZSBjYXJ0LlxuXHQgKi9cblx0cmVtb3ZlQWxsKGNhcnRJZDogVFsnaWQnXSk6IE9ic2VydmFibGU8UGFydGlhbDxUPj47XG59XG5cbmV4cG9ydCBjb25zdCBEYWZmQ2FydENvdXBvbkRyaXZlciA9IG5ldyBJbmplY3Rpb25Ub2tlbjxEYWZmQ2FydENvdXBvblNlcnZpY2VJbnRlcmZhY2U+KFxuXHQnRGFmZkNhcnRDb3Vwb25Ecml2ZXInLFxuKTtcbiJdfQ==