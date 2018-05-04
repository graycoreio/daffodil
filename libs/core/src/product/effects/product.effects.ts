import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { ProductService } from '../services/product.service';
import { 
  ProductActionTypes, 
  ProductLoad, 
  ProductLoadSuccess, 
  ProductLoadFailure } from '../actions/product.actions';
import { Observable } from 'rxjs/Observable';
import { Action } from 'rxjs/scheduler/Action';

@Injectable()
export class ProductEffects {

  constructor(
    private actions$: Actions,
    private productService: ProductService) {}

  @Effect()
  load$ : Observable<any> = this.actions$.pipe(
    ofType(ProductActionTypes.ProductLoadAction),
    switchMap((action: ProductLoad) =>
      this.productService.get(action.payload)
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
