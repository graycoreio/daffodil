import { NgModule } from '@angular/core';

import { DaffCrossSellProductsFacade } from '@daffodil/cross-sell-products/state';

import { MockDaffCrossSellProductsFacade } from './mock-cross-sell-products.facade';


@NgModule({
  providers: [
    { provide: DaffCrossSellProductsFacade, useExisting: MockDaffCrossSellProductsFacade },
  ],
})
export class DaffCrossSellProductsStateTestingModule {}
