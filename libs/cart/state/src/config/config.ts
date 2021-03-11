import { InjectionToken } from '@angular/core';

import {
  DaffCartStateResolutionConfiguration,
  daffCartStateResolutionConfigurationDefault,
} from './resolution/config';

/**
 * An object that describes the configuration of the`@daffodil/cart/state` package.
 */
export interface DaffCartStateConfiguration {
  resolution: DaffCartStateResolutionConfiguration;
}

/**
 * The default values of the `@daffodil/cart/state` state configuration.
 */
export const daffCartStateConfigurationDefault: DaffCartStateConfiguration = {
  resolution: {
    ...daffCartStateResolutionConfigurationDefault,
  },
};

/**
 * The token holding the runtime configuration for the behavior of the
 * `@daffodil/cart/state` package.
 */
export const DAFF_CART_STATE_CONFIG = new InjectionToken<
	DaffCartStateConfiguration
>('DAFF_CART_STATE_CONFIG', {
  providedIn: 'root',
  factory: () => daffCartStateConfigurationDefault,
});
