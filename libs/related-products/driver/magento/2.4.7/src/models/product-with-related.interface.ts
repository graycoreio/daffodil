import {
  MagentoProduct,
  MagentoProductPreview,
} from '@daffodil/product/driver/magento/2.4.7';

/**
 * A product that includes a list of related products.
 */
export interface MagentoProductWithRelated extends MagentoProduct {
  related_products: MagentoProductPreview[];
}
