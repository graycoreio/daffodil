import { DaffProduct } from './product';

/**
 * An enum for whether a composite product item should be displayed as a radio or select input.
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
 */
export interface DaffCompositeProductItem {
	id: number | string;
	required: boolean;
	title: string;
	input_type: DaffCompositeProductItemInputEnum;
	options: DaffCompositeProductItemOption[];
}

/**
 * The composite product item option is a DaffProduct that can be added to a composite product.
 */
export interface DaffCompositeProductItemOption extends DaffProduct {
	id: string;
	name: string;
	price: number;
	is_default: boolean;
	quantity: number;
}
