import { createMultiInjectionToken } from '@daffodil/core';
// workaround https://github.com/graycoreio/daffodil/issues/1667
import { DaffProduct } from '@daffodil/product';
import { DaffProductDriverResponse } from '@daffodil/product/driver';

import { DaffInMemoryProductResponseExtraTransform } from '../../../interfaces/public_api';

export const {
  /**
   * A multi-provider injection token for providing extra transform logic in the Product In-Memory driver.
   * It is run after the standard transforms and passed both the current transformed Daffodil response and the In-Memory product response.
   */
  token: DAFF_PRODUCT_IN_MEMORY_EXTRA_PRODUCT_RESPONSE_TRANSFORMS,

  /**
   * Provides extra product transforms for the In-Memory product driver.
   *
   * See {@link DAFF_PRODUCT_IN_MEMORY_EXTRA_PRODUCT_RESPONSE_TRANSFORMS}.
   *
   * ```ts
   * providers: [
   *   ...daffProvideProductInMemoryExtraProductResponseTransforms(
   *     myExtraProductTransform
   *   )
   * ]
   * ```
   */
  provider: daffProvideProductInMemoryExtraProductResponseTransforms,
} = createMultiInjectionToken<DaffInMemoryProductResponseExtraTransform>('DAFF_PRODUCT_IN_MEMORY_EXTRA_PRODUCT_RESPONSE_TRANSFORMS');
