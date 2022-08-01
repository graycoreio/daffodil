import { DaffPriceRange } from '../models/public_api';

/**
 * Returns whether a DaffPriceRange has a discount.
 *
 * @param priceRange a DaffPriceRange
 */
export const productPriceRangeHasDiscount = (priceRange: DaffPriceRange): boolean => priceRange.minPrice.originalPrice !== priceRange.minPrice.discountedPrice ||
		priceRange.maxPrice.originalPrice !== priceRange.maxPrice.discountedPrice;
