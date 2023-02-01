import { DaffIdentifiable } from '@daffodil/core';
import { DaffPersonalAddress } from '@daffodil/geography';

/**
 * An address that belongs to a {@link DaffCustomer}
 */
export interface DaffCustomerAddress extends DaffPersonalAddress, DaffIdentifiable {
  /**
   * Whether this address is the customer's default billing address.
   */
  defaultBilling: boolean;
  /**
   * Whether this address is the customer's default shipping address.
   */
  defaultShipping: boolean;
}
