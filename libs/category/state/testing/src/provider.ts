import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import {
  DaffCategoryFacade,
  DaffCategoryProductCollectionFacade,
} from '@daffodil/category/state';
import { MockDaffCollectionFacade } from '@daffodil/core/state/testing';

import { MockDaffCategoryFacade } from './mock-category-facade';

/**
 * Provides the {@link MockDaffCategoryFacade} for {@link DaffCategoryFacade} and
 * the {@link MockDaffCollectionFacade} for {@link DaffCategoryProductCollectionFacade}.
 */
export const provideDaffCategoryStateTesting = (): EnvironmentProviders => makeEnvironmentProviders([
  { provide: DaffCategoryFacade, useExisting: MockDaffCategoryFacade },
  { provide: DaffCategoryProductCollectionFacade, useExisting: MockDaffCollectionFacade },
]);
