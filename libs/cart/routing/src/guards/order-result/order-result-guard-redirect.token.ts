import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffCartOrderResultGuardRedirectUrl,
  provider: daffProvideCartOrderResultGuardRedirectUrl,
} = createSingleInjectionToken<string>('DaffCartOrderResultGuardRedirectUrl', { factory: () => '/' });
