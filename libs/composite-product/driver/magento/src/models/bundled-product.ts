import {
  MagentoProduct,
  MagentoProductStockStatusEnum,
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
	title: string;
	type: string;
	options: MagentoBundledProductItemOption[];
	option_id?: number;
}

export interface MagentoBundledProductItemOption {
	uid: string;
	label: string;
	quantity: number;
	is_default: boolean;
	product: MagentoBundledProductItemOptionProduct;
}

export interface MagentoBundledProductItemOptionProduct {
	stock_status?: MagentoProductStockStatusEnum;
	price_range: {
		maximum_price: {
			regular_price: {
				value: number;
				currency: any;
			};
			discount: {
				amount_off: number;
				percent_off: number;
			};
		};
	};
}
