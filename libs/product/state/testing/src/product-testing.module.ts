import { NgModule } from '@angular/core';

import {
  DaffProductFacade,
  DaffProductGridFacade,
  DaffProductPageFacade,
} from '@daffodil/product/state';

import { MockDaffProductFacade } from './mock-product-facade';
import { MockDaffProductGridFacade } from './mock-product-grid-facade';
import { MockDaffProductPageFacade } from './mock-product-page-facade';

@NgModule({
  providers: [
    { provide: DaffProductFacade, useExisting: MockDaffProductFacade },
    { provide: DaffProductGridFacade, useExisting: MockDaffProductGridFacade },
    { provide: DaffProductPageFacade, useExisting: MockDaffProductPageFacade },
  ],
})
export class DaffProductStateTestingModule { }
