import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffCartShippingMethodGuardRedirectUrl,
  /**
   * Provider function for {@link DaffCartShippingMethodGuardRedirectUrl}.
   */
  provider: provideDaffCartShippingMethodGuardRedirectUrl,
} = createSingleInjectionToken<string>('DaffCartShippingMethodGuardRedirectUrl', { factory: () => '/' });
