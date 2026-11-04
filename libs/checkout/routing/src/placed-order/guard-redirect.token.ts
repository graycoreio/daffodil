import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffCheckoutPlacedOrderGuardRedirectUrl,
  /**
   * Provider function for {@link DaffCheckoutPlacedOrderGuardRedirectUrl}.
   */
  provider: provideDaffCheckoutPlacedOrderGuardRedirectUrl,
} = createSingleInjectionToken<string>('DaffCheckoutPlacedOrderGuardRedirectUrl', { factory: () => '/' });
