import { Injectable, Inject } from '@angular/core';

import { DaffCartShippingRate } from '../../../models/cart-shipping-rate';
import { DaffCartShippingRateTransformerInterface } from '../../interfaces/cart-shipping-rate-transformer.interface';
import { ShippingRateNode as ShopifyCartShippingMethod } from '../models/shipping-rate-node';

/**
 * Transforms shopify cart shipping methods into an object usable by daffodil.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffShopifyCartShippingRateTransformerService implements DaffCartShippingRateTransformerInterface<DaffCartShippingRate> {
  /**
   * Transforms the shopify shipping method from the shopify cart query into a DaffCartShippingRate.
   * @param shippingMethod the shippingMethod from a shopify cart query.
   */
  transform(shippingMethod: ShopifyCartShippingMethod): DaffCartShippingRate {
    return {
      // shipping method
      code: shippingMethod.handle,
      price: shippingMethod.priceV2.amount,

      // TODO: implement
      carrier: '',
      carrier_title: '',
      error_message: '',
      method_title: '',
      rate_id: 0,
      address_id: 0,
      created_at: new Date(),
      updated_at: new Date(),
      method: '',
      method_description: '',
    }
  }
}
