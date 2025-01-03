import { Provider } from '@angular/core';
import { Action } from '@ngrx/store';

import { createMultiInjectionToken } from '@daffodil/core';

import { DaffSeoMetaUpdate } from '../../models/public_api';


const {
  /**
   * A multi-provider injection token for providing page meta update logic.
   * `getData` will run in response to, and invoked with, the action specified.
   */
  token: DAFF_SEO_META_UPDATES,
  provider,
} = createMultiInjectionToken<DaffSeoMetaUpdate>('DAFF_SEO_META_UPDATES');

/**
 * Provides page meta update logic.
 *
 * See {@link DAFF_SEO_META_UPDATES}.
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
export function provideDaffMetaUpdates<T extends Action = Action>(...values: DaffSeoMetaUpdate<T>[]): Provider[] {
  return provider(...values);
}

export { DAFF_SEO_META_UPDATES };
