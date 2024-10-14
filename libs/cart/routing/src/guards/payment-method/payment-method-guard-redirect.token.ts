import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffCartPaymentMethodGuardRedirectUrl,
  provider: daffProvideCartPaymentMethodGuardRedirectUrl,
} = createSingleInjectionToken<string>('DaffCartPaymentMethodGuardRedirectUrl', { factory: () => '/' });
