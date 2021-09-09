import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffCompositeProductFactory } from '@daffodil/product-composite/testing';
import { DAFF_PRODUCT_TYPE_FACTORIES } from '@daffodil/product/testing';

/**
 * Module for providing the related product fields to the product factory.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCompositeProductInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffCompositeProductInMemoryDriverModule> {
    return {
      ngModule: DaffCompositeProductInMemoryDriverModule,
      providers: [
        {
          provide: DAFF_PRODUCT_TYPE_FACTORIES,
          useExisting: DaffCompositeProductFactory,
          multi: true,
        },
      ],
    };
  }
}
