import { MagentoCustomer } from './customer.type';

export interface MagentoUpdateCustomerResponse {
  updateCustomerV2: {
    customer: MagentoCustomer;
  };
}
