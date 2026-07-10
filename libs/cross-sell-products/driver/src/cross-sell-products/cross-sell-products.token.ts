import { createSingletonInjectionToken } from '@daffodil/core';

import { DaffCrossSellProductDriverInterface } from './cross-sell-products.type';

export const {
  token: DAFF_CROSS_SELL_PRODUCTS_DRIVER,
  provider: provideDaffCrossSellProductDriver,
} = createSingletonInjectionToken<DaffCrossSellProductDriverInterface>('DAFF_CROSS_SELL_PRODUCTS_DRIVER');
