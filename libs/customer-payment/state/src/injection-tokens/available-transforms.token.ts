import { createMultiInjectionToken } from '@daffodil/core';

import { DaffCustomerPaymentRequestTransform } from '../models/public_api';

export const {
  /**
   * A multi-provider injection token for registering customer payment request transforms.
   */
  token: DAFF_CUSTOMER_PAYMENT_REQUEST_TRANSFORMS,

  /**
   * Provides a customer payment request transform registration.
   *
   * See {@link DaffCustomerPaymentRequestTransform}.
   */
  provider: daffPaymentProvideAvailableProcessors,
} = createMultiInjectionToken<DaffCustomerPaymentRequestTransform>(
  'DAFF_CUSTOMER_PAYMENT_REQUEST_TRANSFORMS',
  { providedIn: 'any' },
);
