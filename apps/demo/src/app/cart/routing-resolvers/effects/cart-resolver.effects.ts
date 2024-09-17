import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import {
  Action,
  select,
  Store,
} from '@ngrx/store';
import {
  Observable,
  of,
} from 'rxjs';
import {
  switchMap,
  take,
  map,
  catchError,
} from 'rxjs/operators';

import {
  DaffCart,
  DaffCartStorageService,
} from '@daffodil/cart';
import {
  DaffCartDriver,
  DaffCartServiceInterface,
} from '@daffodil/cart/driver';
import {
  DaffCartFacade,
  DaffCartStateRootSlice,
} from '@daffodil/cart/state';

import { daffCartSelectors } from '../../selectors/cart-selector';
import {
  ResolveCartSuccess,
  CartResolverActionTypes,
  ResolveCartFailure,
} from '../actions/cart-resolver.actions';

@Injectable()
export class CartResolverEffects {
  constructor(
    private actions$: Actions,
    private facade: DaffCartFacade,
    private cartStorage: DaffCartStorageService,
    @Inject(DaffCartDriver) private driver: DaffCartServiceInterface,
  ) {}


  onResolveCart$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(CartResolverActionTypes.ResolveCartAction),
    switchMap(() => this.facade.cart$.pipe(
      take(1),
      switchMap(cart => {
        if (cart) {
          return of(new ResolveCartSuccess(cart));
        } else {
          return this.getCartHandler();
        }
      }),
    )),
  ));

  private getCartHandler(): Observable<Action> {
    return this.driver.get(this.cartStorage.getCartId()).pipe(
      map(resp => new ResolveCartSuccess(resp.response)),
      catchError(error => of(new ResolveCartFailure(null))),
    );
  }
}
