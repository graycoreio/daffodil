import { createSingleInjectionToken } from '@daffodil/core';

import { DaffSsrNoopResponse } from './noop.class';
import { DaffSsrResponse } from './type';

export const {
  /**
   * A token to hold the response during SSR.
   */
  token: DAFF_SSR_RESPONSE,
  /**
   * Provider for `DAFF_SSR_RESPONSE`.
   */
  provider: provideDaffSsrResponse,
} = createSingleInjectionToken<DaffSsrResponse>('DAFF_SSR_RESPONSE', { factory: () => new DaffSsrNoopResponse() });
