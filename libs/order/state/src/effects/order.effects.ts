import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import { of } from 'rxjs';
import {
  switchMap,
  map,
  catchError,
} from 'rxjs/operators';

import { DaffCart } from '@daffodil/cart';
import { DaffError } from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';
import { DaffOrder } from '@daffodil/order';
import {
  DaffOrderServiceInterface,
  DaffOrderDriver,
} from '@daffodil/order/driver';

import {
  DaffOrderActionTypes,
  DaffOrderLoad,
  DaffOrderLoadSuccess,
  DaffOrderLoadFailure,
  DaffOrderList,
  DaffOrderListSuccess,
  DaffOrderListFailure,
} from '../actions/order.actions';
import { DAFF_ORDER_ERROR_MATCHER } from '../injection-tokens/public_api';

@Injectable()
export class DaffOrderEffects<
  T extends DaffOrder = DaffOrder,
> {
  constructor(
    private actions$: Actions,
    @Inject(DaffOrderDriver) private driver: DaffOrderServiceInterface<T>,
    @Inject(DAFF_ORDER_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
  ) {}

  /**
   * An effect for the loading of an order.
   */

  get$ = createEffect(() => this.actions$.pipe(
    ofType(DaffOrderActionTypes.OrderLoadAction),
    switchMap((action: DaffOrderLoad<T>) =>
      this.driver.get(action.orderId, action.cartId).pipe(
        map(resp => new DaffOrderLoadSuccess<T>(resp)),
        catchError((error: DaffError) => of(new DaffOrderLoadFailure(this.errorMatcher(error)))),
      ),
    ),
  ));

  /**
   * An effect for the listing of orders.
   */

  list$ = createEffect(() => this.actions$.pipe(
    ofType(DaffOrderActionTypes.OrderListAction),
    switchMap((action: DaffOrderList) =>
      this.driver.list(action.cartId, action.request).pipe(
        map(resp => new DaffOrderListSuccess<T>(resp)),
        catchError((error: DaffError) => of(new DaffOrderListFailure(this.errorMatcher(error)))),
      ),
    ),
  ));
}
