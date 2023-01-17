import { DaffIdentifiable } from '@daffodil/core';
import { DaffPersonalAddress } from '@daffodil/geography';

/**
 * An address that is saved in the cart for checkout purposes.
 */
export interface DaffCartAddress extends DaffPersonalAddress, DaffIdentifiable {
  /**
   * The type of the address: billing or shipping.
   */
  // TODO: change to an enum
  address_type: string;
}
