import { Provider } from '@angular/core';
import { Event } from '@angular/router';

import { createMultiInjectionToken } from '@daffodil/core';

import { DaffSeoUpdateEventPair } from '../model/update-event-pair.interface';

const {
  /**
   * A multi-provider injection token for providing canonical URL update logic.
   * `getData` will run in response to, and invoked with, the action specified.
   *
   * @deprecated Deprecated in version 0.81.0. Will be removed in version 0.84.0.
   */
  token: DAFF_SEO_TITLE_ROUTER_UPDATES,
  provider,
} = createMultiInjectionToken<DaffSeoUpdateEventPair<Event, string>>('DAFF_SEO_TITLE_ROUTER_UPDATES');

/**
 * Provides canonical URL update logic.
 *
 * See {@link DAFF_SEO_TITLE_ROUTER_UPDATES}.
 *
 * @deprecated Deprecated in version 0.81.0. Will be removed in version 0.84.0.
 *
 * @example
 * ```ts
 * providers: [
 *   ...provideDaffTitleUpdates(
 *     myTitleUpdate
 *   )
 * ]
 * ```
 */
export function provideDaffTitleRouterUpdates<T extends Event = Event>(...values: DaffSeoUpdateEventPair<T, string>[]): Provider[] {
  return provider(...values);
}

export { DAFF_SEO_TITLE_ROUTER_UPDATES };
