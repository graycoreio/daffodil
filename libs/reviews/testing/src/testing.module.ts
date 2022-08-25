import { NgModule } from '@angular/core';

import { DAFF_PRODUCT_EXTRA_FACTORIES } from '@daffodil/product/testing';

import { DaffReviewedProductFactory } from './factories/public_api';

/**
 * Provides the reviewed product as an extra product factory.
 */
@NgModule({
  providers: [
    {
      provide: DAFF_PRODUCT_EXTRA_FACTORIES,
      useExisting: DaffReviewedProductFactory,
      multi: true,
    },
  ],
})
export class DaffReviewTestingModule { }
