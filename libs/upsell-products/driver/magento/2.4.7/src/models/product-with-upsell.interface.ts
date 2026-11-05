import {
  MagentoProduct,
  MagentoProductPreview,
} from '@daffodil/product/driver/magento/2.4.7';

/**
 * A product that includes a list of upsell products.
 */
export interface MagentoProductWithUpsell extends MagentoProduct {
  upsell_products: MagentoProductPreview[];
}
