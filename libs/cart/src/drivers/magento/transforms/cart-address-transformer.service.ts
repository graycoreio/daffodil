import { Injectable, Inject } from '@angular/core';

import { DaffCartAddress } from '../../../models/cart-address';
import { DaffCartAddressTransformerInterface } from '../../interfaces/cart-address-transformer.interface';
import { CartAddress as MagentoCartAddress } from '../models/cart-address';
import { DaffCartShippingRateTransformerInterface } from '../../interfaces/cart-shipping-rate-transformer.interface';
import { DaffCartShippingRate } from '../../../models/cart-shipping-rate';
import { DaffCartShippingRateTransformer } from '../../injection-tokens/cart-shipping-rate-transformer.token';

/**
 * Transforms magento addresses into an object usable by daffodil.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartAddressTransformerService implements DaffCartAddressTransformerInterface<DaffCartAddress> {
  constructor (
    @Inject(DaffCartShippingRateTransformer) public shippingRateTransformer: DaffCartShippingRateTransformerInterface<DaffCartShippingRate>
  ) {}

  /**
   * Transforms the magento Cart from the magento cart query into a DaffCartAddress.
   * @param address the address from a magento cart query.
   */
  transform(address: MagentoCartAddress): DaffCartAddress {
    return {
      address_id: address.id,
      email: address.email,
      prefix: address.prefix,
      firstname: address.firstname,
      middlename: address.middlename,
      lastname: address.lastname,
      suffix: address.suffix,
      company: address.company,
      street: address.street[0],
      city: address.city,
      region: address.region,
      region_id: address.region_id,
      postcode: address.postcode,
      country_id: address.country_id, //todo: ISO code
      telephone: address.telephone,
      fax: address.fax,
      customer_id: address.customer_id,
      customer_address_id: address.customer_address_id,

      //
      shipping_rate: this.shippingRateTransformer.transform(address.method),

      // get from CartItem?
      quote_id: 0,

      address_type: address.type, //todo: is actually an enum

      // TODO: implement
      created_at: new Date(),
      updated_at: new Date(),
      shipping_method: null,
      shipping_description: null,
      state: null,
    }
  }
}
