import {
  FactoryProvider,
  inject,
  InjectionToken,
} from '@angular/core';

import { DaffBase64ServiceToken } from '@daffodil/core';

import { daffProductCompositeRoutingConfigDefaultFactory } from './default';
import { DaffProductCompositeRoutingConfig } from './interface';

/**
 * The token used to provide @daffodil/product-composite/routing config data.
 */
export const DAFF_PRODUCT_COMPOSITE_ROUTING_CONFIG = new InjectionToken<DaffProductCompositeRoutingConfig>('DAFF_PRODUCT_COMPOSITE_ROUTING_CONFIG', {
  factory: () => daffProductCompositeRoutingConfigDefaultFactory(inject(DaffBase64ServiceToken)),
});

/**
 * Provides the {@link DAFF_PRODUCT_COMPOSITE_ROUTING_CONFIG} token.
 */
export function daffProductCompositeRoutingProvideConfig(config: Partial<DaffProductCompositeRoutingConfig>): FactoryProvider {
  return {
    provide: DAFF_PRODUCT_COMPOSITE_ROUTING_CONFIG,
    useFactory: () => ({
      ...daffProductCompositeRoutingConfigDefaultFactory(inject(DaffBase64ServiceToken)),
      ...config,
    }),
  };
}
