import {
  MagentoDiscount,
  MagentoMoney,
} from '@daffodil/driver/magento';

export interface MagentoOrderTotal {
  __typename?: string;
  discounts: MagentoDiscount[];
  grand_total: MagentoMoney;
  subtotal: MagentoMoney;
  total_shipping: MagentoMoney;
  total_tax: MagentoMoney;
}
