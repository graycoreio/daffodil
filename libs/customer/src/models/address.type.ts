import { DaffIdentifiable } from '@daffodil/core';
import { DaffPersonalAddress } from '@daffodil/geography';

/**
 * An address that belongs to a {@link DaffCustomer}
 */
export interface DaffCustomerAddress extends DaffPersonalAddress, DaffIdentifiable {}
