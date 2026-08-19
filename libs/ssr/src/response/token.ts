import { createSingleInjectionToken } from '@daffodil/core';

import { DaffSsrNoopResponse } from './noop.class';
import { DaffSsrResponse } from './type';

export const {
  /**
   * A token to hold the response during SSR.
   * @deprecated in favor of native Angular features: https://angular.dev/guide/ssr#accessing-request-and-response-via-di. Deprecated in version 0.94.0. Will be removed in version 0.97.0.
   */
  token: DAFF_SSR_RESPONSE,
  /**
   * Provider for `DAFF_SSR_RESPONSE`.
   * @deprecated in favor of native Angular features: https://angular.dev/guide/ssr#accessing-request-and-response-via-di. Deprecated in version 0.94.0. Will be removed in version 0.97.0.
   */
  provider: provideDaffSsrResponse,
} = createSingleInjectionToken<DaffSsrResponse>('DAFF_SSR_RESPONSE', { factory: () => new DaffSsrNoopResponse(), providedIn: 'platform' });
