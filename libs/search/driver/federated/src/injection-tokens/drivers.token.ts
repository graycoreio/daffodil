import { createServicesInjectionToken } from '@daffodil/core';
import { DaffSearchResult } from '@daffodil/search';
import { DaffSearchDriverKindedInterface } from '@daffodil/search/driver';

export const {
  /**
   * A multi-provider injection token for providing feature-specific search platform drivers.
   * This allows disparate modules to contribute to the business logic of performing searches while
   * preventing tight coupling of said modules.
   */
  token: DAFF_SEARCH_FEDERATED_DRIVERS,

  /**
   * Provides feature drivers for the federated search driver.
   *
   * See {@link DAFF_SEARCH_FEDERATED_DRIVERS}.
   *
   * @example
   * ```ts
   * providers: [
   *   ...provideDaffSearchFederatedDrivers(MySearchDriver)
   * ]
   * ```
   */
  provider: provideDaffSearchFederatedDrivers,
} = createServicesInjectionToken<DaffSearchDriverKindedInterface>('DAFF_SEARCH_FEDERATED_DRIVERS');
