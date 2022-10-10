import { DaffPaymentRequest } from '@daffodil/payment';

import { DAFF_PAYPAL_PAYMENT_KIND } from '../constants/public_api';

export interface DaffPaypalPaymentRequest<T = unknown> extends DaffPaymentRequest<T> {
  kind: typeof DAFF_PAYPAL_PAYMENT_KIND;
}
