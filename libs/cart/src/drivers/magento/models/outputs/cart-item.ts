import { MagentoMoney } from './money'
import { MagentoProduct } from './product';

/**
 * An object for defining what the cart service requests and retrieves from a magento backend.
 */
export interface MagentoCartItem {
  id: string;
  prices: {
    discounts: any[];
    price: MagentoMoney;
    row_total: MagentoMoney;
    row_total_including_tax: MagentoMoney;
    total_item_discount: MagentoMoney;
  };
  product: MagentoProduct;
  quantity: number;
}
