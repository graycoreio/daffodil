import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffCartShippingAddressGuardRedirectUrl,
  /**
   * Provider function for {@link DaffCartShippingAddressGuardRedirectUrl}.
   */
  provider: provideDaffCartShippingAddressGuardRedirectUrl,
} = createSingleInjectionToken<string>('DaffCartShippingAddressGuardRedirectUrl', { factory: () => '/' });
