import { inject } from '@angular/core';

import { createSingleInjectionToken } from '@daffodil/core';

import { DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_RESPONSE_TRANSFORMS } from './response-extra.token';
import { DaffMagentoProductResponseTransform } from '../../../interfaces/public_api';
import { MagentoProduct } from '../../../models/magento-product';
import { DaffMagentoProductResponseTransformers } from '../../../transforms/public_api';

export const {
  /**
   * An internal token to combine the Magento response transform with the injected transforms.
   */
  token: DAFF_PRODUCT_MAGENTO_PRODUCT_RESPONSE_TRANSFORM,
  /**
   * Provider function for {@link DAFF_PRODUCT_MAGENTO_PRODUCT_RESPONSE_TRANSFORM}.
   */
  provider: provideDaffProductMagentoProductResponseTransform,
} = createSingleInjectionToken<DaffMagentoProductResponseTransform>(
  'DAFF_PRODUCT_MAGENTO_PRODUCT_RESPONSE_TRANSFORM',
  {
    factory: () => {
      const transforms = inject(DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_RESPONSE_TRANSFORMS);
      const daffResponseTransformer = inject(DaffMagentoProductResponseTransformers);
      return (magentoProduct: MagentoProduct, mediaUrl: string) =>
        transforms.reduce(
          (daffProductResponse, transform) => transform(daffProductResponse, magentoProduct, mediaUrl),
          daffResponseTransformer.transformMagentoProductResponse(magentoProduct, mediaUrl),
        );
    },
  },
);
