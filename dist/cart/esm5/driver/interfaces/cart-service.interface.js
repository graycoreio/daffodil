/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/**
 * The interface responsible for managing a customer's cart.
 * @record
 * @template T
 */
export function DaffCartServiceInterface() { }
if (false) {
    /**
     * Retrieve a cart
     * @param {?} id
     * @return {?}
     */
    DaffCartServiceInterface.prototype.get = function (id) { };
    /**
     * Creates a cart.
     * @return {?}
     */
    DaffCartServiceInterface.prototype.create = function () { };
    /**
     * @deprecated
     * Prefer DaffCartItemServiceInterface.add
     *
     * Add an item to the cart.
     * @param {?} productId
     * @param {?} qty
     * @return {?}
     */
    DaffCartServiceInterface.prototype.addToCart = function (productId, qty) { };
    /**
     * Remove all items from a cart.
     * @param {?} id
     * @return {?}
     */
    DaffCartServiceInterface.prototype.clear = function (id) { };
}
/** @type {?} */
export var DaffCartDriver = new InjectionToken('DaffCartDriver');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zZXJ2aWNlLmludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci8iLCJzb3VyY2VzIjpbImludGVyZmFjZXMvY2FydC1zZXJ2aWNlLmludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBUS9DLDhDQXVCQzs7Ozs7OztJQW5CQywyREFBZ0M7Ozs7O0lBS2hDLDREQUFtQzs7Ozs7Ozs7OztJQVFwQyw2RUFBeUQ7Ozs7OztJQUt6RCw2REFBMkM7OztBQUc1QyxNQUFNLEtBQU8sY0FBYyxHQUFHLElBQUksY0FBYyxDQUMvQyxnQkFBZ0IsQ0FDaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydCB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcblxuLyoqXG4gKiBUaGUgaW50ZXJmYWNlIHJlc3BvbnNpYmxlIGZvciBtYW5hZ2luZyBhIGN1c3RvbWVyJ3MgY2FydC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEYWZmQ2FydFNlcnZpY2VJbnRlcmZhY2U8VCBleHRlbmRzIERhZmZDYXJ0ID0gRGFmZkNhcnQ+IHtcblx0LyoqXG5cdCAqIFJldHJpZXZlIGEgY2FydFxuXHQgKi9cbiAgZ2V0KGlkOiBUWydpZCddKTogT2JzZXJ2YWJsZTxUPjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGNhcnQuXG4gICAqL1xuICBjcmVhdGUoKTogT2JzZXJ2YWJsZTx7aWQ6IFRbJ2lkJ119PlxuXG5cdC8qKlxuXHQgKiBAZGVwcmVjYXRlZFxuXHQgKiBQcmVmZXIgRGFmZkNhcnRJdGVtU2VydmljZUludGVyZmFjZS5hZGRcblx0ICpcblx0ICogQWRkIGFuIGl0ZW0gdG8gdGhlIGNhcnQuXG5cdCAqL1xuXHRhZGRUb0NhcnQocHJvZHVjdElkOiBzdHJpbmcsIHF0eTogbnVtYmVyKTogT2JzZXJ2YWJsZTxUPjtcblxuXHQvKipcblx0ICogUmVtb3ZlIGFsbCBpdGVtcyBmcm9tIGEgY2FydC5cblx0ICovXG5cdGNsZWFyKGlkOiBUWydpZCddKTogT2JzZXJ2YWJsZTxQYXJ0aWFsPFQ+Pjtcbn1cblxuZXhwb3J0IGNvbnN0IERhZmZDYXJ0RHJpdmVyID0gbmV3IEluamVjdGlvblRva2VuPERhZmZDYXJ0U2VydmljZUludGVyZmFjZTxhbnk+Pihcblx0J0RhZmZDYXJ0RHJpdmVyJyxcbik7XG4iXX0=