import { DaffPriceRange } from '../models/public_api';

/**
 * Returns whether the min and max prices of a DaffPriceRange are different.
 *
 * @param priceRange a DaffPriceRange
 */
export const productPriceRangeHasPriceRange = (priceRange: DaffPriceRange): boolean => priceRange.minPrice.originalPrice !== priceRange.maxPrice.originalPrice ||
		priceRange.minPrice.discountedPrice !== priceRange.maxPrice.discountedPrice;
