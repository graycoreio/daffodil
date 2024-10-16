import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffCartResolverRedirectUrl,
  /**
   * Provider function for {@link DaffCartResolverRedirectUrl}.
   */
  provider: provideDaffCartResolverRedirectUrl,
} = createSingleInjectionToken<string>('DaffCartResolverRedirectUrl', { factory: () => '/' });
