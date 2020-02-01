import { Injectable, Inject } from '@angular/core';

import { DaffCartPayment } from '../../../models/cart-payment';
import { DaffCartPaymentTransformerInterface } from '../../interfaces/cart-payment-transformer.interface';
import { Payment as ShopifyCartPayment } from '../models/payment';

/**
 * Transforms shopify carts into an object usable by daffodil.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffShopifyCartPaymentTransformerService implements DaffCartPaymentTransformerInterface<DaffCartPayment> {

  /**
   * Transforms the shopify CartPayment from the shopify cart query into a DaffCartPayment.
   * @param response the response from a shopify cart query.
   */
  transform(responsePayment: ShopifyCartPayment): DaffCartPayment {
    return {
      payment_id: 0,
      quote_id: 0,
      created_at: new Date(),
      updated_at: new Date(),
      method: '', //todo: actually an enum
      cc_type: '',
      cc_number_enc: '',
      cc_last4: '',
      cc_cid_enc: '',
      cc_owner: '',
      cc_exp_month: '',
      cc_exp_year: '',
      cc_ss_owner: '',
      cc_ss_start_month: '',
      cc_ss_start_year: '',
      po_number: '',
      cc_ss_issue: '',
    }
  }
}
