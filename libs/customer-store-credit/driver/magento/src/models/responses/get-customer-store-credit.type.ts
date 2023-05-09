import { MagentoCustomerStoreCredit } from './store-credit.type';

export interface MagentoGetCustomerStoreCreditResponse {
  customer: {
    store_credit: MagentoCustomerStoreCredit;
  };
}
