import { DaffCustomer } from '@daffodil/customer';

import { MagentoCustomer } from '../../models/public_api';
import { magentoCustomerAddressTransform } from './customer-address';

export const magentoCustomerTransform = (customer: MagentoCustomer): DaffCustomer => ({
  id: customer.email,
  email: customer.email,
  firstName: customer.firstname,
  lastName: customer.lastname,
  addresses: customer.addresses.map(magentoCustomerAddressTransform),
});
