import { Injectable, Inject } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';
import { of ,  Observable } from 'rxjs';

import { 
  DaffProductActionTypes, 
  DaffProductLoad, 
  DaffProductLoadSuccess, 
  DaffProductLoadFailure } from '../actions/product.actions';
import { DaffProductDriver } from '../drivers/injection-tokens/product-driver.token';
import { DaffProductServiceInterface } from '../drivers/interfaces/product-service.interface';

@Injectable()
export class DaffProductEffects {

  constructor(
    private actions$: Actions,
    @Inject(DaffProductDriver) private driver: DaffProductServiceInterface){}

  @Effect()
  load$ : Observable<any> = this.actions$.pipe(
    ofType(DaffProductActionTypes.ProductLoadAction),
    switchMap((action: DaffProductLoad) =>
      this.driver.get(action.payload)
        .pipe(
          map((resp) => {
            return new DaffProductLoadSuccess(resp);
          }),
          catchError(error => {
            return of(new DaffProductLoadFailure("Failed to load product"));
          })
        )
    )
  )
}
