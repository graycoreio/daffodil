import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffAuthGuestOnlyGuardRedirectUrl,
  /**
   * Provider function for {@link DaffAuthGuestOnlyGuardRedirectUrl}.
   */
  provider: provideDaffAuthGuestOnlyGuardRedirectUrl,
} = createSingleInjectionToken<string>(
  'DaffAuthGuestOnlyGuardRedirectUrl',
  { factory: () => '/' },
);
