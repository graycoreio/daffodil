import { NgModule } from '@angular/core';

import { DaffCategoryFacade } from '@daffodil/category/state';

import { MockDaffCategoryFacade } from './mock-category-facade';

@NgModule({
  providers: [
    { provide: DaffCategoryFacade, useExisting: MockDaffCategoryFacade },
  ],
})
export class DaffCategoryTestingModule { }
