import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffCartShippingMethodGuardRedirectUrl,
  provider: provideDaffCartShippingMethodGuardRedirectUrl,
} = createSingleInjectionToken<string>('DaffCartShippingMethodGuardRedirectUrl', { factory: () => '/' });
