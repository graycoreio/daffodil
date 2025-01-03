import { Provider } from '@angular/core';
import { Action } from '@ngrx/store';

import { createMultiInjectionToken } from '@daffodil/core';

import { DaffSeoCanonicalUrlUpdate } from '../../models/public_api';

const {
  /**
   * A multi-provider injection token for providing canonical URL update logic.
   * `getData` will run in response to, and invoked with, the action specified.
   */
  token: DAFF_SEO_CANONICAL_URL_UPDATES,
  provider,
} = createMultiInjectionToken<DaffSeoCanonicalUrlUpdate>('DAFF_SEO_CANONICAL_URL_UPDATES');

/**
 * Provides canonical URL update logic.
 *
 * See {@link DAFF_SEO_CANONICAL_URL_UPDATES}.
 *
 * @example
 * ```ts
 * providers: [
 *   ...provideDaffCanonicalUrlUpdates(
 *     myCanonicalUrlUpdate
 *   )
 * ]
 * ```
 */
export function provideDaffCanonicalUrlUpdates<T extends Action = Action>(...values: DaffSeoCanonicalUrlUpdate<T>[]): Provider[] {
  return provider(...values);
}

export { DAFF_SEO_CANONICAL_URL_UPDATES };
