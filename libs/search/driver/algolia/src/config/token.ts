import { createConfigInjectionToken } from '@daffodil/core';

import { DAFF_SEARCH_ALGOLIA_CONFIG_DEFAULT } from './default';
import { DaffSearchAlgoliaDriverConfig } from './type';

export const {
  /**
   * The token used to provide @daffodil/search/driver/algolia config data.
   * Mandatory for the Magento driver.
   */
  token: DAFF_SEARCH_ALGOLIA_CONFIG_TOKEN,
  /**
   * Provider function for {@link DAFF_SEARCH_ALGOLIA_CONFIG_TOKEN}.
   */
  provider: provideDaffSearchAlgoliaConfig,
} = createConfigInjectionToken<DaffSearchAlgoliaDriverConfig>(
  DAFF_SEARCH_ALGOLIA_CONFIG_DEFAULT,
  'DAFF_SEARCH_ALGOLIA_CONFIG_TOKEN',
);
