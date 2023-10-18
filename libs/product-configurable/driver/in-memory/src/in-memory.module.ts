import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DAFF_PRODUCT_TYPE_FACTORIES } from '@daffodil/product/testing';
import { DaffConfigurableProductFactory } from '@daffodil/product-configurable/testing';

/**
 * Module for providing the configurable product factory to the product kind factory.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffConfigurableProductInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffConfigurableProductInMemoryDriverModule> {
    return {
      ngModule: DaffConfigurableProductInMemoryDriverModule,
      providers: [
        {
          provide: DAFF_PRODUCT_TYPE_FACTORIES,
          useExisting: DaffConfigurableProductFactory,
          multi: true,
        },
      ],
    };
  }
}
