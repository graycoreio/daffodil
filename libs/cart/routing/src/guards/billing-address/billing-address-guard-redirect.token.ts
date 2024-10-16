import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffCartBillingAddressGuardRedirectUrl,
  /**
   * Provider function for {@link DaffCartBillingAddressGuardRedirectUrl}.
   */
  provider: provideDaffCartBillingAddressGuardRedirectUrl,
} = createSingleInjectionToken<string>('DaffCartBillingAddressGuardRedirectUrl', { factory: () => '/' });
