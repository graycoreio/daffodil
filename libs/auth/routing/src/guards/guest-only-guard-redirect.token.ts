import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffAuthGuestOnlyGuardRedirectUrl,
  provider: daffProvideAuthGuestOnlyGuardRedirectUrl,
} = createSingleInjectionToken<string>(
  'DaffAuthGuestOnlyGuardRedirectUrl',
  { factory: () => '/' },
);
