import { createMultiInjectionToken } from '@daffodil/core';
// workaround https://github.com/graycoreio/daffodil/issues/1667
import { DaffProduct } from '@daffodil/product';
import { DaffProductDriverResponse } from '@daffodil/product/driver';

import { DaffMagentoProductResponseExtraTransform } from '../../../interfaces/public_api';
import { MagentoProduct } from '../../../models/public_api';

export const {
  /**
   * A multi-provider injection token for providing extra transform logic in the Product Magento driver.
   * It is run after the standard transforms and passed both the current transformed Daffodil response and the Magento product response.
   */
  token: DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_RESPONSE_TRANSFORMS,

  /**
   * Provides extra product transforms for the Magento product driver.
   *
   * See {@link DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_RESPONSE_TRANSFORMS}.
   *
   * @example
   * ```ts
   * providers: [
   *   ...provideDaffProductMagentoExtraProductResponseTransforms(
   *     myExtraProductTransform
   *   )
   * ]
   * ```
   */
  provider: provideDaffProductMagentoExtraProductResponseTransforms,
} = createMultiInjectionToken<DaffMagentoProductResponseExtraTransform>('DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_RESPONSE_TRANSFORMS');
