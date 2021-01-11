import { NgModule } from '@angular/core';
import { DaffProductFacade, DaffProductGridFacade, DaffConfigurableProductFacade, DaffCompositeProductFacade, DaffBestSellersFacade } from '@daffodil/product';

import { MockDaffProductFacade } from './mock-product-facade';
import { MockDaffProductGridFacade } from './mock-product-grid-facade';
import { MockDaffConfigurableProductFacade } from './mock-configurable-product-facade';
import { MockDaffCompositeProductFacade } from './mock-composite-product-facade';
import { MockDaffBestSellersFacade } from './mock-best-sellers.facade';

@NgModule({
	providers: [
		{ provide: DaffProductFacade, useExisting: MockDaffProductFacade },
		{ provide: DaffProductGridFacade, useExisting: MockDaffProductGridFacade },
		{ provide: DaffConfigurableProductFacade, useExisting: MockDaffConfigurableProductFacade },
		{ provide: DaffCompositeProductFacade, useExisting: MockDaffCompositeProductFacade },
		{ provide: DaffBestSellersFacade, useExisting: MockDaffBestSellersFacade },
	]
})
export class DaffProductTestingModule { }
