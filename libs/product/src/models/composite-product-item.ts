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
 * If a composite product is a toolbox bundle, a composite product item might be a screw driver, and the options contained in that
 * item might be a phillips head and a flathead. The customer would choose to add either a phillips head or a flathead to the
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
