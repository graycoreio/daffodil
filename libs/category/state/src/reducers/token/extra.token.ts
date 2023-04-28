import {
  InjectionToken,
  Provider,
} from '@angular/core';
import { ActionReducer } from '@ngrx/store';

import { DaffCategoryReducersState } from '../category-reducers.interface';

/**
 * A token to hold the injectable extra reducers.
 *
 * Prefer using {@link daffCategoryProvideExtraReducers}.
 */
export const DAFF_CATEGORY_EXTRA_REDUCERS = new InjectionToken<ActionReducer<DaffCategoryReducersState>[]>(
  'DAFF_CATEGORY_EXTRA_REDUCERS',
  {
    factory: () => [],
    providedIn: 'any',
  },
);

/**
 * Provides additional reducers that run after the standard Daffodil category reducers.
 *
 * ```ts
 * providers: [
 *   ...daffCategoryProvideExtraReducers(
 *     myReducer1,
 *     myReducer2
 *   )
 * ]
 * ```
 */
export function daffCategoryProvideExtraReducers(
  ...reducers: ActionReducer<DaffCategoryReducersState>[]
): Provider[] {
  return reducers.map(reducer => ({
    provide: DAFF_CATEGORY_EXTRA_REDUCERS,
    useValue: reducer,
    multi: true,
  }));
}
