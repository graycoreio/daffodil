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
  of ,
  Observable,
} from 'rxjs';
import {
  switchMap,
  map,
  catchError,
} from 'rxjs/operators';

import {
  DaffProductGridActionTypes,
  DaffProductGridLoad,
  DaffProductGridLoadSuccess,
  DaffProductGridLoadFailure,
} from '../actions/product-grid.actions';
import { DaffProductDriver } from '../drivers/injection-tokens/product-driver.token';
import { DaffProductServiceInterface } from '../drivers/interfaces/product-service.interface';
import { DaffProduct } from '../models/product';

/**
 * Effects for handling product grid actions and for triggering corresponding service requests.
 *
 * @param action$ - Redux action object
 * @param driver - A product service driver
 */
@Injectable()
export class DaffProductGridEffects<T extends DaffProduct> {

  constructor(
    private actions$: Actions,
    @Inject(DaffProductDriver) private driver: DaffProductServiceInterface<T>){}

  /**
   * Handles ProductGridLoadAction by making a service call for products and returning a success or failure action
   * to the action stream.
   *
   * @returns An Observable of a DaffProductGridAction
   */
  @Effect()
  loadAll$: Observable<any> = this.actions$.pipe(
    ofType(DaffProductGridActionTypes.ProductGridLoadAction),
    switchMap((action: DaffProductGridLoad) =>
      this.driver.getAll()
        .pipe(
          map((resp) => new DaffProductGridLoadSuccess(resp)),
          catchError(error => of(new DaffProductGridLoadFailure('Failed to load product grid'))),
        ),
    ),
  );
}
