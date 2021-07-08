import {
  InjectionToken,
  inject,
} from '@angular/core';

// workaround https://github.com/graycoreio/daffodil/issues/1667
import { DaffProduct } from '@daffodil/product';
import { DaffProductDriverResponse } from '@daffodil/product/driver';

import { DaffMagentoProductResponseTransform } from '../../interfaces/public_api';
import { MagentoProduct } from '../../models/magento-product';
import { transformMagentoProductResponse } from '../../transforms/public_api';
import { DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_RESPONSE_TRANSFORMS } from './response-extra.token';

/**
 * An internal token to combine the Magento response transform with the injected transforms.
 */
export const DAFF_PRODUCT_MAGENTO_PRODUCT_RESPONSE_TRANSFORM = new InjectionToken<DaffMagentoProductResponseTransform>(
  'DAFF_PRODUCT_MAGENTO_PRODUCT_RESPONSE_TRANSFORM',
  {
    factory: () => {
      const transforms = inject(DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_RESPONSE_TRANSFORMS);
      return (magentoProduct: MagentoProduct, mediaUrl: string) =>
        transforms.reduce(
          (daffProductResponse, transform) => transform(daffProductResponse, magentoProduct, mediaUrl),
          transformMagentoProductResponse(magentoProduct, mediaUrl),
        );
    },
  },
);
