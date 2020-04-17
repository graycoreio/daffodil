import { DaffProduct } from './product';
import { DaffCompositeProductItem } from './composite-product-item';

export interface DaffCompositeProduct extends DaffProduct {
	items: DaffCompositeProductItem[];
}
