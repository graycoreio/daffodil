import { Response } from 'express';

import { createSingleInjectionToken } from '@daffodil/core';

export const {
  /**
   * A token to hold the express response during SSR.
   */
  token: DAFF_SSR_EXPRESS_RESPONSE,
  /**
   * Provider for `DAFF_SSR_EXPRESS_RESPONSE`.
   */
  provider: provideDaffSsrExpressResponse,
} = createSingleInjectionToken<Response>('DAFF_SSR_EXPRESS_RESPONSE');
