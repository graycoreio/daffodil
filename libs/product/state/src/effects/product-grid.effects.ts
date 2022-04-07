import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  Actions,
  createEffect,
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

import { DaffError } from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';
import {
  DaffProduct,
  DAFF_PRODUCT_ERROR_MATCHER,
} from '@daffodil/product';
import {
  DaffProductDriver,
  DaffProductServiceInterface,
} from '@daffodil/product/driver';

import {
  DaffProductGridActionTypes,
  DaffProductGridLoad,
  DaffProductGridLoadSuccess,
  DaffProductGridLoadFailure,
} from '../actions/product-grid.actions';

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
    @Inject(DaffProductDriver) private driver: DaffProductServiceInterface<T>,
    @Inject(DAFF_PRODUCT_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
  ) {}

  /**
   * Handles ProductGridLoadAction by making a service call for products and returning a success or failure action
   * to the action stream.
   *
   * @returns An Observable of a DaffProductGridAction
   */

  loadAll$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(DaffProductGridActionTypes.ProductGridLoadAction),
    switchMap((action: DaffProductGridLoad) =>
      this.driver.getAll()
        .pipe(
          map((resp) => new DaffProductGridLoadSuccess(resp)),
          catchError((error: DaffError) => of(new DaffProductGridLoadFailure(this.errorMatcher(error)))),
        ),
    ),
  ));
}
