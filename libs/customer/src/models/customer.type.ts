import { DaffIdentifiable } from '@daffodil/core';

import { DaffCustomerAddress } from './address.type';

/**
 * A customer.
 */
export interface DaffCustomer extends DaffIdentifiable {
  email: string;
  firstName: string;
  lastName: string;
  addresses: DaffCustomerAddress[];
}
