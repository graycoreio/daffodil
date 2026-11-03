import { DaffPaymentResponse } from '@daffodil/payment';

import { MAGENTO_PAYPAL_EXPRESS_PAYMENT_METHOD } from '../../constants/public_api';

export interface MagentoPaypalExpressPaymentResponseData {
  code: typeof MAGENTO_PAYPAL_EXPRESS_PAYMENT_METHOD;
  [MAGENTO_PAYPAL_EXPRESS_PAYMENT_METHOD]: {
    token: string;
    payer_id: string;
  };
}

export type MagentoPaypalExpressPaymentResponse = DaffPaymentResponse<MagentoPaypalExpressPaymentResponseData>;
