import {
  EnvironmentProviders,
  InjectionToken,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffExternalRouterDriver } from '@daffodil/external-router/driver';

import {
  DaffExternalRouterDriverTestingConfig,
  provideDaffExternalRouterDriverTestingConfig,
} from './config';
import { DaffExternalRouterTestingDriver } from './testing.service';

/**
 * Provides a testing implementation of {@link DaffExternalRouterDriver}
 */
export const provideDaffExternalRouterTestingDriver = (config:
  DaffExternalRouterDriverTestingConfig  | InjectionToken<DaffExternalRouterDriverTestingConfig>,
): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffExternalRouterDriver(DaffExternalRouterTestingDriver),
  provideDaffExternalRouterDriverTestingConfig(config),
]);
