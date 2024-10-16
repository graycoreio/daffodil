import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffProductExtraFactoryTypes } from '@daffodil/product/testing';
import { DaffCompositeProductFactory } from '@daffodil/product-composite/testing';

/**
 * Module for providing the composite product factory to the product kind factory.
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
        provideDaffProductExtraFactoryTypes(DaffCompositeProductFactory),
      ],
    };
  }
}
