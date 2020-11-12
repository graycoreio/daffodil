import { Injectable } from '@angular/core';

import { DaffCartPaymentMethod } from '@daffodil/cart';

import { MagentoPaymentMethodInput } from '../../models/requests/payment-method';

@Injectable()
export class DaffMagentoPaymentMethodInputTransformer {
  transform(payment: Partial<DaffCartPaymentMethod>): MagentoPaymentMethodInput {
    return {
			...payment.payment_info
    }
  }
}
