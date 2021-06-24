import {
  DaffIdentifiable,
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
export interface DaffProduct extends DaffLocatable, DaffIdentifiable {
	/**
	 * The type of product.
	 */
  type: DaffProductTypeEnum;
  /**
   * The product name.
   */
  name: string;
  /**
   * A smaller image to concisely visualize the product.
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
	/**
	 * A shorter description of the product.
	 */
	short_description?: string;
	/**
	 * A title for the product to display in the browser tab title.
	 */
	meta_title?: string;
	/**
	 * A description of the product for usage in search engine results.
	 */
	meta_description?: string;
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
