import { DaffCustomerPayment } from '@daffodil/customer-payment';

import { DaffCustomerPaymentAuthorizeNetCCType } from './cc-type.enum';

export interface DaffCustomerPaymentAuthorizeNetData {
  /**
   * The last 4 numbers of the card number.
   */
  last4: string;

  /**
   * The type of card (Mastercard, Visa, etc.).
   */
  type: DaffCustomerPaymentAuthorizeNetCCType;

  /**
   * The expiration month.
   */
  expMonth: string;

  /**
   * The full expiration year, e.g. 2022.
   */
  expYear: string;
}

/**
 * An authorize.net saved payment that belongs to a {@link DaffCustomer}
 */
export type DaffCustomerPaymentAuthorizeNet = DaffCustomerPayment<DaffCustomerPaymentAuthorizeNetData>;
