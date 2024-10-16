import { createConfigInjectionToken } from '@daffodil/core';

import { DAFF_PRODUCT_COMPOSITE_ROUTING_CONFIG_DEFAULT } from './default';
import { DaffProductCompositeRoutingConfig } from './interface';

export const {
  /**
   * The token used to provide @daffodil/product-composite/routing config data.
   */
  token: DAFF_PRODUCT_COMPOSITE_ROUTING_CONFIG,
  /**
   * Provides the {@link DAFF_PRODUCT_COMPOSITE_ROUTING_CONFIG} token.
   */
  provider: provideDaffProductCompositeRoutingConfig,
} = createConfigInjectionToken<DaffProductCompositeRoutingConfig>(DAFF_PRODUCT_COMPOSITE_ROUTING_CONFIG_DEFAULT, 'DAFF_PRODUCT_COMPOSITE_ROUTING_CONFIG');
