import { Injectable, Inject } from '@angular/core';

import { DaffCartPayment } from '../../../models/cart-payment';
import { DaffCartPaymentTransformerInterface } from '../../interfaces/cart-payment-transformer.interface';
import { CartPayment as MagentoCartPayment } from '../models/cart-payment';

/**
 * Transforms magento carts into an object usable by daffodil.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartPaymentTransformerService implements DaffCartPaymentTransformerInterface<DaffCartPayment> {

  /**
   * Transforms the magento CartPayment from the magento cart query into a DaffCartPayment.
   * @param response the response from a magento cart query.
   */
  transform(responsePayment: MagentoCartPayment): DaffCartPayment {
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
