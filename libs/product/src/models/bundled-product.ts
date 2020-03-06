import { DaffProduct } from './product';
import { DaffBundledProductItem } from './bundled-product-item';

export enum DaffBundledProductPriceViewEnum {
	price_range = 'PRICE_RANGE',
	as_low_as = 'AS_LOW_AS'
}

export interface DaffBundledProduct extends DaffProduct {
	price_view: DaffBundledProductPriceViewEnum;
	items: DaffBundledProductItem[];
}
