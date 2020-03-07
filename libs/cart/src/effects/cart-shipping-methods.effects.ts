import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError, mapTo, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {
  DaffCartShippingMethodsActionTypes,
  DaffCartShippingMethodsLoad,
  DaffCartShippingMethodsLoadSuccess,
  DaffCartShippingMethodsLoadFailure,
} from '../actions';
import { DaffCartShippingMethodsServiceInterface, DaffCartShippingMethodsDriver } from '../drivers/interfaces/cart-shipping-methods-service.interface';
import { DaffCartShippingRate } from '../models/cart-shipping-rate';
import { DaffCartStorageService } from '../storage/cart-storage.service';

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
        map(resp => new DaffCartShippingMethodsLoadSuccess(resp)),
        catchError(error => of(new DaffCartShippingMethodsLoadFailure('Failed to list cart shipping methods')))
      )
    )
  )
}
