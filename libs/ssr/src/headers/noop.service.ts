import { DaffSsrHeaderService } from './service.type';

/**
 * A header service that does nothing.
 * Appropriate for the browser environment.
 */
export class DaffSsrHeaderNoopService implements DaffSsrHeaderService {
  /**
   * Does nothing in the noop service.
   */
  addResponseHeader(name: string, value: string): void {};
}
