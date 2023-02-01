import { DaffCustomerDriverErrorCodes } from '@daffodil/customer/driver';

export const DaffCustomerMagentoErrorMessageRegexMap = {
  [DaffCustomerDriverErrorCodes.DEFAULT_SHIPPING_ADDRESS_DELETION]: /is set as default shipping address and can not be deleted/,
  [DaffCustomerDriverErrorCodes.DEFAULT_BILLING_ADDRESS_DELETION]: /is set as default billing address and can not be deleted/,
};
