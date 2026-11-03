import { MagentoCustomer } from './customer.type';

export interface MagentoGetCustomerAddressesResponse {
  customer: Pick<MagentoCustomer, 'addresses'>;
}
