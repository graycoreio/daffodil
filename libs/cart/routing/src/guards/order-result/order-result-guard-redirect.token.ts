import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffCartOrderResultGuardRedirectUrl,
  provider: provideDaffCartOrderResultGuardRedirectUrl,
} = createSingleInjectionToken<string>('DaffCartOrderResultGuardRedirectUrl', { factory: () => '/' });
