import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffCartResolverRedirectUrl,
  provider: daffProvideCartResolverRedirectUrl,
} = createSingleInjectionToken<string>('DaffCartResolverRedirectUrl', { factory: () => '/' });
