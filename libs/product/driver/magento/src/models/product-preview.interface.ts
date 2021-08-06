export enum MagentoProductStockStatusEnum {
	InStock = 'IN_STOCK',
	OutOfStock = 'OUT_OF_STOCK'
}

/**
 * A stripped down version of the Magento product for related and upsell products.
 */
export interface MagentoProductPreview {
	__typename: string;
  uid: string;
  name: string;
  sku: string;
  url_key: string;
  url_suffix: string;
  thumbnail: {
		url: string;
		label: string;
	};
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
	stock_status?: MagentoProductStockStatusEnum;
}
