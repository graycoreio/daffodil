import { Injectable } from '@angular/core';

import { DaffCartShippingRate } from '@daffodil/cart';

import { MagentoCartShippingMethod } from '../../models/responses/cart-shipping-method';

/**
 * Transforms magento cart shipping methods into an object usable by daffodil.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffMagentoCartShippingRateTransformer {
  /**
   * Transforms the magento shipping method from the magento cart query into a DaffCartShippingRate.
   *
   * @param shippingMethod the shippingMethod from a magento cart query.
   */
  transform(shippingMethod: MagentoCartShippingMethod): DaffCartShippingRate {
    return shippingMethod ? {
      carrier: shippingMethod.carrier_code,
      carrier_title: shippingMethod.carrier_title,
      price: shippingMethod.amount.value,
      method_code: shippingMethod.method_code,
      method_title: shippingMethod.method_title,
      id: shippingMethod.method_code,

      // TODO: implement
      method_description: null,
    } : null;
  }
}
