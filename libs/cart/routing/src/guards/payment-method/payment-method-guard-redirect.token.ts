import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffCartPaymentMethodGuardRedirectUrl,
  /**
   * Provider function for {@link DaffCartPaymentMethodGuardRedirectUrl}.
   */
  provider: provideDaffCartPaymentMethodGuardRedirectUrl,
} = createSingleInjectionToken<string>('DaffCartPaymentMethodGuardRedirectUrl', { factory: () => '/' });
