import { DaffIdentifiable } from '@daffodil/core';
import { DaffPersonalAddress } from '@daffodil/geography';

/**
 * An address that is saved in the cart for checkout purposes.
 */
export interface DaffCartAddress extends DaffPersonalAddress, DaffIdentifiable {
  /**
   * @deprecated This property will be removed in version 0.92
   * The type of the address: billing or shipping.
   */
  address_type: string;
}
