import { DocumentNode } from 'graphql';

import { createMultiInjectionToken } from '@daffodil/core';

export const {
  token: DAFF_NAVIGATION_MAGENTO_DRIVER_EXTRA_FRAGMENTS,
  /**
   * Provider function for {@link DAFF_NAVIGATION_MAGENTO_DRIVER_EXTRA_FRAGMENTS}.
   */
  provider: daffNavigationMagentoDriverExtraFragments,
} = createMultiInjectionToken<DocumentNode>('DAFF_NAVIGATION_MAGENTO_DRIVER_EXTRA_FRAGMENTS');
