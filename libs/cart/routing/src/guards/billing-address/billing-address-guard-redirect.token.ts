import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffCartBillingAddressGuardRedirectUrl,
  provider: daffProvideCartBillingAddressGuardRedirectUrl,
} = createSingleInjectionToken<string>('DaffCartBillingAddressGuardRedirectUrl', { factory: () => '/' });
