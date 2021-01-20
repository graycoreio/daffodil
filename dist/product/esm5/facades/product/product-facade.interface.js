/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A facade for getting state about a particular product.
 * @record
 * @template T
 */
export function DaffProductFacadeInterface() { }
if (false) {
    /**
     * Whether a product is being loaded.
     * @type {?}
     */
    DaffProductFacadeInterface.prototype.loading$;
    /**
     * deprecated - use getProduct instead.
     * @deprecated use getProduct instead.
     * @type {?}
     */
    DaffProductFacadeInterface.prototype.product$;
    /**
     * Get a product.
     * @param {?} id a product id
     * @return {?}
     */
    DaffProductFacadeInterface.prototype.getProduct = function (id) { };
    /**
     * Get the original price for a product.
     * @param {?} id a product id
     * @return {?}
     */
    DaffProductFacadeInterface.prototype.getPrice = function (id) { };
    /**
     * Whether a particular product has a discount.
     * @param {?} id a product id
     * @return {?}
     */
    DaffProductFacadeInterface.prototype.hasDiscount = function (id) { };
    /**
     * Get the discount amount of a product.
     * @param {?} id a product id
     * @return {?}
     */
    DaffProductFacadeInterface.prototype.getDiscountAmount = function (id) { };
    /**
     * Get the discounted price for a product.
     * @param {?} id a product id
     * @return {?}
     */
    DaffProductFacadeInterface.prototype.getDiscountedPrice = function (id) { };
    /**
     * Get the discount percent of a product.
     * @param {?} id a product id
     * @return {?}
     */
    DaffProductFacadeInterface.prototype.getDiscountPercent = function (id) { };
    /**
     * Whether a product is out of stock.
     * @param {?} id a product id
     * @return {?}
     */
    DaffProductFacadeInterface.prototype.isOutOfStock = function (id) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1mYWNhZGUuaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvIiwic291cmNlcyI6WyJmYWNhZGVzL3Byb2R1Y3QvcHJvZHVjdC1mYWNhZGUuaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQVVBLGdEQW9EQzs7Ozs7O0lBaERBLDhDQUE4Qjs7Ozs7O0lBSzlCLDhDQUF3Qjs7Ozs7O0lBTXhCLG9FQUFzQzs7Ozs7O0lBTXRDLGtFQUF5Qzs7Ozs7O0lBTXpDLHFFQUE2Qzs7Ozs7O0lBTTdDLDJFQUFrRDs7Ozs7O0lBTWxELDRFQUFtRDs7Ozs7O0lBTW5ELDRFQUFtRDs7Ozs7O0lBTW5ELHNFQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgRGFmZlN0b3JlRmFjYWRlIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvc3RhdGUnO1xuXG5pbXBvcnQgeyBEYWZmUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9kdWN0JztcblxuLyoqXG4gKiBBIGZhY2FkZSBmb3IgZ2V0dGluZyBzdGF0ZSBhYm91dCBhIHBhcnRpY3VsYXIgcHJvZHVjdC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEYWZmUHJvZHVjdEZhY2FkZUludGVyZmFjZTxUIGV4dGVuZHMgRGFmZlByb2R1Y3QgPSBEYWZmUHJvZHVjdD4gZXh0ZW5kcyBEYWZmU3RvcmVGYWNhZGU8QWN0aW9uPiB7XG5cdC8qKlxuXHQgKiBXaGV0aGVyIGEgcHJvZHVjdCBpcyBiZWluZyBsb2FkZWQuXG5cdCAqL1xuXHRsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblx0LyoqXG5cdCAqIGRlcHJlY2F0ZWQgLSB1c2UgZ2V0UHJvZHVjdCBpbnN0ZWFkLlxuXHQgKiBAZGVwcmVjYXRlZCB1c2UgZ2V0UHJvZHVjdCBpbnN0ZWFkLlxuXHQgKi9cblx0cHJvZHVjdCQ6IE9ic2VydmFibGU8VD47XG5cblx0LyoqXG5cdCAqIEdldCBhIHByb2R1Y3QuXG5cdCAqIEBwYXJhbSBpZCBhIHByb2R1Y3QgaWRcblx0ICovXG5cdGdldFByb2R1Y3QoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8VD47XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgb3JpZ2luYWwgcHJpY2UgZm9yIGEgcHJvZHVjdC5cblx0ICogQHBhcmFtIGlkIGEgcHJvZHVjdCBpZFxuXHQgKi9cblx0Z2V0UHJpY2UoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8bnVtYmVyPjtcblxuXHQvKipcblx0ICogV2hldGhlciBhIHBhcnRpY3VsYXIgcHJvZHVjdCBoYXMgYSBkaXNjb3VudC5cblx0ICogQHBhcmFtIGlkIGEgcHJvZHVjdCBpZFxuXHQgKi9cblx0aGFzRGlzY291bnQoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgZGlzY291bnQgYW1vdW50IG9mIGEgcHJvZHVjdC5cblx0ICogQHBhcmFtIGlkIGEgcHJvZHVjdCBpZFxuXHQgKi9cblx0Z2V0RGlzY291bnRBbW91bnQoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8bnVtYmVyPjtcblxuXHQvKipcblx0ICogR2V0IHRoZSBkaXNjb3VudGVkIHByaWNlIGZvciBhIHByb2R1Y3QuXG5cdCAqIEBwYXJhbSBpZCBhIHByb2R1Y3QgaWRcblx0ICovXG5cdGdldERpc2NvdW50ZWRQcmljZShpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGRpc2NvdW50IHBlcmNlbnQgb2YgYSBwcm9kdWN0LlxuXHQgKiBAcGFyYW0gaWQgYSBwcm9kdWN0IGlkXG5cdCAqL1xuXHRnZXREaXNjb3VudFBlcmNlbnQoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8bnVtYmVyPjtcblxuXHQvKipcblx0ICogV2hldGhlciBhIHByb2R1Y3QgaXMgb3V0IG9mIHN0b2NrLlxuXHQgKiBAcGFyYW0gaWQgYSBwcm9kdWN0IGlkXG5cdCAqL1xuXHRpc091dE9mU3RvY2soaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG59XG4iXX0=