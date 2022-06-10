import { InjectionToken } from '@angular/core';

import { SEARCH_FEDERATED_CONFIG_DEFAULT } from './default';

/**
 * The token used to provide @daffodil/search/driver/federated config data.
 * Mandatory for the Magento driver.
 */
export const SEARCH_FEDERATED_CONFIG_TOKEN = new InjectionToken<DaffSearchFederatedDriverConfig>('SEARCH_FEDERATED_CONFIG_TOKEN', { factory: () => SEARCH_FEDERATED_CONFIG_DEFAULT });

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
