import { MagentoProduct } from './magento-product';
import { MagentoSimpleProduct } from './simple-product';

export enum MagentoPriceTypeEnum {
	fixed = 'FIXED',
	percent = 'PERCENT',
	dynamic = 'DYNAMIC'
}

export interface MagentoBundledProduct extends MagentoProduct {
	items: MagentoBundledProductItem[];
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
	is_default: boolean;
	position?: number;
	price_type?: MagentoPriceTypeEnum;
	product?: MagentoSimpleProduct;
}
