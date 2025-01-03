import { Provider } from '@angular/core';
import { Action } from '@ngrx/store';

import { createMultiInjectionToken } from '@daffodil/core';

import { DaffSeoTitleUpdate } from '../../models/public_api';

const {
  /**
   * A multi-provider injection token for providing canonical URL update logic.
   * `getData` will run in response to, and invoked with, the action specified.
   */
  token: DAFF_SEO_TITLE_UPDATES,
  provider,
} = createMultiInjectionToken<DaffSeoTitleUpdate>('DAFF_SEO_TITLE_UPDATES');

/**
 * Provides canonical URL update logic.
 *
 * See {@link DAFF_SEO_TITLE_UPDATES}.
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
export function provideDaffTitleUpdates<T extends Action = Action>(...values: DaffSeoTitleUpdate<T>[]): Provider[] {
  return provider(...values);
}

export { DAFF_SEO_TITLE_UPDATES };
