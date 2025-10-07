import {
  EnvironmentProviders,
  makeEnvironmentProviders,
  Provider,
} from '@angular/core';

import { provideDaffExternalRouterDriver } from '@daffodil/external-router/driver';

import { DaffShopifyExternalRouterDriver } from './shopify.service';

export const provideDaffExternalRouterShopifyDriver = (): (Provider | EnvironmentProviders)[] => [
  makeEnvironmentProviders([DaffShopifyExternalRouterDriver]),
  provideDaffExternalRouterDriver(DaffShopifyExternalRouterDriver),
];
