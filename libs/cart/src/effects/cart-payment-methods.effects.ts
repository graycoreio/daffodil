import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError, mapTo, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {
  DaffCartPaymentMethodsActionTypes,
  DaffCartPaymentMethodsLoad,
  DaffCartPaymentMethodsLoadSuccess,
  DaffCartPaymentMethodsLoadFailure,
} from '../actions';
import { DaffCartPaymentMethodsServiceInterface, DaffCartPaymentMethodsDriver } from '../drivers/interfaces/cart-payment-methods-service.interface';
import { DaffCartStorageService } from '../storage/cart-storage.service';
import { DaffCartPaymentMethod } from '../models/cart-payment';

@Injectable()
export class DaffCartPaymentMethodsEffects<T extends DaffCartPaymentMethod> {

  constructor(
    private actions$: Actions,
    @Inject(DaffCartPaymentMethodsDriver) private driver: DaffCartPaymentMethodsServiceInterface<T>,
    private storage: DaffCartStorageService
    ) {}

  @Effect()
  list$ = this.actions$.pipe(
    ofType(DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadAction),
    switchMap((action: DaffCartPaymentMethodsLoad) =>
      this.driver.list(this.storage.getCartId()).pipe(
        map(resp => new DaffCartPaymentMethodsLoadSuccess(resp)),
        catchError(error => of(new DaffCartPaymentMethodsLoadFailure('Failed to list cart payment methods')))
      )
    )
  )
}
