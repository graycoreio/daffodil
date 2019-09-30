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
import { DaffProduct } from '../models/product';

/**
 * Effects for handling product actions and for triggering corresponding service requests.
 * 
 * @param action$ - Redux action object
 * @param driver - A product service driver
 */
@Injectable()
export class DaffProductEffects<T extends DaffProduct> {

  constructor(
    private actions$: Actions,
    @Inject(DaffProductDriver) private driver: DaffProductServiceInterface<T>){}

  /**
  * Handles ProductLoadAction by making a service call for a product and returning a success or 
  * failure action to the action stream.
  * 
  * @returns An Observable of a ProductLoadAction
  */
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
            return of(new DaffProductLoadFailure('Failed to load product'));
          })
        )
    )
  )
}
