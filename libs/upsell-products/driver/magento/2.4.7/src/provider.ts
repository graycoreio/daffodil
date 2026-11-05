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

import { MagentoProductWithUpsell } from './models/product-with-upsell.interface';
import { magentoUpsellProductsFragment } from './queries/fragments/upsell-products';
import { DaffMagentoUpsellProductsTransformers } from './transforms/product-response.service';

/**
 * Provides the {@link magentoUpsellProductsFragment} and {@link DaffMagentoUpsellProductsTransformers}.
 */
export const provideDaffUpsellProductsMagentoDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  {
    provide: DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PAGE_FRAGMENTS,
    multi: true,
    useFactory() {
      return magentoUpsellProductsFragment(inject(DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_FRAGMENTS));
    },
  },
  {
    provide: DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_RESPONSE_TRANSFORMS,
    multi: true,
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
]);
