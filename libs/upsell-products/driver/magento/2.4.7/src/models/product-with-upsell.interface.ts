import {
  MagentoProduct,
  MagentoProductPreview,
} from '@daffodil/product/driver/magento';

/**
 * A product that includes a list of upsell products.
 */
export interface MagentoProductWithUpsell extends MagentoProduct {
  upsell_products: MagentoProductPreview[];
}
