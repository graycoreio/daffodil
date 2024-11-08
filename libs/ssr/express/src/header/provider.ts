import { provideDaffSsrHeaderService } from '@daffodil/ssr';

import { DaffSsrHeaderExpressService } from './service';

/**
 * Provides the `DaffSsrHeaderExpressService`.
 */
export const provideDaffSsrHeaderExpressService = () => [
  DaffSsrHeaderExpressService,
  provideDaffSsrHeaderService(DaffSsrHeaderExpressService),
];
