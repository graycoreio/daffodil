import { ActionReducer } from '@ngrx/store';

import { createMultiInjectionToken } from '@daffodil/core';
import { DaffSearchResult } from '@daffodil/search';

import { DaffSearchReducersState } from '../reducers.interface';

export const {
  /**
   * A token to hold the injectable extra reducers.
   *
   * Prefer using {@link daffSearchProvideExtraReducers}.
   */
  token: DAFF_SEARCH_EXTRA_REDUCERS,

  /**
   * Provides additional reducers that run after the standard Daffodil cart reducers.
   *
   * @example
   * ```ts
   * providers: [
   *   ...daffSearchProvideExtraReducers(
   *     myReducer1,
   *     myReducer2
   *   )
   * ]
   * ```
   */
  provider: daffSearchProvideExtraReducers,
} = createMultiInjectionToken<ActionReducer<DaffSearchReducersState>>(
  'DAFF_SEARCH_EXTRA_REDUCERS',
  { providedIn: 'any' },
);
