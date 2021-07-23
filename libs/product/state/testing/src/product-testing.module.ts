import { NgModule } from '@angular/core';

import {
  DaffProductFacade,
  DaffProductGridFacade,
  DaffConfigurableProductFacade,
  DaffCompositeProductFacade,
  DaffBestSellersFacade,
  DaffProductPageFacade,
} from '@daffodil/product/state';

import { MockDaffBestSellersFacade } from './mock-best-sellers.facade';
import { MockDaffCompositeProductFacade } from './mock-composite-product-facade';
import { MockDaffConfigurableProductFacade } from './mock-configurable-product-facade';
import { MockDaffProductFacade } from './mock-product-facade';
import { MockDaffProductGridFacade } from './mock-product-grid-facade';
import { MockDaffProductPageFacade } from './mock-product-page-facade';

@NgModule({
  providers: [
    { provide: DaffProductFacade, useExisting: MockDaffProductFacade },
    { provide: DaffProductGridFacade, useExisting: MockDaffProductGridFacade },
    { provide: DaffConfigurableProductFacade, useExisting: MockDaffConfigurableProductFacade },
    { provide: DaffCompositeProductFacade, useExisting: MockDaffCompositeProductFacade },
    { provide: DaffBestSellersFacade, useExisting: MockDaffBestSellersFacade },
    { provide: DaffProductPageFacade, useExisting: MockDaffProductPageFacade },
  ],
})
export class DaffProductStateTestingModule { }
