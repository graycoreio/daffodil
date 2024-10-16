import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DAFF_PRODUCT_IN_MEMORY_EXTRA_PRODUCT_RESPONSE_TRANSFORMS } from '@daffodil/product/driver/in-memory';
import { provideDaffProductExtraProductFactories } from '@daffodil/product/testing';
import { DaffRelatedProductFactory } from '@daffodil/related-products/testing';

import { transformInMemoryRelatedProducts } from './transforms/product-response.service';

/**
 * Module for providing the related product fields to the product extension factory.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffRelatedProductsInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffRelatedProductsInMemoryDriverModule> {
    return {
      ngModule: DaffRelatedProductsInMemoryDriverModule,
      providers: [
        provideDaffProductExtraProductFactories(DaffRelatedProductFactory),
        {
          provide: DAFF_PRODUCT_IN_MEMORY_EXTRA_PRODUCT_RESPONSE_TRANSFORMS,
          useValue: transformInMemoryRelatedProducts,
          multi: true,
        },
      ],
    };
  }
}
