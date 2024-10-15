import { createSingleInjectionToken } from '@daffodil/core';

import { DaffPaypalExpressDriverConfig } from './type';

export const {
  token: DAFF_PAYPAL_EXPRESS_DRIVER_CONFIG,
  provider: provideDaffPaypalExpressDriverConfig,
} = createSingleInjectionToken<DaffPaypalExpressDriverConfig>('DAFF_PAYPAL_EXPRESS_DRIVER_CONFIG');
