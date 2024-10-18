import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import {
  DAFF_EXTERNAL_ROUTER_CONFIG,
  DaffExternalRouterConfiguration,
  daffExternalRouterConfigurationDefault,
} from './config';

export const provideExternalRouter = (config: Partial<DaffExternalRouterConfiguration> = {}): EnvironmentProviders => makeEnvironmentProviders([
  { provide: DAFF_EXTERNAL_ROUTER_CONFIG, useValue: { ...daffExternalRouterConfigurationDefault, ...config }},
]);
