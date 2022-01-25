import {
  MagentoMoney,
  MagentoDiscount,
} from '@daffodil/driver/magento';
import { MagentoProductStockStatusEnum } from '@daffodil/product/driver/magento';

export enum MagentoCartItemTypeEnum {
	Simple = 'SimpleCartItem',
	Bundle = 'BundleCartItem',
	Configurable = 'ConfigurableCartItem'
}

export interface MagentoCartItemProduct {
	__typename: string;
  id: number;
  name: string;
  sku: string;
  url_key: string;
  url_suffix: string;
  thumbnail: {
    __typename: string;
    label: string;
    url: string;
  };
  stock_status: MagentoProductStockStatusEnum;
}

export interface MagentoCartItemBundleProduct extends MagentoCartItemProduct {
	items: {
    uid: string;
    options: {
      uid: string;
      product: {
        stock_status: MagentoProductStockStatusEnum;
      };
    }[];
  }[];
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
    discounts?: MagentoDiscount[];
  };
  product: MagentoCartItemProduct;
  quantity: number;
}

/**
 * An interface for magento bundled cart items.
 */
export interface MagentoBundleCartItem extends MagentoCartItem {
	bundle_options: {
		id: number;
		uid: string;
		label: string;
		type: string;
		values: {
			id: number;
			uid: string;
			label: string;
			price: number;
			quantity: number;
		}[];
	}[];
  product: MagentoCartItemBundleProduct;
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
