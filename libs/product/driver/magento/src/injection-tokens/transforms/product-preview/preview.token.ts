import {
  InjectionToken,
  inject,
} from '@angular/core';

// workaround https://github.com/graycoreio/daffodil/issues/1667
import { DaffProduct } from '@daffodil/product';

import { DaffMagentoProductTransform } from '../../../interfaces/product-preview-transform.type';
import { MagentoProduct } from '../../../models/magento-product';
import { transformMagentoProductPreview } from '../../../transforms/product-preview';
import { DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_TRANSFORMS } from './preview-extra.token';

/**
 * An internal token to combine the Magento preview transform with the injected transforms.
 */
export const DAFF_PRODUCT_MAGENTO_PRODUCT_PREVIEW_TRANSFORM = new InjectionToken<DaffMagentoProductTransform>(
  'DAFF_PRODUCT_MAGENTO_PRODUCT_PREVIEW_TRANSFORM',
  {
    factory: () => {
      const transforms = inject(DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_TRANSFORMS);
      return (magentoProduct: MagentoProduct, mediaUrl: string) =>
        transforms.reduce(
          (daffProduct, transform) => transform(daffProduct, magentoProduct, mediaUrl),
          transformMagentoProductPreview(magentoProduct, mediaUrl),
        );
    },
  },
);
