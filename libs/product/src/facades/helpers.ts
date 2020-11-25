import { DaffProductPriceRange } from '../models/pricing/public_api';

/**
 * Returns whether a DaffProductPriceRange has a discount.
 * @param priceRange a DaffProductPriceRange
 */
export const productPriceRangeHasDiscount = (priceRange: DaffProductPriceRange): boolean => {
	return priceRange.minPrice.originalPrice !== priceRange.minPrice.discountedPrice ||
		priceRange.maxPrice.originalPrice !== priceRange.maxPrice.discountedPrice;
}

/**
 * Returns whether the min and max prices of a DaffProductPriceRange are different.
 * @param priceRange a DaffProductPriceRange
 */
export const productPriceRangeHasPriceRange = (priceRange: DaffProductPriceRange): boolean => {
	return priceRange.minPrice.originalPrice !== priceRange.maxPrice.originalPrice ||
		priceRange.minPrice.discountedPrice !== priceRange.maxPrice.discountedPrice;
}