import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffCartShippingMethodGuardRedirectUrl,
  provider: daffProvideCartShippingMethodGuardRedirectUrl,
} = createSingleInjectionToken<string>('DaffCartShippingMethodGuardRedirectUrl', { factory: () => '/' });
