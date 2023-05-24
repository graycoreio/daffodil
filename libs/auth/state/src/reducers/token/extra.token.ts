import {
  InjectionToken,
  Provider,
} from '@angular/core';
import { ActionReducer } from '@ngrx/store';

import { DaffAuthFeatureState } from '../auth-feature-state.interface';

/**
 * A token to hold the injectable extra reducers.
 *
 * Prefer using {@link daffAuthProvideExtraReducers}.
 */
export const DAFF_AUTH_EXTRA_REDUCERS = new InjectionToken<ActionReducer<DaffAuthFeatureState>[]>(
  'DAFF_AUTH_EXTRA_REDUCERS',
  { factory: () => []},
);

/**
 * Provides additional reducers that run after the standard Daffodil auth reducers.
 *
 * ```ts
 * providers: [
 *   ...daffAuthProvideExtraReducers(
 *     myReducer1,
 *     myReducer2
 *   )
 * ]
 * ```
 */
export function daffAuthProvideExtraReducers(
  ...reducers: ActionReducer<DaffAuthFeatureState>[]
): Provider[] {
  return reducers.map(reducer => ({
    provide: DAFF_AUTH_EXTRA_REDUCERS,
    useValue: reducer,
    multi: true,
  }));
}
