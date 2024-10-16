import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffProductExtraProductFactories } from '@daffodil/product/testing';
import { DaffRelatedProductFactory } from '@daffodil/related-products/testing';

/**
 * Module for providing the related product fields to the product extension factory.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffRelatedProductsTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffRelatedProductsTestingDriverModule> {
    return {
      ngModule: DaffRelatedProductsTestingDriverModule,
      providers: [
        provideDaffProductExtraProductFactories(DaffRelatedProductFactory),
      ],
    };
  }
}
