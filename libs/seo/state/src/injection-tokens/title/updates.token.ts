import {
  Provider,
  InjectionToken,
} from '@angular/core';
import { Action } from '@ngrx/store';

import { DaffSeoTitleUpdate } from '../../models/public_api';

/**
 * A multi-provider injection token for providing canonical URL update logic.
 * `getData` will run in response to, and invoked with, the action specified.
 */
export const DAFF_SEO_TITLE_UPDATES = new InjectionToken<DaffSeoTitleUpdate[]>('DAFF_SEO_TITLE_UPDATES', { factory: () => []});

/**
 * Provides canonical URL update logic.
 *
 * See {@link DAFF_SEO_TITLE_UPDATES}.
 *
 * ```ts
 * providers: [
 *   ...daffProvideTitleUpdates(
 *     myTitleUpdate
 *   )
 * ]
 * ```
 */
export function daffProvideTitleUpdates<T extends Action = Action>(...values: DaffSeoTitleUpdate<T>[]): Provider[] {
  return values.map(value => ({
    provide: DAFF_SEO_TITLE_UPDATES,
    useValue: value,
    multi: true,
  }));
}
