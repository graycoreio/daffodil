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
  Observable,
  of,
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
  DaffBestSellersActionTypes,
  DaffBestSellersLoad,
  DaffBestSellersLoadFailure,
  DaffBestSellersLoadSuccess,
} from '../actions/public_api';
import { DAFF_PRODUCT_ERROR_MATCHER } from '../injection-tokens/public_api';

/**
 * Effects for handling best seller actions and best seller service requests.
 *
 * @param action$ - Redux action object
 * @param driver - A product service driver
 * @deprecated in favor of features from `@daffodil/related-products/state` and `@daffodil/upsell-products/state`.
 */
@Injectable()
export class DaffBestSellersEffects<T extends DaffProduct> {

  constructor(
    private actions$: Actions,
    @Inject(DaffProductDriver) private driver: DaffProductServiceInterface<T>,
    @Inject(DAFF_PRODUCT_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
  ) {}

  /**
   * Handles BestSellersLoadAction by making a service call for best selling products and returning a success or failure action
   * to the action stream.
   *
   * @returns An Observable of a BestSellersLoad action
   */

  loadBestSellers$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(DaffBestSellersActionTypes.BestSellersLoadAction),
    switchMap((action: DaffBestSellersLoad) =>
      this.driver.getBestSellers()
        .pipe(
          map((resp) => new DaffBestSellersLoadSuccess(resp)),
          catchError((error: DaffError) => of(new DaffBestSellersLoadFailure(this.errorMatcher(error)))),
        ),
    ),
  ));
}
