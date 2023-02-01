import {
  DAFF_CUSTOMER_ADDRESS_NOT_FOUND_ERROR_CODE,
  DaffCustomerAddressNotFoundError,
} from './address-not-found';
import {
  DaffCustomerDefaultBillingAddressDeletionError,
  DAFF_CUSTOMER_DEFAULT_BILLING_ADDRESS_DELETION_ERROR_CODE,
} from './default-billing-address-deletion';
import {
  DAFF_CUSTOMER_DEFAULT_SHIPPING_ADDRESS_DELETION_ERROR_CODE,
  DaffCustomerDefaultShippingAddressDeletionError,
} from './default-shipping-address-deletion';
import {
  DaffCustomerInvalidAPIResponseError,
  DAFF_CUSTOMER_INVALID_API_RESPONSE_ERROR_CODE,
} from './invalid-api-response';

/**
 * A mapping from error codes to error class constructors.
 */
export const DaffCustomerDriverErrorMap = {
  [DAFF_CUSTOMER_INVALID_API_RESPONSE_ERROR_CODE]: DaffCustomerInvalidAPIResponseError,
  [DAFF_CUSTOMER_ADDRESS_NOT_FOUND_ERROR_CODE]: DaffCustomerAddressNotFoundError,
  [DAFF_CUSTOMER_DEFAULT_BILLING_ADDRESS_DELETION_ERROR_CODE]: DaffCustomerDefaultBillingAddressDeletionError,
  [DAFF_CUSTOMER_DEFAULT_SHIPPING_ADDRESS_DELETION_ERROR_CODE]: DaffCustomerDefaultShippingAddressDeletionError,
};
