import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffCartOrderResultGuardRedirectUrl,
  /**
   * Provider function for {@link DaffCartOrderResultGuardRedirectUrl}.
   */
  provider: provideDaffCartOrderResultGuardRedirectUrl,
} = createSingleInjectionToken<string>('DaffCartOrderResultGuardRedirectUrl', { factory: () => '/' });
