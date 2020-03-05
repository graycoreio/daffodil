import { Injectable } from '@angular/core';

import { DaffCartAddress } from '../../../../models/cart-address';
import { MagentoBillingAddressInput } from '../../models/inputs/billing-address';
import { DaffMagentoCartAddressInputTransformer } from './cart-address.service';

@Injectable()
export class DaffMagentoBillingAddressInputTransformer {
  constructor(private cartAddressTransformer: DaffMagentoCartAddressInputTransformer) {}

  transform(cartAddress: Partial<DaffCartAddress>): MagentoBillingAddressInput {
    return {
      address: this.cartAddressTransformer.transform(cartAddress),
      customer_address_id: cartAddress.address_id,
    }
  }
}
