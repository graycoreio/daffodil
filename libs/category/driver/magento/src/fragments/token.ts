import { DocumentNode } from '@apollo/client/core';

import { createMultiInjectionToken } from '@daffodil/core';


export const {
  /**
   * A multi-provider injection token for providing category tree transform logic in the Magento driver.
   * It is run after the standard transforms and passed both the current transformed Daffodil category and the Magento category.
   */
  token: MAGENTO_CATEGORY_EXTRA_FRAGMENTS,
  /**
   * Provides category tree transforms for the Magento category driver.
   *
   * See {@link MAGENTO_CATEGORY_EXTRA_FRAGMENTS}.
   *
   * @example
   * ```ts
   * providers: [
   *   ...magentoProvideCategoryExtraFragments(
   *     myCategoryExtraFragment
   *   )
   * ]
   * ```
   */
  provider: magentoProvideCategoryExtraFragments,
} = createMultiInjectionToken<DocumentNode>('MAGENTO_CATEGORY_EXTRA_FRAGMENTS');
