import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffCategoryDriver } from '@daffodil/category/driver';

import { DaffTestingCategoryService } from './category.service';

/**
 * Provides the {@link DaffTestingCategoryService} for the {@link DaffCategoryDriver} token.
 */
export const provideDaffCategoryTestingDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffCategoryDriver(DaffTestingCategoryService),
]);
