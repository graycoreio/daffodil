import { Injectable, Inject } from '@angular/core';
import { Observable ,  of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';

import { 
  DaffBestSellersActionTypes, 
  DaffBestSellersLoad, 
  DaffBestSellersLoadSuccess, 
  DaffBestSellersLoadFailure } from '../actions/best-sellers.actions';
import { DaffProductDriver } from '../drivers/injection-tokens/product-driver.token';
import { DaffProductServiceInterface } from '../drivers/interfaces/product-service.interface';

@Injectable()
export class DaffBestSellersEffects {

  constructor(
    private actions$: Actions,
    @Inject(DaffProductDriver) private driver: DaffProductServiceInterface){}

  @Effect()
  loadBestSellers$ : Observable<any> = this.actions$.pipe(
    ofType(DaffBestSellersActionTypes.BestSellersLoadAction),
    switchMap((action: DaffBestSellersLoad) =>
      this.driver.getBestSellers()
        .pipe(
          map((resp) => {
            return new DaffBestSellersLoadSuccess(resp);
          }),
          catchError(error => {
            return of(new DaffBestSellersLoadFailure("Failed to load best selling products"));
          })
        )
    )
  )
}
