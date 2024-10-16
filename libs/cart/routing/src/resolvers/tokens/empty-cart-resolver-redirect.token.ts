import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffEmptyCartResolverRedirectUrl,
  /**
   * Provider function for {@link DaffEmptyCartResolverRedirectUrl}.
   */
  provider: provideDaffEmptyCartResolverRedirectUrl,
} = createSingleInjectionToken<string>('DaffEmptyCartResolverRedirectUrl', { factory: () => '/' });
