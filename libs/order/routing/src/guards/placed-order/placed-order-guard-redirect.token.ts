import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffPlacedOrderGuardRedirectUrl,
  provider: daffProvidePlacedOrderGuardRedirectUrl,
} = createSingleInjectionToken<string>('DaffPlacedOrderGuardRedirectUrl', { factory: () => '/' });
