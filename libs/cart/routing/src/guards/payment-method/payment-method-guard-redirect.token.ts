import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffCartPaymentMethodGuardRedirectUrl,
  provider: provideDaffCartPaymentMethodGuardRedirectUrl,
} = createSingleInjectionToken<string>('DaffCartPaymentMethodGuardRedirectUrl', { factory: () => '/' });
