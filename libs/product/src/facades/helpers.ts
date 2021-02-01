import { DaffPriceRange } from '../models/prices';

/**
 * Returns whether a DaffPriceRange has a discount.
 *
 * @param priceRange a DaffPriceRange
 */
export const productPriceRangeHasDiscount = (priceRange: DaffPriceRange): boolean => priceRange.minPrice.originalPrice !== priceRange.minPrice.discountedPrice ||
		priceRange.maxPrice.originalPrice !== priceRange.maxPrice.discountedPrice;

/**
 * Returns whether the min and max prices of a DaffPriceRange are different.
 *
 * @param priceRange a DaffPriceRange
 */
export const productPriceRangeHasPriceRange = (priceRange: DaffPriceRange): boolean => priceRange.minPrice.originalPrice !== priceRange.maxPrice.originalPrice ||
		priceRange.minPrice.discountedPrice !== priceRange.maxPrice.discountedPrice;
