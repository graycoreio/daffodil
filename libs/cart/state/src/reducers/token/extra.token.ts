import {
  InjectionToken,
  Provider,
} from '@angular/core';
import { ActionReducer } from '@ngrx/store';

import {
  DaffCart,
  DaffCartOrderResult,
} from '@daffodil/cart';

import { DaffStatefulCartItem } from '../../models/public_api';
import { DaffCartReducersState } from '../cart-reducers-state.interface';

/**
 * A token to hold the injectable extra reducers.
 *
 * Prefer using {@link daffCartProvideExtraReducers}.
 */
export const DAFF_CART_EXTRA_REDUCERS = new InjectionToken<ActionReducer<DaffCartReducersState>[]>(
  'DAFF_CART_EXTRA_REDUCERS',
  { factory: () => []},
);

/**
 * Provides additional reducers that run after the standard Daffodil cart reducers.
 *
 * ```ts
 * providers: [
 *   ...daffCartProvideExtraReducers(
 *     myReducer1,
 *     myReducer2
 *   )
 * ]
 * ```
 */
export function daffCartProvideExtraReducers<
  T extends DaffCart = DaffCart,
  V extends DaffCartOrderResult = DaffCartOrderResult,
  U extends DaffStatefulCartItem = DaffStatefulCartItem
>(
  ...reducers: ActionReducer<DaffCartReducersState<T, V, U>>[]
): Provider[] {
  return reducers.map(reducer => ({
    provide: DAFF_CART_EXTRA_REDUCERS,
    useValue: reducer,
    multi: true,
  }));
}
