import { MagentoCustomerOrder } from '@daffodil/customer-order/driver/magento';
import { MagentoMoney } from '@daffodil/driver/magento';

export interface MagentoCustomerOrderWithStoreCredit extends MagentoCustomerOrder {
  total: MagentoCustomerOrder['total'] & {
    total_store_credit: MagentoMoney;
  };
}
