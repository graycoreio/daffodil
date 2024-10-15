import {
  Provider,
  InjectionToken,
} from '@angular/core';
import { Event } from '@angular/router';

import { DaffSeoUpdateEventPair } from '../model/update-event-pair.interface';

/**
 * A multi-provider injection token for providing canonical URL update logic.
 * `getData` will run in response to, and invoked with, the action specified.
 */
export const DAFF_SEO_TITLE_ROUTER_UPDATES = new InjectionToken<DaffSeoUpdateEventPair<Event, string>[]>('DAFF_SEO_TITLE_ROUTER_UPDATES', { factory: () => []});

/**
 * Provides canonical URL update logic.
 *
 * See {@link DAFF_SEO_TITLE_ROUTER_UPDATES}.
 *
 * ```ts
 * providers: [
 *   ...provideDaffTitleUpdates(
 *     myTitleUpdate
 *   )
 * ]
 * ```
 */
export function provideDaffTitleRouterUpdates<T extends Event = Event>(...values: DaffSeoUpdateEventPair<T, string>[]): Provider[] {
  return values.map(value => ({
    provide: DAFF_SEO_TITLE_ROUTER_UPDATES,
    useValue: value,
    multi: true,
  }));
}
