import { DaffCustomer } from '@daffodil/customer';

import { MagentoGetCustomerResponse } from '../../models/public_api';
import { magentoCustomerAddressTransform } from './customer-address';

export const magentoCustomerTransform = (customer: MagentoGetCustomerResponse): DaffCustomer => ({
  id: customer.customer.email,
  email: customer.customer.email,
  firstName: customer.customer.firstname,
  lastName: customer.customer.lastname,
  addresses: customer.customer.addresses.map(magentoCustomerAddressTransform),
});
