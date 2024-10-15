import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffAuthMemberOnlyGuardRedirectUrl,
  provider: provideDaffAuthMemberOnlyGuardRedirectUrl,
} = createSingleInjectionToken<string>(
  'DaffAuthMemberOnlyGuardRedirectUrl',
  { factory: () => '/' },
);
