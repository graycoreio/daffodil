import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffCartResolverRedirectUrl,
  provider: provideDaffCartResolverRedirectUrl,
} = createSingleInjectionToken<string>('DaffCartResolverRedirectUrl', { factory: () => '/' });
