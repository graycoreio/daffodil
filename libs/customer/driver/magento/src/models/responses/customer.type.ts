import { MagentoCustomerAddress } from './customer-address.type';

export interface MagentoCustomer {
  email: string;
  firstname: string;
  lastname: string;
  is_subscribed: boolean;
  addresses: MagentoCustomerAddress[];
}
