import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffResolveCartGuardRedirectUrl,
  provider: provideDaffResolveCartGuardRedirectUrl,
} = createSingleInjectionToken<string>('DaffResolveCartGuardRedirectUrl', { factory: () => '/' });
