import { DaffIdentifiable } from '@daffodil/core';

import { DaffCustomerAddress } from './address.type';

/**
 * A customer.
 */
export interface DaffCustomer extends DaffIdentifiable {
  /**
   * The customer's email.
   */
  email: string;
  /**
   * The customer's first or birth name.
   */
  firstName: string;
  /**
   * The customer's last or family name.
   */
  lastName: string;
  /**
   * Whether the customer is subscribed to the newsletter.
   */
  isSubscribed: boolean;
  /**
   * A list of the customer's stored addresses.
   */
  addresses: DaffCustomerAddress[];
}
