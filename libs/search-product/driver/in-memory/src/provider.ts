import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffSearchInMemoryBackends } from '@daffodil/search/driver/in-memory';

import { DaffSearchProductInMemoryBackendService } from './backend/search.service';

/**
 * Provides the {@link DaffSearchProductInMemoryBackendService} as a search in-memory child backend.
 */
export const provideDaffSearchProductInMemoryDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffSearchInMemoryBackends(DaffSearchProductInMemoryBackendService),
]);
