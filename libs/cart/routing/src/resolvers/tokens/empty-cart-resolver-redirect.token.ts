import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffEmptyCartResolverRedirectUrl,
  provider: provideDaffEmptyCartResolverRedirectUrl,
} = createSingleInjectionToken<string>('DaffEmptyCartResolverRedirectUrl', { factory: () => '/' });
