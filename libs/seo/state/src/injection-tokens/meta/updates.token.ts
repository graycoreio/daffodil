import {
  InjectionToken,
  Provider,
} from '@angular/core';
import { Action } from '@ngrx/store';

import { DaffSeoMetaUpdate } from '../../models/public_api';

/**
 * A multi-provider injection token for providing page meta update logic.
 * `getData` will run in response to, and invoked with, the action specified.
 */
export const DAFF_SEO_META_UPDATES = new InjectionToken<DaffSeoMetaUpdate[]>('DAFF_SEO_META_UPDATES', { factory: () => []});

/**
 * Provides page meta update logic.
 *
 * See {@link DAFF_SEO_META_UPDATES}.
 *
 * ```ts
 * providers: [
 *   ...daffProvideMetaUpdates(
 *     myMetaUpdate
 *   )
 * ]
 * ```
 */
export function daffProvideMetaUpdates<T extends Action = Action>(...values: DaffSeoMetaUpdate<T>[]): Provider[] {
  return values.map(value => ({
    provide: DAFF_SEO_META_UPDATES,
    useValue: value,
    multi: true,
  }));
}
