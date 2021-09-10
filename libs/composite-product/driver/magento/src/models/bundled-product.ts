import {
  MagentoProduct,
  MagentoSimpleProduct,
} from '@daffodil/product/driver/magento';

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
	uid: string;
	label: string;
	price: number;
	quantity: number;
	can_change_quantity?: boolean;
	is_default: boolean;
	position?: number;
	price_type?: MagentoPriceTypeEnum;
	product?: MagentoSimpleProduct;
}
