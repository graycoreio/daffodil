import { MagentoProduct } from './magento-product';

export interface MagentoSimpleProduct extends MagentoProduct {
	id: number;
	name: string;
	sku: string;
}
