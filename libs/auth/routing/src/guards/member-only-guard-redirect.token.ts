import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffAuthMemberOnlyGuardRedirectUrl,
  /**
   * Provider function for {@link DaffAuthMemberOnlyGuardRedirectUrl}.
   */
  provider: provideDaffAuthMemberOnlyGuardRedirectUrl,
} = createSingleInjectionToken<string>(
  'DaffAuthMemberOnlyGuardRedirectUrl',
  { factory: () => '/' },
);
