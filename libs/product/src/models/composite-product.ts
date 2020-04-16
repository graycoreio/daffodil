import { DaffProduct } from './product';
import { DaffCompositeProductItem } from './composite-product-item';

export enum DaffCompositePriceViewEnum {
	price_range = 'PRICE_RANGE',
	as_low_as = 'AS_LOW_AS'
}

export enum DaffCompositeItemsEnum {
	together = 'TOGETHER',
	separately = 'SEPARATELY'
}

export interface DaffCompositeProduct extends DaffProduct {
	price_view: DaffCompositePriceViewEnum;
	ship_bundle_items: DaffCompositeItemsEnum;
	items: DaffCompositeProductItem[];
}
