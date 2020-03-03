import { Injectable } from '@angular/core';

import { DaffCartAddress } from '../../../../models/cart-address';
import { MagentoShippingAddressInput } from '../../models/inputs/shipping-address';
import { DaffMagentoCartAddressInputTransformer } from './cart-address.service';

@Injectable()
export class DaffMagentoShippingAddressInputTransformer {
  constructor(private cartAddressTransformer: DaffMagentoCartAddressInputTransformer) {}

  transform(cartAddress: Partial<DaffCartAddress>): MagentoShippingAddressInput {
    return {
      ...cartAddress,

      address: this.cartAddressTransformer.transform(cartAddress),
      customer_address_id: cartAddress.address_id
    }
  }
}
