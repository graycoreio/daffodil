import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { ProductService } from '../services/product.service';
import { 
  BestSellerGridActionTypes, 
  BestSellerGridLoad, 
  BestSellerGridLoadSuccess, 
  BestSellerGridLoadFailure } from '../actions/best-seller-grid.actions';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BestSellerGridEffects {

  constructor(
    private actions$: Actions,
    private productService: ProductService) {}

  @Effect()
  loadBestSellerGrid$ : Observable<any> = this.actions$.pipe(
    ofType(BestSellerGridActionTypes.BestSellerGridLoadAction),
    switchMap((action: BestSellerGridLoad) =>
      this.productService.getBestSellers()
        .pipe(
          map((resp) => {
            return new BestSellerGridLoadSuccess(resp);
          }),
          catchError(error => {
            return of(new BestSellerGridLoadFailure("Failed to load best selling products"));
          })
        )
    )
  )
}
