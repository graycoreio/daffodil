/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An interface for a facade that accesses configurable product state.
 * Exposes many parts of the state for easy access and allows dispatching of actions.
 * @record
 */
export function DaffConfigurableProductFacadeInterface() { }
if (false) {
    /**
     * All attributes of a configurable product.
     * @param {?} id the id of the configurable product.
     * @return {?}
     */
    DaffConfigurableProductFacadeInterface.prototype.getAllAttributes = function (id) { };
    /**
     * All variants of a configurable product.
     * @param {?} id the id of the configurable product.
     * @return {?}
     */
    DaffConfigurableProductFacadeInterface.prototype.getAllVariants = function (id) { };
    /**
     * The applied attributes of a configurable product.
     * @param {?} id the id of the configurable product.
     * @return {?}
     */
    DaffConfigurableProductFacadeInterface.prototype.getAppliedAttributes = function (id) { };
    /**
     * Get the current minimum price possible based on the applied attributes and remaining variants.
     * @param {?} id the id of the configurable product.
     * @return {?}
     */
    DaffConfigurableProductFacadeInterface.prototype.getMinimumPrice = function (id) { };
    /**
     * Get the current maximum price possible based on the applied attributes and remaining variants.
     * @param {?} id the id of the configurable product.
     * @return {?}
     */
    DaffConfigurableProductFacadeInterface.prototype.getMaximumPrice = function (id) { };
    /**
     * Get the current minimum discounted price possible based on the applied attributes and remaining variants.
     * @param {?} id the id of the configurable product.
     * @return {?}
     */
    DaffConfigurableProductFacadeInterface.prototype.getMinimumDiscountedPrice = function (id) { };
    /**
     * Get the current maximum discounted price possible based on the applied attributes and remaining variants.
     * @param {?} id the id of the configurable product.
     * @return {?}
     */
    DaffConfigurableProductFacadeInterface.prototype.getMaximumDiscountedPrice = function (id) { };
    /**
     * Get the current minimum percent discount possible based on the applied attributes and remaining variants.
     * @param {?} id the id of the configurable product.
     * @return {?}
     */
    DaffConfigurableProductFacadeInterface.prototype.getMinimumPercentDiscount = function (id) { };
    /**
     * Get the current maximum percent discount possible based on the applied attributes and remaining variants.
     * @param {?} id the id of the configurable product.
     * @return {?}
     */
    DaffConfigurableProductFacadeInterface.prototype.getMaximumPercentDiscount = function (id) { };
    /**
     * Returns whether the possible price for the configurable product is a range of different prices
     * @param {?} id the id of the configurable product.
     * @return {?}
     */
    DaffConfigurableProductFacadeInterface.prototype.isPriceRanged = function (id) { };
    /**
     * Returns whether the variants of the configurable product have (a) discount(s)
     * @param {?} id the id of the configurable product.
     * @return {?}
     */
    DaffConfigurableProductFacadeInterface.prototype.hasDiscount = function (id) { };
    /**
     * Selectable configurable product attributes derived from the remaining variants and the order of currently applied attributes.
     * The remaining variants of the product are derived from the currently applied attributes.
     * @param {?} id the id of the configurable product.
     * @return {?}
     */
    DaffConfigurableProductFacadeInterface.prototype.getSelectableAttributes = function (id) { };
    /**
     * The variants that match the applied attributes of a configurable product.
     * @param {?} id the id of the configurable product.
     * @return {?}
     */
    DaffConfigurableProductFacadeInterface.prototype.getMatchingVariants = function (id) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXByb2R1Y3QtZmFjYWRlLmludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9wcm9kdWN0LyIsInNvdXJjZXMiOlsiZmFjYWRlcy9jb25maWd1cmFibGUtcHJvZHVjdC9jb25maWd1cmFibGUtcHJvZHVjdC1mYWNhZGUuaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQVdBLDREQWdGQzs7Ozs7OztJQTFFQSxzRkFBK0Q7Ozs7OztJQU0vRCxvRkFBeUU7Ozs7OztJQU16RSwwRkFBaUU7Ozs7OztJQU1qRSxxRkFBZ0Q7Ozs7OztJQU1oRCxxRkFBZ0Q7Ozs7OztJQU1oRCwrRkFBMEQ7Ozs7OztJQU0xRCwrRkFBMEQ7Ozs7OztJQU0xRCwrRkFBMEQ7Ozs7OztJQU0xRCwrRkFBMEQ7Ozs7OztJQU0xRCxtRkFBK0M7Ozs7OztJQU0vQyxpRkFBNkM7Ozs7Ozs7SUFPN0MsNkZBQXNFOzs7Ozs7SUFNdEUseUZBQThFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRGljdGlvbmFyeSB9IGZyb20gJ0BuZ3J4L2VudGl0eSc7XG5cbmltcG9ydCB7IERhZmZTdG9yZUZhY2FkZSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3N0YXRlJztcbmltcG9ydCB7IERhZmZDb25maWd1cmFibGVQcm9kdWN0VmFyaWFudCB9IGZyb20gJy4uLy4uL21vZGVscy9jb25maWd1cmFibGUtcHJvZHVjdCc7XG5cbi8qKlxuICogQW4gaW50ZXJmYWNlIGZvciBhIGZhY2FkZSB0aGF0IGFjY2Vzc2VzIGNvbmZpZ3VyYWJsZSBwcm9kdWN0IHN0YXRlLlxuICogRXhwb3NlcyBtYW55IHBhcnRzIG9mIHRoZSBzdGF0ZSBmb3IgZWFzeSBhY2Nlc3MgYW5kIGFsbG93cyBkaXNwYXRjaGluZyBvZiBhY3Rpb25zLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERhZmZDb25maWd1cmFibGVQcm9kdWN0RmFjYWRlSW50ZXJmYWNlIGV4dGVuZHMgRGFmZlN0b3JlRmFjYWRlPEFjdGlvbj4ge1xuXG5cdC8qKlxuXHQgKiBBbGwgYXR0cmlidXRlcyBvZiBhIGNvbmZpZ3VyYWJsZSBwcm9kdWN0LlxuXHQgKiBAcGFyYW0gaWQgdGhlIGlkIG9mIHRoZSBjb25maWd1cmFibGUgcHJvZHVjdC5cblx0ICovXG5cdGdldEFsbEF0dHJpYnV0ZXMoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RGljdGlvbmFyeTxzdHJpbmdbXT4+O1xuXG5cdC8qKlxuXHQgKiBBbGwgdmFyaWFudHMgb2YgYSBjb25maWd1cmFibGUgcHJvZHVjdC5cblx0ICogQHBhcmFtIGlkIHRoZSBpZCBvZiB0aGUgY29uZmlndXJhYmxlIHByb2R1Y3QuXG5cdCAqL1xuXHRnZXRBbGxWYXJpYW50cyhpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxEYWZmQ29uZmlndXJhYmxlUHJvZHVjdFZhcmlhbnRbXT47XG5cblx0LyoqXG5cdCAqIFRoZSBhcHBsaWVkIGF0dHJpYnV0ZXMgb2YgYSBjb25maWd1cmFibGUgcHJvZHVjdC5cblx0ICogQHBhcmFtIGlkIHRoZSBpZCBvZiB0aGUgY29uZmlndXJhYmxlIHByb2R1Y3QuXG5cdCAqL1xuXHRnZXRBcHBsaWVkQXR0cmlidXRlcyhpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxEaWN0aW9uYXJ5PHN0cmluZz4+O1xuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGN1cnJlbnQgbWluaW11bSBwcmljZSBwb3NzaWJsZSBiYXNlZCBvbiB0aGUgYXBwbGllZCBhdHRyaWJ1dGVzIGFuZCByZW1haW5pbmcgdmFyaWFudHMuXG5cdCAqIEBwYXJhbSBpZCB0aGUgaWQgb2YgdGhlIGNvbmZpZ3VyYWJsZSBwcm9kdWN0LlxuXHQgKi9cblx0Z2V0TWluaW11bVByaWNlKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPG51bWJlcj47XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgY3VycmVudCBtYXhpbXVtIHByaWNlIHBvc3NpYmxlIGJhc2VkIG9uIHRoZSBhcHBsaWVkIGF0dHJpYnV0ZXMgYW5kIHJlbWFpbmluZyB2YXJpYW50cy5cblx0ICogQHBhcmFtIGlkIHRoZSBpZCBvZiB0aGUgY29uZmlndXJhYmxlIHByb2R1Y3QuXG5cdCAqL1xuXHRnZXRNYXhpbXVtUHJpY2UoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8bnVtYmVyPjtcblxuXHQvKipcblx0ICogR2V0IHRoZSBjdXJyZW50IG1pbmltdW0gZGlzY291bnRlZCBwcmljZSBwb3NzaWJsZSBiYXNlZCBvbiB0aGUgYXBwbGllZCBhdHRyaWJ1dGVzIGFuZCByZW1haW5pbmcgdmFyaWFudHMuXG5cdCAqIEBwYXJhbSBpZCB0aGUgaWQgb2YgdGhlIGNvbmZpZ3VyYWJsZSBwcm9kdWN0LlxuXHQgKi9cblx0Z2V0TWluaW11bURpc2NvdW50ZWRQcmljZShpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGN1cnJlbnQgbWF4aW11bSBkaXNjb3VudGVkIHByaWNlIHBvc3NpYmxlIGJhc2VkIG9uIHRoZSBhcHBsaWVkIGF0dHJpYnV0ZXMgYW5kIHJlbWFpbmluZyB2YXJpYW50cy5cblx0ICogQHBhcmFtIGlkIHRoZSBpZCBvZiB0aGUgY29uZmlndXJhYmxlIHByb2R1Y3QuXG5cdCAqL1xuXHRnZXRNYXhpbXVtRGlzY291bnRlZFByaWNlKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPG51bWJlcj47XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgY3VycmVudCBtaW5pbXVtIHBlcmNlbnQgZGlzY291bnQgcG9zc2libGUgYmFzZWQgb24gdGhlIGFwcGxpZWQgYXR0cmlidXRlcyBhbmQgcmVtYWluaW5nIHZhcmlhbnRzLlxuXHQgKiBAcGFyYW0gaWQgdGhlIGlkIG9mIHRoZSBjb25maWd1cmFibGUgcHJvZHVjdC5cblx0ICovXG5cdGdldE1pbmltdW1QZXJjZW50RGlzY291bnQoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8bnVtYmVyPjtcblxuXHQvKipcblx0ICogR2V0IHRoZSBjdXJyZW50IG1heGltdW0gcGVyY2VudCBkaXNjb3VudCBwb3NzaWJsZSBiYXNlZCBvbiB0aGUgYXBwbGllZCBhdHRyaWJ1dGVzIGFuZCByZW1haW5pbmcgdmFyaWFudHMuXG5cdCAqIEBwYXJhbSBpZCB0aGUgaWQgb2YgdGhlIGNvbmZpZ3VyYWJsZSBwcm9kdWN0LlxuXHQgKi9cblx0Z2V0TWF4aW11bVBlcmNlbnREaXNjb3VudChpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHBvc3NpYmxlIHByaWNlIGZvciB0aGUgY29uZmlndXJhYmxlIHByb2R1Y3QgaXMgYSByYW5nZSBvZiBkaWZmZXJlbnQgcHJpY2VzXG5cdCAqIEBwYXJhbSBpZCB0aGUgaWQgb2YgdGhlIGNvbmZpZ3VyYWJsZSBwcm9kdWN0LlxuXHQgKi9cblx0aXNQcmljZVJhbmdlZChpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuXHQvKipcblx0ICogUmV0dXJucyB3aGV0aGVyIHRoZSB2YXJpYW50cyBvZiB0aGUgY29uZmlndXJhYmxlIHByb2R1Y3QgaGF2ZSAoYSkgZGlzY291bnQocylcblx0ICogQHBhcmFtIGlkIHRoZSBpZCBvZiB0aGUgY29uZmlndXJhYmxlIHByb2R1Y3QuXG5cdCAqL1xuXHRoYXNEaXNjb3VudChpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuXHQvKipcblx0ICogU2VsZWN0YWJsZSBjb25maWd1cmFibGUgcHJvZHVjdCBhdHRyaWJ1dGVzIGRlcml2ZWQgZnJvbSB0aGUgcmVtYWluaW5nIHZhcmlhbnRzIGFuZCB0aGUgb3JkZXIgb2YgY3VycmVudGx5IGFwcGxpZWQgYXR0cmlidXRlcy5cblx0ICogVGhlIHJlbWFpbmluZyB2YXJpYW50cyBvZiB0aGUgcHJvZHVjdCBhcmUgZGVyaXZlZCBmcm9tIHRoZSBjdXJyZW50bHkgYXBwbGllZCBhdHRyaWJ1dGVzLlxuXHQgKiBAcGFyYW0gaWQgdGhlIGlkIG9mIHRoZSBjb25maWd1cmFibGUgcHJvZHVjdC5cblx0ICovXG5cdGdldFNlbGVjdGFibGVBdHRyaWJ1dGVzKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPERpY3Rpb25hcnk8c3RyaW5nW10+PjtcblxuXHQvKipcblx0ICogVGhlIHZhcmlhbnRzIHRoYXQgbWF0Y2ggdGhlIGFwcGxpZWQgYXR0cmlidXRlcyBvZiBhIGNvbmZpZ3VyYWJsZSBwcm9kdWN0LlxuXHQgKiBAcGFyYW0gaWQgdGhlIGlkIG9mIHRoZSBjb25maWd1cmFibGUgcHJvZHVjdC5cblx0ICovXG5cdGdldE1hdGNoaW5nVmFyaWFudHMoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RWYXJpYW50W10+O1xufVxuIl19