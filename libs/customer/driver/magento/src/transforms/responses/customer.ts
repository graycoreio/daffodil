import { DaffCustomer } from '@daffodil/customer';

import { magentoCustomerAddressTransform } from './customer-address';
import { MagentoCustomer } from '../../models/public_api';

export const magentoCustomerTransform = (customer: MagentoCustomer): DaffCustomer => ({
  id: customer.email,
  email: customer.email,
  firstName: customer.firstname,
  lastName: customer.lastname,
  isSubscribed: customer.is_subscribed,
  addresses: customer.addresses.map(magentoCustomerAddressTransform),
});
