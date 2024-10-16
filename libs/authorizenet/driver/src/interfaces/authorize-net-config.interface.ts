import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffAuthorizeNetConfigToken,
  /**
   * Provider function for {@link DaffAuthorizeNetConfigToken}.
   */
  provider: provideDaffAuthorizeNetConfigToken,
} = createSingleInjectionToken<DaffAuthorizeNetConfig>('DaffAuthorizeNetConfigToken');

/**
 * An interface for providing @daffodil/authorizenet with needed configurations specific to your authorizenet
 * endpoint.
 */
export interface DaffAuthorizeNetConfig {
  clientKey: string;
  apiLoginID: string;
}
