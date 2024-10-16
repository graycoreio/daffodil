import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffPlacedOrderGuardRedirectUrl,
  /**
   * Provider function for {@link DaffPlacedOrderGuardRedirectUrl}.
   */
  provider: provideDaffPlacedOrderGuardRedirectUrl,
} = createSingleInjectionToken<string>('DaffPlacedOrderGuardRedirectUrl', { factory: () => '/' });
