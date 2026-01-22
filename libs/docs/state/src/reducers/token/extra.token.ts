import { ActionReducer } from '@ngrx/store';

import { createMultiInjectionToken } from '@daffodil/core';

import { DaffDocsReducersState } from '../reducers.interface';

export const {
  /**
   * A token to hold the injectable extra reducers.
   *
   * Prefer using {@link provideDaffDocsExtraReducers}.
   */
  token: DAFF_DOCS_EXTRA_REDUCERS,

  /**
   * Provides additional reducers that run after the standard Daffodil docs reducers.
   *
   * @example
   * ```ts
   * providers: [
   *   ...provideDaffDocsExtraReducers(
   *     myReducer1,
   *     myReducer2
   *   )
   * ]
   * ```
   */
  provider: provideDaffDocsExtraReducers,
} = createMultiInjectionToken<ActionReducer<DaffDocsReducersState>>(
  'DAFF_DOCS_EXTRA_REDUCERS',
  { providedIn: 'any' },
);
