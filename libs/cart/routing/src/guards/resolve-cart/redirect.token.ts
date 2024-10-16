import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffResolveCartGuardRedirectUrl,
  /**
   * Provider function for {@link DaffResolveCartGuardRedirectUrl}.
   */
  provider: provideDaffResolveCartGuardRedirectUrl,
} = createSingleInjectionToken<string>('DaffResolveCartGuardRedirectUrl', { factory: () => '/' });
