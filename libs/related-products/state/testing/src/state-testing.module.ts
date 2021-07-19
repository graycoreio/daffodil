import { NgModule } from '@angular/core';

import { DaffRelatedProductsFacade } from '@daffodil/related-products/state';

import { MockDaffRelatedProductsFacade } from './mock-related-products.facade';


@NgModule({
  providers: [
    { provide: DaffRelatedProductsFacade, useExisting: MockDaffRelatedProductsFacade },
  ],
})
export class DaffRelatedProductsStateTestingModule {}
