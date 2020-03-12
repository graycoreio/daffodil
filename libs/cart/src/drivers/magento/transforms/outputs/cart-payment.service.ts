import { Injectable } from '@angular/core';

import { DaffCartPaymentMethod } from '../../../../models/cart-payment';
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
  transform(responsePayment: MagentoCartPaymentMethod): DaffCartPaymentMethod {
    return responsePayment ? {
      ...{magento_payment_method: responsePayment},

      method: responsePayment.code
    } : null
  }
}
