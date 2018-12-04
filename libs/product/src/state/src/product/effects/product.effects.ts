import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of ,  Observable } from 'rxjs';

import { DaffDriverInterface, DaffDriver } from '@daffodil/driver';

import { 
  ProductActionTypes, 
  ProductLoad, 
  ProductLoadSuccess, 
  ProductLoadFailure } from '../actions/product.actions';

@Injectable()
export class ProductEffects {

  constructor(
    private actions$: Actions,
    @Inject(DaffDriver) private driver: DaffDriverInterface){}

  @Effect()
  load$ : Observable<any> = this.actions$.pipe(
    ofType(ProductActionTypes.ProductLoadAction),
    switchMap((action: ProductLoad) =>
      this.driver.productService.get(action.payload)
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
