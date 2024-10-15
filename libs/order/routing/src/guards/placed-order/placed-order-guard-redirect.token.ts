import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffPlacedOrderGuardRedirectUrl,
  provider: provideDaffPlacedOrderGuardRedirectUrl,
} = createSingleInjectionToken<string>('DaffPlacedOrderGuardRedirectUrl', { factory: () => '/' });
