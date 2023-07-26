import {
  DaffCustomerPayment,
  DaffCustomerPaymentRequest,
} from '@daffodil/customer-payment';

/**
 * Creates a payment from a payment request.
 * Used for generating optimistic entities.
 */
export interface DaffCustomerPaymentRequestTransform {
  kind: DaffCustomerPaymentRequest['kind'];
  transform: (request: DaffCustomerPaymentRequest) => DaffCustomerPayment;
};
