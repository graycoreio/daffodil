import { ID } from '@daffodil/core';
import { DaffProduct } from '@daffodil/product';

/**
 * An enum for the type of the cart item.
 */
// TODO: remove "input" designation
export enum DaffCartItemInputType {
	Simple = 'simple',
	Composite = 'composite',
	Configurable = 'configurable'
}

/**
 * A set of fields specifying how to add a product to the cart.
 */
export interface DaffCartItemInput {
  /**
   * The type of cart item that corresponds to the product being added to the cart.
   */
	type: DaffCartItemInputType;
  /**
   * The ID of the product to add to the cart.
   */
  productId: DaffProduct['id'];
  /**
   * How many of the product should be added to the cart.
   */
	qty: number;
}

/**
 * A more constrained cart item input for simple products.
 */
export interface DaffSimpleCartItemInput extends DaffCartItemInput {
	type: DaffCartItemInputType.Simple;
}

/**
 * A cart item input for composite products.
 */
export interface DaffCompositeCartItemInput extends DaffCartItemInput {
	type: DaffCartItemInputType.Composite;
  /**
   * The selected composite product options to be added to the cart.
   */
	options: DaffCompositeCartItemInputOption[];
}

/**
 * Designates a particular composite product option to add to the cart.
 */
export interface DaffCompositeCartItemInputOption {
  // TODO: what's this for? can we remove it?
	code: string | number;
  /**
   * How many of the specified option should be added to the cart.
   */
	quantity: number;
  /**
   * The value identifying the particular composite product option.
   */
	value: string;
}

/**
 * Designates a particular configurable product variant to add to the cart.
 */
export interface DaffConfigurableCartItemInput extends DaffCartItemInput {
	type: DaffCartItemInputType.Configurable;
  /**
   * The value identifying the particular configurable product variant.
   */
	variantId: ID;
}
