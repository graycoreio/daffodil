import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffProductExtraFactoryTypes } from '@daffodil/product/testing';
import { DaffConfigurableProductFactory } from '@daffodil/product-configurable/testing';

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
        provideDaffProductExtraFactoryTypes(DaffConfigurableProductFactory),
      ],
    };
  }
}
