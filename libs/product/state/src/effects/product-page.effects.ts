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
  of,
  Observable,
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
  DaffProductPageActionTypes,
  DaffProductPageLoad,
  DaffProductPageLoadFailure,
  DaffProductPageLoadSuccess,
} from '../actions/product-page.actions';

/**
 * Effects for handling product actions and for triggering corresponding service requests.
 *
 * @param action$ - Redux action object
 * @param driver - A product service driver
 */
@Injectable()
export class DaffProductPageEffects<T extends DaffProduct> {

  constructor(
    private actions$: Actions,
    @Inject(DaffProductDriver) private driver: DaffProductServiceInterface<T>){}

  /**
   * Handles ProductPageLoadAction by making a service call for a product and returning a success or
   * failure action to the action stream.
   *
   * @returns An Observable of a ProductLoadAction
   */
  @Effect()
  load$: Observable<any> = this.actions$.pipe(
    ofType(DaffProductPageActionTypes.ProductPageLoadAction),
    switchMap((action: DaffProductPageLoad) =>
      this.driver.get(action.payload)
        .pipe(
          map((resp) => new DaffProductPageLoadSuccess(resp)),
          catchError(error => of(new DaffProductPageLoadFailure('Failed to load product'))),
        ),
    ),
  );
}
