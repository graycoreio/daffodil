import { DaffCustomerPaymentDriverErrorCodes } from '@daffodil/customer-payment/driver';

export const DaffCustomerPaymentMagentoErrorMessageRegexMap = {
  [DaffCustomerPaymentDriverErrorCodes.DEFAULT_PAYMENT_DELETION]: /is set as default payment and can not be deleted/,
};
