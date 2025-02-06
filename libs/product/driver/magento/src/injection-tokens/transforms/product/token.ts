import { inject } from '@angular/core';

import { createSingleInjectionToken } from '@daffodil/core';

import { DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_TRANSFORMS } from './extra.token';
import { DaffMagentoProductTransform } from '../../../interfaces/public_api';
import { MagentoProduct } from '../../../models/public_api';
import { DaffMagentoProductsTransformer } from '../../../transforms/product-transformers';

export const {
  /**
   * An internal token to combine the Magento preview transform with the injected transforms.
   */
  token: DAFF_PRODUCT_MAGENTO_PRODUCT_TRANSFORM,
  /**
   * Provider function for {@link DAFF_PRODUCT_MAGENTO_PRODUCT_TRANSFORM}.
   */
  provider: provideDaffProductMagentoProductTransform,
} = createSingleInjectionToken<DaffMagentoProductTransform>(
  'DAFF_PRODUCT_MAGENTO_PRODUCT_TRANSFORM',
  {
    factory: () => {
      const transforms = inject(DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_TRANSFORMS);
      const transformer = inject(DaffMagentoProductsTransformer);
      return (magentoProduct: MagentoProduct, mediaUrl: string) =>
        transforms.reduce(
          (daffProduct, transform) => transform(daffProduct, magentoProduct, mediaUrl),
          transformer.transformMagentoProduct(magentoProduct, mediaUrl),
        );
    },
  },
);
