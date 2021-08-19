import {
  Provider,
  InjectionToken,
} from '@angular/core';
import { Action } from '@ngrx/store';

import { DaffSeoCanonicalUrlUpdate } from '../../models/public_api';

/**
 * A multi-provider injection token for providing canonical URL update logic.
 * `getData` will run in response to, and invoked with, the action specified.
 */
export const DAFF_SEO_CANONICAL_URL_UPDATES = new InjectionToken<DaffSeoCanonicalUrlUpdate[]>('DAFF_SEO_CANONICAL_URL_UPDATES', { factory: () => []});

/**
 * Provides canonical URL update logic.
 *
 * See {@link DAFF_SEO_CANONICAL_URL_UPDATES}.
 *
 * ```ts
 * providers: [
 *   ...daffProvideCanonicalUrlUpdates(
 *     myCanonicalUrlUpdate
 *   )
 * ]
 * ```
 */
export function daffProvideCanonicalUrlUpdates<T extends Action = Action>(...values: DaffSeoCanonicalUrlUpdate<T>[]): Provider[] {
  return values.map(value => ({
    provide: DAFF_SEO_CANONICAL_URL_UPDATES,
    useValue: value,
    multi: true,
  }));
}
