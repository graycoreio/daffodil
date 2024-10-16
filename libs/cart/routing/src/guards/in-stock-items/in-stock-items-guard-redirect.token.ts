import { createSingleInjectionToken } from '@daffodil/core';

export const {
  /**
   * The path to which the user should be redirected if the cart has no items when {@link DaffCartInStockItemsGuard} is invoked.
   */
  token: DaffCartInStockItemsGuardRedirectUrl,
  /**
   * Provider function for {@link DaffCartInStockItemsGuardRedirectUrl}.
   */
  provider: provideDaffCartInStockItemsGuardRedirectUrl,
} = createSingleInjectionToken<string>('DaffCartInStockItemsGuardRedirectUrl', { factory: () => '/' });
