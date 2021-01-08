import { Injectable } from '@angular/core';

import { DaffCartAddress } from '@daffodil/cart';

import { MagentoBillingAddressInput } from '../../models/requests/billing-address';
import { DaffMagentoCartAddressInputTransformer } from './cart-address.service';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoBillingAddressInputTransformer {
  constructor(private cartAddressTransformer: DaffMagentoCartAddressInputTransformer) {}

  transform(cartAddress: Partial<DaffCartAddress>): MagentoBillingAddressInput {
    return cartAddress.address_id
      ? {
        address: null,
        customer_address_id: cartAddress.address_id,
      }
      : {
        address: this.cartAddressTransformer.transform(cartAddress),
        customer_address_id: null,
      }
  }
}
