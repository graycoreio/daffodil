import {
  EnvironmentProviders,
  InjectionToken,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffExternalRouterDriver } from '@daffodil/external-router/driver';

import {
  DaffExternalRouterDriverInMemoryConfig,
  provideDaffExternalRouterDriverInMemoryConfig,
} from './config';
import { DaffExternalRouterInMemoryDriver } from './in-memory.service';

/**
 * Provides an in-memory implementation of {@link DaffExternalRouterDriver}
 */
export const provideDaffExternalRouterInMemoryDriver = (config:
    DaffExternalRouterDriverInMemoryConfig  | InjectionToken<DaffExternalRouterDriverInMemoryConfig> = undefined,
): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffExternalRouterDriver(DaffExternalRouterInMemoryDriver),
  config ? provideDaffExternalRouterDriverInMemoryConfig(config) : [],
]);
