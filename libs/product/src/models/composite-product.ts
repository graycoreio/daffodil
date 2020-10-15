import { DaffProduct } from './product';
import { DaffCompositeProductItem } from './composite-product-item';

/**
 * A composite product is a group of products sold together. It includes one primary product and many accessory "items". 
 * The composite product items are additional products the customer might want to purchase with the primary product, 
 * and each item has a number of options from which the user can choose. Composite product items can be optional or required.
 * For example, a toolbox bundle might have a primary product of the toolbox. The items could be a hammer and a screw driver, 
 * and the options for these items could be two different hammers and two different screw drivers the customer could choose between. 
 * All of these items could have different prices/discounts/etc, which means the composite products can have ranged prices.
 */
export interface DaffCompositeProduct extends DaffProduct {
	items: DaffCompositeProductItem[];
}
