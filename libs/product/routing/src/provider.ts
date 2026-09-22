import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import {
  DaffProductRoutingConfig,
  provideDaffProductRoutingConfig,
} from './config/public_api';
import {
  DaffProductGetCollectionRequestFromRoute,
  DaffProductGetQueryParamsFromRequest,
} from './services/public_api';

/**
 * Provides the `@daffodil/product/routing` services.
 * The {@link DAFF_PRODUCT_ROUTING_CONFIG} is only provided when a config is passed;
 * otherwise, the token's default (or a config provided elsewhere) is used.
 */
export const provideDaffProductRouting = (config?: DaffProductRoutingConfig): EnvironmentProviders => makeEnvironmentProviders([
  DaffProductGetCollectionRequestFromRoute,
  DaffProductGetQueryParamsFromRequest,
  ...(config ? [provideDaffProductRoutingConfig(config)] : []),
]);
