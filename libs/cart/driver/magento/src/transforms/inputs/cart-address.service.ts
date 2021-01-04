import { Injectable } from '@angular/core';

import { DaffCartAddress } from '@daffodil/cart';

import { MagentoCartAddressInput } from '../../models/requests/cart-address';

@Injectable({
  providedIn: 'root'
})
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
