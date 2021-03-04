import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  Actions,
  Effect,
  ofType,
} from '@ngrx/effects';
import {
  Observable ,
  of,
} from 'rxjs';
import {
  switchMap,
  map,
  catchError,
} from 'rxjs/operators';

import { DaffProduct } from '@daffodil/product';
import {
  DaffProductDriver,
  DaffProductServiceInterface,
} from '@daffodil/product/driver';

import {
  DaffBestSellersActionTypes,
  DaffBestSellersLoad,
  DaffBestSellersLoadFailure,
  DaffBestSellersLoadSuccess,
} from '../actions/public_api';

/**
 * Effects for handling best seller actions and best seller service requests.
 *
 * @param action$ - Redux action object
 * @param driver - A product service driver
 */
@Injectable()
export class DaffBestSellersEffects<T extends DaffProduct> {

  constructor(
    private actions$: Actions,
    @Inject(DaffProductDriver) private driver: DaffProductServiceInterface<T>){}

  /**
   * Handles BestSellersLoadAction by making a service call for best selling products and returning a success or failure action
   * to the action stream.
   *
   * @returns An Observable of a BestSellersLoad action
   */
  @Effect()
  loadBestSellers$: Observable<any> = this.actions$.pipe(
    ofType(DaffBestSellersActionTypes.BestSellersLoadAction),
    switchMap((action: DaffBestSellersLoad) =>
      this.driver.getBestSellers()
        .pipe(
          map((resp) => new DaffBestSellersLoadSuccess(resp)),
          catchError(error => of(new DaffBestSellersLoadFailure('Failed to load best selling products'))),
        ),
    ),
  );
}
