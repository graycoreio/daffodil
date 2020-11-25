import { DaffProductPrice } from './price';

/**
 * A price that represents not just a single price, 
 * but a range of prices, with a minimum and maximum.
 */
export interface DaffProductPriceRange {
	maxPrice: DaffProductPrice;
	minPrice: DaffProductPrice;
}