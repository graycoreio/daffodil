import { createSingletonInjectionToken } from '@daffodil/core';

import { DaffCheckoutOrderServiceInterface } from './service.interface';

export const {
  token: DaffCheckoutOrderDriver,
  /**
   * Provider function for {@link DaffCheckoutOrderDriver}.
   */
  provider: provideDaffCheckoutOrderDriver,
} = createSingletonInjectionToken<DaffCheckoutOrderServiceInterface>('DaffCheckoutOrderDriver');
