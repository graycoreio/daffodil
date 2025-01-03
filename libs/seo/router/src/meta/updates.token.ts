import { Provider } from '@angular/core';
import { Event } from '@angular/router';

import { createMultiInjectionToken } from '@daffodil/core';
import { DaffSeoMetaDefinition } from '@daffodil/seo';

import { DaffSeoUpdateEventPair } from '../model/update-event-pair.interface';

const {
  /**
   * A multi-provider injection token for providing page meta update logic.
   * `getData` will run in response to, and invoked with, the action specified.
   */
  token: DAFF_SEO_META_ROUTER_UPDATES,
  provider,
} = createMultiInjectionToken<DaffSeoUpdateEventPair<Event, DaffSeoMetaDefinition>>('DAFF_SEO_META_ROUTER_UPDATES');

/**
 * Provides page meta update logic.
 *
 * See {@link DAFF_SEO_META_ROUTER_UPDATES}.
 *
 * @example
 * ```ts
 * providers: [
 *   ...provideDaffMetaUpdates(
 *     myMetaUpdate
 *   )
 * ]
 * ```
 */
export function provideDaffMetaRouterUpdates<T extends Event = Event>(...values: DaffSeoUpdateEventPair<T, DaffSeoMetaDefinition>[]): Provider[] {
  return provider(...values);
}

export { DAFF_SEO_META_ROUTER_UPDATES };
