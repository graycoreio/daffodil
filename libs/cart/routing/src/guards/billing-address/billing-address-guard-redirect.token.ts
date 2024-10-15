import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffCartBillingAddressGuardRedirectUrl,
  provider: provideDaffCartBillingAddressGuardRedirectUrl,
} = createSingleInjectionToken<string>('DaffCartBillingAddressGuardRedirectUrl', { factory: () => '/' });
