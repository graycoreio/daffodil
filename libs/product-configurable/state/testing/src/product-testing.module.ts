import { NgModule } from '@angular/core';

import { DaffConfigurableProductFacade } from '@daffodil/product-configurable/state';

import { MockDaffConfigurableProductFacade } from './mock-configurable-product-facade';


@NgModule({
  providers: [
    { provide: DaffConfigurableProductFacade, useExisting: MockDaffConfigurableProductFacade },
  ],
})
export class DaffConfigurableProductStateTestingModule { }
