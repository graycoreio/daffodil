import { DaffPaymentRequest } from '@daffodil/payment';

import { DAFF_PAYPAL_PAYMENT_KIND } from '../constants/public_api';
import { DaffPaypalExpressPaymentData } from './express-payment-request.type';

export interface DaffPaypalExpressPaymentRequest extends DaffPaymentRequest<DaffPaypalExpressPaymentData> {
  kind: typeof DAFF_PAYPAL_PAYMENT_KIND;
}
