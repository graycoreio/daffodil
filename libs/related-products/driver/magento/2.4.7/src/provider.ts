import {
  EnvironmentProviders,
  makeEnvironmentProviders,
  inject,
} from '@angular/core';

import { DaffProductDriverResponse } from '@daffodil/product/driver';
import {
  DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PAGE_FRAGMENTS,
  DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_FRAGMENTS,
  DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_RESPONSE_TRANSFORMS,
} from '@daffodil/product/driver/magento/2.4.7';

import { MagentoProductWithRelated } from './models/product-with-related.interface';
import { magentoRelatedProductsFragment } from './queries/fragments/related-products';
import { DaffMagentoRelatedProductsTransformers } from './transforms/product-response.service';

/**
 * Provides the {@link magentoRelatedProductsFragment} and {@link DaffMagentoRelatedProductsTransformers}.
 */
export const provideDaffRelatedProductsMagentoDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  {
    provide: DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PAGE_FRAGMENTS,
    multi: true,
    useFactory() {
      return magentoRelatedProductsFragment(inject(DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_FRAGMENTS));
    },
  },
  {
    provide: DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_RESPONSE_TRANSFORMS,
    multi: true,
    useFactory() {
      const transformerService = inject(DaffMagentoRelatedProductsTransformers);
      return (
        daffProductResponse: DaffProductDriverResponse,
        magentoProduct: MagentoProductWithRelated,
        mediaUrl: string,
      ) =>
        magentoProduct.related_products
          ? transformerService.transformMagentoRelatedProducts(daffProductResponse, magentoProduct, mediaUrl)
          : daffProductResponse;
    },
  },
]);
