import { createMultiInjectionToken } from '@daffodil/core';

import { MagentoCategoryTreeTransform } from './type';

export const {
  /**
   * A multi-provider injection token for providing category transform logic in the Magento driver.
   * It is run after the standard transforms and passed both the current transformed Daffodil category and the Magento category.
   */
  token: MAGENTO_CATEGORY_EXTRA_TRANSFORMS,
  /**
   * Provides category transforms for the Magento category driver.
   *
   * See {@link MAGENTO_CATEGORY_EXTRA_TRANSFORMS}.
   *
   * @example
   * ```ts
   * providers: [
   *   ...magentoProvideCategoryExtraTransforms(
   *     myCategoryExtraTransform
   *   )
   * ]
   * ```
   */
  provider: magentoProvideCategoryExtraTransforms,
} = createMultiInjectionToken<MagentoCategoryTreeTransform>('MAGENTO_CATEGORY_EXTRA_TRANSFORMS');
