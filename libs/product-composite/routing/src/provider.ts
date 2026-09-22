import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';
import { provideEffects } from '@ngrx/effects';

import {
  DaffProductCompositeRoutingConfig,
  provideDaffProductCompositeRoutingConfig,
} from './config/public_api';
import { DaffProductCompositePageEffects } from './effects/public_api';
import { DaffProductCompositeQueryParamService } from './services/query-param.service';

/**
 * Provides the `@daffodil/product-composite/routing` effects and services.
 * The {@link DAFF_PRODUCT_COMPOSITE_ROUTING_CONFIG} is only provided when a config is passed;
 * otherwise, the token's default (or a config provided elsewhere) is used.
 */
export const provideDaffProductCompositeRouting = (config?: DaffProductCompositeRoutingConfig): EnvironmentProviders => makeEnvironmentProviders([
  provideEffects(DaffProductCompositePageEffects),
  DaffProductCompositeQueryParamService,
  ...(config ? [provideDaffProductCompositeRoutingConfig(config)] : []),
]);
