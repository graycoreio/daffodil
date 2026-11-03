import { MagentoCustomer } from './customer.type';

export interface MagentoChangeEmailResponse {
  updateCustomerEmail: {
    customer: MagentoCustomer;
  };
}
