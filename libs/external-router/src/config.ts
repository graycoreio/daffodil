import { createConfigInjectionToken } from '@daffodil/core';

export const daffExternalRouterConfigurationDefault: DaffExternalRouterConfiguration = {
  failedResolutionPath: '/',
};

export const {
  /**
   * The token holding the runtime configuration for the behavior of the
   * `@daffodil/external-router` package.
   */
  token: DAFF_EXTERNAL_ROUTER_CONFIG,
  /**
   * Provider function for {@link DAFF_EXTERNAL_ROUTER_CONFIG}.
   */
  provider: provideDaffExternalRouterConfig,
} = createConfigInjectionToken<DaffExternalRouterConfiguration>(daffExternalRouterConfigurationDefault, 'DAFF_EXTERNAL_ROUTER_CONFIG');

/**
 * The configuration object for the external router package.
 */
export interface DaffExternalRouterConfiguration {
  /**
   * The path to redirect to when external route resolution fails.
   */
  failedResolutionPath: string;
}
