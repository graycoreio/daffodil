import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffCategoryDriver } from '@daffodil/category/driver';
import { provideDaffInMemoryBackends } from '@daffodil/driver/in-memory';

import { DaffInMemoryCategoryService } from './category.service';
import { DaffInMemoryBackendCategoryService } from '../backend/category.service';

/**
 * Provides the {@link DaffInMemoryCategoryService} for the {@link DaffCategoryDriver} token.
 */
export const provideDaffCategoryInMemoryDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffCategoryDriver(DaffInMemoryCategoryService),
  provideDaffInMemoryBackends(DaffInMemoryBackendCategoryService),
]);
