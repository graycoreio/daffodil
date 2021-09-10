import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffConfigurableProductFactory } from '@daffodil/product-configurable/testing';
import { DAFF_PRODUCT_TYPE_FACTORIES } from '@daffodil/product/testing';

/**
 * Module for providing the configurable product factory to the product kind factory.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffConfigurableProductTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffConfigurableProductTestingDriverModule> {
    return {
      ngModule: DaffConfigurableProductTestingDriverModule,
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
