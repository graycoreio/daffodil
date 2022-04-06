import { DaffProductDiscount } from './product';

/**
 * A model for product prices that holds discounts, discounted price, and original price for the associated product.
 */
export interface DaffProductPrices {
  /**
   * The discounted price of the product.
   */
  discountedPrice: number;
  /**
   * The discount of the product.
   */
  discount: DaffProductDiscount;
  /**
   * The price of the product before discounts.
   */
  originalPrice: number;
}

/**
 * A ranged price for products that could have more than one possible price, depending on the configurations.
 */
export interface DaffPriceRange {
  /**
   * The maximum prices of the product. Includes discounts, the maximum discounted price, and the maximum original price.
   */
  maxPrice: DaffProductPrices;
  /**
   * The minimum prices of the product. Includes discounts, the minimum discounted price, and the minimum original price.
   */
  minPrice: DaffProductPrices;
}
