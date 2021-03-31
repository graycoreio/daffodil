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
  DaffProductPageActionTypes,
  DaffProductPageLoad,
  DaffProductPageLoadFailure,
  DaffProductPageLoadSuccess,
  DaffProductPageLoadByUrl,
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
    @Inject(DaffProductDriver) private driver: DaffProductServiceInterface<T>,
		@Inject(DAFF_PRODUCT_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
  ) {}

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
          catchError((error: DaffError) => of(new DaffProductPageLoadFailure(this.errorMatcher(error)))),
        ),
    ),
  );

  @Effect()
  loadByUrl$: Observable<any> = this.actions$.pipe(
    ofType(DaffProductPageActionTypes.ProductPageLoadByUrlAction),
    switchMap((action: DaffProductPageLoadByUrl<T>) =>
      this.driver.getByUrl(action.payload)
        .pipe(
          map((resp) => new DaffProductPageLoadSuccess(resp)),
          catchError((error: DaffError) => of(new DaffProductPageLoadFailure(this.errorMatcher(error)))),
        ),
    ),
  );
}
