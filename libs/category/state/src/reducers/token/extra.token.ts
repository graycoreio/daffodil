import { ActionReducer } from '@ngrx/store';

import { createMultiInjectionToken } from '@daffodil/core';

import { DaffCategoryReducersState } from '../category-reducers.interface';

export const {
  /**
   * A token to hold the injectable extra reducers.
   *
   * Prefer using {@link daffCategoryProvideExtraReducers}.
   */
  token: DAFF_CATEGORY_EXTRA_REDUCERS,
  /**
   * Provides additional reducers that run after the standard Daffodil category reducers.
   *
   * @example
   * ```ts
   * providers: [
   *   ...daffCategoryProvideExtraReducers(
   *     myReducer1,
   *     myReducer2
   *   )
   * ]
   * ```
   */
  provider: daffCategoryProvideExtraReducers,
} = createMultiInjectionToken<ActionReducer<DaffCategoryReducersState>>(
  'DAFF_CATEGORY_EXTRA_REDUCERS',
  { providedIn: 'any' },
);
