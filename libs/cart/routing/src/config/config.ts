import { createConfigInjectionToken } from '@daffodil/core';

import {
  DaffCartRoutingResolutionConfiguration,
  daffCartRoutingResolutionConfigurationDefault,
} from './resolution/config';

/**
 * An object that describes the configuration of the`@daffodil/cart/state` package.
 */
export interface DaffCartRoutingConfiguration {
  resolution: DaffCartRoutingResolutionConfiguration;
}

/**
 * The default values of the `@daffodil/cart/state` state configuration.
 */
export const daffCartRoutingConfigurationDefault: DaffCartRoutingConfiguration = {
  resolution: {
    ...daffCartRoutingResolutionConfigurationDefault,
  },
};

/**
 * The token holding the runtime configuration for the behavior of the
 * `@daffodil/cart/state` package.
 */
export const {
  token: DAFF_CART_ROUTING_CONFIG,
  provider: provideDaffCartRoutingConfig,
} = createConfigInjectionToken<DaffCartRoutingConfiguration>(daffCartRoutingConfigurationDefault, 'DAFF_CART_ROUTING_CONFIG');
