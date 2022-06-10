import {
  InjectionToken,
  Provider,
} from '@angular/core';
import { ActionReducer } from '@ngrx/store';

import { DaffSearchResult } from '@daffodil/search';

import { DaffSearchReducersState } from '../reducers.interface';

/**
 * A token to hold the injectable extra reducers.
 *
 * Prefer using {@link daffSearchProvideExtraReducers}.
 */
export const DAFF_SEARCH_EXTRA_REDUCERS = new InjectionToken<ActionReducer<DaffSearchReducersState>[]>(
  'DAFF_SEARCH_EXTRA_REDUCERS',
  {
    factory: () => [],
    providedIn: 'any',
  },
);

/**
 * Provides additional reducers that run after the standard Daffodil cart reducers.
 *
 * ```ts
 * providers: [
 *   ...daffSearchProvideExtraReducers(
 *     myReducer1,
 *     myReducer2
 *   )
 * ]
 * ```
 */
export function daffSearchProvideExtraReducers<T extends DaffSearchResult = DaffSearchResult>(
  ...reducers: ActionReducer<DaffSearchReducersState<T>>[]
): Provider[] {
  return reducers.map(reducer => ({
    provide: DAFF_SEARCH_EXTRA_REDUCERS,
    useValue: reducer,
    multi: true,
  }));
}
