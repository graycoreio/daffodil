import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffCartShippingAddressGuardRedirectUrl,
  provider: provideDaffCartShippingAddressGuardRedirectUrl,
} = createSingleInjectionToken<string>('DaffCartShippingAddressGuardRedirectUrl', { factory: () => '/' });
