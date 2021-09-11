import { NgModule } from '@angular/core';

import { DaffUpsellProductsFacade } from '@daffodil/upsell-products/state';

import { MockDaffUpsellProductsFacade } from './mock-upsell-products.facade';


@NgModule({
  providers: [
    { provide: DaffUpsellProductsFacade, useExisting: MockDaffUpsellProductsFacade },
  ],
})
export class DaffUpsellProductsStateTestingModule {}
