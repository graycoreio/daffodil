import { InjectionToken } from '@angular/core';

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
export const DAFF_CART_ROUTING_CONFIG = new InjectionToken<
  DaffCartRoutingConfiguration
>('DAFF_CART_ROUTING_CONFIG', {
  providedIn: 'root',
  factory: () => daffCartRoutingConfigurationDefault,
});
