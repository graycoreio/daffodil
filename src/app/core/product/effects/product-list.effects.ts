import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { ProductService } from '@core/product/services/product.service';
import { ProductListActionTypes, ProductListLoad, ProductListLoadSuccess, ProductListLoadFailure } from '@core/product/actions/product-list.actions';

@Injectable()
export class ProductListEffects {

  constructor(
    private actions$: Actions,
    private productService: ProductService) {}

  @Effect()
  loadAll$ = this.actions$.pipe(
    ofType(ProductListActionTypes.ProductsListLoadAction),
    switchMap((action: ProductListLoad) =>
      this.productService.getAll()
        .pipe(
          map((resp) => {
            return new ProductListLoadSuccess(resp);
          }),
          catchError(error => {
            return of(new ProductListLoadFailure("Failed to load product list"));
          })
        )
    )
  )
}
