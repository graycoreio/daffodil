import { DaffPriceRange } from '../models/prices';
/**
 * Returns whether a DaffPriceRange has a discount.
 * @param priceRange a DaffPriceRange
 */
export declare const productPriceRangeHasDiscount: (priceRange: DaffPriceRange) => boolean;
/**
 * Returns whether the min and max prices of a DaffPriceRange are different.
 * @param priceRange a DaffPriceRange
 */
export declare const productPriceRangeHasPriceRange: (priceRange: DaffPriceRange) => boolean;
