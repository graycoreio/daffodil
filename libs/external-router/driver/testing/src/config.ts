import { createConfigInjectionToken } from '@daffodil/core';
import { DaffExternalRouteType } from '@daffodil/external-router';

/**
 * The configuration for the testing driver. It is a dictionary of "url": "type",
 * pairs, where the URL is a URL-safe routeable path, e.g. "sweatshirts" or "t-shirts"
 * and the type is a known type to your application, e.g. "CATEGORY".
 */
export interface DaffExternalRouterDriverTestingConfig {
  [url: string]: DaffExternalRouteType;
}

export const {
  /**
   * The token used by Daffodil to hold the driver's configuration.
   *
   * @docs-private
   */
  token: DAFF_EXTERNAL_ROUTER_DRIVER_TESTING_CONFIG,
  provider: daffProvideExternalRouterDriverTestingConfig,
} = createConfigInjectionToken<DaffExternalRouterDriverTestingConfig>(({}), 'DAFF_EXTERNAL_ROUTER_DRIVER_TESTING_CONFIG');
