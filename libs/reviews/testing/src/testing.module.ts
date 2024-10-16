import { NgModule } from '@angular/core';

import { provideDaffProductExtraProductFactories } from '@daffodil/product/testing';

import { DaffReviewedProductFactory } from './factories/public_api';

/**
 * Provides the reviewed product as an extra product factory.
 */
@NgModule({
  providers: [
    provideDaffProductExtraProductFactories(DaffReviewedProductFactory),
  ],
})
export class DaffReviewTestingModule { }
