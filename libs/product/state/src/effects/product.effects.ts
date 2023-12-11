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
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductDriver,
  DaffProductServiceInterface,
} from '@daffodil/product/driver';

import {
  DaffProductActionTypes,
  DaffProductLoad,
  DaffProductLoadSuccess,
  DaffProductLoadFailure,
} from '../actions/product.actions';
import { DAFF_PRODUCT_ERROR_MATCHER } from '../injection-tokens/public_api';

/**
 * Effects for handling product actions and for triggering corresponding service requests.
 *
 * @param action$ - Redux action object
 * @param driver - A product service driver
 */
@Injectable()
export class DaffProductEffects<T extends DaffProduct> {

  constructor(
    private actions$: Actions,
    @Inject(DaffProductDriver) private driver: DaffProductServiceInterface<T>,
    @Inject(DAFF_PRODUCT_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
  ) {}

  /**
   * Handles ProductLoadAction by making a service call for a product and returning a success or
   * failure action to the action stream.
   *
   * @returns An Observable of a ProductLoadAction
   */

  load$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(DaffProductActionTypes.ProductLoadAction),
    switchMap((action: DaffProductLoad) =>
      this.driver.get(action.payload)
        .pipe(
          map((resp) => new DaffProductLoadSuccess(resp)),
          catchError((error: DaffError) => of(new DaffProductLoadFailure(this.errorMatcher(error)))),
        ),
    ),
  ));
}
