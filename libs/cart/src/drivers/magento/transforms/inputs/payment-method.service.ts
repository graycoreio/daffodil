import { Injectable } from '@angular/core';

import { MagentoPaymentMethodInput } from '../../models/inputs/payment-method';
import { DaffCartPaymentMethod } from '../../../../models/cart-payment';

@Injectable()
export class DaffMagentoPaymentMethodInputTransformer {
  transform(payment: Partial<DaffCartPaymentMethod>): MagentoPaymentMethodInput {
    return {
			...payment.payment_info
    }
  }
}
