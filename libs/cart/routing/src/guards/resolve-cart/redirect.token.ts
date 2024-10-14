import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffResolveCartGuardRedirectUrl,
  provider: daffProvideResolveCartGuardRedirectUrl,
} = createSingleInjectionToken<string>('DaffResolveCartGuardRedirectUrl', { factory: () => '/' });
