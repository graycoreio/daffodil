export enum MagentoProductTypeEnum {
	BundledProduct = 'BundleProduct',
	ConfigurableProduct = 'ConfigurableProduct',
	SimpleProduct = 'SimpleProduct'
}

/**
 * An object for defining what the product service requests and retrieves from a magento backend.
 */
export interface MagentoProduct {
	__typename: string;
  id: number;
  name: string;
  sku: string;
  url_key: string;
  image: {
		url: string,
		label: string
  };
  thumbnail: {
		url: string,
		label: string
	};
  price_range: {
		maximum_price: {
			regular_price: {
				value: number
				currency: any
			}
		}
	};
  media_gallery_entries?: {
		label: string,
		file: string,
		position: number,
		disabled: boolean,
		id: number
	}[];
  short_description?: {
		html: string;
	};
  description?: {
		html: string;
	};
}
