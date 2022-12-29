import { Injectable } from '@angular/core';

import { DaffCartAddress } from '@daffodil/cart';

import { MagentoCartAddressInput } from '../../models/requests/cart-address';

@Injectable({
  providedIn: 'root',
})
export class DaffMagentoCartAddressInputTransformer {
  transform(cartAddress: Partial<DaffCartAddress>): MagentoCartAddressInput {
    const street = [cartAddress.street];
    if (cartAddress.street2) {
      street.push(cartAddress.street2);
    }

    return {
      city: cartAddress.city,
      country_code: cartAddress.country,
      firstname: cartAddress.firstname,
      lastname: cartAddress.lastname,
      postcode: cartAddress.postcode,
      region_id: Number(cartAddress.region),
      save_in_address_book: false,
      street,
      telephone: cartAddress.telephone,
    };
  }
}
