import { Injectable } from '@angular/core';

import { DaffCartAddress } from '../../../../models/cart-address';
import { MagentoCartAddressInput } from '../../models/inputs/cart-address';

@Injectable()
export class DaffMagentoCartAddressInputTransformer {
  transform(cartAddress: Partial<DaffCartAddress>): MagentoCartAddressInput {
    return {
      city: cartAddress.city,
      country_code: cartAddress.country,
      firstname: cartAddress.firstname,
      lastname: cartAddress.lastname,
      postcode: cartAddress.postcode,
      region: String(cartAddress.region),
      save_in_address_book: false,
      street: [cartAddress.street],
      telephone: cartAddress.telephone,
    }
  }
}
