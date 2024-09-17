import { InjectionToken } from '@angular/core';

export const daffExternalRouterConfigurationDefault: DaffExternalRouterConfiguration = {
  failedResolutionPath: '/',
  notFoundResolutionPath: '/',
};

/**
 * The token holding the runtime configuration for the behavior of the
 * `@daffodil/external-router` package.
 */
export const DAFF_EXTERNAL_ROUTER_CONFIG = new InjectionToken<
  DaffExternalRouterConfiguration
>('DAFF_EXTERNAL_ROUTER_CONFIG', {
  providedIn: 'root',
  factory: () => daffExternalRouterConfigurationDefault,
});

/**
 * The configuration object for the external router package.
 */
export interface DaffExternalRouterConfiguration {
  /**
   * The path to redirect to when external route resolution fails.
   */
  failedResolutionPath: string;

  /**
   * The path to redirect to when the requested URL is not found.
   */
  notFoundResolutionPath: string;
}
