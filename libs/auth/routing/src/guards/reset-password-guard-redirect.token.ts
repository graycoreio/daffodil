import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffAuthResetPasswordGuardRedirectUrl,
  /**
   * Provider function for {@link DaffAuthResetPasswordGuardRedirectUrl}.
   */
  provider: provideDaffAuthResetPasswordGuardRedirectUrl,
} = createSingleInjectionToken<string>(
  'DaffAuthResetPasswordGuardRedirectUrl',
  { factory: () => '/' },
);
