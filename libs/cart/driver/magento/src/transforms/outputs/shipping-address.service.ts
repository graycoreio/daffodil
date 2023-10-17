import { Injectable } from '@angular/core';

import { DaffCartAddress } from '@daffodil/cart';

import { DaffMagentoCartAddressTransformer } from './cart-address.service';
import { MagentoShippingAddress } from '../../models/responses/shipping-address';

/**
 * Transforms magento addresses into an object usable by daffodil.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffMagentoShippingAddressTransformer {
  constructor(private addressTransformer: DaffMagentoCartAddressTransformer) {}

  /**
   * Transforms the magento MagentoCart from the magento cart query into a DaffCartAddress.
   *
   * @param address the address from a magento cart query.
   */
  transform(address: MagentoShippingAddress): DaffCartAddress {
    return address ? {
      ...this.addressTransformer.transform(address),
      address_type: 'shipping',
    } : null;
  }
}
