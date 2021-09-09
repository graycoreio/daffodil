import { NgModule } from '@angular/core';

import { DaffCompositeProductFacade } from '@daffodil/composite-product/state';

import { MockDaffCompositeProductFacade } from './mock-composite-product-facade';

@NgModule({
  providers: [
    { provide: DaffCompositeProductFacade, useExisting: MockDaffCompositeProductFacade },
  ],
})
export class DaffCompositeProductStateTestingModule { }
