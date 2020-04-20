import { MagentoProduct } from './magento-product';
import { MagentoSimpleProduct } from './simple-product';

export enum MagentoBundleItemsEnum {
	together = 'TOGETHER',
	separately = 'SEPARATELY'
}

export enum MagentoPriceTypeEnum {
	fixed = 'FIXED',
	percent = 'PERCENT',
	dynamic = 'DYNAMIC'
}

export interface MagentoBundledProduct extends MagentoProduct {
	items: MagentoBundledProductItem[];
	dynamic_price?: boolean;
	dynamic_sku?: boolean;
	dynamic_weight?: boolean;
	ship_bundle_items?: MagentoBundleItemsEnum;
}

export interface MagentoBundledProductItem {
	required: boolean;
	sku: string;
	title: string;
	type: string;
	options: MagentoBundledProductItemOption[];
	option_id?: number;
	position?: number;
}

export interface MagentoBundledProductItemOption {
	id: number;
	label: string;
	price: number;
	quantity: number;
	can_change_quantity?: boolean;
	is_default?: boolean;
	position?: number;
	price_type?: MagentoPriceTypeEnum;
	product?: MagentoSimpleProduct;
}
