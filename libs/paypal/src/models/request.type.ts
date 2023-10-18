import { DaffPaymentRequest } from '@daffodil/payment';

import { DaffPaypalExpressPaymentData } from './express-payment-request.type';
import { DAFF_PAYPAL_PAYMENT_KIND } from '../constants/public_api';

export interface DaffPaypalExpressPaymentRequest extends DaffPaymentRequest<DaffPaypalExpressPaymentData> {
  kind: typeof DAFF_PAYPAL_PAYMENT_KIND;
}
