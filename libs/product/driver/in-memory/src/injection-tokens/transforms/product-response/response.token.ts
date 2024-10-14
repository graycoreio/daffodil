import { inject } from '@angular/core';

import { createSingleInjectionToken } from '@daffodil/core';
import { DaffProduct } from '@daffodil/product';
// workaround https://github.com/graycoreio/daffodil/issues/1667
import { DaffProductDriverResponse } from '@daffodil/product/driver';

import { DAFF_PRODUCT_IN_MEMORY_EXTRA_PRODUCT_RESPONSE_TRANSFORMS } from './response-extra.token';
import { DaffInMemoryProductResponseTransform } from '../../../interfaces/public_api';

export const {
  /**
   * An internal token to combine the In-Memory response transform with the injected transforms.
   */
  token: DAFF_PRODUCT_IN_MEMORY_PRODUCT_RESPONSE_TRANSFORM,
  provider: daffProvideProductInMemoryProductResponseTransform,
} = createSingleInjectionToken<DaffInMemoryProductResponseTransform>(
  'DAFF_PRODUCT_IN_MEMORY_PRODUCT_RESPONSE_TRANSFORM',
  {
    factory: () => {
      const transforms = inject(DAFF_PRODUCT_IN_MEMORY_EXTRA_PRODUCT_RESPONSE_TRANSFORMS);
      return (product: DaffProduct) =>
        transforms.reduce(
          (daffProductResponse, transform) => transform(daffProductResponse, product),
          {
            id: product.id,
            products: [product],
          },
        );
    },
  },
);
