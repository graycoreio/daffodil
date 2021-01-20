/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns whether a DaffPriceRange has a discount.
 * \@param priceRange a DaffPriceRange
 * @type {?}
 */
export var productPriceRangeHasDiscount = (/**
 * @param {?} priceRange
 * @return {?}
 */
function (priceRange) {
    return priceRange.minPrice.originalPrice !== priceRange.minPrice.discountedPrice ||
        priceRange.maxPrice.originalPrice !== priceRange.maxPrice.discountedPrice;
})
/**
 * Returns whether the min and max prices of a DaffPriceRange are different.
 * @param priceRange a DaffPriceRange
 */
;
/**
 * Returns whether the min and max prices of a DaffPriceRange are different.
 * \@param priceRange a DaffPriceRange
 * @type {?}
 */
export var productPriceRangeHasPriceRange = (/**
 * @param {?} priceRange
 * @return {?}
 */
function (priceRange) {
    return priceRange.minPrice.originalPrice !== priceRange.maxPrice.originalPrice ||
        priceRange.minPrice.discountedPrice !== priceRange.maxPrice.discountedPrice;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9wcm9kdWN0LyIsInNvdXJjZXMiOlsiZmFjYWRlcy9oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE1BQU0sS0FBTyw0QkFBNEI7Ozs7QUFBRyxVQUFDLFVBQTBCO0lBQ3RFLE9BQU8sVUFBVSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEtBQUssVUFBVSxDQUFDLFFBQVEsQ0FBQyxlQUFlO1FBQy9FLFVBQVUsQ0FBQyxRQUFRLENBQUMsYUFBYSxLQUFLLFVBQVUsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDO0FBQzVFLENBQUMsQ0FBQTtBQUVEOzs7R0FHRzs7Ozs7OztBQUNILE1BQU0sS0FBTyw4QkFBOEI7Ozs7QUFBRyxVQUFDLFVBQTBCO0lBQ3hFLE9BQU8sVUFBVSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEtBQUssVUFBVSxDQUFDLFFBQVEsQ0FBQyxhQUFhO1FBQzdFLFVBQVUsQ0FBQyxRQUFRLENBQUMsZUFBZSxLQUFLLFVBQVUsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDO0FBQzlFLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhZmZQcmljZVJhbmdlIH0gZnJvbSAnLi4vbW9kZWxzL3ByaWNlcyc7XG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIGEgRGFmZlByaWNlUmFuZ2UgaGFzIGEgZGlzY291bnQuXG4gKiBAcGFyYW0gcHJpY2VSYW5nZSBhIERhZmZQcmljZVJhbmdlXG4gKi9cbmV4cG9ydCBjb25zdCBwcm9kdWN0UHJpY2VSYW5nZUhhc0Rpc2NvdW50ID0gKHByaWNlUmFuZ2U6IERhZmZQcmljZVJhbmdlKTogYm9vbGVhbiA9PiB7XG5cdHJldHVybiBwcmljZVJhbmdlLm1pblByaWNlLm9yaWdpbmFsUHJpY2UgIT09IHByaWNlUmFuZ2UubWluUHJpY2UuZGlzY291bnRlZFByaWNlIHx8XG5cdFx0cHJpY2VSYW5nZS5tYXhQcmljZS5vcmlnaW5hbFByaWNlICE9PSBwcmljZVJhbmdlLm1heFByaWNlLmRpc2NvdW50ZWRQcmljZTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIG1pbiBhbmQgbWF4IHByaWNlcyBvZiBhIERhZmZQcmljZVJhbmdlIGFyZSBkaWZmZXJlbnQuXG4gKiBAcGFyYW0gcHJpY2VSYW5nZSBhIERhZmZQcmljZVJhbmdlXG4gKi9cbmV4cG9ydCBjb25zdCBwcm9kdWN0UHJpY2VSYW5nZUhhc1ByaWNlUmFuZ2UgPSAocHJpY2VSYW5nZTogRGFmZlByaWNlUmFuZ2UpOiBib29sZWFuID0+IHtcblx0cmV0dXJuIHByaWNlUmFuZ2UubWluUHJpY2Uub3JpZ2luYWxQcmljZSAhPT0gcHJpY2VSYW5nZS5tYXhQcmljZS5vcmlnaW5hbFByaWNlIHx8XG5cdFx0cHJpY2VSYW5nZS5taW5QcmljZS5kaXNjb3VudGVkUHJpY2UgIT09IHByaWNlUmFuZ2UubWF4UHJpY2UuZGlzY291bnRlZFByaWNlO1xufSJdfQ==