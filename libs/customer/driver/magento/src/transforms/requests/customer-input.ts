import { DaffCustomer } from '@daffodil/customer';

import { MagentoCustomerInput } from '../../models/public_api';

export const magentoCustomerInputTransform = (customer: Partial<DaffCustomer>): MagentoCustomerInput => ({
  firstname: customer.firstName,
  lastname: customer.lastName,
});
