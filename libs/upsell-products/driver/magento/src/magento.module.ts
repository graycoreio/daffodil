import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
  inject,
} from '@angular/core';

import { DaffProductDriverResponse } from '@daffodil/product/driver';
import {
  DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PAGE_FRAGMENTS,
  DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_FRAGMENTS,
  DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_RESPONSE_TRANSFORMS,
} from '@daffodil/product/driver/magento';

import { MagentoProductWithUpsell } from './models/product-with-upsell.interface';
import { magentoUpsellProductsFragment } from './queries/fragments/upsell-products';
import { DaffMagentoUpsellProductsTransformers } from './transforms/product-response.service';

/**
 * A module that provides the {@link magentoUpsellProductsFragment} and {@link DaffMagentoUpsellProductsTransformers}.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffUpsellProductsMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffUpsellProductsMagentoDriverModule> {
    return {
      ngModule: DaffUpsellProductsMagentoDriverModule,
      providers: [
        {
          provide: DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PAGE_FRAGMENTS,
          multi: true,
          // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
          useFactory() {
            return magentoUpsellProductsFragment(inject(DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_FRAGMENTS));
          },
        },
        {
          provide: DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_RESPONSE_TRANSFORMS,
          multi: true,
          // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
          useFactory() {
            const transformerService = inject(DaffMagentoUpsellProductsTransformers);
            return (
              daffProductResponse: DaffProductDriverResponse,
              magentoProduct: MagentoProductWithUpsell,
              mediaUrl: string,
            ) =>
              magentoProduct.upsell_products
                ? transformerService.transformMagentoUpsellProducts(daffProductResponse, magentoProduct, mediaUrl)
                : daffProductResponse;
          },
        },
      ],
    };
  }
}
