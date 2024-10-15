import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffAuthGuestOnlyGuardRedirectUrl,
  provider: provideDaffAuthGuestOnlyGuardRedirectUrl,
} = createSingleInjectionToken<string>(
  'DaffAuthGuestOnlyGuardRedirectUrl',
  { factory: () => '/' },
);
