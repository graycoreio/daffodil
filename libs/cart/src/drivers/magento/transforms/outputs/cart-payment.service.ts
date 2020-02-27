import { Injectable } from '@angular/core';

import { DaffCartPaymentMethod } from '../../../../models/cart-payment';

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
  transform(responsePayment): DaffCartPaymentMethod {
    return {
      ...responsePayment,
      method: responsePayment.code
    }
  }
}
