import { DaffProduct } from './product';
import { DaffCompositeProductItem } from './composite-product-item';

export enum DaffCompositeItemsEnum {
	together = 'TOGETHER',
	separately = 'SEPARATELY'
}

export interface DaffCompositeProduct extends DaffProduct {
	ship_bundle_items: DaffCompositeItemsEnum;
	items: DaffCompositeProductItem[];
}
