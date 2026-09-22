import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffInMemoryBackends } from '@daffodil/driver/in-memory';
import { provideDaffSearchDriver } from '@daffodil/search/driver';
import { provideDaffSearchTesting } from '@daffodil/search/testing';

import { DaffInMemorySearchDriver } from './search.service';
import { DaffInMemoryBackendSearchDriver } from '../backend/search.service';

/**
 * Provides the {@link DaffInMemorySearchDriver} as the {@link DaffSearchDriver}.
 * Includes {@link provideDaffSearchTesting}.
 */
export const provideDaffSearchInMemoryDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffSearchTesting(),
  provideDaffSearchDriver(DaffInMemorySearchDriver),
  provideDaffInMemoryBackends(DaffInMemoryBackendSearchDriver),
]);
