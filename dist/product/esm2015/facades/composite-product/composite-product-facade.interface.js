/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A facade for interacting with the composite product state.
 * Exposes many parts of the state for easy access and allows dispatching of actions.
 * @record
 */
export function DaffCompositeProductFacadeInterface() { }
if (false) {
    /**
     * Get a DaffPriceRange for a composite product based on the configuration provided excluding unselected, optional item prices.
     * @param {?} id an id for a composite product
     * @param {?=} configuration a Dictionary of DaffCompositeConfigurationItems
     * @return {?}
     */
    DaffCompositeProductFacadeInterface.prototype.getRequiredItemPricesForConfiguration = function (id, configuration) { };
    /**
     * Get the broadest possible DaffPriceRange for a composite product based on the configuration provided including optional item prices.
     * @param {?} id the id of the composite product.
     * @param {?=} configuration
     * @return {?}
     */
    DaffCompositeProductFacadeInterface.prototype.getOptionalItemPricesForConfiguration = function (id, configuration) { };
    /**
     * Get the DaffPriceRange for a composite product based on the current configuration of selected item options in redux state and
     * excluding unselected, optional item prices.
     * @param {?} id the id of the composite product.
     * @return {?}
     */
    DaffCompositeProductFacadeInterface.prototype.getPricesAsCurrentlyConfigured = function (id) { };
    /**
     * Returns the applied options for a composite product.
     * @param {?} id the id of the composite product.
     * @return {?}
     */
    DaffCompositeProductFacadeInterface.prototype.getAppliedOptions = function (id) { };
    /**
     * Returns whether the item of a composite product is required.
     * @param {?} id the id of the composite product.
     * @param {?} item_id the id of the item_id.
     * @return {?}
     */
    DaffCompositeProductFacadeInterface.prototype.isItemRequired = function (id, item_id) { };
    /**
     * Returns whether a DaffPriceRange has a discount.
     * @param {?} priceRange a DaffPriceRange
     * @return {?}
     */
    DaffCompositeProductFacadeInterface.prototype.hasDiscount = function (priceRange) { };
    /**
     * Returns whether the min and max prices of a DaffPriceRange are different.
     * @param {?} priceRange a DaffPriceRange
     * @return {?}
     */
    DaffCompositeProductFacadeInterface.prototype.hasPriceRange = function (priceRange) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRlLXByb2R1Y3QtZmFjYWRlLmludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9wcm9kdWN0LyIsInNvdXJjZXMiOlsiZmFjYWRlcy9jb21wb3NpdGUtcHJvZHVjdC9jb21wb3NpdGUtcHJvZHVjdC1mYWNhZGUuaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQWVBLHlEQThDQzs7Ozs7Ozs7SUF2Q0EsdUhBQTBJOzs7Ozs7O0lBTTFJLHVIQUEwSTs7Ozs7OztJQU8xSSxpR0FBdUU7Ozs7OztJQU12RSxvRkFBc0Y7Ozs7Ozs7SUFPdEYsMEZBQTZHOzs7Ozs7SUFNN0csc0ZBQWlEOzs7Ozs7SUFNakQsd0ZBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRGljdGlvbmFyeSB9IGZyb20gJ0BuZ3J4L2VudGl0eSc7XG5cbmltcG9ydCB7IERhZmZTdG9yZUZhY2FkZSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3N0YXRlJztcblxuaW1wb3J0IHsgRGFmZkNvbXBvc2l0ZVByb2R1Y3RJdGVtT3B0aW9uLCBEYWZmQ29tcG9zaXRlUHJvZHVjdEl0ZW0gfSBmcm9tICcuLi8uLi9tb2RlbHMvY29tcG9zaXRlLXByb2R1Y3QtaXRlbSc7XG5pbXBvcnQgeyBEYWZmQ29tcG9zaXRlUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVscy9jb21wb3NpdGUtcHJvZHVjdCc7XG5pbXBvcnQgeyBEYWZmUHJpY2VSYW5nZSB9IGZyb20gJy4uLy4uL21vZGVscy9wcmljZXMnO1xuaW1wb3J0IHsgRGFmZkNvbXBvc2l0ZUNvbmZpZ3VyYXRpb25JdGVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbXBvc2l0ZS1jb25maWd1cmF0aW9uLWl0ZW0nO1xuXG4vKipcbiAqIEEgZmFjYWRlIGZvciBpbnRlcmFjdGluZyB3aXRoIHRoZSBjb21wb3NpdGUgcHJvZHVjdCBzdGF0ZS5cbiAqIEV4cG9zZXMgbWFueSBwYXJ0cyBvZiB0aGUgc3RhdGUgZm9yIGVhc3kgYWNjZXNzIGFuZCBhbGxvd3MgZGlzcGF0Y2hpbmcgb2YgYWN0aW9ucy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEYWZmQ29tcG9zaXRlUHJvZHVjdEZhY2FkZUludGVyZmFjZSBleHRlbmRzIERhZmZTdG9yZUZhY2FkZTxBY3Rpb24+IHtcblxuXHQvKipcblx0ICogR2V0IGEgRGFmZlByaWNlUmFuZ2UgZm9yIGEgY29tcG9zaXRlIHByb2R1Y3QgYmFzZWQgb24gdGhlIGNvbmZpZ3VyYXRpb24gcHJvdmlkZWQgZXhjbHVkaW5nIHVuc2VsZWN0ZWQsIG9wdGlvbmFsIGl0ZW0gcHJpY2VzLlxuXHQgKiBAcGFyYW0gaWQgYW4gaWQgZm9yIGEgY29tcG9zaXRlIHByb2R1Y3Rcblx0ICogQHBhcmFtIGNvbmZpZ3VyYXRpb24gYSBEaWN0aW9uYXJ5IG9mIERhZmZDb21wb3NpdGVDb25maWd1cmF0aW9uSXRlbXNcblx0ICovXG5cdGdldFJlcXVpcmVkSXRlbVByaWNlc0ZvckNvbmZpZ3VyYXRpb24oaWQ6IHN0cmluZywgY29uZmlndXJhdGlvbj86IERpY3Rpb25hcnk8RGFmZkNvbXBvc2l0ZUNvbmZpZ3VyYXRpb25JdGVtPik6IE9ic2VydmFibGU8RGFmZlByaWNlUmFuZ2U+O1xuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGJyb2FkZXN0IHBvc3NpYmxlIERhZmZQcmljZVJhbmdlIGZvciBhIGNvbXBvc2l0ZSBwcm9kdWN0IGJhc2VkIG9uIHRoZSBjb25maWd1cmF0aW9uIHByb3ZpZGVkIGluY2x1ZGluZyBvcHRpb25hbCBpdGVtIHByaWNlcy5cblx0ICogQHBhcmFtIGlkIHRoZSBpZCBvZiB0aGUgY29tcG9zaXRlIHByb2R1Y3QuXG5cdCAqL1xuXHRnZXRPcHRpb25hbEl0ZW1QcmljZXNGb3JDb25maWd1cmF0aW9uKGlkOiBzdHJpbmcsIGNvbmZpZ3VyYXRpb24/OiBEaWN0aW9uYXJ5PERhZmZDb21wb3NpdGVDb25maWd1cmF0aW9uSXRlbT4pOiBPYnNlcnZhYmxlPERhZmZQcmljZVJhbmdlPjtcblxuXHQvKipcblx0ICogR2V0IHRoZSBEYWZmUHJpY2VSYW5nZSBmb3IgYSBjb21wb3NpdGUgcHJvZHVjdCBiYXNlZCBvbiB0aGUgY3VycmVudCBjb25maWd1cmF0aW9uIG9mIHNlbGVjdGVkIGl0ZW0gb3B0aW9ucyBpbiByZWR1eCBzdGF0ZSBhbmRcblx0ICogZXhjbHVkaW5nIHVuc2VsZWN0ZWQsIG9wdGlvbmFsIGl0ZW0gcHJpY2VzLlxuXHQgKiBAcGFyYW0gaWQgdGhlIGlkIG9mIHRoZSBjb21wb3NpdGUgcHJvZHVjdC5cblx0ICovXG5cdGdldFByaWNlc0FzQ3VycmVudGx5Q29uZmlndXJlZChpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxEYWZmUHJpY2VSYW5nZT47XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIGFwcGxpZWQgb3B0aW9ucyBmb3IgYSBjb21wb3NpdGUgcHJvZHVjdC5cblx0ICogQHBhcmFtIGlkIHRoZSBpZCBvZiB0aGUgY29tcG9zaXRlIHByb2R1Y3QuXG5cdCAqL1xuXHRnZXRBcHBsaWVkT3B0aW9ucyhpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxEaWN0aW9uYXJ5PERhZmZDb21wb3NpdGVQcm9kdWN0SXRlbU9wdGlvbj4+O1xuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIGl0ZW0gb2YgYSBjb21wb3NpdGUgcHJvZHVjdCBpcyByZXF1aXJlZC5cblx0ICogQHBhcmFtIGlkIHRoZSBpZCBvZiB0aGUgY29tcG9zaXRlIHByb2R1Y3QuXG5cdCAqIEBwYXJhbSBpdGVtX2lkIHRoZSBpZCBvZiB0aGUgaXRlbV9pZC5cblx0ICovXG5cdGlzSXRlbVJlcXVpcmVkKGlkOiBEYWZmQ29tcG9zaXRlUHJvZHVjdFsnaWQnXSwgaXRlbV9pZDogRGFmZkNvbXBvc2l0ZVByb2R1Y3RJdGVtWydpZCddKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuXHQvKipcblx0ICogUmV0dXJucyB3aGV0aGVyIGEgRGFmZlByaWNlUmFuZ2UgaGFzIGEgZGlzY291bnQuXG5cdCAqIEBwYXJhbSBwcmljZVJhbmdlIGEgRGFmZlByaWNlUmFuZ2Vcblx0ICovXG5cdGhhc0Rpc2NvdW50KHByaWNlUmFuZ2U6IERhZmZQcmljZVJhbmdlKTogYm9vbGVhbjtcblxuXHQvKipcblx0ICogUmV0dXJucyB3aGV0aGVyIHRoZSBtaW4gYW5kIG1heCBwcmljZXMgb2YgYSBEYWZmUHJpY2VSYW5nZSBhcmUgZGlmZmVyZW50LlxuXHQgKiBAcGFyYW0gcHJpY2VSYW5nZSBhIERhZmZQcmljZVJhbmdlXG5cdCAqL1xuXHRoYXNQcmljZVJhbmdlKHByaWNlUmFuZ2U6IERhZmZQcmljZVJhbmdlKTogYm9vbGVhbjtcbn1cbiJdfQ==