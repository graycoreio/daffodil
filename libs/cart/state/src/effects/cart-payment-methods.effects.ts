import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { DaffCartPaymentMethod, DaffCartStorageService } from '@daffodil/cart';
import { DaffCartPaymentMethodsDriver, DaffCartPaymentMethodsServiceInterface } from '@daffodil/cart/driver';

import {
  DaffCartPaymentMethodsActionTypes,
  DaffCartPaymentMethodsLoad,
  DaffCartPaymentMethodsLoadSuccess,
  DaffCartPaymentMethodsLoadFailure,
} from '../actions/public_api';

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
        map((resp: T[]) => new DaffCartPaymentMethodsLoadSuccess(resp)),
        catchError(error => of(new DaffCartPaymentMethodsLoadFailure('Failed to list cart payment methods')))
      )
    )
  )
}
