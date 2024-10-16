import { Provider } from '@angular/core';
import { Event } from '@angular/router';

import { createMultiInjectionToken } from '@daffodil/core';

import { DaffSeoUpdateEventPair } from '../model/update-event-pair.interface';


const {
  /**
   * A multi-provider injection token for providing canonical URL update logic.
   * `getData` will run in response to, and invoked with, the action specified.
   */
  token: DAFF_SEO_CANONICAL_URL_ROUTER_UPDATES,
  provider,
} = createMultiInjectionToken<DaffSeoUpdateEventPair<Event, string>>('DAFF_SEO_CANONICAL_URL_ROUTER_UPDATES');

/**
 * Provides canonical URL update logic.
 *
 * See {@link DAFF_SEO_CANONICAL_URL_ROUTER_UPDATES}.
 *
 * ```ts
 * providers: [
 *   ...provideDaffCanonicalUrlUpdates(
 *     myCanonicalUrlUpdate
 *   )
 * ]
 * ```
 */
export function provideDaffCanonicalUrlRouterUpdates<T extends Event = Event>(...values:  DaffSeoUpdateEventPair<T, string>[]): Provider[] {
  return provider(...values);
}

export { DAFF_SEO_CANONICAL_URL_ROUTER_UPDATES };
