import { inject } from '@angular/core';

import { createSingleInjectionToken } from '@daffodil/core';

import { DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_TRANSFORMS } from './preview-extra.token';
import { DaffMagentoProductTransform } from '../../../interfaces/product-preview-transform.type';
import { MagentoProduct } from '../../../models/magento-product';
import { transformMagentoProductPreview } from '../../../transforms/product-preview';

export const {
  /**
   * An internal token to combine the Magento preview transform with the injected transforms.
   */
  token: DAFF_PRODUCT_MAGENTO_PRODUCT_PREVIEW_TRANSFORM,
  /**
   * Provider function for {@link DAFF_PRODUCT_MAGENTO_PRODUCT_PREVIEW_TRANSFORM}.
   */
  provider: provideDaffProductMagentoProductPreviewTransform,
} = createSingleInjectionToken<DaffMagentoProductTransform>(
  'DAFF_PRODUCT_MAGENTO_PRODUCT_PREVIEW_TRANSFORM',
  {
    factory: () => {
      const transforms = inject(DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_TRANSFORMS);
      return (magentoProduct: MagentoProduct, mediaUrl: string) =>
        transforms.reduce(
          (daffProduct, transform) => transform(daffProduct, magentoProduct, mediaUrl),
          transformMagentoProductPreview(magentoProduct),
        );
    },
  },
);
