import { MagentoCartItem } from '@daffodil/cart/driver/magento';
import { MagentoProductPreview } from '@daffodil/product/driver/magento';

/**
 * A cart whose items include a list of cross-sell products.
 */
export interface MagentoCartItemWithCrossSell extends MagentoCartItem {
  product: MagentoCartItem['product'] & {
    crosssell_products: Array<MagentoProductPreview>;
  };
}
