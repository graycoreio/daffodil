/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns whether a DaffPriceRange has a discount.
 * \@param priceRange a DaffPriceRange
 * @type {?}
 */
export const productPriceRangeHasDiscount = (/**
 * @param {?} priceRange
 * @return {?}
 */
(priceRange) => {
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
export const productPriceRangeHasPriceRange = (/**
 * @param {?} priceRange
 * @return {?}
 */
(priceRange) => {
    return priceRange.minPrice.originalPrice !== priceRange.maxPrice.originalPrice ||
        priceRange.minPrice.discountedPrice !== priceRange.maxPrice.discountedPrice;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9wcm9kdWN0LyIsInNvdXJjZXMiOlsiZmFjYWRlcy9oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE1BQU0sT0FBTyw0QkFBNEI7Ozs7QUFBRyxDQUFDLFVBQTBCLEVBQVcsRUFBRTtJQUNuRixPQUFPLFVBQVUsQ0FBQyxRQUFRLENBQUMsYUFBYSxLQUFLLFVBQVUsQ0FBQyxRQUFRLENBQUMsZUFBZTtRQUMvRSxVQUFVLENBQUMsUUFBUSxDQUFDLGFBQWEsS0FBSyxVQUFVLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQztBQUM1RSxDQUFDLENBQUE7QUFFRDs7O0dBR0c7Ozs7Ozs7QUFDSCxNQUFNLE9BQU8sOEJBQThCOzs7O0FBQUcsQ0FBQyxVQUEwQixFQUFXLEVBQUU7SUFDckYsT0FBTyxVQUFVLENBQUMsUUFBUSxDQUFDLGFBQWEsS0FBSyxVQUFVLENBQUMsUUFBUSxDQUFDLGFBQWE7UUFDN0UsVUFBVSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEtBQUssVUFBVSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7QUFDOUUsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGFmZlByaWNlUmFuZ2UgfSBmcm9tICcuLi9tb2RlbHMvcHJpY2VzJztcblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgYSBEYWZmUHJpY2VSYW5nZSBoYXMgYSBkaXNjb3VudC5cbiAqIEBwYXJhbSBwcmljZVJhbmdlIGEgRGFmZlByaWNlUmFuZ2VcbiAqL1xuZXhwb3J0IGNvbnN0IHByb2R1Y3RQcmljZVJhbmdlSGFzRGlzY291bnQgPSAocHJpY2VSYW5nZTogRGFmZlByaWNlUmFuZ2UpOiBib29sZWFuID0+IHtcblx0cmV0dXJuIHByaWNlUmFuZ2UubWluUHJpY2Uub3JpZ2luYWxQcmljZSAhPT0gcHJpY2VSYW5nZS5taW5QcmljZS5kaXNjb3VudGVkUHJpY2UgfHxcblx0XHRwcmljZVJhbmdlLm1heFByaWNlLm9yaWdpbmFsUHJpY2UgIT09IHByaWNlUmFuZ2UubWF4UHJpY2UuZGlzY291bnRlZFByaWNlO1xufVxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciB0aGUgbWluIGFuZCBtYXggcHJpY2VzIG9mIGEgRGFmZlByaWNlUmFuZ2UgYXJlIGRpZmZlcmVudC5cbiAqIEBwYXJhbSBwcmljZVJhbmdlIGEgRGFmZlByaWNlUmFuZ2VcbiAqL1xuZXhwb3J0IGNvbnN0IHByb2R1Y3RQcmljZVJhbmdlSGFzUHJpY2VSYW5nZSA9IChwcmljZVJhbmdlOiBEYWZmUHJpY2VSYW5nZSk6IGJvb2xlYW4gPT4ge1xuXHRyZXR1cm4gcHJpY2VSYW5nZS5taW5QcmljZS5vcmlnaW5hbFByaWNlICE9PSBwcmljZVJhbmdlLm1heFByaWNlLm9yaWdpbmFsUHJpY2UgfHxcblx0XHRwcmljZVJhbmdlLm1pblByaWNlLmRpc2NvdW50ZWRQcmljZSAhPT0gcHJpY2VSYW5nZS5tYXhQcmljZS5kaXNjb3VudGVkUHJpY2U7XG59Il19