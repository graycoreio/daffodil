import { MagentoMoney } from '@daffodil/driver/magento/2.4.7';

export interface MagentoCustomerStoreCredit {
  __typename?: 'CustomerStoreCredit';
  current_balance?: MagentoMoney;
  enabled?: boolean;
}
