import { MagentoProduct } from './magento-product';
import { MagentoProductStockStatusEnum } from './product-preview.interface';

/**
 * @deprecated import from @daffodil/composite-product/driver/magento instead.
 */
export enum MagentoPriceTypeEnum {
	fixed = 'FIXED',
	percent = 'PERCENT',
	dynamic = 'DYNAMIC'
}

/**
 * @deprecated import from @daffodil/composite-product/driver/magento instead.
 */
export interface MagentoBundledProduct extends MagentoProduct {
	items: MagentoBundledProductItem[];
}

/**
 * @deprecated import from @daffodil/composite-product/driver/magento instead.
 */
export interface MagentoBundledProductItem {
	required: boolean;
	title: string;
	type: string;
	options: MagentoBundledProductItemOption[];
	option_id?: number;
}

/**
 * @deprecated import from @daffodil/composite-product/driver/magento instead.
 */
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
