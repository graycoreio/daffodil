import { Injectable } from '@angular/core';

import { DaffCartShippingInformation } from '@daffodil/cart';

import { MagentoCartShippingMethod } from '../../models/responses/cart-shipping-method';
import { DaffMagentoCartShippingRateTransformer } from './cart-shipping-rate.service';

/**
 * Transforms magento cart shipping methods into an object usable by daffodil.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartShippingInformationTransformer {
  constructor(public shippingRateTransformer: DaffMagentoCartShippingRateTransformer) {}
  /**
   * Transforms the magento shipping method from the magento cart query into a DaffCartShippingInformation.
   * @param shippingMethod the shippingMethod from a magento cart query.
   */
  transform(shippingMethod: MagentoCartShippingMethod): DaffCartShippingInformation {
    return shippingMethod ? {
      ...this.shippingRateTransformer.transform(shippingMethod),
      // TODO: implement
      address_id: null
    } : null
  }
}
