import { DaffCustomerAddress } from '@daffodil/customer';
import { DaffPaymentRequest } from '@daffodil/payment';

/**
 * An payment that belongs to a {@link DaffCustomer}
 */
export interface DaffCustomerPaymentRequest<T = unknown> extends DaffPaymentRequest<T> {
  /**
   * Whether this payment is the customer's default payment.
   */
  default: boolean;

  /**
   * The customer address that will be used as the billing address when this saved payment is used.
   */
  address: DaffCustomerAddress;

  /**
   * A user-supplied label for the saved payment.
   */
  nickname: string;

  /**
   * The owner of the saved payment method.
   * Depending on the type of payment, it may be a name, email address, etc.
   */
  owner: string;
}
