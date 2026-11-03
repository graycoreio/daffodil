import { MagentoMoney } from '@daffodil/driver/magento';

export interface MagentoCustomerStoreCredit {
  __typename?: 'CustomerStoreCredit';
  current_balance?: MagentoMoney;
  enabled?: boolean;
}
