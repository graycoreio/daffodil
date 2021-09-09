import { DaffIdentifiable } from '@daffodil/core';

import { DaffProduct } from './product';

/**
 * An enum for whether a composite product item should be displayed as a radio or select input.
 *
 * @deprecated import from @daffodil/composite-product instead.
 */
export enum DaffCompositeProductItemInputEnum {
	select = 'select',
	radio = 'radio'
}

/**
 * The composite product item describes one set of product options that the user can add to the composite product.
 * A composite product item can be required or optional. If it is required, an option _must_ be chosen in order to add the product to the cart.
 * If the item is optional, the product can be added to the cart without an option having been chosen.
 * For example, if a composite product is a toolbox bundle, a composite product item might be a screw driver, and the options contained in that
 * item might be a phillips head and a flathead. The customer could choose to add either a phillips head or a flathead to the
 * composite product, or neither if the item is optional.
 *
 * @deprecated import from @daffodil/composite-product instead.
 */
export interface DaffCompositeProductItem extends DaffIdentifiable {
	/**
	 * Whether the item is required or optional.
	 */
	required: boolean;
	/**
	 * The title label for the item.
	 */
	title: string;
	/**
	 * Describes how the item should be displayed.
	 */
	input_type: DaffCompositeProductItemInputEnum;
	/**
	 * The options that may be chosen for the item.
	 */
	options: DaffCompositeProductItemOption[];
}

/**
 * The composite product item option is a DaffProduct that can be added to a composite product.
 *
 * @deprecated import from @daffodil/composite-product instead.
 */
export interface DaffCompositeProductItemOption extends DaffProduct {
	/**
	 * Whether the option is the default option for its parent {@link DaffCompositeProductItem}.
	 */
	is_default: boolean;
	/**
	 * The quantity chosen for the option.
	 */
	quantity: number;
}
