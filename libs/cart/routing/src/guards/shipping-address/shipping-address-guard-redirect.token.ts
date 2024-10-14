import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffCartShippingAddressGuardRedirectUrl,
  provider: daffProvideCartShippingAddressGuardRedirectUrl,
} = createSingleInjectionToken<string>('DaffCartShippingAddressGuardRedirectUrl', { factory: () => '/' });
