import { MagentoProductPreview } from './product-preview.interface';

export enum MagentoProductTypeEnum {
	BundledProduct = 'BundleProduct',
	ConfigurableProduct = 'ConfigurableProduct',
	SimpleProduct = 'SimpleProduct'
}

export enum MagentoProductStockStatusEnum {
	InStock = 'IN_STOCK',
	OutOfStock = 'OUT_OF_STOCK'
}

/**
 * An object for defining what the product service requests and retrieves from a magento backend.
 */
export interface MagentoProduct extends MagentoProductPreview {
  meta_title?: string;
  meta_description?: string;
	stock_status?: MagentoProductStockStatusEnum;
  image?: {
		url: string;
		label: string;
  };
  media_gallery_entries?: {
		label: string;
		file: string;
		position: number;
		disabled: boolean;
		uid: string;
	}[];
  short_description?: {
		html: string;
	};
  description?: {
		html: string;
	};
  related_products?: MagentoProductPreview[];
  upsell_products?: MagentoProductPreview[];
}
