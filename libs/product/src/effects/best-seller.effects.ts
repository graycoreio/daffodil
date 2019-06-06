import { Injectable, Inject } from '@angular/core';
import { Observable ,  of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';

import { 
  BestSellersActionTypes, 
  BestSellersLoad, 
  BestSellersLoadSuccess, 
  BestSellersLoadFailure } from 'product/src/actions/best-sellers.actions';
import { DaffProductDriver } from 'product/src/drivers/injection-tokens/product-driver.token';
import { DaffProductServiceInterface } from 'product/src/drivers/interfaces/product-service.interface';

@Injectable()
export class BestSellersEffects {

  constructor(
    private actions$: Actions,
    @Inject(DaffProductDriver) private driver: DaffProductServiceInterface){}

  @Effect()
  loadBestSellers$ : Observable<any> = this.actions$.pipe(
    ofType(BestSellersActionTypes.BestSellersLoadAction),
    switchMap((action: BestSellersLoad) =>
      this.driver.getBestSellers()
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
