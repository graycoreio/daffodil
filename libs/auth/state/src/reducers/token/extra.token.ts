import { ActionReducer } from '@ngrx/store';

import { createMultiInjectionToken } from '@daffodil/core';

import { DaffAuthFeatureState } from '../auth-feature-state.interface';

export const {
  /**
   * A token to hold the injectable extra reducers.
   *
   * Prefer using {@link daffAuthProvideExtraReducers}.
   */
  token: DAFF_AUTH_EXTRA_REDUCERS,

  /**
   * Provides additional reducers that run after the standard Daffodil auth reducers.
   *
   * @example
   * ```ts
   * providers: [
   *   ...daffAuthProvideExtraReducers(
   *     myReducer1,
   *     myReducer2
   *   )
   * ]
   * ```
   */
  provider: daffAuthProvideExtraReducers,
} = createMultiInjectionToken<ActionReducer<DaffAuthFeatureState>>('DAFF_AUTH_EXTRA_REDUCERS');
