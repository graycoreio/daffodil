import { DaffIdentifiable } from '@daffodil/core';
import { DaffPersonalAddress } from '@daffodil/geography';
import { DaffPaymentResponse } from '@daffodil/payment';

/**
 * An payment that belongs to a {@link DaffCustomer}
 */
export interface DaffCustomerPayment<T = unknown> extends DaffPaymentResponse<T>, DaffIdentifiable {
  /**
   * Whether this payment is the customer's default payment.
   */
  default: boolean;

  /**
   * The address that will be used as the billing address when this saved payment is used.
   */
  address: DaffPersonalAddress;

  /**
   * A user-supplied label for the saved payment.
   */
  nickname: string;

  /**
   * The date at which this payment was created.
   */
  createdAt: string;

  /**
   * The owner of the saved payment method.
   * Depending on the type of payment, it may be a name, email address, etc.
   */
  owner: string;
}
