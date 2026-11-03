import {
  MagentoProduct,
  MagentoProductPreview,
} from '@daffodil/product/driver/magento';

/**
 * A product that includes a list of related products.
 */
export interface MagentoProductWithRelated extends MagentoProduct {
  related_products: MagentoProductPreview[];
}
