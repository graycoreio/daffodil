import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffEmptyCartResolverRedirectUrl,
  provider: daffProvideEmptyCartResolverRedirectUrl,
} = createSingleInjectionToken<string>('DaffEmptyCartResolverRedirectUrl', { factory: () => '/' });
