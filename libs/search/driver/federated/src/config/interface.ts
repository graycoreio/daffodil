import { createConfigInjectionToken } from '@daffodil/core';

import { DAFF_SEARCH_FEDERATED_CONFIG_DEFAULT } from './default';

export const {
  /**
   * The token used to provide @daffodil/search/driver/federated config data.
   * Mandatory for the Magento driver.
   */
  token: DAFF_SEARCH_FEDERATED_CONFIG_TOKEN,
  /**
   * Provider function for {@link DAFF_SEARCH_FEDERATED_CONFIG_TOKEN}.
   */
  provider: provideDaffSearchFederatedConfig,
} = createConfigInjectionToken<DaffSearchFederatedDriverConfig>(
  DAFF_SEARCH_FEDERATED_CONFIG_DEFAULT,
  'DAFF_SEARCH_FEDERATED_CONFIG_TOKEN',
);

/**
 * An interface for providing @daffodil/search/driver/federated with necessary config values.
 */
export interface DaffSearchFederatedDriverConfig {
  /**
   * The search driver kind that is the main kind of search result.
   * Optional.
   * If set, the search response metadata will be entirely from this kind.
   */
  preferredDriverKind?: string;
}
