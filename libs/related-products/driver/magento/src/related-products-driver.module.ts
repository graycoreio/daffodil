import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
  inject,
} from '@angular/core';

import { DaffProductDriverResponse } from '@daffodil/product/driver';
import {
  DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_FRAGMENTS,
  DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_FRAGMENTS,
  DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_RESPONSE_TRANSFORMS,
} from '@daffodil/product/driver/magento';

import { MagentoProductWithRelated } from './models/product-with-related.interface';
import { magentoRelatedProductsFragment } from './queries/fragments/related-products';
import { DaffMagentoRelatedProductsTransformers } from './transforms/product-response.service';

/**
 * A module that provides the {@link magentoRelatedProductsFragment} and {@link DaffMagentoRelatedProductsTransformers}.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffRelatedProductsMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffRelatedProductsMagentoDriverModule> {
    return {
      ngModule: DaffRelatedProductsMagentoDriverModule,
      providers: [
        {
          provide: DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_FRAGMENTS,
          multi: true,
          useFactory: () => magentoRelatedProductsFragment(inject(DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_FRAGMENTS)),
        },
        {
          provide: DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_RESPONSE_TRANSFORMS,
          multi: true,
          useFactory: () => {
            const transformerService = inject(DaffMagentoRelatedProductsTransformers);
            return (
              daffProductResponse: DaffProductDriverResponse,
              magentoProduct: MagentoProductWithRelated,
              mediaUrl: string,
            ) => transformerService.transformMagentoRelatedProducts(daffProductResponse, magentoProduct, mediaUrl);
          },
        },
      ],
    };
  }
}
