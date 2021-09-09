import { DaffProduct } from '@daffodil/product';

import { DaffCompositeProductItem } from './composite-product-item';

/**
 * A composite product is a group of products sold together. It includes one primary product and many accessory "items".
 * The composite product items are additional products the customer might want to purchase with the primary product,
 * and each item has a number of options from which the user can choose. Composite product items can be optional or required.
 * For example, a toolbox bundle might have a primary product of the toolbox. The items could be a hammer and a screw driver,
 * and the options for these items could be two different hammers and two different screwdrivers between which the customer could choose.
 * All of these items could have different prices/discounts/etc which would cause the composite products to have ranged prices.
 */
export interface DaffCompositeProduct extends DaffProduct {
	/**
	 * The available items for the composite product.
	 */
	items: DaffCompositeProductItem[];
}
