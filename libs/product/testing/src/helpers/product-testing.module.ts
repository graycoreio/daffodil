import { NgModule } from '@angular/core';
import { DaffProductFacade, DaffProductGridFacade, DaffConfigurableProductFacade } from '@daffodil/product';

import { MockDaffProductFacade } from './mock-product-facade';
import { MockDaffProductGridFacade } from './mock-product-grid-facade';
import { MockDaffConfigurableProductFacade } from './mock-configurable-product-facade';

@NgModule({
	providers: [
		{ provide: DaffProductFacade, useClass: MockDaffProductFacade },
		{ provide: DaffProductGridFacade, useClass: MockDaffProductGridFacade },
		{ provide: DaffConfigurableProductFacade, useClass: MockDaffConfigurableProductFacade },
	]
})
export class DaffProductTestingModule { }
