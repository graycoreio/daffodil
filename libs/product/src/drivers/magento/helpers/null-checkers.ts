import { DaffProductDiscount } from '../../../models/pricing/discount';
import { MagentoProduct } from '../models/magento-product';

/**
 * A function for null checking an object.
 */
//TODO: use optional chaining after angular 9 and Typescript 3.7
export function getPrice(product: MagentoProduct): number {
	return product.price_range && 
		product.price_range.maximum_price && 
		product.price_range.maximum_price.regular_price && 
		product.price_range.maximum_price.regular_price.value !== null
	? product.price_range.maximum_price.regular_price.value : null;
}

/**
 * A function for null checking an object.
 */
//TODO: use optional chaining after angular 9 and Typescript 3.7
export function getDiscountedPrice(product: MagentoProduct): number {
	return product.price_range && 
		product.price_range.maximum_price && 
		product.price_range.maximum_price.final_price && 
		product.price_range.maximum_price.final_price.value !== null
	? product.price_range.maximum_price.final_price.value : null;
}

//TODO: use optional chaining after angular 9 and Typescript 3.7
export function getDiscount(product: MagentoProduct): DaffProductDiscount {
	return product.price_range && 
		product.price_range.maximum_price && 
		product.price_range.maximum_price.discount 
		? { 
			amount: product.price_range.maximum_price.discount.amount_off,
			percent: product.price_range.maximum_price.discount.percent_off
		} : { amount: null, percent: null }
}
