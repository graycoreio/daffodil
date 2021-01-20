import { InjectionToken } from '@angular/core';
import { DaffCartStateResolutionConfiguration } from './resolution/config';
/**
 * An object that describes the configuration of the`@daffodil/cart/state` package.
 */
export interface DaffCartStateConfiguration {
    resolution: DaffCartStateResolutionConfiguration;
}
/**
 * The default values of the `@daffodil/cart/state` state configuration.
 */
export declare const daffCartStateConfigurationDefault: DaffCartStateConfiguration;
/**
 * The token holding the runtime configuration for the behavior of the
 * `@daffodil/cart/state` package.
 */
export declare const DAFF_CART_STATE_CONFIG: InjectionToken<DaffCartStateConfiguration>;
