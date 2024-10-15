import {
  InjectionToken,
  Provider,
} from '@angular/core';
import { Event } from '@angular/router';

import { DaffSeoMetaDefinition } from '@daffodil/seo';

import { DaffSeoUpdateEventPair } from '../model/update-event-pair.interface';

/**
 * A multi-provider injection token for providing page meta update logic.
 * `getData` will run in response to, and invoked with, the action specified.
 */
export const DAFF_SEO_META_ROUTER_UPDATES = new InjectionToken<DaffSeoUpdateEventPair<Event, DaffSeoMetaDefinition>[]>('DAFF_SEO_META_ROUTER_UPDATES', { factory: () => []});

/**
 * Provides page meta update logic.
 *
 * See {@link DAFF_SEO_META_ROUTER_UPDATES}.
 *
 * ```ts
 * providers: [
 *   ...provideDaffMetaUpdates(
 *     myMetaUpdate
 *   )
 * ]
 * ```
 */
export function provideDaffMetaRouterUpdates<T extends Event = Event>(...values: DaffSeoUpdateEventPair<T, DaffSeoMetaDefinition>[]): Provider[] {
  return values.map(value => ({
    provide: DAFF_SEO_META_ROUTER_UPDATES,
    useValue: value,
    multi: true,
  }));
}
