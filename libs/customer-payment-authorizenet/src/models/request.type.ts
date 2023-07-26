import { DaffAuthorizeNetTokenRequest } from '@daffodil/authorizenet';
import { DaffCustomerPaymentRequest } from '@daffodil/customer-payment';

import { DAFF_CUSTOMER_PAYMENT_AUTHORIZENET_PAYMENT_KIND } from '../constants/public_api';
import { DaffCustomerPaymentAuthorizeNetCCType } from './cc-type.enum';

export interface DaffCustomerPaymentAuthorizeNetRequestData extends DaffAuthorizeNetTokenRequest {
  /**
   * The customer's email or login identifier.
   */
  email: string;

  /**
   * The type of card (Mastercard, Visa, etc.).
   */
  type: DaffCustomerPaymentAuthorizeNetCCType;
}

/**
 * An authorize.net customer payment request.
 * This is used to add a new payment.
 */
export interface DaffCustomerPaymentAuthorizeNetRequest extends DaffCustomerPaymentRequest<DaffCustomerPaymentAuthorizeNetRequestData> {
  kind: typeof DAFF_CUSTOMER_PAYMENT_AUTHORIZENET_PAYMENT_KIND;
}
