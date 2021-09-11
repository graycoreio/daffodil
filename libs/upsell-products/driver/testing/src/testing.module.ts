import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DAFF_PRODUCT_EXTRA_FACTORIES } from '@daffodil/product/testing';
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
        {
          provide: DAFF_PRODUCT_EXTRA_FACTORIES,
          useExisting: DaffUpsellProductFactory,
          multi: true,
        },
      ],
    };
  }
}
