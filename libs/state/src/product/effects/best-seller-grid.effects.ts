import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { ProductService } from '../services/product.service';
import { 
  BestSellersActionTypes, 
  BestSellersLoad, 
  BestSellersLoadSuccess, 
  BestSellersLoadFailure } from '../actions/best-sellers.actions';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BestSellersEffects {

  constructor(
    private actions$: Actions,
    private productService: ProductService) {}

  @Effect()
  loadBestSellers$ : Observable<any> = this.actions$.pipe(
    ofType(BestSellersActionTypes.BestSellersLoadAction),
    switchMap((action: BestSellersLoad) =>
      this.productService.getBestSellers()
        .pipe(
          map((resp) => {
            return new BestSellersLoadSuccess(resp);
          }),
          catchError(error => {
            return of(new BestSellersLoadFailure("Failed to load best selling products"));
          })
        )
    )
  )
}
