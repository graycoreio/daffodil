import { Injectable, Inject } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';
import { of ,  Observable } from 'rxjs';

import { 
  ProductActionTypes, 
  ProductLoad, 
  ProductLoadSuccess, 
  ProductLoadFailure } from '../actions/product.actions';
import { DaffProductDriver } from '../drivers/injection-tokens/product-driver.token';
import { DaffProductServiceInterface } from '../drivers/interfaces/product-service.interface';

@Injectable()
export class ProductEffects {

  constructor(
    private actions$: Actions,
    @Inject(DaffProductDriver) private driver: DaffProductServiceInterface){}

  @Effect()
  load$ : Observable<any> = this.actions$.pipe(
    ofType(ProductActionTypes.ProductLoadAction),
    switchMap((action: ProductLoad) =>
      this.driver.get(action.payload)
        .pipe(
          map((resp) => {
            return new ProductLoadSuccess(resp);
          }),
          catchError(error => {
            return of(new ProductLoadFailure("Failed to load product"));
          })
        )
    )
  )
}
