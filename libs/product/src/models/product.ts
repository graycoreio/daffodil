import {
  ID,
  DaffLocatable,
} from '@daffodil/core';

import { DaffProductImage } from './product-image';

/**
 * The possible product types.
 */
export enum DaffProductTypeEnum {
	Simple = 'simple',
	Composite = 'composite',
	Configurable = 'configurable'
}

/**
 * An interface for a product usable by the @daffodil/product library.
 */
export interface DaffProduct extends DaffLocatable {
	/**
	 * The id of the product.
	 */
	id: ID;
	/**
	 * The type of product.
	 */
  type?: DaffProductTypeEnum;
  /**
   * The product name.
   */
  name?: string;
  /**
   * The main image for the product.
   */
  thumbnail: DaffProductImage;
  /**
   * An array of images for the product.
   */
  images: DaffProductImage[];

  // TODO: move to subtypes
  /**
   * The price of the product.
   */
	price?: number;
	/**
	 * The total discounts associated with this product.
	 */
  discount?: DaffProductDiscount;
  /**
   * Whether or not the product is in stock.
   */
  in_stock?: boolean;

  // TODO: move to meta object
	/**
	 * The product brand.
	 */
  brand?: string;
	/**
	 * Describes the product.
	 */
  description?: string;
}

/**
 * The discount for a product.
 */
export interface DaffProductDiscount {
	/**
	 * The discount represented as some amount of currency.
	 */
	amount: number;
	/**
	 * The discount represented as a percent of the original product price.
	 */
	percent: number;
}
