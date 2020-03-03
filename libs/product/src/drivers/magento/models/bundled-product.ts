import { ProductNode } from './product-node';
import { MagentoSimpleProduct } from './simple-product';

export enum MagentoPriceViewEnum {
	price_range = 'PRICE_RANGE',
	as_low_as = 'AS_LOW_AS'
}

export enum MagentoBundleItemsEnum {
	together = 'TOGETHER',
	separately = 'SEPARATELY'
}

export enum MagentoPriceTypeEnum {
	fixed = 'FIXED',
	percent = 'PERCENT',
	dynamic = 'DYNAMIC'
}

export interface MagentoBundledProduct extends ProductNode {
	dynamic_price: boolean;
	dynamic_sku: boolean;
	dynamic_weight: boolean;
	price_view: MagentoPriceViewEnum;
	ship_bundle_items: MagentoBundleItemsEnum;
	items: MagentoBundledProductItem[];
}

export interface MagentoBundledProductItem {
	option_id: number;
	position: number;
	required: boolean;
	sku: string;
	title: string;
	type: string;
	options: MagentoBundledProductItemOption[];
}

export interface MagentoBundledProductItemOption {
	can_change_quantity: boolean;
	id: number;
	is_default: boolean;
	label: string;
	position: number;
	price_type: MagentoPriceTypeEnum;
	price: number;
	quantity: number;
	product: MagentoSimpleProduct;
}
