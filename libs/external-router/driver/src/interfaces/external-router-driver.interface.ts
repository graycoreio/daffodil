import { Observable } from 'rxjs';

import { createSingletonInjectionToken } from '@daffodil/core';
import { DaffExternallyResolvableUrl } from '@daffodil/external-router';

export const {
  /**
   * The token for the `@daffodil/external-router` driver.
   */
  token: DaffExternalRouterDriver,
  /**
   * Provider function for {@link DaffExternalRouterDriver}.
   */
  provider: provideDaffExternalRouterDriver,
} = createSingletonInjectionToken<DaffExternalRouterDriverInterface>('DaffExternalRouterDriver');

/**
 * The interface for a `@daffodil/external-router` driver.
 *
 * This driver is responsible for translating a URL into a Route consumable by
 * Daffodil.
 */
export interface DaffExternalRouterDriverInterface {
  /**
   * Resolves a URL with a platform.
   * Returns information about the type of URL.
   *
   * @param url The full URL path qualified with file extension and leading slash but without domain. i.e. /full/path/to/thing.html
   */
  resolve(url: string): Observable<DaffExternallyResolvableUrl>;
}
