import { Injectable } from '@angular/core';

import { DaffCartAddress } from '@daffodil/cart';

import { MagentoCartAddress } from '../../models/responses/cart-address';
import { DaffMagentoCartAddressTransformer } from './cart-address.service';

/**
 * Transforms magento addresses into an object usable by daffodil.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffMagentoBillingAddressTransformer {
  constructor(
    public addressTransformer: DaffMagentoCartAddressTransformer,
  ) {}

  /**
   * Transforms the magento MagentoCart from the magento cart query into a DaffCartAddress.
   *
   * @param address the address from a magento cart query.
   */
  transform(address: MagentoCartAddress): DaffCartAddress {
    return address ? {
      ...this.addressTransformer.transform(address),
      address_type: 'billing',
    } : null;
  }
}
