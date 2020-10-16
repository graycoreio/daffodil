import { DaffSortable } from '@daffodil/core';

import { DaffProduct, DaffProductDiscount } from './product';
import { DaffProductImage } from './product-image';

/**
 * A configurable product is a product with configurable attributes. The price of a configurable product may change based on 
 * the attributes chosen, so a configurable product can have a price range. An example of a configurable product is a T-shirt.
 */
export interface DaffConfigurableProduct extends DaffProduct {
	configurableAttributes: DaffConfigurableProductAttribute[];
	variants: DaffConfigurableProductVariant[];
}

/**
 * An attribute of the configurable product that the customer must choose to add the configurable product to the cart. 
 * An example of an attribute would be size for clothing.
 */
export interface DaffConfigurableProductAttribute extends DaffSortable {
	code:	string;
	label: string;
	values:	DaffConfigurableProductOptionValue[];
}

/**
 * A variant is one version of the configurable product with all attributes chosen. Variants exist because not all versions of every configuration of 
 * the product might be in stock. For example, a shirt might have a medium, red shirt and a small,
 * green shirt in stock, but no small, red shirts. In this case there would be two variants (mediumRed, smallGreen) rather than the maximum 4 variants 
 * (smallRed, mediumRed, smallGreen, mediumGreen). This ensures the customer can't add a configurable product to the cart that is not
 * in stock. However, variants don't usually need to be considered by the frontend dev, because daffodil abstacts away the concept of variants into 
 * an "available attributes" selector.
 */
export interface DaffConfigurableProductVariant {
	appliedAttributes: DaffProductVariantAttributesDictionary;
	id: string;
	price: number;
	discount: DaffProductDiscount;
	image?: DaffProductImage;
	in_stock: boolean;
}

/**
 * The applied attributes for a particular product variant.
 */
export interface DaffProductVariantAttributesDictionary {
	[x: string]:  DaffConfigurableProductOptionValue['value'];
}

/**
 * The configurable option of a configurable product attribute. For example, this could be "blue" for the attribute "color" for a T-shirt.
 */
export interface DaffConfigurableProductOptionValue {
	value: string;
	label: string;
	swatch?: DaffSwatchOption;
}

/**
 * An optional field for the hex color code for DaffConfigurableProductOptionValues that need it.
 */
export interface DaffSwatchOption {
	value: string;
	thumbnail?: string;
}
