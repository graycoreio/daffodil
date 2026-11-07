import { MagentoCart } from '@daffodil/cart/driver/magento/2.4.7';
import { MagentoMoney } from '@daffodil/driver/magento/2.4.7';

export interface MagentoCartWithStoreCredit extends MagentoCart {
  applied_store_credit?: {
    applied_balance: MagentoMoney;
    enabled: boolean;
  };
}
