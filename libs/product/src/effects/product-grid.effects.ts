import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of ,  Observable } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { 
  ProductGridActionTypes, 
  ProductGridLoad, 
  ProductGridLoadSuccess, 
  ProductGridLoadFailure } from '../actions/product-grid.actions';
import { DaffProductServiceInterface } from '../drivers/interfaces/product-service.interface';
import { DaffProductDriver } from '../drivers/injection-tokens/product-driver.token';

/**
 * Effects for handling product grid actions.
 * 
 * @Param action$: Actions - Redux action object
 * @Param driver: DaffProductServiceInterface - A product service driver
 */
@Injectable()
export class ProductGridEffects {

  constructor(
    private actions$: Actions,
    @Inject(DaffProductDriver) private driver: DaffProductServiceInterface){}

  /**
   * Handles ProductGridLoadAction by making a service call for products and returning a success or failure action
   * to the action stream.
   */
  @Effect()
  loadAll$ : Observable<any> = this.actions$.pipe(
    ofType(ProductGridActionTypes.ProductGridLoadAction),
    switchMap((action: ProductGridLoad) =>
      this.driver.getAll()
        .pipe(
          map((resp) => {
            return new ProductGridLoadSuccess(resp);
          }),
          catchError(error => {
            return of(new ProductGridLoadFailure("Failed to load product grid"));
          })
        )
    )
  )
}
