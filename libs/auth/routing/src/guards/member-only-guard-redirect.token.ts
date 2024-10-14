import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffAuthMemberOnlyGuardRedirectUrl,
  provider: daffProvideAuthMemberOnlyGuardRedirectUrl,
} = createSingleInjectionToken<string>(
  'DaffAuthMemberOnlyGuardRedirectUrl',
  { factory: () => '/' },
);
