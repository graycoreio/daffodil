import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffProductExtraProductFactories } from '@daffodil/product/testing';
import { DaffUpsellProductFactory } from '@daffodil/upsell-products/testing';

/**
 * Module for providing the upsell product fields to the product extension factory.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffUpsellProductsTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffUpsellProductsTestingDriverModule> {
    return {
      ngModule: DaffUpsellProductsTestingDriverModule,
      providers: [
        provideDaffProductExtraProductFactories(DaffUpsellProductFactory),
      ],
    };
  }
}
