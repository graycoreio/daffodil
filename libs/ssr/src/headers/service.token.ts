import { createSingletonInjectionToken } from '@daffodil/core';

import { DaffSsrHeaderService } from './service.type';

export const {
  /**
   * A token to hold the `DaffSsrHeaderService`.
   */
  token: DAFF_SSR_HEADER_SERVICE,
  /**
   * Provider for `DAFF_SSR_HEADER_SERVICE`.
   */
  provider: provideDaffSsrHeaderService,
} = createSingletonInjectionToken<DaffSsrHeaderService>('DAFF_SSR_HEADER_SERVICE');
