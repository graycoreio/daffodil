import { createConfigInjectionToken } from '@daffodil/core';

import { DAFF_PRODUCT_ROUTING_CONFIG_DEFAULT } from './default';
import { DaffProductRoutingConfig } from './interface';

export const {
  /**
   * The token used to provide @daffodil/product/routing config data.
   */
  token: DAFF_PRODUCT_ROUTING_CONFIG,
  /**
   * Provides the {@link DAFF_PRODUCT_ROUTING_CONFIG} token.
   */
  provider: provideDaffProductRoutingConfig,
} = createConfigInjectionToken<DaffProductRoutingConfig>(DAFF_PRODUCT_ROUTING_CONFIG_DEFAULT, 'DAFF_PRODUCT_ROUTING_CONFIG');

