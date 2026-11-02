import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffGeographyDriver } from '@daffodil/geography/driver';

import { DaffTestingGeographyService } from './geography.service';

/**
 * Provides the testing implementation of the `@daffodil/geography/driver` interfaces.
 */
export const provideDaffGeographyTestingDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffGeographyDriver(DaffTestingGeographyService),
]);
