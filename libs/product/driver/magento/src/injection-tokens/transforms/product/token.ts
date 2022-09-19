import {
  InjectionToken,
  inject,
} from '@angular/core';

// workaround https://github.com/graycoreio/daffodil/issues/1667
import { DaffProduct } from '@daffodil/product';

import { DaffMagentoProductTransform } from '../../../interfaces/public_api';
import { MagentoProduct } from '../../../models/public_api';
import { DaffMagentoProductsTransformer } from '../../../transforms/product-transformers';
import { DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_TRANSFORMS } from './extra.token';

/**
 * An internal token to combine the Magento preview transform with the injected transforms.
 */
export const DAFF_PRODUCT_MAGENTO_PRODUCT_TRANSFORM = new InjectionToken<DaffMagentoProductTransform>(
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
