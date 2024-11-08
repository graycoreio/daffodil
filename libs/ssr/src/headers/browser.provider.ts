import { DaffSsrHeaderNoopService } from './noop.service';
import { provideDaffSsrHeaderService } from './service.token';

/**
 * Provides the `DaffSsrHeaderNoopService`.
 */
export const provideDaffSsrHeaderBrowserService = () => [
  DaffSsrHeaderNoopService,
  provideDaffSsrHeaderService(DaffSsrHeaderNoopService),
];
