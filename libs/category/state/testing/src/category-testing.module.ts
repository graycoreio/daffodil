import { NgModule } from '@angular/core';

import { DaffCategoryFacade } from '@daffodil/category/state';

import { MockDaffCategoryFacade } from './mock-category-facade';

/**
 * A module that mocks out the {@link DaffCategoryFacade} with {@link MockDaffCategoryFacade} for testing environments.
 */
@NgModule({
  providers: [
    { provide: DaffCategoryFacade, useExisting: MockDaffCategoryFacade },
  ],
})
export class DaffCategoryTestingModule { }
