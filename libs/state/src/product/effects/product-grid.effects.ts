import { Injectable, Inject } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { DaffDriver, DaffDriverInterface } from '@daffodil/driver';

import { 
  ProductGridActionTypes, 
  ProductGridLoad, 
  ProductGridLoadSuccess, 
  ProductGridLoadFailure } from '../actions/product-grid.actions';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductGridEffects {

  constructor(
    private actions$: Actions,
    @Inject(DaffDriver) private driver: DaffDriverInterface){}

  @Effect()
  loadAll$ : Observable<any> = this.actions$.pipe(
    ofType(ProductGridActionTypes.ProductGridLoadAction),
    switchMap((action: ProductGridLoad) =>
      this.driver.productService.getAll()
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
