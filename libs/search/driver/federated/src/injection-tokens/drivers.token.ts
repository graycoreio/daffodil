import {
  InjectionToken,
  Provider,
  Type,
} from '@angular/core';

import { DaffSearchResult } from '@daffodil/search';
import { DaffSearchDriverKindedInterface } from '@daffodil/search/driver';

/**
 * A multi-provider injection token for providing feature-specific search platform drivers.
 * This allows disparate modules to contribute to the business logic of performing searches while
 * preventing tight coupling of said modules.
 */
export const DAFF_SEARCH_FEDERATED_DRIVERS = new InjectionToken<DaffSearchDriverKindedInterface[]>(
  'DAFF_SEARCH_FEDERATED_DRIVERS',
  { factory: () => []},
);

/**
 * Provides feature drivers for the federated search driver.
 *
 * See {@link DAFF_SEARCH_FEDERATED_DRIVERS}.
 *
 * ```ts
 * providers: [
 *   ...daffProvideSearchFederatedDrivers(MySearchDriver)
 * ]
 * ```
 */
export function daffProvideSearchFederatedDrivers(...drivers: Type<DaffSearchDriverKindedInterface>[]): Provider[] {
  return drivers.map(driver => ({
    provide: DAFF_SEARCH_FEDERATED_DRIVERS,
    useExisting: driver,
    multi: true,
  }));
}
