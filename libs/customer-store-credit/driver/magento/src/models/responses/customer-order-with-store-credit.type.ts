import { MagentoCustomerOrder } from '@daffodil/customer-order/driver/magento/2-4-6';
import { MagentoMoney } from '@daffodil/driver/magento';

export interface MagentoCustomerOrderWithStoreCredit extends MagentoCustomerOrder {
  total: MagentoCustomerOrder['total'] & {
    total_store_credit: MagentoMoney;
  };
}
