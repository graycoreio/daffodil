/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/**
 * The interface responsible for managing the items of a cart.
 * @record
 * @template T, U, V
 */
export function DaffCartItemServiceInterface() { }
if (false) {
    /**
     * List all of the available items of a cart
     * @param {?} cartId
     * @return {?}
     */
    DaffCartItemServiceInterface.prototype.list = function (cartId) { };
    /**
     * Get a specific cart item of a cart.
     * @param {?} cartId
     * @param {?} item_id
     * @return {?}
     */
    DaffCartItemServiceInterface.prototype.get = function (cartId, item_id) { };
    /**
     * Add something to a cart.
     * @param {?} id
     * @param {?} product
     * @return {?}
     */
    DaffCartItemServiceInterface.prototype.add = function (id, product) { };
    /**
     * Update an existing item in a cart
     * @param {?} cartId
     * @param {?} itemId
     * @param {?} changes
     * @return {?}
     */
    DaffCartItemServiceInterface.prototype.update = function (cartId, itemId, changes) { };
    /**
     * Remove an item from a cart.
     * @param {?} cartId
     * @param {?} itemId
     * @return {?}
     */
    DaffCartItemServiceInterface.prototype.delete = function (cartId, itemId) { };
}
/** @type {?} */
export const DaffCartItemDriver = new InjectionToken('DaffCartItemDriver');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLXNlcnZpY2UuaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyLyIsInNvdXJjZXMiOlsiaW50ZXJmYWNlcy9jYXJ0LWl0ZW0tc2VydmljZS5pbnRlcmZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztBQVEvQyxrREFpQ0M7Ozs7Ozs7SUF6QkEsb0VBQXVDOzs7Ozs7O0lBS3ZDLDRFQUFzRTs7Ozs7OztJQUt0RSx3RUFBcUQ7Ozs7Ozs7O0lBS3JELHVGQUkwQjs7Ozs7OztJQUsxQiw4RUFBc0U7OztBQUd2RSxNQUFNLE9BQU8sa0JBQWtCLEdBQUcsSUFBSSxjQUFjLENBRWxELG9CQUFvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGFmZkNhcnRJdGVtLCBEYWZmQ2FydEl0ZW1JbnB1dCwgRGFmZkNhcnQgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5cbi8qKlxuICogVGhlIGludGVyZmFjZSByZXNwb25zaWJsZSBmb3IgbWFuYWdpbmcgdGhlIGl0ZW1zIG9mIGEgY2FydC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEYWZmQ2FydEl0ZW1TZXJ2aWNlSW50ZXJmYWNlPFxuXHRUIGV4dGVuZHMgRGFmZkNhcnRJdGVtID0gRGFmZkNhcnRJdGVtLFxuXHRVIGV4dGVuZHMgRGFmZkNhcnRJdGVtSW5wdXQgPSBEYWZmQ2FydEl0ZW1JbnB1dCxcblx0ViBleHRlbmRzIERhZmZDYXJ0ID0gRGFmZkNhcnRcbj4ge1xuXHQvKipcblx0ICogTGlzdCBhbGwgb2YgdGhlIGF2YWlsYWJsZSBpdGVtcyBvZiBhIGNhcnRcblx0ICovXG5cdGxpc3QoY2FydElkOiBWWydpZCddKTogT2JzZXJ2YWJsZTxUW10+O1xuXG5cdC8qKlxuXHQgKiBHZXQgYSBzcGVjaWZpYyBjYXJ0IGl0ZW0gb2YgYSBjYXJ0LlxuXHQgKi9cblx0Z2V0KGNhcnRJZDogVlsnaWQnXSwgaXRlbV9pZDogRGFmZkNhcnRJdGVtWydpdGVtX2lkJ10pOiBPYnNlcnZhYmxlPFQ+O1xuXG5cdC8qKlxuXHQgKiBBZGQgc29tZXRoaW5nIHRvIGEgY2FydC5cblx0ICovXG5cdGFkZChpZDogVlsnaWQnXSwgcHJvZHVjdDogVSk6IE9ic2VydmFibGU8UGFydGlhbDxWPj47XG5cblx0LyoqXG5cdCAqIFVwZGF0ZSBhbiBleGlzdGluZyBpdGVtIGluIGEgY2FydFxuXHQgKi9cblx0dXBkYXRlKFxuXHRcdGNhcnRJZDogVlsnaWQnXSxcblx0XHRpdGVtSWQ6IFRbJ2l0ZW1faWQnXSxcblx0XHRjaGFuZ2VzOiBQYXJ0aWFsPFQ+LFxuXHQpOiBPYnNlcnZhYmxlPFBhcnRpYWw8Vj4+O1xuXG5cdC8qKlxuXHQgKiBSZW1vdmUgYW4gaXRlbSBmcm9tIGEgY2FydC5cblx0ICovXG5cdGRlbGV0ZShjYXJ0SWQ6IFZbJ2lkJ10sIGl0ZW1JZDogVFsnaXRlbV9pZCddKTogT2JzZXJ2YWJsZTxQYXJ0aWFsPFY+Pjtcbn1cblxuZXhwb3J0IGNvbnN0IERhZmZDYXJ0SXRlbURyaXZlciA9IG5ldyBJbmplY3Rpb25Ub2tlbjxcblx0RGFmZkNhcnRJdGVtU2VydmljZUludGVyZmFjZTxhbnksIGFueSwgYW55PlxuPignRGFmZkNhcnRJdGVtRHJpdmVyJyk7XG4iXX0=