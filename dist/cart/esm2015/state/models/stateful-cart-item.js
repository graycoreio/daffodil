/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The state of the cart item is intended to enhance the client side UX like indicating when a cart
 * item was recently added/updated. For states that indicate the completion of some process, the state is given
 * a decay time based on the DaffCartItemStateDebounceTime injection token. For example when a cart item is
 * added to the cart, the state of that item will be "New" for a designated time then will revert to the default state.
 * @record
 */
export function DaffStatefulCartItem() { }
if (false) {
    /** @type {?} */
    DaffStatefulCartItem.prototype.daffState;
}
/** @enum {string} */
const DaffCartItemStateEnum = {
    New: 'new',
    Updated: 'updated',
    Mutating: 'mutating',
    Default: 'default',
};
export { DaffCartItemStateEnum };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGVmdWwtY2FydC1pdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvc3RhdGUvIiwic291cmNlcyI6WyJtb2RlbHMvc3RhdGVmdWwtY2FydC1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsMENBRUM7OztJQURBLHlDQUFnQzs7OztJQUloQyxLQUFNLEtBQUs7SUFDWCxTQUFVLFNBQVM7SUFDbkIsVUFBVyxVQUFVO0lBQ3JCLFNBQVUsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhZmZDYXJ0SXRlbSB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcblxuLyoqXG4gKiBUaGUgc3RhdGUgb2YgdGhlIGNhcnQgaXRlbSBpcyBpbnRlbmRlZCB0byBlbmhhbmNlIHRoZSBjbGllbnQgc2lkZSBVWCBsaWtlIGluZGljYXRpbmcgd2hlbiBhIGNhcnRcbiAqIGl0ZW0gd2FzIHJlY2VudGx5IGFkZGVkL3VwZGF0ZWQuIEZvciBzdGF0ZXMgdGhhdCBpbmRpY2F0ZSB0aGUgY29tcGxldGlvbiBvZiBzb21lIHByb2Nlc3MsIHRoZSBzdGF0ZSBpcyBnaXZlbiBcbiAqIGEgZGVjYXkgdGltZSBiYXNlZCBvbiB0aGUgRGFmZkNhcnRJdGVtU3RhdGVEZWJvdW5jZVRpbWUgaW5qZWN0aW9uIHRva2VuLiBGb3IgZXhhbXBsZSB3aGVuIGEgY2FydCBpdGVtIGlzXG4gKiBhZGRlZCB0byB0aGUgY2FydCwgdGhlIHN0YXRlIG9mIHRoYXQgaXRlbSB3aWxsIGJlIFwiTmV3XCIgZm9yIGEgZGVzaWduYXRlZCB0aW1lIHRoZW4gd2lsbCByZXZlcnQgdG8gdGhlIGRlZmF1bHQgc3RhdGUuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGFmZlN0YXRlZnVsQ2FydEl0ZW0gZXh0ZW5kcyBEYWZmQ2FydEl0ZW0ge1xuXHRkYWZmU3RhdGU6IERhZmZDYXJ0SXRlbVN0YXRlRW51bVxufVxuXG5leHBvcnQgZW51bSBEYWZmQ2FydEl0ZW1TdGF0ZUVudW0ge1xuXHROZXcgPSAnbmV3Jyxcblx0VXBkYXRlZCA9ICd1cGRhdGVkJyxcblx0TXV0YXRpbmcgPSAnbXV0YXRpbmcnLFxuXHREZWZhdWx0ID0gJ2RlZmF1bHQnXG59XG4iXX0=