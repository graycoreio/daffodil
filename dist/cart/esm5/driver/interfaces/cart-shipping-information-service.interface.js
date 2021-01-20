/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/**
 * The interface responsible for mediating the interaction of the shipping
 * information of a cart with a given platform.
 * @record
 * @template T, V
 */
export function DaffCartShippingInformationServiceInterface() { }
if (false) {
    /**
     * Get the currently selected shipping method of a cart.
     * @param {?} cartId
     * @return {?}
     */
    DaffCartShippingInformationServiceInterface.prototype.get = function (cartId) { };
    /**
     * Update the currently selected shipping method of a cart.
     * @param {?} cartId
     * @param {?} shippingInfo
     * @return {?}
     */
    DaffCartShippingInformationServiceInterface.prototype.update = function (cartId, shippingInfo) { };
    /**
     * Remove the currently selected shipping method from a cart.
     * @param {?} cartId
     * @param {?=} id
     * @return {?}
     */
    DaffCartShippingInformationServiceInterface.prototype.delete = function (cartId, id) { };
}
/** @type {?} */
export var DaffCartShippingInformationDriver = new InjectionToken('DaffCartShippingInformationDriver');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGlwcGluZy1pbmZvcm1hdGlvbi1zZXJ2aWNlLmludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci8iLCJzb3VyY2VzIjpbImludGVyZmFjZXMvY2FydC1zaGlwcGluZy1pbmZvcm1hdGlvbi1zZXJ2aWNlLmludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQVMvQyxpRUFlQzs7Ozs7OztJQVhBLGtGQUFvQzs7Ozs7OztJQUtwQyxtR0FBMEU7Ozs7Ozs7SUFLMUUseUZBQThEOzs7QUFHL0QsTUFBTSxLQUFPLGlDQUFpQyxHQUFHLElBQUksY0FBYyxDQUVqRSxtQ0FBbUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhZmZDYXJ0U2hpcHBpbmdSYXRlLCBEYWZmQ2FydCB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcblxuLyoqXG4gKiBUaGUgaW50ZXJmYWNlIHJlc3BvbnNpYmxlIGZvciBtZWRpYXRpbmcgdGhlIGludGVyYWN0aW9uIG9mIHRoZSBzaGlwcGluZ1xuICogaW5mb3JtYXRpb24gb2YgYSBjYXJ0IHdpdGggYSBnaXZlbiBwbGF0Zm9ybS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25TZXJ2aWNlSW50ZXJmYWNlPFQgZXh0ZW5kcyBEYWZmQ2FydFNoaXBwaW5nUmF0ZSA9IERhZmZDYXJ0U2hpcHBpbmdSYXRlLCBWIGV4dGVuZHMgRGFmZkNhcnQgPSBEYWZmQ2FydD57XG5cdC8qKlxuXHQgKiBHZXQgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBzaGlwcGluZyBtZXRob2Qgb2YgYSBjYXJ0LlxuXHQgKi9cblx0Z2V0KGNhcnRJZDogVlsnaWQnXSk6IE9ic2VydmFibGU8VD47XG5cblx0LyoqXG5cdCAqIFVwZGF0ZSB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHNoaXBwaW5nIG1ldGhvZCBvZiBhIGNhcnQuXG5cdCAqL1xuXHR1cGRhdGUoY2FydElkOiBWWydpZCddLCBzaGlwcGluZ0luZm86IFBhcnRpYWw8VD4pOiBPYnNlcnZhYmxlPFBhcnRpYWw8Vj4+O1xuXG5cdC8qKlxuXHQgKiBSZW1vdmUgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBzaGlwcGluZyBtZXRob2QgZnJvbSBhIGNhcnQuXG5cdCAqL1xuXHRkZWxldGUoY2FydElkOiBWWydpZCddLCBpZD86IFRbJ2lkJ10pOiBPYnNlcnZhYmxlPFBhcnRpYWw8Vj4+O1xufVxuXG5leHBvcnQgY29uc3QgRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uRHJpdmVyID0gbmV3IEluamVjdGlvblRva2VuPFxuXHREYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25TZXJ2aWNlSW50ZXJmYWNlPGFueSwgYW55PlxuPignRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uRHJpdmVyJyk7XG4iXX0=