import { MagentoProduct } from '@daffodil/product';
import { MagentoMoney } from '@daffodil/driver/magento'

/**
 * An object for defining what the cart service requests and retrieves from a magento backend.
 */
export interface MagentoCartItem {
  id: string;
  prices: {
    price: MagentoMoney;
    row_total: MagentoMoney;
    row_total_including_tax: MagentoMoney;
    total_item_discount: MagentoMoney;
  };
  product: MagentoProduct;
  quantity: number;
}
