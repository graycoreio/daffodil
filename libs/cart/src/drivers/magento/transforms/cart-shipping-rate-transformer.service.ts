import { Injectable, Inject } from '@angular/core';

import { DaffCartShippingRate } from '../../../models/cart-shipping-rate';
import { DaffCartShippingRateTransformerInterface } from '../../interfaces/cart-shipping-rate-transformer.interface';
import { CartShippingMethod as MagentoCartShippingMethod } from '../models/cart-shipping-method';

/**
 * Transforms magento cart shipping methods into an object usable by daffodil.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartShippingRateTransformerService implements DaffCartShippingRateTransformerInterface<DaffCartShippingRate> {
  /**
   * Transforms the magento shipping method from the magento cart query into a DaffCartShippingRate.
   * @param shippingMethod the shippingMethod from a magento cart query.
   */
  transform(shippingMethod: MagentoCartShippingMethod): DaffCartShippingRate {
    return {
      // shipping method
      carrier: shippingMethod.carrier_code,
      carrier_title: shippingMethod.carrier_title,
      code: shippingMethod.method_code,
      price: shippingMethod.price_incl_tax,
      error_message: shippingMethod.error_message,
      method_title: shippingMethod.method_title,

      // TODO: implement
      rate_id: 0,
      address_id: 0,
      created_at: new Date(),
      updated_at: new Date(),
      method: '',
      method_description: '',
    }
  }
}
