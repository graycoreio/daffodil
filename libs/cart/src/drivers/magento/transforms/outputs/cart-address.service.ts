import { Injectable } from '@angular/core';

import { MagentoCartAddress } from '../../models/outputs/cart-address';
import { DaffCartAddress } from '../../../../models/cart-address';

/**
 * Transforms magento addresses into an object usable by daffodil.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartAddressTransformer {
  /**
   * Transforms the magento MagentoCart from the magento cart query into a DaffCartAddress.
   * @param address the address from a magento cart query.
   */
  transform(address: MagentoCartAddress): DaffCartAddress {
    return {
      ...{magento_address: address},

      // address
      street: address.street[0],
      city: address.city,
      region: address.region.label,
      region_id: address.region.code,
      country: address.country.label,
      country_id: address.country.code,
      postcode: address.postcode,

      // personal address
      firstname: address.firstname,
      lastname: address.lastname,
      telephone: address.telephone,
      email: address.email,

      // TODO: implement
      address_id: null,
      suffix: null,
      middlename: null,
      prefix: null,
      address_type: null,
    }
  }
}
