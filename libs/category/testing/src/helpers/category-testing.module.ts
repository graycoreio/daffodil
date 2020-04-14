import { NgModule } from '@angular/core';

import { DaffCategoryFacade } from '@daffodil/category';

import { MockDaffCategoryFacade } from './mock-category-facade';

@NgModule({
  providers: [
		{ provide: DaffCategoryFacade, useClass: MockDaffCategoryFacade }
	]
})
export class DaffCategoryTestingModule { }
