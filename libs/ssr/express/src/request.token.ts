import { Request } from 'express';

import { createSingleInjectionToken } from '@daffodil/core';

export const {
  /**
   * A token to hold the express request during SSR.
   */
  token: DAFF_SSR_EXPRESS_REQUEST,
  /**
   * Provider for `DAFF_SSR_EXPRESS_REQUEST`.
   */
  provider: provideDaffSsrExpressRequest,
} = createSingleInjectionToken<Request>('DAFF_SSR_EXPRESS_REQUEST');
