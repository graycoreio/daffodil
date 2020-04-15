import { NgModule } from '@angular/core';
import { DaffProductFacade, DaffProductGridFacade } from '@daffodil/product';

import { MockDaffProductFacade } from './mock-product-facade';
import { MockDaffProductGridFacade } from './mock-product-grid-facade';

@NgModule({
	providers: [
		{ provide: DaffProductFacade, useClass: MockDaffProductFacade },
		{ provide: DaffProductGridFacade, useClass: MockDaffProductGridFacade }
	]
})
export class DaffProductTestingModule { }
