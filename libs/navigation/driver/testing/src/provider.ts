import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffNavigationDriver } from '@daffodil/navigation/driver';

import { DaffTestingNavigationService } from './navigation.service';

/**
 * Provides the testing implementation of the `@daffodil/navigation/driver` interfaces.
 */
export const provideDaffNavigationTestingDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffNavigationDriver(DaffTestingNavigationService),
]);
