import { DaffProductDiscount } from './discount';

/**
 * A price that represents a static price of a single good or service.
 */
export interface DaffProductPrice {
	discountedPrice: number;
	discount: DaffProductDiscount;
	originalPrice: number;
}