import { Injectable } from '@angular/core';

import { MagentoCartPaymentMethod } from '../../models/outputs/cart-payment-method';

/**
 * Transforms magento carts into an object usable by daffodil.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartPaymentTransformer {

  /**
   * Transforms the magento CartPayment from the magento cart query into a DaffCartPaymentMethod.
   * @param response the response from a magento cart query.
   */
  transform(responsePayment: MagentoCartPaymentMethod) {
    return {
      method: responsePayment.code
    }
  }
}
