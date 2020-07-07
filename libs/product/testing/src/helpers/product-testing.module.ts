import { NgModule } from '@angular/core';
import { DaffProductFacade, DaffProductGridFacade, DaffConfigurableProductFacade, DaffCompositeProductFacade } from '@daffodil/product';

import { MockDaffProductFacade } from './mock-product-facade';
import { MockDaffProductGridFacade } from './mock-product-grid-facade';
import { MockDaffConfigurableProductFacade } from './mock-configurable-product-facade';
import { MockDaffCompositeProductFacade } from './mock-composite-product-facade';

@NgModule({
	providers: [
		{ provide: DaffProductFacade, useClass: MockDaffProductFacade },
		{ provide: DaffProductGridFacade, useClass: MockDaffProductGridFacade },
		{ provide: DaffConfigurableProductFacade, useClass: MockDaffConfigurableProductFacade },
		{ provide: DaffCompositeProductFacade, useClass: MockDaffCompositeProductFacade },
	]
})
export class DaffProductTestingModule { }
