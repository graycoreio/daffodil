import { NgModule } from '@angular/core';

import {
  DaffCategoryFacade,
  DaffCategoryProductCollectionFacade,
} from '@daffodil/category/state';
import { MockDaffCollectionFacade } from '@daffodil/core/state/testing';

import { MockDaffCategoryFacade } from './mock-category-facade';

/**
 * A module that mocks out the {@link DaffCategoryFacade} with {@link MockDaffCategoryFacade} for testing environments.
 */
@NgModule({
  providers: [
    { provide: DaffCategoryFacade, useExisting: MockDaffCategoryFacade },
    { provide: DaffCategoryProductCollectionFacade, useExisting: MockDaffCollectionFacade },
  ],
})
export class DaffCategoryTestingModule { }
