import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import {
  DaffExternalRouterConfiguration,
  provideDaffExternalRouterConfig,
} from './config';

export const provideExternalRouter = (config: Partial<DaffExternalRouterConfiguration> = {}): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffExternalRouterConfig(config),
]);
