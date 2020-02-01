import { Injectable, Inject } from '@angular/core';

import { DaffCartAddress } from '../../../models/cart-address';
import { DaffCartAddressTransformerInterface } from '../../interfaces/cart-address-transformer.interface';
import { MailingAddress as ShopifyCartAddress } from '../models/mailing-address';
import { DaffCartShippingRateTransformerInterface } from '../../interfaces/cart-shipping-rate-transformer.interface';
import { DaffCartShippingRate } from '../../../models/cart-shipping-rate';
import { DaffCartShippingRateTransformer } from '../../injection-tokens/cart-shipping-rate-transformer.token';

/**
 * Transforms shopify addresses into an object usable by daffodil.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffShopifyCartAddressTransformerService implements DaffCartAddressTransformerInterface<DaffCartAddress> {
  constructor (
    @Inject(DaffCartShippingRateTransformer) public shippingRateTransformer: DaffCartShippingRateTransformerInterface<DaffCartShippingRate>
  ) {}

  /**
   * Transforms the shopify Cart from the shopify cart query into a DaffCartAddress.
   * @param address the address from a shopify cart query.
   */
  transform(address: ShopifyCartAddress): DaffCartAddress {
    return {
      address_id: Number(address.id),
      firstname: address.firstName,
      lastname: address.lastName,
      company: address.company,
      street: address.address1,
      city: address.city,
      region: address.province,
      postcode: address.zip,
      country_id: address.country, //todo: ISO code
      telephone: address.phone,
      customer_id: Number(address.customer_id),
      shipping_rate: this.shippingRateTransformer.transform(address.shipping_rate),

      // TODO: implement
      customer_address_id: 0,
      quote_id: 0,
      address_type: '', //todo: is actually an enum
      email: '',
      prefix: '',
      middlename: '',
      suffix: '',
      region_id: 0,
      fax: '',
      created_at: new Date(),
      updated_at: new Date(),
      shipping_method: null,
      shipping_description: null,
      state: null,
    }
  }
}
