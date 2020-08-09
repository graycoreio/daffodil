import { MagentoProduct } from '@daffodil/product';
import { MagentoMoney } from '@daffodil/driver/magento'

export enum MagentoCartItemTypeEnum {
	Simple = 'SimpleCartItem',
	Bundle = 'BundleCartItem',
	Configurable = 'ConfigurableCartItem'
}

/**
 * An object for defining what the cart service requests and retrieves from a magento backend.
 */
export interface MagentoCartItem {
	__typename: MagentoCartItemTypeEnum;
  id: string;
  prices: {
    price: MagentoMoney;
    row_total: MagentoMoney;
    row_total_including_tax: MagentoMoney;
    total_item_discount: MagentoMoney;
  };
  product: MagentoProduct;
  quantity: number;
}

/**
 * An interface for magento bundled cart items.
 */
export interface MagentoBundleCartItem extends MagentoCartItem {
	bundle_options: {
		id: number;
		label: string;
		type: string;
		values: {
			id: number;
			label: string;
			price: number;
			quantity: number;
		}[];
	}[];
}

/**
 * An interface for magento configurable cart items.
 */
export interface MagentoConfigurableCartItem extends MagentoCartItem {
	configurable_options: {
		option_label: string;
		value_label: string;
	}[];
}
