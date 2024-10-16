import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DAFF_PRODUCT_IN_MEMORY_EXTRA_PRODUCT_RESPONSE_TRANSFORMS } from '@daffodil/product/driver/in-memory';
import { provideDaffProductExtraProductFactories } from '@daffodil/product/testing';
import { DaffUpsellProductFactory } from '@daffodil/upsell-products/testing';

import { transformInMemoryUpsellProducts } from './transforms/product-response.service';

/**
 * Module for providing the upsell product fields to the product extension factory.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffUpsellProductsInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffUpsellProductsInMemoryDriverModule> {
    return {
      ngModule: DaffUpsellProductsInMemoryDriverModule,
      providers: [
        provideDaffProductExtraProductFactories(DaffUpsellProductFactory),
        {
          provide: DAFF_PRODUCT_IN_MEMORY_EXTRA_PRODUCT_RESPONSE_TRANSFORMS,
          useValue: transformInMemoryUpsellProducts,
          multi: true,
        },
      ],
    };
  }
}
