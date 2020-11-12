import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { DaffCartShippingRate, DaffCartStorageService } from '@daffodil/cart';
import { DaffCartShippingMethodsDriver, DaffCartShippingMethodsServiceInterface } from '@daffodil/cart/driver';

import {
  DaffCartShippingMethodsActionTypes,
  DaffCartShippingMethodsLoad,
  DaffCartShippingMethodsLoadSuccess,
  DaffCartShippingMethodsLoadFailure,
} from '../actions/public_api';

@Injectable()
export class DaffCartShippingMethodsEffects<T extends DaffCartShippingRate> {

  constructor(
    private actions$: Actions,
    @Inject(DaffCartShippingMethodsDriver) private driver: DaffCartShippingMethodsServiceInterface<T>,
    private storage: DaffCartStorageService
    ) {}

  @Effect()
  list$ = this.actions$.pipe(
    ofType(DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadAction),
    switchMap((action: DaffCartShippingMethodsLoad) =>
      this.driver.list(this.storage.getCartId()).pipe(
        map((resp: T[]) => new DaffCartShippingMethodsLoadSuccess(resp)),
        catchError(error => of(new DaffCartShippingMethodsLoadFailure('Failed to list cart shipping methods')))
      )
    )
  )
}
