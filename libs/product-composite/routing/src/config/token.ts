import {
  FactoryProvider,
  inject,
} from '@angular/core';

import {
  createSingleInjectionToken,
  DaffBase64ServiceToken,
} from '@daffodil/core';

import { daffProductCompositeRoutingConfigDefaultFactory } from './default';
import { DaffProductCompositeRoutingConfig } from './interface';

export const {
  /**
   * The token used to provide @daffodil/product-composite/routing config data.
   */
  token: DAFF_PRODUCT_COMPOSITE_ROUTING_CONFIG,
} = createSingleInjectionToken<DaffProductCompositeRoutingConfig>(
  'DAFF_PRODUCT_COMPOSITE_ROUTING_CONFIG',
  {
    factory: () =>
      daffProductCompositeRoutingConfigDefaultFactory(inject(DaffBase64ServiceToken)),
  },
);

/**
 * Provides the {@link DAFF_PRODUCT_COMPOSITE_ROUTING_CONFIG} token.
 */
export function provideDaffProductCompositeRoutingConfig(config: Partial<DaffProductCompositeRoutingConfig>): FactoryProvider {
  return {
    provide: DAFF_PRODUCT_COMPOSITE_ROUTING_CONFIG,
    useFactory: () => ({
      ...daffProductCompositeRoutingConfigDefaultFactory(inject(DaffBase64ServiceToken)),
      ...config,
    }),
  };
}
