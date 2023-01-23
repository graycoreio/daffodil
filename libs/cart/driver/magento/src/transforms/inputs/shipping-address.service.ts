import { Injectable } from '@angular/core';

import { DaffCartAddress } from '@daffodil/cart';

import { MagentoShippingAddressInput } from '../../models/requests/shipping-address';
import { DaffMagentoCartAddressInputTransformer } from './cart-address.service';

@Injectable({
  providedIn: 'root',
})
export class DaffMagentoShippingAddressInputTransformer {
  constructor(private cartAddressTransformer: DaffMagentoCartAddressInputTransformer) {}

  transform(cartAddress: Partial<DaffCartAddress>): MagentoShippingAddressInput {
    return cartAddress.id
      ? {
        address: null,
        customer_address_id: Number(cartAddress.id),
      }
      : {
        address: this.cartAddressTransformer.transform(cartAddress),
        customer_address_id: null,
      };
  }
}
