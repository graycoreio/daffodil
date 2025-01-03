// workaround https://github.com/graycoreio/daffodil/issues/1667
import { createMultiInjectionToken } from '@daffodil/core';
import { DaffNavigationTree } from '@daffodil/navigation';

import { MagentoNavigationTreeTransform } from './type';

export const {
  /**
   * A multi-provider injection token for providing navigation tree transform logic in the Magento driver.
   * It is run after the standard transforms and passed both the current transformed Daffodil navigation and the Magento navigation.
   */
  token: MAGENTO_NAVIGATION_TREE_TRANSFORMS,
  /**
   * Provides navigation tree transforms for the Magento navigation driver.
   *
   * See {@link MAGENTO_NAVIGATION_TREE_TRANSFORMS}.
   *
   * @example
   * ```ts
   * providers: [
   *   ...magentoProvideNavigationTreeTransforms(
   *     myNavigationTreeTransform
   *   )
   * ]
   * ```
   */
  provider: magentoProvideNavigationTreeTransforms,
} = createMultiInjectionToken<MagentoNavigationTreeTransform>('MAGENTO_NAVIGATION_TREE_TRANSFORMS');
