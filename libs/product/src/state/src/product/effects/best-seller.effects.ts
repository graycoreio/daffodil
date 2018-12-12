import { Injectable, Inject } from '@angular/core';
import { Observable ,  of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';

import { DaffDriver } from '@daffodil/driver';

import { DaffDriverInterface } from '../../../../index';

import { 
  BestSellersActionTypes, 
  BestSellersLoad, 
  BestSellersLoadSuccess, 
  BestSellersLoadFailure } from '../actions/best-sellers.actions';

@Injectable()
export class BestSellersEffects {

  constructor(
    private actions$: Actions,
    @Inject(DaffDriver) private driver: DaffDriverInterface){}

  @Effect()
  loadBestSellers$ : Observable<any> = this.actions$.pipe(
    ofType(BestSellersActionTypes.BestSellersLoadAction),
    switchMap((action: BestSellersLoad) =>
      this.driver.productService.getBestSellers()
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
