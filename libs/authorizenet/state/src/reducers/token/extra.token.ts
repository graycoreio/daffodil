import {
  InjectionToken,
  Provider,
} from '@angular/core';
import { ActionReducer } from '@ngrx/store';

import { DaffAuthorizeNetReducersState } from '../authorize-net-reducers.interface';

/**
 * A token to hold the injectable extra reducers.
 *
 * Prefer using {@link daffAuthorizeNetProvideExtraReducers}.
 */
export const DAFF_AUTHORIZE_NET_EXTRA_REDUCERS = new InjectionToken<ActionReducer<DaffAuthorizeNetReducersState>[]>(
  'DAFF_AUTHORIZE_NET_EXTRA_REDUCERS',
  {
    factory: () => [],
    providedIn: 'any',
  },
);

/**
 * Provides additional reducers that run after the standard Daffodil authorizenet reducers.
 *
 * ```ts
 * providers: [
 *   ...daffAuthorizeNetProvideExtraReducers(
 *     myReducer1,
 *     myReducer2
 *   )
 * ]
 * ```
 */
export function daffAuthorizeNetProvideExtraReducers(
  ...reducers: ActionReducer<DaffAuthorizeNetReducersState>[]
): Provider[] {
  return reducers.map(reducer => ({
    provide: DAFF_AUTHORIZE_NET_EXTRA_REDUCERS,
    useValue: reducer,
    multi: true,
  }));
}
