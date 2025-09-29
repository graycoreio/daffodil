import { DaffIdentifiable } from '@daffodil/core';
import { DaffPersonalAddress } from '@daffodil/geography';

/**
 * An address that is saved in the cart for checkout purposes.
 */
export interface DaffCartAddress extends DaffPersonalAddress, DaffIdentifiable {
  /**
   * @deprecated Deprecated in version 0.89.0. Will be removed in version 0.92.0.
   * The type of the address: billing or shipping.
   */
  address_type: string;
}
