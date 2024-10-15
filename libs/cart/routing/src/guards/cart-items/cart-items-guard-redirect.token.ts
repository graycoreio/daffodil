import { createSingleInjectionToken } from '@daffodil/core';

export const {
  /**
   * The path to which the user should be redirected if the cart has no items when {@link DaffCartItemsGuard} is invoked.
   */
  token: DaffCartItemsGuardRedirectUrl,
  provider: provideDaffCartItemsGuardRedirectUrl,
} = createSingleInjectionToken<string>('DaffCartItemsGuardRedirectUrl', { factory: () => '/' });
