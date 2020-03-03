import { DaffProduct } from "./product";
import { DaffBundledProductItem } from "./bundled-product-item";

export enum MagentoPriceViewEnum {
	price_range = 'PRICE_RANGE',
	as_low_as = 'AS_LOW_AS'
}

export enum MagentoBundleItemsEnum {
	together = 'TOGETHER',
	separately = 'SEPARATELY'
}

export interface DaffBundledProduct extends DaffProduct {
	price_view: MagentoPriceViewEnum;
	ship_bundle_items: MagentoBundleItemsEnum;
	items: DaffBundledProductItem[];
}
