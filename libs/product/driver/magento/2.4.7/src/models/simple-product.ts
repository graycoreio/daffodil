import { MagentoProduct } from './magento-product';

export interface MagentoSimpleProduct extends MagentoProduct {
  uid: string;
  name: string;
  sku: string;
}
