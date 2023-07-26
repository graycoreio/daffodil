import { DaffCustomerPayment } from '@daffodil/customer-payment';
import { DaffPaymentRequest } from '@daffodil/payment';

import { DAFF_CUSTOMER_PAYMENT_AUTHORIZENET_PAYMENT_KIND } from '../constants/public_api';

/**
 * The information needed to apply an authorize.net saved payment to the cart
 */
export interface DaffCustomerPaymentAuthorizeNetApplyRequestData {
  securityCode?: string;
  id: DaffCustomerPayment['id'];
}

/**
 * A request to apply a customer payment to the cart.
 */
export interface DaffCustomerPaymentAuthorizeNetApplyRequest extends DaffPaymentRequest<DaffCustomerPaymentAuthorizeNetApplyRequestData> {
  kind: typeof DAFF_CUSTOMER_PAYMENT_AUTHORIZENET_PAYMENT_KIND;
}
