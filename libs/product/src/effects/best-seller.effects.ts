import { Injectable, Inject } from '@angular/core';
import { Observable ,  of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';

import { 
  BestSellersActionTypes, 
  BestSellersLoad, 
  BestSellersLoadSuccess, 
  BestSellersLoadFailure } from '../actions/best-sellers.actions';
import { DaffProductDriver } from '../drivers/injection-tokens/product-driver.token';
import { DaffProductServiceInterface } from '../drivers/interfaces/product-service.interface';

/**
 * Effects for handling best seller actions and best seller service requests.
 * 
 * @param action$ - Redux action object
 * @param driver - A product service driver
 */
@Injectable()
export class BestSellersEffects {

  constructor(
    private actions$: Actions,
    @Inject(DaffProductDriver) private driver: DaffProductServiceInterface){}

  /**
   * Handles BestSellersLoadAction by making a service call for best selling products and returning a success or failure action
   * to the action stream.
   * 
   * @returns An Observable of a BestSellersLoad action
   */
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
