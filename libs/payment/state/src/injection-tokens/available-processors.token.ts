import { createMultiInjectionToken } from '@daffodil/core';

import { DaffPaymentAvailableProcessor } from '../models/public_api';

export const {
  /**
   * A multi-provider injection token for registering payment processors.
   */
  token: DAFF_PAYMENT_AVAILABLE_PROCESSORS,

  /**
   * Provides a payment processor registration.
   *
   * See {@link DaffPaymentAvailableProcessor}.
   */
  provider: daffPaymentProvideAvailableProcessors,
} = createMultiInjectionToken<DaffPaymentAvailableProcessor>(
  'DAFF_PAYMENT_AVAILABLE_PROCESSORS',
  { providedIn: 'any' },
);
