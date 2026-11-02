import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffSearchInMemoryBackends } from '@daffodil/search/driver/in-memory';

import { DaffSearchCategoryInMemoryBackendService } from './backend/search.service';

/**
 * Provides the {@link DaffSearchCategoryInMemoryBackendService} as a search in-memory child backend.
 */
export const provideDaffSearchCategoryInMemoryDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffSearchInMemoryBackends(DaffSearchCategoryInMemoryBackendService),
]);
