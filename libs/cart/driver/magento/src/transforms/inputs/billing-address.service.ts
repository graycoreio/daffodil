import { Injectable } from '@angular/core';

import { DaffCartAddress } from '@daffodil/cart';

import { DaffMagentoCartAddressInputTransformer } from './cart-address.service';
import { MagentoBillingAddressInput } from '../../models/requests/billing-address';

@Injectable({
  providedIn: 'root',
})
export class DaffMagentoBillingAddressInputTransformer {
  constructor(private cartAddressTransformer: DaffMagentoCartAddressInputTransformer) {}

  transform(cartAddress: Partial<DaffCartAddress>): MagentoBillingAddressInput {
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
