import {
  FactoryProvider,
  inject,
} from '@angular/core';

import {
  createSingleInjectionToken,
  DaffBase64ServiceToken,
} from '@daffodil/core';

import { daffProductRoutingConfigDefaultFactory } from './default';
import { DaffProductRoutingConfig } from './interface';

export const {
  /**
   * The token used to provide @daffodil/product/routing config data.
   */
  token: DAFF_PRODUCT_ROUTING_CONFIG,
} = createSingleInjectionToken<DaffProductRoutingConfig>(
  'DAFF_PRODUCT_ROUTING_CONFIG',
  {
    factory: () =>
      daffProductRoutingConfigDefaultFactory(inject(DaffBase64ServiceToken)),
  },
);

/**
 * Provides the {@link DAFF_PRODUCT_ROUTING_CONFIG} token.
 */
export function provideDaffProductRoutingConfig(config: Partial<DaffProductRoutingConfig>): FactoryProvider {
  return {
    provide: DAFF_PRODUCT_ROUTING_CONFIG,
    useFactory: () => ({
      ...daffProductRoutingConfigDefaultFactory(inject(DaffBase64ServiceToken)),
      ...config,
    }),
  };
}
