import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffInMemoryBackends } from '@daffodil/driver/in-memory';
import { provideDaffGeographyDriver } from '@daffodil/geography/driver';

import { DaffInMemoryGeographyService } from './geography.service';
import { DaffInMemoryBackendGeographyService } from '../backend/geography.service';

/**
 * Provides the in-memory implementation of the `@daffodil/geography/driver` interfaces.
 */
export const provideDaffGeographyInMemoryDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffGeographyDriver(DaffInMemoryGeographyService),
  provideDaffInMemoryBackends(DaffInMemoryBackendGeographyService),
]);
